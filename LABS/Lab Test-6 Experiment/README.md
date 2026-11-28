# Lab Test-6 Experiment — Express Middleware

> **Navigation:** [Main README](../../README.md) · [LABS README](../README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=LABS/Lab%20Test-6%20Experiment/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

A practical Express.js middleware experiment covering the complete request-processing pipeline — from logging and body parsing to authentication, 404 handling, and centralized error management.

## Overview

Demonstrates the full Express middleware pipeline: custom logger, body parser, static file serving, route-level authentication guard, 404 handler, and central error handler.

## Concepts Covered

| Middleware Type | Purpose |
|---|---|
| Logger | Logs method, URL, and timestamp for every request |
| `express.json()` | Parses JSON request bodies |
| `express.urlencoded()` | Parses HTML form POST bodies |
| `express.static()` | Serves files from the `public/` folder |
| Auth Guard | Checks `x-auth-token` header before protected routes |
| 404 Handler | Catches unmatched routes |
| Error Handler | Four-param `(err, req, res, next)` catches all thrown errors |

## Project Files

- [`app.js`](app.js) — All middleware and routes in one file
- [`package.json`](package.json) — Dependencies and npm scripts
- [`.gitignore`](.gitignore) — Excludes dependencies, environment files, and OS artifacts

## How to Run

```bash
cd "Lab Test-6 Experiment"
npm install
npm run dev
```

Server starts on **http://localhost:3004** by default. Set `PORT` to override it.

## Test the Routes

```bash
# Public route (no token needed)
curl http://localhost:3004/public-data

# Protected route without token (401)
curl http://localhost:3004/private-data

# Protected route with token (200)
curl -H "x-auth-token: secret123" http://localhost:3004/private-data

# POST echo
curl -X POST http://localhost:3004/echo -H "Content-Type: application/json" -d "{\"name\":\"Arnav\"}"
```

## Middleware Pipeline

```text
Client Request
      |
      v
Custom Logger
      |
      v
Body Parsers
(JSON + URL Encoded)
      |
      v
Static File Middleware
      |
      v
Route Matching
      |
      |-- Public Route
      |
      +-- Protected Route
              |
              v
           Auth Guard
              |
              v
         Route Handler
              |
              v
        HTTP Response

Unmatched Route --> 404 Handler
Application Error --> Central Error Handler
```

## Authentication Flow

The protected route checks the `x-auth-token` request header before allowing access:

```text
/private-data
      |
      v
Check x-auth-token
      |
 +----+----+
 |         |
Invalid   Valid
 |         |
 v         v
401      next()
           |
           v
      Private Route
           |
           v
         200 OK
```

> The `secret123` token used in this experiment is suitable for demonstrating middleware behavior only. Production applications should use a proper authentication mechanism.

## Learning Outcomes

After completing this experiment, you can demonstrate:

- Custom Express middleware
- Middleware execution order
- The purpose of `next()`
- JSON and URL-encoded body parsing
- Static file serving
- Route-level authentication
- Public and protected endpoints
- 401 Unauthorized responses
- 404 Not Found handling
- Centralized Express error handling
- API testing using cURL

## Experiment Checklist

- [x] Custom request logger
- [x] JSON body parser
- [x] URL-encoded body parser
- [x] Static file middleware
- [x] Public route
- [x] Protected route
- [x] Authentication guard
- [x] 404 handler
- [x] Central error handler
- [x] cURL route testing

## Key Takeaway

Express middleware forms a request-processing pipeline. Each middleware function can inspect the request, modify the request or response, terminate processing, or call `next()` to pass control to the next middleware.

This experiment brings those pieces together in one compact application covering logging, parsing, static files, route protection, not-found handling, and error management.

---

## Author

**Arnav Daftuar**

Backend Development — Lab Test-6 Express Middleware Experiment

---

## Connected Navigation

- [Back to Main Repository README](../../README.md)
- [Back to LABS README](../README.md)
- [Open Website Portal](../../index.html)
