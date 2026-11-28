# JWT Authentication Lab — Student Management API

Navigation: [Main README](../../README.md) · [Theory README](../README.md) · [Lecture Notes](./docs/LECTURE_NOTES.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/JWT-Authentication-Lab/README.md)

A FastAPI Student Management API built around **Lecture 20 (Authentication Mechanisms)**. It implements bcrypt password hashing, JWT login tokens with expiration, Bearer-protected endpoints, and role/ownership checks on deletion.

---

## Authentication vs Authorization

- **Authentication** ("Who are you?"): `POST /login` checks email and password against the bcrypt hash in SQLite and issues a signed `HS256` JWT valid for 30 minutes.
- **Authorization** ("What can you do?"): `DELETE /students/{student_id}` permits deletion only if the authenticated user is an `admin` or owns that student ID, otherwise returning `403 Forbidden`.

---

## Project Structure

```text
JWT-Authentication-Lab/
├── main.py                 # FastAPI endpoints and schemas
├── auth.py                 # Password hashing and JWT helpers
├── models.py               # SQLAlchemy Student model
├── database.py             # SQLite engine and session setup
├── requirements.txt
├── .env.example
├── docs/
│   └── LECTURE_NOTES.md    # Lecture 20 reference notes
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Auth Required | Purpose |
| --- | --- | --- | --- |
| `GET` | `/` | No | API status |
| `POST` | `/register` | No | Register a student (hashes password) |
| `POST` | `/students` | No | Registration alias |
| `POST` | `/login` | No | Verify credentials and return JWT |
| `GET` | `/protected` | Yes | Example protected route |
| `GET` | `/me` | Yes | Current authenticated student |
| `DELETE` | `/students/{student_id}` | Yes | Admin or account owner only |

---

## Setup and Run

```bash
cd Theory/JWT-Authentication-Lab
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export SECRET_KEY="replace-this-with-a-long-random-secret"
uvicorn main:app --reload
```

Open Swagger UI at `http://127.0.0.1:8000/docs`. The `students.db` SQLite database is created automatically on startup.

---

## Quick Test with curl

```bash
# 1. Register
curl -X POST http://localhost:8000/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Aarav","email":"aarav@upes.ac.in","branch":"CSE","password":"securepassword123"}'

# 2. Login
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"aarav@upes.ac.in","password":"securepassword123"}'

# 3. Call protected endpoint
curl http://localhost:8000/protected \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## Navigation

- [Back to Main README](../../README.md)
- [Theory README](../README.md)
- [Lecture 20 Notes](./docs/LECTURE_NOTES.md)

Made by **Arnav Daftuar**
