# JWT Authentication – Student Management API

A complete **FastAPI authentication lab** based on Lecture 20: **Authentication Mechanisms – Basic Auth, Token-based Authentication and JWT**. The project demonstrates password hashing, login, JSON Web Token generation/validation, protected routes, and authorization for deleting student records.

## Learning Objectives

This lab demonstrates the difference between **authentication** (Who are you?) and **authorization** (What are you allowed to do?), then implements a practical JWT authentication flow for a Student Management API.

## Concepts Covered

| Concept | Purpose |
|---|---|
| Basic Authentication | Sends encoded credentials with requests; simple but unsuitable as the primary production approach shown here. |
| Token Authentication | Uses a token after login instead of repeatedly sending credentials. |
| JWT | Compact signed token carrying claims such as user ID and role. |
| Password Hashing | Passwords are stored as bcrypt hashes rather than plaintext. |
| Authentication | Verifies a user's identity. |
| Authorization | Determines whether an authenticated user may perform an action. |

## JWT Structure

A JWT has three dot-separated parts:

```text
HEADER.PAYLOAD.SIGNATURE
```

- **Header** – token type and signing algorithm.
- **Payload** – claims such as `sub`, `email`, `role`, and `exp`.
- **Signature** – allows the server to verify that the token was not altered.

The payload is encoded, **not encrypted**, so sensitive information should not be placed in it.

## Authentication Flow

1. A student registers with name, email, branch and password.
2. The server hashes the password using bcrypt before storing it.
3. The student sends email and password to `POST /login`.
4. The server verifies the password hash.
5. A signed JWT access token is generated with a 30-minute expiry.
6. The client sends the token as `Authorization: Bearer <token>`.
7. Protected endpoints validate the signature and expiry and identify the user from the `sub` claim.
8. Authorization rules decide whether the authenticated user can perform the requested operation.

## Project Structure

```text
JWT-Authentication-Lab/
├── main.py             # FastAPI routes: register, login, protected, delete
├── auth.py             # Hashing, JWT creation/validation, current-user dependency
├── models.py           # SQLAlchemy Student model
├── database.py         # SQLite connection and DB dependency
├── requirements.txt    # Python dependencies
├── .env.example        # Example secret configuration
├── .gitignore
└── README.md
```

## Setup

### 1. Create and activate a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

On Windows:

```bash
.venv\\Scripts\\activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Set a secret key

For macOS/Linux:

```bash
export SECRET_KEY="replace-this-with-a-long-random-secret"
```

For a classroom-only local test, the project has a development fallback key. Do **not** use the fallback in production.

### 4. Start the API

```bash
uvicorn main:app --reload
```

Open Swagger UI at:

```text
http://127.0.0.1:8000/docs
```

## API Endpoints

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| `GET` | `/` | No | API status |
| `POST` | `/register` | No | Register a student |
| `POST` | `/students` | No | Lecture-compatible student registration alias |
| `POST` | `/login` | No | Verify credentials and obtain JWT |
| `GET` | `/protected` | Bearer JWT | Test authenticated access |
| `DELETE` | `/students/{student_id}` | Bearer JWT | Admin or same student can delete |

## Testing the JWT Flow

### Register

```bash
curl -X POST http://localhost:8000/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aarav",
    "email": "aarav@example.com",
    "branch": "CSE",
    "password": "securepassword123"
  }'
```

### Login

```bash
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"aarav@example.com","password":"securepassword123"}'
```

Example response:

```json
{
  "access_token": "<JWT_TOKEN>",
  "token_type": "bearer"
}
```

### Access a Protected Route

```bash
curl http://localhost:8000/protected \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

Calling `/protected` without a valid bearer token returns an authentication error.

## Authorization Example

`DELETE /students/{student_id}` demonstrates the difference between authentication and authorization. A valid token proves identity, but the endpoint additionally checks permission. Deletion is permitted only when the current user is an `admin` or when the user is deleting their own student record. Otherwise the API returns **403 Forbidden**.

## Important HTTP Status Codes

- **201 Created** – registration succeeded.
- **204 No Content** – deletion succeeded.
- **401 Unauthorized** – credentials/token are missing, invalid or expired.
- **403 Forbidden** – identity is known but the user lacks permission.
- **404 Not Found** – requested student does not exist.
- **409 Conflict** – email is already registered.

## Security Best Practices

- Always use **HTTPS** in deployment.
- Keep access tokens short-lived; this project uses **30 minutes**.
- Use refresh tokens when longer sessions are required.
- Never store plaintext passwords; use bcrypt or Argon2.
- Keep JWT signing secrets outside source code using environment variables or a secret manager.
- Validate token signatures and expiration on protected requests.
- For browser applications, carefully designed **Secure, HttpOnly cookies** can reduce token exposure to JavaScript; cookie-based auth also requires appropriate CSRF protections.
- Add rate limiting to login endpoints to reduce brute-force attacks.
- Configure CORS only for trusted origins.
- Do not put passwords or other secrets inside a JWT payload.

## Lab Exercise Checklist

- [x] Implement JWT authentication for the Student Management API.
- [x] Add and store a hashed password for students.
- [x] Create `/register` and `/login` endpoints.
- [x] Add a protected endpoint.
- [x] Protect `DELETE /students/{id}` so only admins or the student themselves can delete it.
- [x] Return `401` for unauthenticated/invalid-token access.
- [x] Add JWT expiration.
- [x] Provide commands for testing the complete authentication flow.

## Basic Auth vs Token Auth vs JWT

| Feature | Basic Auth | Token-based Auth | JWT |
|---|---|---|---|
| Credentials sent repeatedly | Yes | No | No |
| Expiration support | Not inherent | Yes | Yes (`exp`) |
| Carries claims | No | Depends | Yes |
| Signed/tamper detection | No | Depends | Yes |
| Common API use | Limited | Yes | Yes |

> Base64 encoding used by HTTP Basic Authentication is **not encryption**. HTTPS is essential for protecting credentials and tokens in transit.

## Key Takeaways

**Authentication** verifies identity, while **authorization** controls permissions. JWT provides a convenient signed token format for API authentication. A secure implementation also requires password hashing, HTTPS, short token lifetimes, correct token validation, secure secret management, and appropriate authorization checks.

## Technologies

Python · FastAPI · SQLAlchemy · SQLite · python-jose · JWT · Passlib · bcrypt · Pydantic

## Academic Context

**Lecture 20 – Authentication Mechanisms: Basic Auth, Token-based Auth, JWT**  
Course Outcome: **CO3 – Implement secure authentication mechanisms to protect API endpoints.**
