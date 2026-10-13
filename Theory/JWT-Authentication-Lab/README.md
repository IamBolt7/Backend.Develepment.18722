# JWT Authentication Lab - Student Management API

A GitHub-ready **FastAPI** project based on **Lecture 20: Authentication Mechanisms - Basic Auth, Token-based Authentication, JWT**. It turns the lecture concepts and lab exercise into a working Student Management API with password hashing, JWT login, protected routes, token expiry, and authorization.

> **Course Outcome (CO3):** Implement secure authentication mechanisms to protect API endpoints.

## What this project demonstrates

The lecture starts with an important distinction: **authentication** asks *"Who are you?"*, while **authorization** asks *"What can you do?"*. This project implements both. A user authenticates with email/password and receives a JWT; protected routes validate that JWT; and the delete route performs an additional permission check.

### Lecture-to-project mapping

| Lecture topic | Implementation in this repository |
|---|---|
| Authentication vs Authorization | Login verifies identity; delete route checks permission |
| HTTP Basic Auth | Explained in `docs/LECTURE_NOTES.md` for comparison |
| Token-based Authentication | Credentials are exchanged for a token after login |
| JWT Structure | Header + Payload + Signature |
| JWT Claims | `sub`, `exp`, `iat`, `iss`, plus `email` and `role` |
| Password Security | Passwords are hashed with bcrypt through Passlib |
| Token Expiration | Access tokens expire after 30 minutes |
| Protected API | `/protected` and `/me` require a Bearer token |
| Authorization | Admin or account owner can delete a student |
| API Testing | cURL examples and Swagger UI workflow included |

## Authentication vs Authorization

| Concept | Question | Example in this project |
|---|---|---|
| **Authentication** | Who are you? | Login using email and password |
| **Authorization** | What can you do? | Admin can delete any student; a student can delete only themself |

The complete flow is:

```text
Register -> Password is hashed -> Login -> Credentials verified
   -> JWT generated -> Client stores token -> Bearer token sent
   -> JWT verified -> User loaded -> Permission checked -> Response
```

## Basic Auth, Token Auth and JWT

HTTP Basic Authentication sends encoded credentials with each request:

```text
Authorization: Basic base64(username:password)
```

Base64 is **not encryption**, so Basic Auth must not be treated as secure without HTTPS. Token authentication improves the flow by exchanging credentials once for a token. JWT is a popular signed token format that can carry claims and expiration information.

| Feature | Basic Auth | Token-based Auth | JWT |
|---|---:|---:|---:|
| Credentials sent on every request | Yes | No | No |
| Expiration | Not inherent | Can support it | Built-in `exp` claim |
| Claims/user metadata | No | Depends on design | Yes |
| Signed integrity check | No | Depends on design | Yes |
| Suitable for stateless APIs | Limited | Yes | Yes |

## JWT Structure

A JSON Web Token contains three dot-separated parts:

```text
xxxxx.yyyyy.zzzzz
HEADER.PAYLOAD.SIGNATURE
```

**Header** describes the token type and signing algorithm. **Payload** contains claims. **Signature** allows the API to verify that the header/payload have not been altered.

Example conceptual payload:

```json
{
  "sub": "1",
  "email": "aarav@upes.ac.in",
  "role": "student",
  "exp": "<expiration timestamp>",
  "iat": "<issued-at timestamp>",
  "iss": "student-api"
}
```

JWT payloads are encoded, **not encrypted**. Never place passwords or other secrets inside them.

## Project Structure

```text
JWT-Authentication-Lab/
├── main.py                 # FastAPI routes and request/response models
├── auth.py                 # Password hashing + JWT creation/validation
├── models.py               # SQLAlchemy Student model
├── database.py             # SQLite/SQLAlchemy setup
├── requirements.txt        # Python dependencies
├── .env.example            # Secret-key example
├── .gitignore              # Files Git should ignore
├── docs/
│   └── LECTURE_NOTES.md    # Theory from the supplied Lecture 20 screenshots
└── README.md
```

## API Endpoints

| Method | Endpoint | Auth required? | Purpose |
|---|---|---|---|
| `GET` | `/` | No | API status |
| `POST` | `/register` | No | Register a new student |
| `POST` | `/students` | No | Lecture-compatible registration alias |
| `POST` | `/login` | No | Verify credentials and issue JWT |
| `GET` | `/protected` | Yes | Demonstrate authenticated access |
| `GET` | `/me` | Yes | Return the authenticated student |
| `DELETE` | `/students/{student_id}` | Yes | Admin or same student may delete |

## Installation and Setup

### 1. Open the project

```bash
cd JWT-Authentication-Lab
```

### 2. Create a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

### 3. Install dependencies

The lecture specifically uses `python-jose`, `passlib[bcrypt]`, and `python-multipart`; the project also includes FastAPI, Uvicorn, SQLAlchemy, and email validation.

```bash
pip install -r requirements.txt
```

### 4. Configure the JWT secret

macOS/Linux:

```bash
export SECRET_KEY="replace-this-with-a-long-random-secret"
```

The fallback key in `auth.py` exists only so the classroom demo can run immediately. **Never use a hard-coded development secret in production.**

### 5. Run the API

```bash
uvicorn main:app --reload
```

Then open Swagger UI:

```text
http://127.0.0.1:8000/docs
```

The SQLite database `students.db` is created automatically on first run.

## Testing the Complete JWT Flow

### Step 1 - Register a student

```bash
curl -X POST http://localhost:8000/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aarav",
    "email": "aarav@upes.ac.in",
    "branch": "CSE",
    "password": "securepassword123"
  }'
```

The password is **hashed before storage**. The API never returns the password hash.

### Step 2 - Login

```bash
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"aarav@upes.ac.in","password":"securepassword123"}'
```

Example response:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer",
  "expires_in_minutes": 30
}
```

### Step 3 - Access a protected route

```bash
curl http://localhost:8000/protected \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

Example response:

```json
{
  "message": "Hello, Aarav!",
  "user_id": 1,
  "email": "aarav@upes.ac.in",
  "role": "student"
}
```

### Step 4 - Try without a token

```bash
curl http://localhost:8000/protected
```

The request is rejected because the route depends on an authenticated user.

### Step 5 - Test authorization

```bash
curl -X DELETE http://localhost:8000/students/1 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

The endpoint allows deletion only when the authenticated user is an **admin** or the student whose ID appears in the URL. An authenticated user without permission receives **403 Forbidden**.

## How the Code Works

### Password hashing

`get_password_hash()` converts the plaintext password into a bcrypt hash before database storage. During login, `verify_password()` compares the submitted password against the stored hash. Plaintext passwords are never stored.

### Token creation

`create_access_token()` copies the supplied claims, adds `exp`, `iat`, and `iss`, then signs the token using `HS256` and `SECRET_KEY`.

### Token validation

`OAuth2PasswordBearer` extracts the Bearer token. `decode_token()` verifies the JWT signature, issuer, and expiration. `get_current_user()` reads `sub`, converts it to a student ID, and loads that student from the database.

### Authorization

Authentication alone is not enough for every operation. The delete route checks:

```python
if current_user.role != "admin" and current_user.id != student_id:
    # 403 Forbidden
```

This directly demonstrates the lecture's difference between identity verification and permission checking.

## HTTP Status Codes Used

| Status | Meaning in this lab |
|---|---|
| `201 Created` | Student registered successfully |
| `204 No Content` | Student deleted successfully |
| `401 Unauthorized` | Login failed or token is missing/invalid/expired |
| `403 Forbidden` | Authenticated, but not allowed to perform the action |
| `404 Not Found` | Student does not exist |
| `409 Conflict` | Email is already registered |

## Token Storage Concepts

The lecture compares memory, `localStorage`, and HttpOnly cookies. This backend returns a Bearer token and leaves client storage to the frontend. For browser applications, token storage is a security design decision: `localStorage` is accessible to JavaScript and therefore exposed if XSS occurs; Secure HttpOnly cookies reduce JavaScript access but require appropriate CSRF defenses.

## Security Best Practices

The implementation and lecture emphasize:

- Use **HTTPS** so credentials and tokens are encrypted in transit.
- Keep access tokens **short-lived**; this lab uses **30 minutes**.
- Use refresh-token designs when longer sessions are needed.
- Hash passwords; never store plaintext passwords.
- Keep signing secrets in environment variables or a secret manager.
- Verify JWT signature, issuer, and expiration on protected requests.
- Do not place passwords or secrets in JWT payloads.
- Rate-limit login attempts to reduce brute-force attacks.
- Configure CORS only for trusted origins.
- Choose token storage with XSS and CSRF risks in mind.
- Public registration in this project always creates the `student` role so a client cannot self-register as an admin.

## Lab Exercise Checklist

- [x] Implement JWT authentication for the Student Management API.
- [x] Add a password field and store only its hash.
- [x] Create `/register` and `/login` endpoints.
- [x] Protect API routes using Bearer JWT authentication.
- [x] Secure `DELETE /students/{id}` for admins or the student themself.
- [x] Register a student and login to obtain a JWT.
- [x] Access a protected route with a token.
- [x] Reject protected access without a valid token.
- [x] Implement and validate token expiration.

## Key Takeaways

**Authentication verifies identity; authorization controls permissions.** Basic Auth is easy to understand but repeatedly sends credentials. Token-based authentication avoids resending credentials after login. JWT provides a compact signed format containing claims such as subject and expiration. Secure authentication still depends on HTTPS, password hashing, short token lifetimes, safe secret management, careful token storage, and authorization checks.

For the expanded theory corresponding to the lecture screenshots, read [`docs/LECTURE_NOTES.md`](docs/LECTURE_NOTES.md).

## Technologies

`Python` · `FastAPI` · `SQLAlchemy` · `SQLite` · `python-jose` · `JWT` · `Passlib` · `bcrypt` · `Pydantic`

## Academic Context

**Lecture 20 - Authentication Mechanisms: Basic Auth, Token-based Auth, JWT**  
**Unit:** Unit 2 - Database Management  
**Course Outcome:** CO3  
**Bloom's Level:** Apply  
**Application:** API security, user identity verification, secure backend services
