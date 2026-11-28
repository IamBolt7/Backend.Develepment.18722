# Theory — Backend Development

Navigation: [Main README](../README.md) · [LABS](../LABS/README.md) · [Applications](../Applications/README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

This folder groups together my theory assignments, lecture labs, and unit practice projects for Backend Development (18722).

---

## Theory Modules

| No. | Module | Topic | Folder | Documentation |
|---:|---|---|---|---|
| 1 | **Assignment 1 — NoteSpace** | Notes App using `localStorage`, `sessionStorage`, and JSON | [Open](./Assignment-1-Notes-App/) | [README](./Assignment-1-Notes-App/README.md) |
| 2 | **Assignment 2 — PostgreSQL JSONB** | PostgreSQL as SQL + NoSQL using `jsonb` | [Open](./Assignment%202/) | [README](./Assignment%202/README.md) |
| 3 | **JWT Authentication Lab** | FastAPI Student API with bcrypt and JWT auth | [Open](./JWT-Authentication-Lab/) | [README](./JWT-Authentication-Lab/README.md) |
| 4 | **Theory 1** | Node.js (Express + EJS) and Python (Flask) side-by-side | [Open](./Theory%201/) | [README](./Theory%201/README.md) |
| 5 | **Unit 3 — Django** | Django `student_system` views and JSON endpoints | [Open](./Unit%203/) | [README](./Unit%203/README.md) |
| 6 | **Unit 4 — Docker and Express** | Container state preservation and Dockerized Express API | [Open](./Unit%204/) | [README](./Unit%204/README.md) |

---

## Progression

```text
Browser Storage          -> Hybrid SQL + NoSQL      -> Multi-Stack Backends
(Assignment 1)              (Assignment 2: JSONB)      (Theory 1: Express & Flask)
                                                            │
                                                            ▼
Docker & Containers      <- Django Routing          <- JWT & Password Security
(Unit 4)                    (Unit 3)                   (JWT Lab: FastAPI)
```

---

## Quick Comparison

| Area | Assignment 1 | Assignment 2 | JWT Auth Lab | Theory 1 | Unit 3 | Unit 4 |
| --- | --- | --- | --- | --- | --- | --- |
| **Focus** | Browser Storage | PostgreSQL JSONB | API Auth and RBAC | Express and Flask | Django Views | Docker |
| **Language** | JavaScript | SQL / JS | Python | JS and Python | Python | Java and JS |
| **Framework** | Vanilla Web | Vanilla UI + SQL | FastAPI | Express / Flask | Django | Express |
| **Storage** | `localStorage` / `sessionStorage` | PostgreSQL (`jsonb`) | SQLite + SQLAlchemy | In-memory | SQLite | In-memory |
| **UI / Docs** | [Open App](./Assignment-1-Notes-App/index.html) | [Open UI](./Assignment%202/index.html) | Swagger `/docs` | EJS / Flask HTML | HTTP / JSON | HTTP / JSON |

---

## Running the Modules

- **Static interactive pages:** Open [`Assignment-1-Notes-App/index.html`](./Assignment-1-Notes-App/index.html) or [`Assignment 2/index.html`](./Assignment%202/index.html) in any modern browser.
- **Python projects (`JWT-Authentication-Lab`, `Theory 1` Flask, `Unit 3` Django):** Create a virtual environment, install dependencies, and run `uvicorn`, `python3`, or `manage.py runserver`.
- **Node.js and Docker (`Theory 1` Express, `Unit 4` Express):** Install with `npm install` or build with `docker build`.

Check each module's linked `README.md` above for exact commands.

---

## Navigation

- [Back to Main README](../README.md)
- [LABS README](../LABS/README.md)
- [Applications README](../Applications/README.md)
- [Open Website Portal](../index.html)

Made by **Arnav Daftuar**
