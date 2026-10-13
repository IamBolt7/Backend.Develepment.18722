# Lecture 20 Notes - Authentication Mechanisms

## 1. Authentication and Authorization

**Authentication** answers **"Who are you?"** and verifies identity, for example by checking an email and password.

**Authorization** answers **"What can you do?"** and checks permissions after authentication. In this lab, a student may delete their own account while an admin may delete any student account.

## 2. HTTP Basic Authentication

Basic Authentication sends an `Authorization` header containing a Base64 representation of `username:password`.

```text
Authorization: Basic base64(username:password)
```

Flow: client sends credentials -> server decodes/verifies -> server returns data or `401 Unauthorized`.

Advantages: simple and widely supported. Limitations: credentials are sent with every request, Base64 is encoding rather than encryption, browser credential caching complicates logout, and Basic Auth has no built-in token expiry. HTTPS is essential.

## 3. Token-based Authentication

Instead of sending credentials repeatedly, the user logs in once and receives a token. Later requests send the token to the API. The API validates the token before returning protected data.

Typical flow: Login -> token issued -> request + token -> token validated -> database/resource accessed -> response.

### Client-side token storage discussed in the lecture

| Storage | Main consideration | Typical use |
|---|---|---|
| Memory | Lost on refresh | SPA with a refresh-token design |
| localStorage | Accessible to JavaScript; XSS exposure | Simple demos, not preferred for sensitive production auth |
| Secure HttpOnly cookie | Not readable by JavaScript; requires CSRF-aware design | Common web-app option |

## 4. JWT - JSON Web Token

JWT is a compact, URL-safe signed token format. A JWT has three dot-separated sections:

```text
xxxxx.yyyyy.zzzzz
HEADER.PAYLOAD.SIGNATURE
```

- **Header:** algorithm and token type, e.g. `HS256` and `JWT`.
- **Payload:** claims describing the subject/user and token metadata.
- **Signature:** verifies integrity and detects tampering.

JWT payloads are encoded, not encrypted. Never place passwords or secrets in the payload.

## 5. JWT Claims

Registered claims highlighted in the lecture include:

| Claim | Meaning |
|---|---|
| `sub` | Subject, usually the user ID |
| `exp` | Expiration time |
| `iat` | Issued-at time |
| `iss` | Issuer |

This project also uses custom claims such as `email` and `role`.

## 6. JWT Authentication Flow

1. User submits email and password.
2. Server verifies credentials.
3. Server generates a signed JWT.
4. Server returns the JWT to the client.
5. Client sends `Authorization: Bearer <token>` with protected requests.
6. Server verifies signature, issuer, and expiration.
7. Server reads `sub`, loads the user, applies authorization rules, and returns the response.

## 7. Security Best Practices

Use HTTPS; keep access tokens short-lived (the lecture recommends roughly 15-30 minutes); use refresh tokens for longer sessions; store secrets outside source code; hash passwords using a suitable password hashing algorithm; validate signatures and expiration; rate-limit login attempts; configure CORS carefully; and choose browser token storage with XSS/CSRF risks in mind.

## 8. Lab Exercise Mapping

The supplied project implements the lecture exercise: JWT authentication for the Student Management API, hashed passwords, `/register` and `/login`, a protected route, an admin-or-self rule for `DELETE /students/{id}`, `401` behavior for invalid/missing tokens, and token expiration.
