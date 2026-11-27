# 🛡️ Lab Test-9 Experiment — Security, Rate Limiting & Deployment

> An Express server demonstrating environment-based configuration, HTTP security headers, CORS, rate limiting, health checks, and Docker packaging.

## Summary

| Exp | Topic | Implementation |
|-----|-------|----------------|
| **Configuration** | Environment & Security | `dotenv`, `helmet` (11 security headers), `cors` with allowlist |
| **Protection** | Rate Limiting | `express-rate-limit` – global (100/15min) + strict auth (5/15min) |
| **Deployment** | Deployment | `Dockerfile`, `docker-compose.yml`, `/health` endpoint |

## Files
```
Lab Test-9 Experiment/
├── server.js           ← Main Express server (Exp09+10+11 combined)
├── package.json
├── .env.example        ← Copy to .env before running
├── Dockerfile          ← Docker image definition
├── docker-compose.yml  ← Spins up API + MongoDB containers
└── .gitignore          ← Excludes local secrets and dependencies
```

## How to Run (Local)
```bash
cd "Lab Test-9 Experiment"
cp .env.example .env
npm install
npm run dev
```
Server on **http://localhost:3009**

## How to Run (Docker)
```bash
# Build and start both API and MongoDB containers
docker compose up --build

# Stop containers
docker compose down
```

## Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Feature overview |
| GET | `/health` | Health check (uptime, env, timestamp) |
| GET | `/headers` | View applied security headers |
| POST | `/auth/login` | Rate-limited login (max 5 attempts / 15 min) |

## Expected Output

**GET /health:**
```json
{
  "status": "OK",
  "env": "development",
  "uptime": "42s",
  "timestamp": "2026-11-26T04:00:00.000Z"
}
```

**Too many requests (rate limit hit):**
```json
{ "error": "Too many requests – please wait 15 minutes and try again." }
```

**Security headers added by helmet (visible in browser DevTools → Network → Response Headers):**
```
Content-Security-Policy: ...
X-DNS-Prefetch-Control: off
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
...
```


## 🔒 Security Notes
- Keep `.env` out of Git; commit only `.env.example`.
- Helmet applies defensive HTTP headers.
- CORS is restricted to configured origins.
- Global and login-specific rate limits reduce abusive request volume.

## 🎯 Learning Outcomes
- Configure applications with environment variables
- Apply Helmet and CORS middleware
- Implement global and route-specific rate limiting
- Expose a deployment health endpoint
- Containerize a Node.js service with Docker

## 👨‍💻 Author
**Arnav Daftuar**  
Backend Development — Lab Test-9
