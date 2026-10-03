# Theory — Backend Development

This directory contains the **Theory assignments and backend-development practice work** completed as part of the Backend Development course.

The Theory section currently contains three projects:

| No. | Project | Main Topic | Open |
| ---: | --- | --- | --- |
| 1 | **Assignment-1-Notes-App** | Notes App, LocalStorage & SessionStorage | [Open Assignment 1](./Assignment-1-Notes-App/) |
| 2 | **Assignment 2** | PostgreSQL as SQL + NoSQL using JSONB | [Open Assignment 2](./Assignment%202/) |
| 3 | **Theory 1** | Previous Node.js/Express/EJS and Flask work | [Open Theory 1](./Theory%201/) |

---

## 📂 Directory Structure

```text
Theory/
│
├── Assignment-1-Notes-App/
│   └── ...
│
├── Assignment 2/
│   └── ...
│
├── Theory 1/
│   └── ...
│
└── README.md
```

---

# 1. Assignment 1 — Notes App

**Project:** [Assignment-1-Notes-App](./Assignment-1-Notes-App/)

## Final Task — Build a Notes App

Assignment 1 focuses on building a functional **Notes App** while applying browser-storage concepts.

The project demonstrates how a web application can save and manage information directly inside the browser without requiring a backend database.

## Main Concepts

- HTML
- CSS
- JavaScript
- LocalStorage
- SessionStorage
- DOM manipulation
- Event handling
- Forms and user input
- Client-side persistence
- Responsive interface design

## Application Features

The Notes App is designed around common note-management operations, including:

- Creating notes
- Viewing saved notes
- Editing existing notes
- Deleting notes
- Searching or filtering notes
- Persisting notes in browser storage
- Updating the interface dynamically
- Providing a clean and responsive user experience

## Browser Storage

### LocalStorage

`localStorage` stores key-value data in the browser and normally keeps it available even after the browser is closed and reopened.

Example:

```javascript
localStorage.setItem("username", "Arnav");

const username = localStorage.getItem("username");
```

### SessionStorage

`sessionStorage` has a similar key-value API, but its data belongs to the current browser-tab session.

Example:

```javascript
sessionStorage.setItem("currentNote", "Backend Development");

const note = sessionStorage.getItem("currentNote");
```

## Typical Notes App Flow

```text
User
 │
 ▼
Notes App UI
 │
 ├── Create Note
 ├── Edit Note
 ├── Search Note
 └── Delete Note
 │
 ▼
JavaScript Logic
 │
 ▼
LocalStorage / SessionStorage
 │
 ▼
Updated Notes Interface
```

## Learning Outcome

This assignment provides practical experience with client-side persistence and demonstrates how application state can be maintained before introducing a full backend/database architecture.

---

# 2. Assignment 2 — PostgreSQL as SQL + NoSQL

**Project:** [Assignment 2](./Assignment%202/)

## Working with JSONB

Assignment 2 explores how **PostgreSQL** can support both conventional relational data and flexible document-style information through its `jsonb` data type.

## Learning Objective

The objective is to understand how PostgreSQL's JSONB functionality allows a relational database to work with semi-structured JSON documents and to examine situations where this model can provide functionality commonly associated with document databases such as MongoDB.

## Topics Covered

- PostgreSQL
- SQL
- NoSQL concepts
- JSON
- JSONB
- Relational data
- Semi-structured data
- Document-style storage
- Nested objects
- Arrays
- JSON querying
- Hybrid database design
- PostgreSQL and MongoDB concepts

## Traditional Relational Model

A conventional relational database organises data into:

```text
Database
 │
 └── Table
      │
      ├── Columns
      └── Rows
```

Relationships between tables can be represented using primary keys, foreign keys, and joins.

## JSONB Model

PostgreSQL also allows JSON documents to be stored using `jsonb`.

Conceptually:

```text
PostgreSQL
│
├── Relational Data
│   ├── Tables
│   ├── Rows
│   ├── Columns
│   ├── Keys
│   └── Relationships
│
└── JSONB Data
    ├── JSON Objects
    ├── Nested Objects
    ├── Arrays
    └── Flexible Properties
```

A simplified example is:

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    details JSONB
);
```

A row can then contain document-style information:

```sql
INSERT INTO products (name, details)
VALUES (
    'Laptop',
    '{"brand":"Example","ram":"16GB","storage":"512GB"}'
);
```

## Why JSONB Is Useful

JSONB is useful when an application needs some flexibility in its data while still benefiting from a relational database.

It can be used for:

- Semi-structured information
- Optional properties
- Nested objects
- Arrays
- Metadata
- Flexible attributes

The assignment therefore demonstrates that the distinction between relational and document databases is not always absolute: PostgreSQL can support both relational structures and JSON documents.

---

# 3. Theory 1 — Previous Backend Theory Work

**Project:** [Theory 1](./Theory%201/)

`Theory 1` contains the backend theory/practice work completed before Assignment 1 and Assignment 2 were organised as separate projects.

It demonstrates backend concepts using different frameworks.

---

## Node.js + Express + EJS

The Node.js implementation demonstrates how to build a small server-side application using **Express.js** and **EJS**.

### Concepts Covered

- Node.js
- npm
- Express.js
- HTTP routes
- Middleware
- EJS templates
- Server-side rendering
- Static files
- JSON responses
- API endpoints
- Configurable ports
- 404 handling

### Request Flow

```text
Browser
   │
   │ HTTP Request
   ▼
Express Server
   │
   ├── Middleware
   ├── Route Matching
   ├── Application Logic
   │
   ├──────► JSON Response
   │
   └──────► EJS Template
               │
               ▼
          Rendered HTML
               │
               ▼
             Browser
```

### Express Example

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Backend Development");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

This demonstrates the basic structure of an Express application: create a server, define routes, and listen for requests.

---

## Python + Flask

Theory 1 also demonstrates backend development using **Python and Flask**.

### Concepts Covered

- Python
- Flask
- Web servers
- Routing
- HTML responses
- JSON responses
- API fundamentals
- Request-response architecture

### Flask Example

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Backend Development"

@app.route("/data")
def data():
    return jsonify({"course": "Backend Development"})

if __name__ == "__main__":
    app.run(debug=True)
```

The Express and Flask implementations demonstrate that different programming languages and frameworks follow similar backend principles.

---

# 🔄 Comparing the Three Theory Projects

| Area | Assignment 1 | Assignment 2 | Theory 1 |
| --- | --- | --- | --- |
| Primary Focus | Browser storage | PostgreSQL JSONB | Backend frameworks |
| JavaScript | ✅ | Depends on implementation | ✅ |
| LocalStorage | ✅ | — | — |
| SessionStorage | ✅ | — | — |
| PostgreSQL | — | ✅ | — |
| JSONB | — | ✅ | — |
| Node.js | — | — | ✅ |
| Express.js | — | — | ✅ |
| EJS | — | — | ✅ |
| Python | — | — | ✅ |
| Flask | — | — | ✅ |
| JSON/API concepts | Client-side data | Database documents | ✅ |

---

# 🧠 Concepts Covered Across Theory

## Web Development

- HTML
- CSS
- JavaScript
- DOM manipulation
- Events
- Forms
- Responsive UI

## Browser Storage

- LocalStorage
- SessionStorage
- Client-side persistence
- JSON serialization

## Backend Development

- Node.js
- Express.js
- Python
- Flask
- Routes
- Middleware
- Server-side rendering
- APIs
- HTTP requests and responses
- JSON responses
- Error handling

## Databases

- PostgreSQL
- SQL
- NoSQL concepts
- JSON
- JSONB
- Relational data
- Document-style data
- Semi-structured information

---

# 🌐 From Frontend Storage to Backend Databases

The three projects demonstrate different places where application data can be stored and processed.

```text
                 Application Data
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
     Browser        Backend       Database
      Storage        Server
          │             │             │
   LocalStorage     Express        PostgreSQL
  SessionStorage     Flask           JSONB
```

This progression helps connect client-side web development with backend servers and database systems.

---

# 🎯 Learning Outcomes

After completing the Theory work, I have practised how to:

- Build interactive browser applications.
- Store data using LocalStorage.
- Work with SessionStorage.
- Manipulate the DOM using JavaScript.
- Understand client-side persistence.
- Build backend servers with Node.js and Express.
- Create backend applications using Flask.
- Define and handle HTTP routes.
- Return HTML and JSON responses.
- Use server-side templates.
- Understand basic API architecture.
- Work with PostgreSQL.
- Understand PostgreSQL JSONB.
- Compare relational and document-style data.
- Understand the relationship between frontend, backend, and database layers.
- Organise and document software projects.

---

# ▶️ Running the Projects

Each Theory project can have different requirements. Check the files inside the relevant project before running it.

## Assignment 1 — Notes App

If it is a standard HTML/CSS/JavaScript project, open the main HTML file in a browser or use a local development server.

Example:

```text
Assignment-1-Notes-App/
├── index.html
├── style.css
└── script.js
```

## Assignment 2 — PostgreSQL JSONB

A PostgreSQL installation or accessible PostgreSQL database may be required.

Typical workflow:

```text
Start PostgreSQL
      │
      ▼
Create / Select Database
      │
      ▼
Create Tables
      │
      ▼
Insert Relational + JSONB Data
      │
      ▼
Run Queries
```

## Theory 1

For Node.js projects:

```bash
npm install
npm start
```

For Flask projects:

```bash
pip install -r requirements.txt
python3 main.py
```

Exact commands may vary according to the files in each project.

---

# 🔗 Quick Links

- [Assignment 1 — Notes App](./Assignment-1-Notes-App/)
- [Assignment 2 — PostgreSQL JSONB](./Assignment%202/)
- [Theory 1 — Previous Backend Theory](./Theory%201/)
- [Back to Repository Root](../README.md)

---

## Summary

The Theory section documents a progression across three areas of modern web development:

1. **Assignment 1** explores browser-side storage through a Notes App.
2. **Assignment 2** explores relational and document-style database capabilities using PostgreSQL JSONB.
3. **Theory 1** explores server-side development using Node.js/Express/EJS and Python/Flask.

Together, these projects connect **frontend state management, backend development, APIs, and database technologies** as part of the Backend Development course.

---

## Author

**Arnav Daftuar**

Backend Development — Theory assignments and practical implementations.
