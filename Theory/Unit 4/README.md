# Unit 4 — Docker and Containerized Express

Navigation: [Main README](../../README.md) · [Theory README](../README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/Unit%204/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

Theory Unit 4 covers Docker container fundamentals across two folders: persisting changes inside a container and packaging an Express API into a Docker image.

---

## Structure

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

A minimal Java program (`Hello.java`) used to demonstrate compiling code inside a running container and committing container changes into a new image.

```bash
javac Hello.java
java Hello
```

---

## 2. Containerized Express Project (`express-project/`)

An Express server bound to `0.0.0.0:3000` with a `Dockerfile` built on `ubuntu:18.04`.

| Method | Route | Response |
| --- | --- | --- |
| `GET` | `/` | `"Hello! Express is running inside Docker."` |
| `GET` | `/api/students` | JSON list of sample students |

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

## Navigation

- [Back to Main README](../../README.md)
- [Theory README](../README.md)
- [Related: Lab Test-9 Security and Docker](../../LABS/Lab%20Test-9%20Experiment/README.md)

Made by **Arnav Daftuar**
