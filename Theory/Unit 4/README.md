# Unit 4 — Docker & Containerized Express

> **Navigation:** [🏠 Main README](../../README.md) · [📚 Theory README](../README.md) · [🌐 Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/Unit%204/README.md) · [💻 GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

Theory Unit 4 covers **Docker containerization fundamentals** across two hands-on folders: preserving changes inside containers and containerizing a Node.js Express API.

---

## 📂 Structure

```text
Unit 4/
├── Preserve Changes inside a Container/
│   ├── Hello.java
│   └── Hello.class
├── express-project/
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
└── README.md
```

---

## 1. Preserve Changes inside a Container

Demonstrates compiling and running `Hello.java` inside a container (`Hello from Docker container!`) and persisting container filesystem state into a reusable image.

```bash
javac Hello.java
java Hello
```

---

## 2. Containerized Express Project (`express-project/`)

A lightweight Express server configured to bind to `0.0.0.0:3000` inside a Docker container.

### Endpoints

| Method | Route | Response |
| --- | --- | --- |
| `GET` | `/` | `"Hello! Express is running inside Docker."` |
| `GET` | `/api/students` | JSON array of sample students |

### Run with Docker

```bash
cd "Theory/Unit 4/express-project"
docker build -t express-unit4 .
docker run -p 3000:3000 express-unit4
```

### Run Locally with Node.js

```bash
cd "Theory/Unit 4/express-project"
npm install
node app.js
```

---

## 🔗 Connected Navigation

- [🏠 Back to Main Repository README](../../README.md)
- [📚 Back to Theory README](../README.md)
- [🛡️ Related: Lab Test-9 Docker & Security](../../LABS/Lab%20Test-9%20Experiment/README.md)

**Made by Arnav Daftuar** · Backend Development (18722)
