# Backend Development Laboratory (`LABS`)

Navigation: [Main README](../README.md) · [Theory](../Theory/README.md) · [Applications](../Applications/README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=LABS/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

This directory holds all thirteen practical projects I built for the Backend Development laboratory. They cover everything from HTML/CSS layout work and Express middleware to Django, databases, JWT authentication, security headers, Docker volume persistence, and real-time chat.

---

## Lab Index

| # | Experiment | Focus | Folder | Documentation |
|---:|---|---|---|---|
| — | **Django To-Do App** | Django CRUD, forms, templates, CSRF, SQLite | [Open](./django_todo_app/) | [README](./django_todo_app/README.md) |
| 1 | **EXP-1** | Semantic HTML5 and CSS3 intro card | [Open](./EXP-1/) | [README](./EXP-1/README.md) |
| 2 | **Lab Test-1 Experiment** | Simple CMS Blog (Express + EJS + MongoDB) | [Open](./Lab%20Test-1%20Experiment/) | [README](./Lab%20Test-1%20Experiment/README.md) |
| 3 | **Lab Test-2 Experiment** | Responsive webpage (Grid, Flexbox, Media Queries) | [Open](./Lab%20Test-2%20Experiment/) | [README](./Lab%20Test-2%20Experiment/README.md) |
| 4 | **Lab Test-3 Experiment** | Node.js, Express routing, params, EJS, Nodemon | [Open](./Lab%20Test-3%20Experiment/) | [README](./Lab%20Test-3%20Experiment/README.md) |
| 5 | **Lab Test-4 Experiment** | Express + Mongoose user management | [Open](./Lab%20Test-4%20Experiment/) | [README](./Lab%20Test-4%20Experiment/README.md) |
| 6 | **Lab Test-5 Experiment** | PostgreSQL vs MongoDB and JSONB comparison | [Open](./Lab%20Test-5%20Experiment/) | [README](./Lab%20Test-5%20Experiment/README.md) |
| 7 | **Lab Test-6 Experiment** | Express middleware pipeline and auth guard | [Open](./Lab%20Test-6%20Experiment/) | [README](./Lab%20Test-6%20Experiment/README.md) |
| 8 | **Lab Test-7 Experiment** | EJS templating and dynamic student views | [Open](./Lab%20Test-7%20Experiment/) | [README](./Lab%20Test-7%20Experiment/README.md) |
| 9 | **Lab Test-8 Experiment** | RESTful Books API and JWT authentication | [Open](./Lab%20Test-8%20Experiment/) | [README](./Lab%20Test-8%20Experiment/README.md) |
| 10 | **Lab Test-9 Experiment** | Helmet security, CORS, rate limiting, Docker | [Open](./Lab%20Test-9%20Experiment/) | [README](./Lab%20Test-9%20Experiment/README.md) |
| 11 | **Lab Test-10 Experiment** | Real-time group chat with Socket.IO | [Open](./Lab%20Test-10%20Experiment/) | [README](./Lab%20Test-10%20Experiment/README.md) |
| 12 | **Lab Test-11 Experiment** | Containerized persistent Todo app (Docker + volume mount) | [Open](./Lab%20Test-11%20Experiment/) | [README](./Lab%20Test-11%20Experiment/README.md) |

---

## How the Labs Fit Together

```text
Client Request / WebSocket
      │
      ▼
Backend Server (Express / Django)
  ├── Middleware (Logger, Helmet, CORS, Rate Limit, Auth Guard)
  └── Routes & Controllers
      │
      ▼
Persistence (SQLite / MongoDB / PostgreSQL)
      │
      ▼
HTML Template (EJS / Django) or JSON / Socket Event
```

---

## Stack Used Across Labs

| Area | Technologies |
| --- | --- |
| **Frontend** | HTML5, CSS3, Responsive Grid/Flexbox, JavaScript |
| **Node.js** | Node.js, Express.js, EJS, Nodemon, Socket.IO |
| **Python** | Python 3, Django, Django Templates |
| **Databases** | SQLite, MongoDB, Mongoose, PostgreSQL, JSONB |
| **Security and Auth** | JWT, bcrypt, Bearer tokens, Helmet, CORS, Rate Limiting, CSRF |
| **Deployment** | `.env` configuration, Docker, Docker Compose |

---

## Running an Experiment

Each project uses its own port and dependencies, so check its linked `README.md` before starting:

- **Node.js projects:** `npm install` followed by `npm start` or `npm run dev`
- **Django project:** activate a virtual environment, `pip install -r requirements.txt`, `python manage.py migrate`, and `python manage.py runserver`
- **Static HTML projects (`EXP-1`, `Lab Test-2`):** open the HTML file directly in a browser

---

## Navigation

- [Back to Main README](../README.md)
- [Theory README](../Theory/README.md)
- [Applications README](../Applications/README.md)
- [Open Website Portal](../index.html)

Made by **Arnav Daftuar**
