# 🧪 Backend Development Laboratory

> Central documentation and navigation hub for the practical work completed in the **Backend Development** laboratory.

[![Repository](https://img.shields.io/badge/GitHub-Backend.Develepment.18722-181717?logo=github)](https://github.com/IamBolt7/Backend.Develepment.18722)
![Labs](https://img.shields.io/badge/Lab%20Tests-10-blue)
![Backend](https://img.shields.io/badge/Focus-Backend%20Development-success)

---

## 📌 About This Directory

The `LABS` directory contains practical work covering web development, backend programming, APIs, middleware, templating, authentication, security, databases, Django, deployment concepts, and real-time communication.

This README acts as the **main index for all laboratory work**. Each experiment can be opened directly from the table below, and its dedicated `README.md` can be used for detailed setup, implementation, testing, and learning outcomes.

---

# 🗂️ Lab Index

| # | Experiment | Focus | Project | Documentation |
|---:|---|---|---|---|
| — | **Django To-Do App** | Django CRUD, forms, templates, CSRF, SQLite | [Open Project](./django_todo_app/) | [README](./django_todo_app/README.md) |
| 1 | **EXP-1** | Introductory web/backend practical | [Open Project](./EXP-1/) | [README](./EXP-1/README.md) |
| 2 | **Lab Test-1 Experiment** | Backend/web development fundamentals | [Open Project](./Lab%20Test-1%20Experiment/) | [README](./Lab%20Test-1%20Experiment/README.md) |
| 3 | **Lab Test-2 Experiment** | Routing and backend application structure | [Open Project](./Lab%20Test-2%20Experiment/) | [README](./Lab%20Test-2%20Experiment/README.md) |
| 4 | **Lab Test-3 Experiment** | REST APIs, JSON and CRUD | [Open Project](./Lab%20Test-3%20Experiment/) | [README](./Lab%20Test-3%20Experiment/README.md) |
| 5 | **Lab Test-4 Experiment** | Database-backed backend development | [Open Project](./Lab%20Test-4%20Experiment/) | [README](./Lab%20Test-4%20Experiment/README.md) |
| 6 | **Lab Test-5 Experiment** | Relational vs Document Databases | [Open Project](./Lab%20Test-5%20Experiment/) | [README](./Lab%20Test-5%20Experiment/README.md) |
| 7 | **Lab Test-6 Experiment** | Express Middleware | [Open Project](./Lab%20Test-6%20Experiment/) | [README](./Lab%20Test-6%20Experiment/README.md) |
| 8 | **Lab Test-7 Experiment** | EJS Templating | [Open Project](./Lab%20Test-7%20Experiment/) | [README](./Lab%20Test-7%20Experiment/README.md) |
| 9 | **Lab Test-8 Experiment** | REST API & JWT Authentication | [Open Project](./Lab%20Test-8%20Experiment/) | [README](./Lab%20Test-8%20Experiment/README.md) |
| 10 | **Lab Test-9 Experiment** | Security, Rate Limiting & Deployment | [Open Project](./Lab%20Test-9%20Experiment/) | [README](./Lab%20Test-9%20Experiment/README.md) |
| 11 | **Lab Test-10 Experiment** | Socket.IO Real-Time Chat | [Open Project](./Lab%20Test-10%20Experiment/) | [README](./Lab%20Test-10%20Experiment/README.md) |

> **Note:** The numbering column reflects the sequence of projects shown here; the folder names remain exactly `EXP-1` and `Lab Test-1 Experiment` through `Lab Test-10 Experiment`.

---

# 🐍 Django To-Do App

**Project:** [Open Django To-Do App](./django_todo_app/)  
**Detailed README:** [django_todo_app/README.md](./django_todo_app/README.md)

A Django-based task-management application demonstrating a complete server-rendered CRUD-style workflow.

### Main Concepts

- Django project/app structure
- Models and migrations
- Django forms
- Templates and template inheritance
- Static CSS
- SQLite
- CSRF protection
- POST-based state changes
- Validation
- Django messages
- Django Admin
- Automated tests

### Application Flow

```text
Browser
   │
   ▼
Django URL Router
   │
   ▼
View
   │
   ├── Form Validation
   ├── Business Logic
   └── ORM
        │
        ▼
      SQLite
   │
   ▼
Template
   │
   ▼
HTML Response
```

---

# 1️⃣ EXP-1

**Project:** [Open EXP-1](./EXP-1/)  
**README:** [EXP-1/README.md](./EXP-1/README.md)

The introductory experiment establishes the basic project workflow used throughout the laboratory.

### Key Areas

- Project organisation
- Web-development fundamentals
- Application execution
- Testing and debugging
- Understanding application flow

---

# 2️⃣ Lab Test-1 Experiment

**Project:** [Open Lab Test-1](./Lab%20Test-1%20Experiment/)  
**README:** [Lab Test-1 README](./Lab%20Test-1%20Experiment/README.md)

This experiment reinforces the foundational workflow for developing and testing web/backend applications.

### Key Areas

- Application structure
- Backend fundamentals
- Request-response concepts
- Implementation workflow
- Testing and debugging

---

# 3️⃣ Lab Test-2 Experiment

**Project:** [Open Lab Test-2](./Lab%20Test-2%20Experiment/)  
**README:** [Lab Test-2 README](./Lab%20Test-2%20Experiment/README.md)

This experiment progresses toward structured server-side development and routing.

### Key Areas

- Backend routing
- HTTP requests and responses
- Server-side application logic
- Data handling
- Project organisation
- Error handling

---

# 4️⃣ Lab Test-3 Experiment

**Project:** [Open Lab Test-3](./Lab%20Test-3%20Experiment/)  
**README:** [Lab Test-3 README](./Lab%20Test-3%20Experiment/README.md)

This experiment focuses on API-oriented backend development and CRUD-style resource operations.

### CRUD Reference

| Operation | HTTP Method | Purpose |
|---|---|---|
| Create | `POST` | Create a resource |
| Read | `GET` | Retrieve resource data |
| Update | `PUT` / `PATCH` | Modify a resource |
| Delete | `DELETE` | Remove a resource |

### Key Areas

- REST concepts
- JSON
- API routes
- HTTP methods
- CRUD
- Request/response handling

---

# 5️⃣ Lab Test-4 Experiment

**Project:** [Open Lab Test-4](./Lab%20Test-4%20Experiment/)  
**README:** [Lab Test-4 README](./Lab%20Test-4%20Experiment/README.md)

This experiment moves into persistent data and database-backed backend applications.

### Key Areas

- Database connectivity
- Persistent storage
- Schemas and data models
- Backend/database integration
- CRUD operations

---

# 6️⃣ Lab Test-5 Experiment

**Project:** [Open Lab Test-5](./Lab%20Test-5%20Experiment/)  
**README:** [Lab Test-5 README](./Lab%20Test-5%20Experiment/README.md)

## Relational vs Document Databases

This experiment compares relational and document-oriented database models.

| Concept | Relational Database | Document Database |
|---|---|---|
| Structure | Tables | Collections |
| Record | Row | Document |
| Attribute | Column | Field |
| Schema | Usually predefined | Often flexible |
| Relationships | Keys and joins | Embedding/references |
| Example | PostgreSQL / MySQL | MongoDB |

### Key Areas

- SQL vs NoSQL
- Tables and collections
- Rows and documents
- Primary/foreign keys
- Joins
- Embedded documents
- References
- Schema design
- Data-model selection

---

# 7️⃣ Lab Test-6 Experiment

**Project:** [Open Lab Test-6](./Lab%20Test-6%20Experiment/)  
**README:** [Lab Test-6 README](./Lab%20Test-6%20Experiment/README.md)

## Express Middleware

Lab Test-6 demonstrates the Express middleware pipeline.

### Implemented Concepts

- Custom request logger
- `express.json()`
- `express.urlencoded()`
- Static file middleware
- Route-level authentication guard
- Public and protected routes
- 401 responses
- 404 middleware
- Centralized error handling
- cURL API testing

### Middleware Flow

```text
Request
  │
  ▼
Logger
  │
  ▼
Body Parser
  │
  ▼
Static Middleware
  │
  ▼
Route
  │
  ├── Public
  │
  └── Protected → Auth Guard
  │
  ▼
Response

No route → 404
Error    → Error Handler
```

---

# 8️⃣ Lab Test-7 Experiment

**Project:** [Open Lab Test-7](./Lab%20Test-7%20Experiment/)  
**README:** [Lab Test-7 README](./Lab%20Test-7%20Experiment/README.md)

## EJS Templating

This experiment demonstrates dynamic server-side HTML generation using Express and EJS.

### Key Areas

- EJS templates
- Express views
- Dynamic data rendering
- Forms
- Input validation
- Server-side HTML generation
- Node.js/Express project structure

---

# 9️⃣ Lab Test-8 Experiment

**Project:** [Open Lab Test-8](./Lab%20Test-8%20Experiment/)  
**README:** [Lab Test-8 README](./Lab%20Test-8%20Experiment/README.md)

## REST API & JWT Authentication

This experiment combines REST API concepts with token-based authentication.

### Key Areas

- RESTful routes
- CRUD operations
- JSON requests/responses
- JWT authentication
- Protected endpoints
- Bearer tokens
- Environment configuration
- API testing

### Authentication Flow

```text
Credentials
    │
    ▼
Login
    │
    ▼
JWT Issued
    │
    ▼
Bearer Token
    │
    ▼
Protected API
```

---

# 🔟 Lab Test-9 Experiment

**Project:** [Open Lab Test-9](./Lab%20Test-9%20Experiment/)  
**README:** [Lab Test-9 README](./Lab%20Test-9%20Experiment/README.md)

## Security, Rate Limiting & Deployment

This experiment focuses on strengthening and preparing an Express backend for deployment.

### Key Areas

- Helmet
- CORS
- Rate limiting
- Environment variables
- Backend security
- Deployment configuration
- Docker concepts
- Production-oriented configuration

---

# 1️⃣1️⃣ Lab Test-10 Experiment

**Project:** [Open Lab Test-10](./Lab%20Test-10%20Experiment/)  
**README:** [Lab Test-10 README](./Lab%20Test-10%20Experiment/README.md)

## Socket.IO Real-Time Chat

This experiment introduces real-time, event-driven communication using Socket.IO.

### Key Areas

- Socket.IO
- WebSockets / real-time communication concepts
- Client-server events
- Chat messages
- User connections
- Input normalization
- Express + Socket.IO integration

### Real-Time Flow

```text
Client A ──┐
           │
           ▼
      Socket.IO Server
           │
           ├──── Broadcast ────► Client A
           ├───────────────────► Client B
           └───────────────────► Client C
```

---

# 🛠️ Technology Stack

The laboratory work collectively uses technologies including:

| Area | Technologies / Concepts |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript |
| **JavaScript Backend** | Node.js, Express.js |
| **Python Backend** | Python, Django |
| **Templating** | EJS, Django Templates |
| **APIs** | REST, JSON, CRUD |
| **Authentication** | JWT, Bearer tokens, route guards |
| **Databases** | SQLite, MongoDB/document concepts, relational database concepts |
| **Security** | Helmet, CORS, rate limiting, CSRF |
| **Real-Time** | Socket.IO |
| **Deployment** | Environment configuration, Docker concepts |
| **Tools** | npm, pip, Git, GitHub, VS Code, Terminal, cURL |

---

# 🌐 Overall Backend Flow

```text
                 User / Client
                       │
                       ▼
                HTTP Request
                       │
                       ▼
             Backend Application
             ┌─────────┴─────────┐
             │                   │
         Middleware            Routes
             │                   │
             └─────────┬─────────┘
                       │
                       ▼
                Application Logic
                       │
             ┌─────────┴─────────┐
             │                   │
         Database             Services
             │                   │
             └─────────┬─────────┘
                       │
                       ▼
              HTML / JSON Response
                       │
                       ▼
                     Client
```

Real-time projects additionally use persistent socket connections and event-based communication.

---

# 🎯 Overall Learning Outcomes

Through the work in this directory, I have practised how to:

1. Understand client-server architecture.
2. Build and run backend applications.
3. Work with Node.js and Express.js.
4. Build applications with Django.
5. Understand HTTP requests and responses.
6. Configure routes and middleware.
7. Build REST APIs.
8. Work with JSON.
9. Implement CRUD operations.
10. Connect applications to persistent data.
11. Compare relational and document database models.
12. Use server-side templates such as EJS and Django templates.
13. Implement route protection and JWT authentication.
14. Apply backend security controls.
15. Understand deployment-oriented configuration.
16. Build real-time applications using Socket.IO.
17. Test and debug backend applications.
18. Manage dependencies using npm and pip.
19. Use Git and GitHub for version control.
20. Document projects with Markdown.

---

# ▶️ Running Experiments

Because the experiments use different technology stacks, use each project's linked README for its exact setup.

### Typical Node.js Project

```bash
npm install
npm start
```

or:

```bash
npm run dev
```

### Typical Django Project

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> Always use the experiment-specific README when its commands differ from these general examples.

---

# 📂 Current LABS Structure

```text
LABS/
│
├── django_todo_app/
│   └── README.md
│
├── EXP-1/
│   └── README.md
│
├── Lab Test-1 Experiment/
│   └── README.md
│
├── Lab Test-2 Experiment/
│   └── README.md
│
├── Lab Test-3 Experiment/
│   └── README.md
│
├── Lab Test-4 Experiment/
│   └── README.md
│
├── Lab Test-5 Experiment/
│   └── README.md
│
├── Lab Test-6 Experiment/
│   └── README.md
│
├── Lab Test-7 Experiment/
│   └── README.md
│
├── Lab Test-8 Experiment/
│   └── README.md
│
├── Lab Test-9 Experiment/
│   └── README.md
│
├── Lab Test-10 Experiment/
│   └── README.md
│
└── README.md
```

---

# 🔗 Documentation Directory

Use these links to jump directly to the detailed documentation:

- 🐍 [Django To-Do App README](./django_todo_app/README.md)
- 🧪 [EXP-1 README](./EXP-1/README.md)
- 🧪 [Lab Test-1 README](./Lab%20Test-1%20Experiment/README.md)
- 🧪 [Lab Test-2 README](./Lab%20Test-2%20Experiment/README.md)
- 🧪 [Lab Test-3 README](./Lab%20Test-3%20Experiment/README.md)
- 🧪 [Lab Test-4 README](./Lab%20Test-4%20Experiment/README.md)
- 🗄️ [Lab Test-5 README](./Lab%20Test-5%20Experiment/README.md)
- 🔄 [Lab Test-6 README — Express Middleware](./Lab%20Test-6%20Experiment/README.md)
- 🖼️ [Lab Test-7 README — EJS Templating](./Lab%20Test-7%20Experiment/README.md)
- 🔐 [Lab Test-8 README — REST API & JWT](./Lab%20Test-8%20Experiment/README.md)
- 🛡️ [Lab Test-9 README — Security & Deployment](./Lab%20Test-9%20Experiment/README.md)
- 💬 [Lab Test-10 README — Socket.IO Chat](./Lab%20Test-10%20Experiment/README.md)

---

# 🧹 Repository Hygiene

Generated dependencies and local development files should generally stay out of Git.

Recommended exclusions include:

```gitignore
# Node.js
node_modules/

# Python / Django
.venv/
venv/
__pycache__/
*.py[cod]
db.sqlite3

# Environment variables
.env
.env.local
.env.*.local

# OS / Editors
.DS_Store
.vscode/
.idea/

# Build / Logs
*.log
coverage/
dist/
build/
```

---

# 🔧 Git & GitHub

To update the complete `LABS` directory:

```bash
git add -A LABS
git status
git commit -m "Update backend laboratory experiments and documentation"
git pull --rebase origin main
git push origin main
```

To update only this README:

```bash
git add "LABS/README.md"
git commit -m "Update LABS documentation"
git push origin main
```

---

# 🏠 Repository Navigation

- [Main Repository README](../README.md)
- [Applications](../Applications/)
- [Theory](../Theory/)
- [LABS](./)

---

## 👨‍💻 Author

**Arnav Daftuar**

Backend Development — Laboratory experiments and practical implementations.
