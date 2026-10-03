# Backend Development — 18722

> A consolidated repository of backend development laboratory experiments, theory exercises, database work, and a complete Content Management System application.

## Repository Overview

This repository documents my practical work for **Backend Development**. It brings together laboratory experiments, backend theory implementations, database exercises, and a CMS application in one place.

The work progresses from web/backend fundamentals to **Node.js, Express.js, EJS, REST-style routing, MongoDB, Flask, SQL vs NoSQL concepts, CRUD operations, validation, server-side rendering, and database-backed applications**.

## Quick Navigation

| Section | Description | Documentation |
| --- | --- | --- |
| **LABS** | Backend Development laboratory experiments and lab tests | [Open LABS README](./LABS/README.md) |
| **Theory** | Express/EJS and Flask backend theory/practice implementations | [Open Theory README](./Theory/README.md) |
| **CMS Lab** | Full Content Management System using Node.js, Express, EJS and MongoDB | [Open CMS README](./Applications/cms-lab/README.md) |

## Repository Structure

```text
Backend.Develepment.18722/
├── Applications/
│   └── cms-lab/
│       └── README.md
├── LABS/
│   ├── EXP-1/
│   ├── Lab Test-1 Experiment/
│   ├── Lab Test-2 Experiment/
│   ├── Lab Test-3 Experiment/
│   ├── Lab Test-4 Experiment/
│   ├── Relational-vs-Document-Databases-Lab/
│   └── README.md
├── Theory/
│   └── README.md
├── .gitignore
└── README.md
```

---

# Laboratory Work

The [`LABS`](./LABS/README.md) directory contains the practical experiments completed during the course.

## EXP-1

**Documentation:** [LABS README — EXP-1](./LABS/README.md#1-exp-1)  
**Project:** [Open EXP-1](./LABS/EXP-1/)

This experiment introduces the structure and workflow of a backend/web development project. It focuses on understanding how project files are organised, how application logic is implemented, and how an application is executed and tested.

**Main learning areas:** project structure, web-development fundamentals, application flow, testing and debugging.

## Lab Test-1 Experiment

**Documentation:** [LABS README — Lab Test-1](./LABS/README.md#2-lab-test-1-experiment)  
**Project:** [Open Lab Test-1](./LABS/Lab%20Test-1%20Experiment/)

This lab test develops the basic practical workflow used throughout the backend development course. It reinforces implementation, running an application locally, understanding request/response behaviour, and debugging the resulting application.

**Main learning areas:** backend fundamentals, request-response flow, implementation, testing and debugging.

## Lab Test-2 Experiment

**Documentation:** [LABS README — Lab Test-2](./LABS/README.md#3-lab-test-2-experiment)  
**Project:** [Open Lab Test-2](./LABS/Lab%20Test-2%20Experiment/)

This experiment continues the progression toward structured backend applications. It focuses on working with routes and application logic while keeping the implementation organised and testable.

**Main learning areas:** routing, backend application structure, data handling, HTTP concepts and debugging.

## Lab Test-3 Experiment

**Documentation:** [LABS README — Lab Test-3](./LABS/README.md#4-lab-test-3-experiment)  
**Project:** [Open Lab Test-3](./LABS/Lab%20Test-3%20Experiment/)

This lab expands the backend work toward API-oriented development. It demonstrates how server-side code receives requests, processes data and returns appropriate responses.

**Main learning areas:** APIs, HTTP requests and responses, JSON/data handling, routes and server-side logic.

## Lab Test-4 Experiment

**Documentation:** [LABS README — Lab Test-4](./LABS/README.md#5-lab-test-4-experiment)  
**Project:** [Open Lab Test-4](./LABS/Lab%20Test-4%20Experiment/)

This experiment advances into database-oriented backend development. It connects application concepts with structured data storage and introduces the role of schemas, routes and CRUD-style operations in a backend system.

**Main learning areas:** databases, schemas/data models, backend routes, CRUD concepts and persistent data.

## Relational vs Document Databases Lab

**Documentation:** [LABS README — Relational vs Document Databases](./LABS/README.md#6-relational-vs-document-databases-lab)  
**Project:** [Open Database Lab](./LABS/Relational-vs-Document-Databases-Lab/)

This experiment compares **relational databases** with **document-oriented databases**. It examines how the same information can be represented using tables, rows, columns and relationships in SQL systems versus collections, documents and fields in document databases such as MongoDB.

Topics include:

- SQL and NoSQL database models
- Tables, rows and columns
- Collections, documents and fields
- Fixed and flexible schemas
- Primary and foreign keys
- Joins
- Embedded documents and references
- CRUD operations
- Choosing a database model based on application requirements

A relational system generally models relationships using keys and joins, while a document database can represent related information using embedded documents or references. Neither model is universally better; the appropriate design depends on the application's data relationships, query patterns, consistency requirements and operational needs.

> For detailed experiment notes, commands, execution guidance, troubleshooting and reference material, see the **[complete LABS README](./LABS/README.md)**.

---

# Theory and Backend Practice

**Full documentation:** [Open Theory README](./Theory/README.md)  
**Project directory:** [Open Theory](./Theory/)

The `Theory` project contains two independent backend implementations that demonstrate similar backend concepts using different technology stacks.

## Node.js + Express + EJS

The Node.js application demonstrates a small **Student Management** website and JSON API.

It includes:

- An Express server
- HTTP routing
- EJS server-side templates
- Static CSS
- A student listing page
- A JSON API endpoint
- Environment-based port configuration
- Basic 404 handling

Important routes include:

| Route | Purpose |
| --- | --- |
| `/` | Displays the project home page |
| `/students` | Renders the student list using EJS |
| `/api/students` | Returns student information as JSON |

The application uses in-memory sample data, so a database is not required for this example.

## Python + Flask

The Flask implementation demonstrates a lightweight Python backend server.

It includes routes for:

| Route | Purpose |
| --- | --- |
| `/` | Basic Flask landing page |
| `/data` | Returns sample information as JSON |
| `/html` | Displays data as server-generated HTML |

Together, the Express and Flask examples demonstrate how different backend frameworks solve the same core problems: receiving HTTP requests, routing them to application logic and returning HTML or JSON responses.

### Theory Concepts Covered

- Backend server creation
- HTTP routing
- Express middleware
- Server-side rendering with EJS
- Static-file serving
- JSON APIs
- Flask routes and `jsonify`
- Separation of frontend views and backend logic
- Configurable server ports
- 404/error handling

> See **[Theory/README.md](./Theory/README.md)** for setup instructions, project structure, routes and execution commands.

---

# CMS Application

**Full documentation:** [Open CMS Lab README](./Applications/cms-lab/README.md)  
**Project directory:** [Open CMS Lab](./Applications/cms-lab/)

The CMS Lab is a responsive **Content Management System for blog posts** built using:

- Node.js
- Express.js
- EJS
- MongoDB
- HTML5
- CSS3

The application supports two operating modes.

### MongoDB Mode

When MongoDB is available, posts are stored permanently in the `cms_lab` database.

### Demo Mode

If MongoDB is unavailable, the server can still run using temporary in-memory sample posts. This makes the application easy to demonstrate locally while preserving real database support.

### Main Features

- View all blog posts
- Read individual posts
- Create new posts
- Validate title, author and content
- Store posts in MongoDB
- Fall back to in-memory demo data
- Seed sample posts into an empty database
- Responsive desktop/mobile interface
- Custom 404 handling
- EJS server-side rendering

### Main Routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/` | Redirects to the posts page |
| `GET` | `/posts` | Displays all posts |
| `GET` | `/posts/new` | Displays the create-post form |
| `POST` | `/posts` | Validates and creates a post |
| `GET` | `/posts/:id` | Displays one complete post |

This project combines many of the concepts introduced elsewhere in the repository into a more complete application: routing, forms, validation, server-side rendering, database access, error handling and responsive UI design.

> See **[Applications/cms-lab/README.md](./Applications/cms-lab/README.md)** for complete installation, MongoDB configuration, routes, architecture and usage instructions.

---

# Concepts Covered Across the Repository

| Area | Concepts |
| --- | --- |
| **Backend Fundamentals** | Client-server architecture, request-response cycle, routing |
| **Node.js** | Server-side JavaScript and npm-based projects |
| **Express.js** | Routes, middleware, request handling and error handling |
| **EJS** | Dynamic HTML and server-side rendering |
| **Python / Flask** | Routes, HTML responses and JSON APIs |
| **HTTP** | GET, POST, PUT/PATCH and DELETE concepts |
| **REST / APIs** | Resource-oriented routes and JSON responses |
| **CRUD** | Create, Read, Update and Delete operations |
| **MongoDB** | Collections, documents, persistence and database connections |
| **Relational Databases** | Tables, keys, relationships and joins |
| **Document Databases** | Documents, flexible schemas, embedding and references |
| **Frontend Integration** | HTML, CSS, forms and responsive layouts |
| **Validation** | Checking and sanitising user input |
| **Error Handling** | Invalid routes, missing resources and connection failures |
| **Git & GitHub** | Version control and repository organisation |

---

# General Backend Architecture

```text
User
  |
  v
Browser / API Client
  |
  | HTTP Request
  v
Backend Server
(Node.js / Express or Python / Flask)
  |
  +--> Middleware
  |
  +--> Route
  |
  +--> Application Logic
  |
  +--> Data Layer / Database
  |
  v
HTTP Response
  |
  v
Browser / API Client
```

Not every experiment uses every layer, but this architecture represents the overall progression of the repository.

# Learning Outcomes

Through these experiments and projects, I have practised how to:

- Build and run backend servers.
- Understand the HTTP request-response lifecycle.
- Create routes and APIs.
- Return both HTML and JSON responses.
- Use EJS for dynamic server-rendered pages.
- Build simple backend applications using Flask.
- Work with MongoDB and persistent data.
- Understand relational and document-oriented database models.
- Apply CRUD concepts.
- Validate incoming form data.
- Handle invalid routes and common application errors.
- Structure backend projects clearly.
- Use Git and GitHub to maintain and document practical work.

# Running the Projects

Different folders have different requirements, so use the README inside the relevant section before running a project.

For most Node.js projects:

```bash
npm install
npm start
```

For the Flask theory example:

```bash
pip install -r requirements.txt
python3 "flask server/main.py"
```

For detailed instructions, use:

- [LABS/README.md](./LABS/README.md)
- [Theory/README.md](./Theory/README.md)
- [Applications/cms-lab/README.md](./Applications/cms-lab/README.md)

# Documentation Map

```text
Main README
│
├── LABS
│   └── README.md
│       ├── EXP-1
│       ├── Lab Test-1
│       ├── Lab Test-2
│       ├── Lab Test-3
│       ├── Lab Test-4
│       └── Relational vs Document Databases
│
├── Theory
│   └── README.md
│       ├── Node.js + Express + EJS
│       └── Python + Flask
│
└── Applications
    └── cms-lab
        └── README.md
```

# Repository

**GitHub:** [IamBolt7/Backend.Develepment.18722](https://github.com/IamBolt7/Backend.Develepment.18722)

This main README acts as the central index for the repository. Detailed documentation remains inside each section so that the root page stays readable while every project can still be explored independently.

---

## Author

**Arnav Daftuar**

Backend Development coursework and practical implementations.
