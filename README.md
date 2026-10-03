# Backend Development — 18722

A central documentation hub for my **Backend Development** coursework, containing laboratory experiments, theory assignments, database exercises, and application projects.

The repository follows my progression from web fundamentals and browser storage to backend servers, APIs, server-side rendering, MongoDB, PostgreSQL, JSONB, and database-backed applications.

---

## 📌 Quick Navigation

| Section | Contents | Open |
| --- | --- | --- |
| **LABS** | EXP-1 and Lab Test Experiments 1–5 | [LABS](./LABS/) |
| **Theory** | Assignment 1, Assignment 2, and Theory 1 | [Theory](./Theory/) |
| **Applications** | CMS Lab | [Applications](./Applications/) |

---

## 📂 Repository Structure

```text
Backend.Develepment.18722/
│
├── Applications/
│   └── cms-lab/
│       └── README.md
│
├── LABS/
│   ├── EXP-1/
│   ├── Lab Test-1 Experiment/
│   ├── Lab Test-2 Experiment/
│   ├── Lab Test-3 Experiment/
│   ├── Lab Test-4 Experiment/
│   ├── Lab Test-5 Experiment/
│   └── README.md
│
├── Theory/
│   ├── Assignment-1-Notes-App/
│   ├── Assignment 2/
│   └── Theory 1/
│
├── .gitignore
└── README.md
```

---

# 🧪 Laboratory Work

The [`LABS`](./LABS/) directory contains the practical experiments completed during the Backend Development course.

For detailed lab documentation, see **[LABS/README.md](./LABS/README.md)**.

## EXP-1

**Project:** [Open EXP-1](./LABS/EXP-1/)

The first experiment introduces the basic workflow and organisation of a web/backend development project. It establishes the foundation for the later practical work in the repository.

**Concepts:** project structure, web fundamentals, application flow, execution, testing, and debugging.

---

## Lab Test-1 Experiment

**Project:** [Open Lab Test-1](./LABS/Lab%20Test-1%20Experiment/)

This experiment builds on the introductory material and applies core web/backend concepts in a practical application.

**Concepts:** application structure, HTTP fundamentals, request-response flow, implementation, testing, and debugging.

---

## Lab Test-2 Experiment

**Project:** [Open Lab Test-2](./LABS/Lab%20Test-2%20Experiment/)

This experiment develops a more structured backend workflow and focuses on organising application logic and routes.

**Concepts:** routing, HTTP methods, backend logic, data handling, application organisation, and error handling.

---

## Lab Test-3 Experiment

**Project:** [Open Lab Test-3](./LABS/Lab%20Test-3%20Experiment/)

This experiment extends the practical work toward API-oriented backend development, where a server receives requests, processes information, and returns suitable responses.

**Concepts:** APIs, JSON, HTTP requests and responses, routes, server-side logic, and client-server communication.

---

## Lab Test-4 Experiment

**Project:** [Open Lab Test-4](./LABS/Lab%20Test-4%20Experiment/)

This experiment advances into database-oriented backend development and demonstrates how application logic can interact with structured and persistent data.

**Concepts:** databases, schemas/data models, backend routes, CRUD operations, and persistent storage.

---

## Lab Test-5 Experiment — Relational vs Document Databases

**Project:** [Open Lab Test-5](./LABS/Lab%20Test-5%20Experiment/)

Lab Test-5 compares **relational databases** and **document-oriented databases**, showing how similar information can be represented using different database models.

### Topics Covered

- SQL and NoSQL
- Relational databases
- Document databases
- Tables, rows, and columns
- Collections and documents
- Primary and foreign keys
- Relationships and joins
- Embedded documents
- References
- Fixed and flexible schemas
- CRUD operations
- Relational vs document data modelling

The experiment demonstrates the conceptual differences between relational and document-oriented storage and the design considerations involved in choosing a data model.

---

# 📚 Theory

The [`Theory`](./Theory/) directory now contains **three separate pieces of work**:

| No. | Work | Topic | Link |
| ---: | --- | --- | --- |
| 1 | **Assignment 1** | Notes App / Browser Storage | [Open](./Theory/Assignment-1-Notes-App/) |
| 2 | **Assignment 2** | PostgreSQL as SQL + NoSQL using JSONB | [Open](./Theory/Assignment%202/) |
| 3 | **Theory 1** | Previous Backend Theory Work | [Open](./Theory/Theory%201/) |

---

## 1. Assignment 1 — Notes App

**Project:** [Assignment-1-Notes-App](./Theory/Assignment-1-Notes-App/)

### Final Task — Build a Notes App

Assignment 1 applies browser-storage concepts by building a functional Notes application.

The project demonstrates how information can be stored and managed in the browser without requiring a backend database.

### Main Concepts

- LocalStorage
- SessionStorage
- JavaScript
- DOM manipulation
- Event handling
- Forms
- Browser-side persistence
- Dynamic UI updates

### Notes App Functionality

The project is designed around common note-management operations such as:

- Creating notes
- Viewing saved notes
- Editing notes
- Deleting notes
- Searching/filtering notes
- Persisting information in browser storage
- Providing a responsive and usable interface

### Learning Outcome

The assignment demonstrates client-side persistence and provides a useful bridge between basic frontend applications and later database-backed applications.

---

## 2. Assignment 2 — PostgreSQL as SQL + NoSQL

**Project:** [Assignment 2](./Theory/Assignment%202/)

### Working with JSONB

Assignment 2 explores PostgreSQL's **`jsonb`** data type and how a relational database can also support document-style data.

### Learning Objective

The objective is to understand how PostgreSQL can combine conventional relational structures with semi-structured JSON documents and to evaluate scenarios where JSONB can provide functionality associated with document databases.

### Topics Covered

- PostgreSQL
- SQL
- NoSQL concepts
- JSON
- JSONB
- Relational tables
- Semi-structured data
- Document-style storage
- JSON querying
- Nested data
- PostgreSQL and MongoDB concepts
- Hybrid relational/document design

### Conceptual Model

```text
PostgreSQL
│
├── Relational Model
│   ├── Tables
│   ├── Rows
│   ├── Columns
│   ├── Keys
│   └── Relationships
│
└── JSONB
    ├── JSON Objects
    ├── Nested Properties
    ├── Arrays
    └── Flexible Document Data
```

JSONB makes it possible to keep relational and document-style information within the same PostgreSQL database while still using PostgreSQL's broader database capabilities.

---

## 3. Theory 1 — Previous Theory Work

**Project:** [Theory 1](./Theory/Theory%201/)

`Theory 1` contains the backend theory/practice work that was completed before the newer assignments were separated into their own folders.

It demonstrates similar backend concepts through multiple technology stacks.

### Node.js + Express + EJS

The Node.js implementation demonstrates server-side JavaScript using Express and EJS.

**Concepts covered:**

- Node.js
- Express.js
- HTTP routing
- Middleware
- EJS templates
- Server-side rendering
- Static files
- JSON APIs
- 404/error handling

Typical request flow:

```text
Browser
   │
   │ HTTP Request
   ▼
Express Server
   │
   ├── Middleware
   ├── Route
   ├── Application Logic
   └── EJS / JSON
   │
   ▼
HTTP Response
```

### Python + Flask

The Flask implementation demonstrates backend development using Python.

**Concepts covered:**

- Flask server creation
- Python backend development
- Route handling
- HTML responses
- JSON responses
- API fundamentals

Together, the Express and Flask examples demonstrate how different backend frameworks implement the same fundamental request-processing-response model.

---

# 🖥️ Applications

## CMS Lab

**Project:** [Open CMS Lab](./Applications/cms-lab/)  
**Documentation:** [CMS README](./Applications/cms-lab/README.md)

The CMS Lab is a **Content Management System** that combines several concepts from the course into a larger backend application.

### Technology Stack

- Node.js
- Express.js
- EJS
- MongoDB
- HTML5
- CSS3
- JavaScript

### Main Features

- Display blog posts
- View individual posts
- Create new posts
- Validate form input
- Store data using MongoDB
- Server-side rendering
- Responsive user interface
- Error handling
- Demo/in-memory data support

### Application Architecture

```text
User
 │
 ▼
Browser
 │
 │ HTTP Request
 ▼
Express.js
 │
 ├── Middleware
 ├── Routes
 ├── Validation
 └── Application Logic
 │
 ▼
MongoDB
 │
 ▼
EJS View
 │
 ▼
HTML Response
```

The CMS project brings together routing, forms, validation, database interaction, server-side rendering, and responsive UI design.

---

# 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| **HTML5** | Page structure |
| **CSS3** | Styling and responsive design |
| **JavaScript** | Client-side and server-side programming |
| **LocalStorage** | Persistent browser storage |
| **SessionStorage** | Session-based browser storage |
| **Node.js** | JavaScript backend runtime |
| **Express.js** | Web server, middleware, and routing |
| **EJS** | Server-side templating |
| **Python** | Backend programming |
| **Flask** | Python web framework |
| **MongoDB** | Document-oriented database |
| **PostgreSQL** | Relational database |
| **JSON / JSONB** | Structured and semi-structured data |
| **Git** | Version control |
| **GitHub** | Repository hosting and documentation |

---

# 🔑 Major Concepts Covered

### Backend Development

- Client-server architecture
- HTTP request-response lifecycle
- Routes and routing
- Middleware
- Server-side logic
- Server-side rendering
- APIs
- JSON responses
- Validation
- Error handling

### Databases

- SQL and NoSQL
- PostgreSQL
- MongoDB
- JSONB
- Relational modelling
- Document modelling
- Schemas
- Keys and relationships
- Joins
- Embedded documents
- References
- CRUD operations

### Frontend Integration

- HTML
- CSS
- Responsive design
- JavaScript
- Forms
- DOM manipulation
- LocalStorage
- SessionStorage

### Development Workflow

- Project organisation
- npm
- Dependencies
- Environment configuration
- Testing
- Debugging
- Git
- GitHub
- Technical documentation

---

# 🔄 CRUD Operations

CRUD is a recurring concept throughout backend development:

| Operation | Meaning | Common HTTP Method |
| --- | --- | --- |
| **Create** | Add new data | `POST` |
| **Read** | Retrieve data | `GET` |
| **Update** | Modify existing data | `PUT` / `PATCH` |
| **Delete** | Remove data | `DELETE` |

---

# 🌐 General Backend Architecture

```text
                 USER
                   │
                   ▼
           ┌───────────────┐
           │    Browser    │
           └───────┬───────┘
                   │
              HTTP Request
                   │
                   ▼
           ┌───────────────┐
           │ Backend Server│
           │ Express/Flask │
           └───────┬───────┘
                   │
          ┌────────┴────────┐
          │                 │
          ▼                 ▼
 Application Logic       Database
                    MongoDB/PostgreSQL
          │                 │
          └────────┬────────┘
                   │
                   ▼
            HTML / JSON
                   │
                   ▼
                Browser
```

Not every project uses every layer, but this represents the overall architecture explored throughout the repository.

---

# 🎯 Learning Outcomes

Through the experiments, theory assignments, and application projects in this repository, I have practised how to:

- Build web and backend applications.
- Understand client-server architecture.
- Work with HTTP requests and responses.
- Create backend routes.
- Build JSON APIs.
- Use Node.js and Express.js.
- Build lightweight backend applications using Flask.
- Render dynamic pages using EJS.
- Work with LocalStorage and SessionStorage.
- Integrate MongoDB with backend applications.
- Work with PostgreSQL.
- Store and query JSONB data.
- Understand SQL and NoSQL models.
- Compare relational and document databases.
- Apply CRUD operations.
- Validate user input.
- Handle common application errors.
- Create responsive interfaces.
- Organise backend projects.
- Use Git and GitHub for version control.
- Document software projects using Markdown.

---

# ▶️ Running the Projects

Each experiment may have different dependencies. Check the project-specific README or source files before running it.

### Typical Node.js Project

```bash
npm install
npm start
```

If no start script is configured:

```bash
node server.js
```

### Typical Flask Project

```bash
pip install -r requirements.txt
python3 main.py
```

### Database Projects

Database-based projects may additionally require:

- MongoDB
- PostgreSQL
- A local or cloud database instance
- Environment variables
- Database connection configuration

---

# 🗺️ Documentation Map

```text
Main README.md
│
├── LABS/
│   ├── README.md
│   ├── EXP-1/
│   ├── Lab Test-1 Experiment/
│   ├── Lab Test-2 Experiment/
│   ├── Lab Test-3 Experiment/
│   ├── Lab Test-4 Experiment/
│   └── Lab Test-5 Experiment/
│
├── Theory/
│   ├── Assignment-1-Notes-App/
│   ├── Assignment 2/
│   └── Theory 1/
│
└── Applications/
    └── cms-lab/
        └── README.md
```

---

# 🔗 Quick Links

- [LABS](./LABS/)
- [LABS README](./LABS/README.md)
- [EXP-1](./LABS/EXP-1/)
- [Lab Test-1](./LABS/Lab%20Test-1%20Experiment/)
- [Lab Test-2](./LABS/Lab%20Test-2%20Experiment/)
- [Lab Test-3](./LABS/Lab%20Test-3%20Experiment/)
- [Lab Test-4](./LABS/Lab%20Test-4%20Experiment/)
- [Lab Test-5](./LABS/Lab%20Test-5%20Experiment/)
- [Theory](./Theory/)
- [Assignment 1 — Notes App](./Theory/Assignment-1-Notes-App/)
- [Assignment 2 — PostgreSQL JSONB](./Theory/Assignment%202/)
- [Theory 1](./Theory/Theory%201/)
- [CMS Lab](./Applications/cms-lab/)
- [CMS README](./Applications/cms-lab/README.md)

---

## About This Repository

This repository serves as a record of my **Backend Development coursework and practical implementations**. It demonstrates the progression from browser-side storage and introductory web development to backend frameworks, APIs, relational/document databases, and complete database-backed applications.

---

## Author

**Arnav Daftuar**

Backend Development coursework, assignments, laboratory experiments, and application projects.
