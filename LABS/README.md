# Backend Development Laboratory

> **Repository:** `Backend.Develepment.18722`  
> **Directory:** `LABS/`  
> **Course:** Backend Development  
> **Status:** Laboratory work in progress / completed experiments as listed below

This directory contains laboratory experiments and lab-test implementations completed as part of the **Backend Development** course. The work progresses from foundational web-development concepts to server-side programming, HTTP communication, REST APIs, CRUD operations, database integration, and the comparison of relational and document-oriented databases.

> **Note about placeholders:** Some experiment-specific details are not available in the current documentation. Such items are clearly marked as **`[PLACEHOLDER: ...]`** so they can be replaced after checking the corresponding experiment's source code and lab instructions.

---

## Table of Contents

1. [Repository Overview](#repository-overview)
2. [Laboratory Experiments](#laboratory-experiments)
3. [Technology Stack](#technology-stack)
4. [General Prerequisites](#general-prerequisites)
5. [EXP-1](#1-exp-1)
6. [Lab Test-1 Experiment](#2-lab-test-1-experiment)
7. [Lab Test-2 Experiment](#3-lab-test-2-experiment)
8. [Lab Test-3 Experiment](#4-lab-test-3-experiment)
9. [Lab Test-4 Experiment](#5-lab-test-4-experiment)
10. [Relational vs Document Databases Lab](#6-relational-vs-document-databases-lab)
11. [Backend Development Workflow](#backend-development-workflow)
12. [HTTP Methods](#http-methods)
13. [REST and CRUD Operations](#rest-and-crud-operations)
14. [SQL vs NoSQL](#sql-vs-nosql)
15. [Git and GitHub Workflow](#git-and-github-workflow)
16. [General Troubleshooting](#general-troubleshooting)
17. [Overall Learning Outcomes](#overall-learning-outcomes)
18. [Repository Structure](#repository-structure)
19. [Conclusion](#conclusion)

---

# Repository Overview

The purpose of this laboratory repository is to maintain the practical work performed during the Backend Development course in a structured and version-controlled format.

The experiments collectively introduce the following areas:

- Web application fundamentals
- HTML, CSS, and JavaScript
- Responsive web design
- Client-server architecture
- Node.js
- Express.js
- npm and dependency management
- HTTP requests and responses
- Routing and middleware
- RESTful API design
- JSON data handling
- CRUD operations
- Database connectivity
- MongoDB
- Mongoose
- Relational database concepts
- SQL and NoSQL comparison
- Document-oriented databases
- Git and GitHub

---

# Laboratory Experiments

| No. | Experiment | Main Area | Status |
|---:|---|---|---|
| 1 | EXP-1 | `[PLACEHOLDER: Exact topic of EXP-1]` | Completed |
| 2 | Lab Test-1 Experiment | `[PLACEHOLDER: Exact Lab Test-1 topic]` | Completed |
| 3 | Lab Test-2 Experiment | `[PLACEHOLDER: Exact Lab Test-2 topic]` | Completed |
| 4 | Lab Test-3 Experiment | `[PLACEHOLDER: Exact Lab Test-3 topic]` | Completed |
| 5 | Lab Test-4 Experiment | `[PLACEHOLDER: Exact Lab Test-4 topic]` | Completed |
| 6 | Relational-vs-Document-Databases-Lab | Relational vs document databases | Completed |

---

# Technology Stack

The exact technologies differ between experiments. The laboratory work may include the following.

### Frontend

- HTML5
- CSS3
- JavaScript
- Responsive web-design techniques

### Backend

- Node.js
- Express.js
- JavaScript

### Databases

- MongoDB
- Mongoose
- Relational database concepts
- SQL
- NoSQL/document database concepts

### Development Tools

- Visual Studio Code or another code editor
- Terminal
- npm
- Git
- GitHub
- Web browser
- `[PLACEHOLDER: Postman / Thunder Client / other API-testing tool if used]`

---

# General Prerequisites

Before running the experiments, the following software may be required:

1. **Node.js** and **npm**
2. A modern web browser
3. A source-code editor such as VS Code
4. Git
5. MongoDB for database experiments
6. `[PLACEHOLDER: Any SQL database required by the relational database experiment]`

Check Node.js and npm using:

```bash
node --version
npm --version
```

Check Git using:

```bash
git --version
```

If an experiment contains a `package.json`, install its dependencies from that experiment's directory:

```bash
npm install
```

> Do not commit `node_modules/` or sensitive `.env` files to GitHub.

---

# 1. EXP-1

## 1.1 Experiment Title

**`[PLACEHOLDER: Enter the exact title of EXP-1]`**

## 1.2 Aim

`[PLACEHOLDER: Enter the official aim from the EXP-1 laboratory instructions.]`

A general aim for an introductory web-development experiment may be:

> To understand the basic structure of a web application and implement fundamental client-side web-development concepts.

## 1.3 Objectives

- Understand the structure of the application.
- Organize project files correctly.
- Implement the required user interface.
- Understand how the technologies used in the experiment interact.
- Run and test the application locally.
- `[PLACEHOLDER: Add objectives specific to EXP-1.]`

## 1.4 Problem Statement

`[PLACEHOLDER: Describe exactly what application/page/system is required to be created in EXP-1.]`

## 1.5 Prerequisites

- Basic understanding of web development
- HTML syntax
- CSS fundamentals
- Basic JavaScript, if used
- Browser developer tools
- `[PLACEHOLDER: Additional prerequisites]`

## 1.6 Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | `[PLACEHOLDER: Confirm whether used]` |
| CSS3 | `[PLACEHOLDER: Confirm whether used]` |
| JavaScript | `[PLACEHOLDER: Confirm whether used]` |
| Other | `[PLACEHOLDER: Add other technologies]` |

## 1.7 Theory

A web application commonly consists of a user-facing interface and, for full-stack applications, server-side logic.

HTML defines the structure of a webpage, CSS controls its visual presentation, and JavaScript adds behaviour and interactivity.

### HTML

HTML uses elements to represent headings, paragraphs, forms, buttons, navigation, images, and other page content.

### CSS

CSS controls properties such as:

- Layout
- Typography
- Spacing
- Borders
- Responsive behaviour
- Alignment
- Visual states

### JavaScript

JavaScript can be used to:

- Handle user events
- Validate input
- Manipulate the DOM
- Make network requests
- Dynamically update page content

`[PLACEHOLDER: Replace or expand this theory according to the actual EXP-1 topic.]`

## 1.8 Application Workflow

```text
User
  |
  v
Web Browser
  |
  v
HTML Structure
  |
  +----> CSS Styling
  |
  +----> JavaScript Behaviour
  |
  v
Rendered Application
```

`[PLACEHOLDER: Replace this diagram if EXP-1 uses a different architecture.]`

## 1.9 Project Structure

```text
EXP-1/
├── [PLACEHOLDER: main HTML/source file]
├── [PLACEHOLDER: CSS file]
├── [PLACEHOLDER: JavaScript file]
└── [PLACEHOLDER: other files/folders]
```

## 1.10 Important Files

### `[PLACEHOLDER: filename]`

`[PLACEHOLDER: Explain the purpose of this file.]`

### `[PLACEHOLDER: filename]`

`[PLACEHOLDER: Explain the purpose of this file.]`

## 1.11 Implementation Steps

1. Create the project directory.
2. Create the required source files.
3. Implement the page/application structure.
4. Add styling.
5. Add JavaScript behaviour where required.
6. Run the application.
7. Test all required functionality.
8. `[PLACEHOLDER: Add exact experiment steps.]`

## 1.12 How to Run

For a static frontend project, open the main HTML file in a browser.

If the project uses Node.js:

```bash
cd "EXP-1"
npm install
npm start
```

If no `start` script exists:

```bash
node [PLACEHOLDER: server filename]
```

## 1.13 Expected Output

`[PLACEHOLDER: Describe the expected interface and behaviour of EXP-1.]`

## 1.14 Testing

Verify that:

- The application loads without errors.
- Required UI elements are displayed.
- Navigation/buttons/forms work correctly.
- Input validation works where applicable.
- The layout behaves correctly on supported screen sizes.
- `[PLACEHOLDER: Add experiment-specific tests.]`

## 1.15 Advantages

- Introduces fundamental web-development concepts.
- Provides practical experience organizing a web project.
- Demonstrates how different frontend technologies interact.
- `[PLACEHOLDER: Add topic-specific advantages.]`

## 1.16 Limitations

- `[PLACEHOLDER: Identify limitations of the implementation.]`
- `[PLACEHOLDER: Mention functionality not implemented.]`

## 1.17 Real-World Applications

`[PLACEHOLDER: Explain where the concepts from EXP-1 are used in real-world systems.]`

## 1.18 Learning Outcomes

After completing this experiment, the student should be able to:

- Understand the structure of the implemented application.
- Organize source files.
- Run and test the project.
- Explain the major concepts demonstrated.
- `[PLACEHOLDER: Add exact learning outcomes.]`

## 1.19 Viva Questions

**Q1. What is the main objective of EXP-1?**  
**A.** `[PLACEHOLDER: Add answer.]`

**Q2. Which technologies are used in this experiment?**  
**A.** `[PLACEHOLDER: Add answer after checking the source code.]`

**Q3. What is the role of HTML, CSS, and JavaScript?**  
**A.** HTML provides structure, CSS provides presentation, and JavaScript provides behaviour and interactivity.

**Q4. How is the application executed?**  
**A.** `[PLACEHOLDER: Add the exact run procedure.]`

## 1.20 Conclusion

`[PLACEHOLDER: Summarize what was implemented and learned in EXP-1.]`

---

# 2. Lab Test-1 Experiment

## 2.1 Experiment Title

**`[PLACEHOLDER: Exact Lab Test-1 title]`**

## 2.2 Aim

`[PLACEHOLDER: Official aim of Lab Test-1.]`

## 2.3 Objectives

- Apply concepts covered in the course.
- Build the required application according to the lab-test problem.
- Organize application code clearly.
- Test the final implementation.
- `[PLACEHOLDER: Add exact objectives.]`

## 2.4 Problem Statement

`[PLACEHOLDER: Insert the complete Lab Test-1 problem statement.]`

## 2.5 Prerequisites

- `[PLACEHOLDER: Required concepts]`
- `[PLACEHOLDER: Required software]`
- Basic web-development knowledge

## 2.6 Technologies Used

| Technology | Purpose |
|---|---|
| `[PLACEHOLDER]` | `[PLACEHOLDER]` |
| `[PLACEHOLDER]` | `[PLACEHOLDER]` |
| `[PLACEHOLDER]` | `[PLACEHOLDER]` |

## 2.7 Theory

`[PLACEHOLDER: Explain the primary concepts demonstrated by Lab Test-1.]`

If the experiment is frontend-focused, relevant topics may include:

- Semantic HTML
- CSS layouts
- Flexbox/Grid
- Responsive design
- Forms
- DOM manipulation
- JavaScript event handling

If it is backend-focused, replace the above with the actual server-side concepts used.

## 2.8 Architecture / Workflow

```text
[PLACEHOLDER: User/Client]
        |
        v
[PLACEHOLDER: Application Layer]
        |
        v
[PLACEHOLDER: Data/Output Layer]
```

## 2.9 Project Structure

```text
Lab Test-1 Experiment/
├── [PLACEHOLDER]
├── [PLACEHOLDER]
└── [PLACEHOLDER]
```

## 2.10 Important Files

`[PLACEHOLDER: List each important source file and explain its purpose.]`

## 2.11 Implementation Steps

1. Read and analyse the problem statement.
2. Create the required project structure.
3. Implement the primary functionality.
4. Add styling/UI if required.
5. Add server/database functionality if required.
6. Test each feature.
7. Fix errors and verify the final output.
8. `[PLACEHOLDER: Add exact implementation steps.]`

## 2.12 How to Run

```bash
cd "Lab Test-1 Experiment"
```

If Node.js is used:

```bash
npm install
npm start
```

or:

```bash
node [PLACEHOLDER: entry file]
```

If it is a static project, open:

```text
[PLACEHOLDER: index.html or actual entry file]
```

## 2.13 API Endpoints

> `[PLACEHOLDER: Remove this section if Lab Test-1 does not contain an API.]`

| Method | Endpoint | Description |
|---|---|---|
| `[GET/POST/etc.]` | `[PLACEHOLDER]` | `[PLACEHOLDER]` |

## 2.14 Expected Output

`[PLACEHOLDER: Describe what should be visible or returned when Lab Test-1 runs correctly.]`

## 2.15 Testing

`[PLACEHOLDER: Add test cases and expected results.]`

## 2.16 Error Handling

`[PLACEHOLDER: Explain validation/error handling implemented in Lab Test-1.]`

## 2.17 Advantages

- `[PLACEHOLDER]`
- `[PLACEHOLDER]`

## 2.18 Limitations

- `[PLACEHOLDER]`
- `[PLACEHOLDER]`

## 2.19 Real-World Applications

`[PLACEHOLDER: Describe practical applications of the concepts.]`

## 2.20 Learning Outcomes

- `[PLACEHOLDER: Learning outcome 1]`
- `[PLACEHOLDER: Learning outcome 2]`
- `[PLACEHOLDER: Learning outcome 3]`

## 2.21 Viva Questions

**Q1. What problem does this experiment solve?**  
**A.** `[PLACEHOLDER]`

**Q2. What technologies are used?**  
**A.** `[PLACEHOLDER]`

**Q3. Explain the program flow.**  
**A.** `[PLACEHOLDER]`

**Q4. What improvements can be made?**  
**A.** `[PLACEHOLDER]`

## 2.22 Conclusion

`[PLACEHOLDER: Lab Test-1 conclusion.]`

---

# 3. Lab Test-2 Experiment

## 3.1 Experiment Title

**`[PLACEHOLDER: Exact Lab Test-2 title]`**

## 3.2 Aim

`[PLACEHOLDER: Official Lab Test-2 aim.]`

If this experiment introduces Node.js/Express, a suitable aim would be:

> To understand server-side web development and implement a backend application using Node.js and Express.js.

## 3.3 Objectives

- Understand server-side JavaScript.
- Create and configure a backend application.
- Understand request-response communication.
- Implement application routes.
- Use middleware where required.
- `[PLACEHOLDER: Confirm or replace these objectives.]`

## 3.4 Problem Statement

`[PLACEHOLDER: Insert Lab Test-2 problem statement.]`

## 3.5 Prerequisites

- JavaScript fundamentals
- Node.js and npm
- HTTP fundamentals
- `[PLACEHOLDER: Additional requirements]`

## 3.6 Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | `[PLACEHOLDER: Confirm usage]` |
| Express.js | `[PLACEHOLDER: Confirm usage]` |
| npm | Dependency management |
| JavaScript | Application logic |
| Other | `[PLACEHOLDER]` |

## 3.7 Theory

### Node.js

Node.js is a JavaScript runtime that allows JavaScript to execute outside the browser. It is widely used for web servers, command-line applications, APIs, and backend services.

### Express.js

Express is a web framework for Node.js that simplifies:

- Server creation
- Routing
- Middleware
- HTTP request handling
- HTTP response handling
- API development

A minimal Express server looks like:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

### Request-Response Cycle

```text
Client
  |
  | HTTP Request
  v
Express Server
  |
  +--> Route Matching
  |
  +--> Middleware
  |
  +--> Application Logic
  |
  v
HTTP Response
  |
  v
Client
```

`[PLACEHOLDER: Adapt this theory to the actual Lab Test-2 implementation.]`

## 3.8 Project Structure

```text
Lab Test-2 Experiment/
├── package.json
├── [PLACEHOLDER: server.js/app.js/index.js]
├── [PLACEHOLDER: routes/]
├── [PLACEHOLDER: public/]
└── [PLACEHOLDER: other files]
```

## 3.9 Important Files

### `package.json`

Stores project metadata, scripts, and dependencies.

### `[PLACEHOLDER: server entry file]`

`[PLACEHOLDER: Explain the server initialization and routes.]`

## 3.10 Implementation Steps

1. Initialize the Node.js project.
2. Install required dependencies.
3. Import Express.
4. Create the Express application.
5. Configure middleware.
6. Define routes.
7. Start the HTTP server.
8. Test the application.
9. `[PLACEHOLDER: Add actual steps.]`

## 3.11 API / Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | `[PLACEHOLDER: Confirm route behaviour]` |
| `[PLACEHOLDER]` | `[PLACEHOLDER]` | `[PLACEHOLDER]` |

## 3.12 How to Run

```bash
cd "Lab Test-2 Experiment"
npm install
```

Then use the script defined in `package.json`:

```bash
npm start
```

or:

```bash
node [PLACEHOLDER: server filename]
```

The application may be available at:

```text
http://localhost:[PLACEHOLDER: port]
```

## 3.13 Expected Output

`[PLACEHOLDER: Describe server console output, browser output, and/or API response.]`

## 3.14 Testing

- Verify that the server starts successfully.
- Verify each route.
- Test valid requests.
- Test invalid routes/input.
- Check the HTTP status codes.
- `[PLACEHOLDER: Add exact tests.]`

## 3.15 Error Handling

`[PLACEHOLDER: Document 404 handlers, validation, try/catch, or error middleware if present.]`

## 3.16 Advantages

- Demonstrates server-side JavaScript.
- Provides practical understanding of HTTP.
- Express simplifies route and middleware management.
- `[PLACEHOLDER: Add implementation-specific advantages.]`

## 3.17 Limitations

- `[PLACEHOLDER: Add limitations.]`

## 3.18 Real-World Applications

Node.js and Express can be used for:

- REST APIs
- Web application backends
- Microservices
- Real-time applications
- Authentication services
- Data-processing services

## 3.19 Learning Outcomes

- Understand Node.js execution.
- Create an Express server.
- Understand HTTP requests and responses.
- Create routes.
- Use middleware.
- `[PLACEHOLDER: Add exact outcomes.]`

## 3.20 Viva Questions

**Q1. What is Node.js?**  
**A.** Node.js is a JavaScript runtime that executes JavaScript outside a web browser.

**Q2. What is Express.js?**  
**A.** Express.js is a web framework for Node.js used to build web servers and APIs.

**Q3. What is middleware?**  
**A.** Middleware is a function in the request-response pipeline that can inspect, modify, or process a request before the final response is sent.

**Q4. Which port does this experiment use?**  
**A.** `[PLACEHOLDER: Add actual port.]`

## 3.21 Conclusion

`[PLACEHOLDER: Summarize the actual Lab Test-2 implementation.]`

---

# 4. Lab Test-3 Experiment

## 4.1 Experiment Title

**`[PLACEHOLDER: Exact Lab Test-3 title]`**

## 4.2 Aim

`[PLACEHOLDER: Official aim.]`

If the experiment implements a REST API, a suitable aim is:

> To design and implement RESTful endpoints and perform CRUD operations using appropriate HTTP methods.

## 4.3 Objectives

- Understand REST architecture.
- Understand API endpoints.
- Use HTTP methods appropriately.
- Exchange JSON data.
- Implement CRUD operations.
- Test API responses.
- `[PLACEHOLDER: Confirm/replace.]`

## 4.4 Problem Statement

`[PLACEHOLDER: Insert exact Lab Test-3 problem statement.]`

## 4.5 Prerequisites

- JavaScript
- Node.js
- Express.js
- HTTP methods
- JSON
- `[PLACEHOLDER: Other requirements]`

## 4.6 Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | `[PLACEHOLDER: Confirm]` |
| Express.js | `[PLACEHOLDER: Confirm]` |
| JSON | Data exchange |
| REST | API architecture |
| Other | `[PLACEHOLDER]` |

## 4.7 Theory

### REST

REST (Representational State Transfer) is an architectural style commonly used for web APIs. Resources are identified using URLs, and clients operate on those resources through HTTP methods.

### CRUD

CRUD represents four common data operations:

- **Create** — add new data
- **Read** — retrieve existing data
- **Update** — modify existing data
- **Delete** — remove data

A typical mapping is:

| CRUD | HTTP Method | Purpose |
|---|---|---|
| Create | POST | Create a resource |
| Read | GET | Retrieve resources |
| Update | PUT/PATCH | Update a resource |
| Delete | DELETE | Remove a resource |

### JSON

JSON is commonly used to exchange structured data between clients and servers.

Example:

```json
{
  "id": 1,
  "name": "Example"
}
```

`[PLACEHOLDER: Expand with the actual resources and routes used by Lab Test-3.]`

## 4.8 API Workflow

```text
Client
  |
  | GET / POST / PUT / PATCH / DELETE
  v
Express Router
  |
  v
Controller / Application Logic
  |
  v
[PLACEHOLDER: Array / File / Database]
  |
  v
JSON Response
  |
  v
Client
```

## 4.9 Project Structure

```text
Lab Test-3 Experiment/
├── package.json
├── [PLACEHOLDER: entry file]
├── [PLACEHOLDER: routes]
├── [PLACEHOLDER: controllers]
├── [PLACEHOLDER: data/models]
└── [PLACEHOLDER: other files]
```

## 4.10 API Endpoints

| Method | Endpoint | Description | Expected Status |
|---|---|---|---|
| GET | `[PLACEHOLDER]` | Retrieve resource(s) | `[PLACEHOLDER]` |
| GET | `[PLACEHOLDER]` | Retrieve one resource | `[PLACEHOLDER]` |
| POST | `[PLACEHOLDER]` | Create resource | `[PLACEHOLDER]` |
| PUT/PATCH | `[PLACEHOLDER]` | Update resource | `[PLACEHOLDER]` |
| DELETE | `[PLACEHOLDER]` | Delete resource | `[PLACEHOLDER]` |

## 4.11 Implementation Steps

1. Set up the Node.js/Express project.
2. Configure JSON middleware.
3. Define the data/resource model.
4. Implement GET endpoints.
5. Implement POST endpoints.
6. Implement PUT/PATCH endpoints.
7. Implement DELETE endpoints.
8. Add validation/error handling.
9. Test all endpoints.
10. `[PLACEHOLDER: Adjust according to actual implementation.]`

## 4.12 How to Run

```bash
cd "Lab Test-3 Experiment"
npm install
npm start
```

or:

```bash
node [PLACEHOLDER: entry file]
```

Server:

```text
http://localhost:[PLACEHOLDER: port]
```

## 4.13 Example Request

```http
POST [PLACEHOLDER: endpoint]
Content-Type: application/json
```

```json
{
  "[PLACEHOLDER: field]": "[PLACEHOLDER: value]"
}
```

## 4.14 Example Response

```json
{
  "[PLACEHOLDER: response field]": "[PLACEHOLDER: response value]"
}
```

## 4.15 Expected Output

`[PLACEHOLDER: Describe API behaviour and expected responses.]`

## 4.16 Testing

Test:

- GET all resources
- GET a valid resource ID
- GET an invalid/nonexistent ID
- POST valid data
- POST invalid data
- UPDATE existing data
- UPDATE nonexistent data
- DELETE existing data
- DELETE nonexistent data

`[PLACEHOLDER: Record actual results/status codes.]`

## 4.17 Error Handling

Possible API errors include:

- Invalid request data
- Missing required fields
- Resource not found
- Invalid resource ID
- Internal server error

`[PLACEHOLDER: Document actual handlers.]`

## 4.18 Advantages

- Clear separation between client and server.
- Standard HTTP methods make APIs predictable.
- JSON is lightweight and widely supported.
- CRUD maps naturally to common application operations.

## 4.19 Limitations

- `[PLACEHOLDER: State whether persistence, authentication, validation, etc. are absent.]`

## 4.20 Real-World Applications

REST APIs are used in:

- E-commerce systems
- Mobile applications
- Social platforms
- Content-management systems
- Student-management systems
- SaaS applications

## 4.21 Learning Outcomes

- Understand REST.
- Build API endpoints.
- Use HTTP methods.
- Handle JSON.
- Implement CRUD operations.
- Test and debug APIs.
- `[PLACEHOLDER: Add actual outcomes.]`

## 4.22 Viva Questions

**Q1. What is REST?**  
**A.** REST is an architectural style for designing networked applications around resources and standard HTTP operations.

**Q2. What is CRUD?**  
**A.** Create, Read, Update, and Delete.

**Q3. What is the difference between PUT and PATCH?**  
**A.** PUT is generally used to replace/update a complete representation, while PATCH is intended for partial modification.

**Q4. Which resources are managed by this experiment?**  
**A.** `[PLACEHOLDER]`

## 4.23 Conclusion

`[PLACEHOLDER: Summarize the actual REST/API implementation.]`

---

# 5. Lab Test-4 Experiment

## 5.1 Experiment Title

**`[PLACEHOLDER: Exact Lab Test-4 title]`**

## 5.2 Aim

`[PLACEHOLDER: Official aim.]`

If this experiment connects a backend application to MongoDB, a suitable aim is:

> To integrate a backend application with a database and perform persistent CRUD operations.

## 5.3 Objectives

- Connect an application to a database.
- Define data structure/schema.
- Create database models.
- Store persistent data.
- Implement database CRUD operations.
- Connect API routes with database operations.
- `[PLACEHOLDER: Confirm/replace.]`

## 5.4 Problem Statement

`[PLACEHOLDER: Insert exact Lab Test-4 problem statement.]`

## 5.5 Prerequisites

- Node.js
- Express.js
- REST APIs
- CRUD
- Basic database concepts
- MongoDB/Mongoose if used
- `[PLACEHOLDER: Other prerequisites]`

## 5.6 Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Server-side runtime |
| Express.js | Backend framework |
| MongoDB | `[PLACEHOLDER: Confirm database]` |
| Mongoose | `[PLACEHOLDER: Confirm usage]` |
| JavaScript | Application logic |
| REST API | Client-server interface |
| Other | `[PLACEHOLDER]` |

## 5.7 Theory

### Database Persistence

Data stored only in application memory is generally lost when the process stops. A database provides persistent storage so data can be retrieved later.

### MongoDB

MongoDB is a document-oriented database. Data is stored as documents in collections rather than as rows in relational tables.

Example document:

```json
{
  "name": "Example User",
  "email": "example@example.com"
}
```

### Mongoose

Mongoose is an object modelling library commonly used with Node.js and MongoDB. It provides schemas, models, validation, and convenient database operations.

Example connection:

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/[PLACEHOLDER_DATABASE]")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));
```

Example schema:

```javascript
const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
```

> `[PLACEHOLDER: Replace examples with the actual schema/database configuration.]`

## 5.8 Architecture

```text
Client
  |
  | HTTP Request
  v
Express Application
  |
  v
Routes
  |
  v
Application / Controller Logic
  |
  v
Mongoose Model
  |
  v
MongoDB
  |
  v
Persistent Data
```

## 5.9 Project Structure

```text
Lab Test-4 Experiment/
├── package.json
├── [PLACEHOLDER: server.js/app.js]
├── [PLACEHOLDER: models/]
├── [PLACEHOLDER: routes/]
├── [PLACEHOLDER: controllers/]
├── [PLACEHOLDER: public/views if applicable]
└── [PLACEHOLDER: other files]
```

## 5.10 Database Schema

### `[PLACEHOLDER: Model name]`

| Field | Type | Required | Description |
|---|---|---|---|
| `[PLACEHOLDER]` | `[String/Number/etc.]` | `[Yes/No]` | `[PLACEHOLDER]` |
| `[PLACEHOLDER]` | `[String/Number/etc.]` | `[Yes/No]` | `[PLACEHOLDER]` |

## 5.11 API Endpoints

| Method | Endpoint | Database Operation | Description |
|---|---|---|---|
| GET | `[PLACEHOLDER]` | Find | `[PLACEHOLDER]` |
| POST | `[PLACEHOLDER]` | Create | `[PLACEHOLDER]` |
| PUT/PATCH | `[PLACEHOLDER]` | Update | `[PLACEHOLDER]` |
| DELETE | `[PLACEHOLDER]` | Delete | `[PLACEHOLDER]` |

## 5.12 Implementation Steps

1. Create/initialize the backend project.
2. Install dependencies.
3. Configure Express middleware.
4. Configure the database connection.
5. Define the schema.
6. Create the model.
7. Create API routes.
8. Connect routes to database operations.
9. Add validation.
10. Add error handling.
11. Run the database service.
12. Run the server.
13. Test CRUD operations.
14. `[PLACEHOLDER: Adapt to actual project.]`

## 5.13 How to Run

Install dependencies:

```bash
cd "Lab Test-4 Experiment"
npm install
```

Start MongoDB if a local MongoDB instance is required:

```bash
[PLACEHOLDER: MongoDB start command for the student's setup]
```

Start the application:

```bash
npm start
```

or:

```bash
node [PLACEHOLDER: entry file]
```

Application URL:

```text
http://localhost:[PLACEHOLDER: port]
```

## 5.14 Environment Variables

If environment variables are used, document only their names, never real secrets.

Example:

```env
PORT=3000
MONGODB_URI=[PLACEHOLDER: MongoDB connection URI]
```

Keep `.env` out of Git:

```gitignore
.env
```

## 5.15 Expected Output

`[PLACEHOLDER: Describe successful database connection, API output, and UI if present.]`

## 5.16 Testing

Verify:

- Database connection succeeds.
- A record can be created.
- Records can be retrieved.
- A record can be updated.
- A record can be deleted.
- Invalid data is rejected appropriately.
- Missing resources return an appropriate response.
- Data remains available after restarting the server.

## 5.17 Error Handling

Potential cases:

- Database unavailable
- Invalid database URI
- Validation error
- Duplicate value
- Invalid ID
- Resource not found
- Internal server error

`[PLACEHOLDER: Document the cases actually handled.]`

## 5.18 Advantages

- Persistent storage
- Structured data access through models
- Reusable API layer
- Separation of application and persistence logic
- `[PLACEHOLDER: Additional advantages]`

## 5.19 Limitations

- `[PLACEHOLDER: Authentication/security limitations]`
- `[PLACEHOLDER: Validation limitations]`
- `[PLACEHOLDER: Deployment limitations]`

## 5.20 Real-World Applications

The same architecture can be used for:

- User-management systems
- E-commerce products/orders
- Blogging platforms
- Inventory systems
- Student records
- Content-management systems

## 5.21 Learning Outcomes

- Connect a backend to a database.
- Understand persistent storage.
- Define schemas/models.
- Perform database CRUD operations.
- Integrate REST endpoints with persistence.
- Handle common database errors.
- `[PLACEHOLDER: Add actual outcomes.]`

## 5.22 Viva Questions

**Q1. Why is a database required?**  
**A.** A database provides persistent, organized storage and allows application data to be queried and modified.

**Q2. What is a MongoDB document?**  
**A.** A document is a record containing fields and values stored inside a MongoDB collection.

**Q3. What is a Mongoose schema?**  
**A.** A schema defines the expected structure, types, validation, and other rules for documents handled through a Mongoose model.

**Q4. Which database and collection are used by this experiment?**  
**A.** `[PLACEHOLDER]`

## 5.23 Conclusion

`[PLACEHOLDER: Summarize the actual Lab Test-4 implementation and database integration.]`

---

# 6. Relational vs Document Databases Lab

## 6.1 Experiment Title

**Relational vs Document Databases**

## 6.2 Aim

To understand and compare relational databases and document-oriented databases by studying their data models, schemas, relationships, query approaches, and practical use cases.

## 6.3 Objectives

- Understand relational database structure.
- Understand document database structure.
- Compare tables with collections.
- Compare rows with documents.
- Understand fixed/structured schemas and flexible document models.
- Understand relationships in SQL and document databases.
- Compare query approaches.
- Identify situations where each model may be appropriate.

## 6.4 Problem Statement

`[PLACEHOLDER: Insert the exact lab problem statement and required dataset/domain.]`

## 6.5 Prerequisites

- Basic database concepts
- Tables, rows, and columns
- Basic SQL
- JSON
- Basic MongoDB concepts
- `[PLACEHOLDER: Required database software]`

## 6.6 Technologies Used

| Technology | Purpose |
|---|---|
| `[PLACEHOLDER: SQL DBMS]` | Relational database implementation |
| SQL | Relational queries |
| MongoDB | Document database implementation |
| JSON/BSON | Document representation |
| `[PLACEHOLDER: Other tools]` | `[PLACEHOLDER]` |

## 6.7 Relational Databases

A relational database organizes data into **tables**. A table consists of rows and columns.

Example:

| ID | Name | Email |
|---:|---|---|
| 1 | Example User | example@example.com |
| 2 | Second User | second@example.com |

A relational schema commonly defines:

- Table names
- Column names
- Data types
- Primary keys
- Foreign keys
- Constraints
- Relationships

Examples of relational database management systems include:

- MySQL
- PostgreSQL
- SQLite
- Microsoft SQL Server
- Oracle Database

### Example SQL Query

```sql
SELECT * FROM users;
```

### Example Insert

```sql
INSERT INTO users (name, email)
VALUES ('Example User', 'example@example.com');
```

## 6.8 Document Databases

A document database stores records as documents rather than rows.

MongoDB documents use a JSON-like BSON representation.

Example:

```json
{
  "name": "Example User",
  "email": "example@example.com",
  "skills": ["JavaScript", "Node.js", "MongoDB"]
}
```

MongoDB organizes information as:

```text
Database
  |
  v
Collection
  |
  v
Document
  |
  v
Fields
```

### Example MongoDB Query

```javascript
db.users.find({})
```

### Example Insert

```javascript
db.users.insertOne({
  name: "Example User",
  email: "example@example.com"
})
```

## 6.9 Data Model Comparison

### Relational Model

```text
Database
  |
  +--> Table
        |
        +--> Row
              |
              +--> Columns
```

### Document Model

```text
Database
  |
  +--> Collection
        |
        +--> Document
              |
              +--> Fields
```

## 6.10 SQL vs Document Database Comparison

| Feature | Relational Database | Document Database |
|---|---|---|
| Main structure | Tables | Collections |
| Record | Row | Document |
| Attribute | Column | Field |
| Schema | Typically predefined | Often flexible |
| Relationships | Foreign keys and joins | Embedding and/or references |
| Query approach | SQL | Database-specific document queries |
| Nested data | Often normalized into tables | Can be naturally embedded |
| Example | MySQL/PostgreSQL | MongoDB |
| Common representation | Tabular | JSON-like/BSON |
| Transactions | Strongly associated with relational systems; also supported by modern document databases | Supported by systems such as MongoDB |
| Scaling strategy | Depends on DBMS/design | Depends on DBMS/design |

> The appropriate database depends on application requirements; neither model is universally superior.

## 6.11 Relationships

### Relational Approach

Related information can be separated into tables and connected using keys.

```text
Users
  |
  | user_id
  v
Orders
```

A query may combine the tables using a join.

### Document Approach

Related data may be:

1. **Embedded** inside a document, or
2. **Referenced** using another document's identifier.

The choice depends on access patterns, data size, update behaviour, and relationship structure.

## 6.12 Implementation

### Relational Side

`[PLACEHOLDER: Add actual table definitions, CREATE TABLE commands, inserts, joins, and queries.]`

### Document Side

`[PLACEHOLDER: Add actual MongoDB collections, sample documents, inserts, updates, and queries.]`

## 6.13 Project Structure

```text
Relational-vs-Document-Databases-Lab/
├── [PLACEHOLDER: SQL scripts]
├── [PLACEHOLDER: MongoDB scripts]
├── [PLACEHOLDER: Node.js files if any]
├── [PLACEHOLDER: package.json if any]
└── [PLACEHOLDER: documentation/data]
```

## 6.14 How to Run

### Relational Database

```text
[PLACEHOLDER: Exact steps for the SQL DBMS used.]
```

### MongoDB

```text
[PLACEHOLDER: Exact MongoDB setup/run commands.]
```

### Node.js Application, if present

```bash
npm install
npm start
```

## 6.15 Expected Output

`[PLACEHOLDER: Describe the records/results that should be returned by the relational and document database operations.]`

## 6.16 Testing

Verify that:

- Data can be inserted into both database systems.
- Data can be retrieved.
- Data can be updated.
- Data can be deleted.
- Relationships/nested data behave as expected.
- Queries return the expected records.
- `[PLACEHOLDER: Add exact test cases.]`

## 6.17 Advantages of Relational Databases

- Clear table-based structure
- Strong schema and constraints
- Mature SQL ecosystem
- Effective support for complex relational queries
- Well suited to many structured transactional workloads

## 6.18 Advantages of Document Databases

- Flexible document structures
- Natural representation of nested data
- Convenient mapping to JSON-based applications
- Schema evolution can be easier for some workloads
- Embedding can reduce the need for joins in suitable data models

## 6.19 Limitations / Trade-offs

### Relational

- Schema changes may require migrations.
- Highly nested application objects may require multiple tables.
- Complex joins can increase query/design complexity.

### Document

- Flexible schemas require application-level discipline.
- Duplicated embedded data can complicate updates.
- Poor document modelling can lead to inefficient queries or oversized documents.

## 6.20 Real-World Applications

Relational databases are frequently used for:

- Banking and accounting systems
- Transaction processing
- Enterprise applications
- Inventory and order systems
- Systems with strongly structured relationships

Document databases are frequently used for:

- Content-management systems
- Product catalogues
- Applications with evolving data structures
- JSON-centric services
- Some event/content/profile workloads

Actual technology selection should be based on requirements, consistency needs, query patterns, operational constraints, and data relationships.

## 6.21 Learning Outcomes

After completing this experiment, the student should be able to:

- Explain relational and document database models.
- Differentiate tables, rows, collections, and documents.
- Explain schema differences.
- Explain keys, joins, embedding, and references.
- Perform basic operations in both database models.
- Compare the trade-offs of SQL and document databases.
- Select a data model based on application requirements.

## 6.22 Viva Questions

**Q1. What is a relational database?**  
**A.** A database that organizes data into related tables consisting of rows and columns.

**Q2. What is a document database?**  
**A.** A database that stores records as documents, commonly using JSON-like structures.

**Q3. What is the difference between a row and a document?**  
**A.** A row follows the columns defined by a relational table, while a document stores fields in a document-oriented representation and can contain nested structures.

**Q4. What is a foreign key?**  
**A.** A field or set of fields that references a key in another relational table and helps represent relationships.

**Q5. What is embedding in MongoDB?**  
**A.** Storing related data directly inside the same document.

**Q6. Is NoSQL always better than SQL?**  
**A.** No. The appropriate database model depends on the application's data relationships, consistency requirements, query patterns, scale, and operational needs.

## 6.23 Conclusion

This experiment demonstrates the conceptual and practical differences between relational and document-oriented databases. Relational systems organize structured data into tables and commonly model relationships using keys and joins, whereas document databases organize information into flexible documents and can model related data through embedding or references. Understanding both approaches helps developers choose an appropriate data model for a particular application.

---

# Backend Development Workflow

A typical full-stack/backend application can follow this request-response flow:

```text
User
  |
  v
Browser / API Client
  |
  | HTTP Request
  v
Node.js / Express Server
  |
  +--> Middleware
  |
  +--> Router
  |
  +--> Controller / Business Logic
  |
  +--> Model / Data Access
  |
  v
Database
  |
  v
Result
  |
  v
Server
  |
  | HTTP Response
  v
Client
  |
  v
User
```

Not every experiment uses every layer shown above.

---

# HTTP Methods

HTTP methods indicate the intended operation of a request.

| Method | Common Purpose | Example |
|---|---|---|
| GET | Retrieve information | Get all users |
| POST | Create information | Create a user |
| PUT | Replace/update a resource | Replace user details |
| PATCH | Partially update a resource | Change user's email |
| DELETE | Delete a resource | Delete a user |

Example:

```http
GET /users
```

```http
POST /users
Content-Type: application/json
```

```json
{
  "name": "Example User"
}
```

---

# REST and CRUD Operations

CRUD is an acronym for:

```text
C -> Create
R -> Read
U -> Update
D -> Delete
```

A common REST mapping is:

| CRUD Operation | HTTP Method | Example Database Operation |
|---|---|---|
| Create | POST | Insert/Create |
| Read | GET | Find/Select |
| Update | PUT/PATCH | Update |
| Delete | DELETE | Delete |

A typical CRUD flow is:

```text
Client Request
     |
     v
API Endpoint
     |
     v
Validate Input
     |
     v
Perform CRUD Operation
     |
     v
Generate Response
     |
     v
Client
```

---

# SQL vs NoSQL

SQL and NoSQL describe broad families of database approaches.

### SQL / Relational

Relational systems typically use:

- Tables
- Rows
- Columns
- Primary keys
- Foreign keys
- Constraints
- SQL queries

### Document-Oriented NoSQL

Document databases such as MongoDB use:

- Collections
- Documents
- Fields
- Nested objects/arrays
- Embedding
- References

### Summary

| Area | Relational | Document |
|---|---|---|
| Storage model | Tables | Documents |
| Record | Row | Document |
| Structure | Structured schema | Flexible document shape |
| Relationships | Keys/joins | Embedding/references |
| Typical query style | SQL | Document query API/language |
| Example | PostgreSQL/MySQL | MongoDB |

Database selection should be driven by the application's requirements rather than by assuming one category is always preferable.

---

# Git and GitHub Workflow

Git is used to track changes locally, while GitHub can host the repository remotely.

## Check Repository Status

```bash
git status
```

## Add One Experiment

Because several folder names contain spaces, use quotation marks.

```bash
git add "LABS/Lab Test-2 Experiment"
```

## Commit

```bash
git commit -m "Add Lab Test-2 Experiment"
```

## Push

```bash
git push origin main
```

Repeat for another experiment:

```bash
git add "LABS/Lab Test-3 Experiment"
git commit -m "Add Lab Test-3 Experiment"
git push origin main
```

## Update This README

```bash
git add "LABS/README.md"
git commit -m "Update LABS README documentation"
git push origin main
```

## Recommended `.gitignore`

For Node.js projects:

```gitignore
node_modules/
.env
.DS_Store
npm-debug.log*
```

Never commit passwords, private keys, database credentials, API secrets, or other sensitive values.

---

# General Troubleshooting

## `npm` command not found

Check:

```bash
node --version
npm --version
```

If unavailable, install Node.js and reopen Terminal.

## Missing Node Modules

Run from the experiment directory:

```bash
npm install
```

## `Cannot find module`

Confirm that:

1. `npm install` completed successfully.
2. The dependency exists in `package.json`.
3. The import/require path is correct.

## Port Already in Use

A server may fail to start if another process already uses the configured port.

Change the application port or stop the process occupying that port.

Example alternative:

```javascript
const PORT = process.env.PORT || 3001;
```

## MongoDB Connection Error

Check:

- MongoDB is running.
- The connection URI is correct.
- The database hostname and port are correct.
- Network access is allowed if using a hosted database.
- Credentials are valid.
- Environment variables are loaded correctly.

## Git Says `not a git repository`

Move to the root of the cloned repository:

```bash
cd "[PLACEHOLDER: path to Backend.Develepment.18722 repository]"
git status
```

## Changes Do Not Appear on GitHub

Check:

```bash
git status
git log --oneline -5
git remote -v
```

Then push:

```bash
git push origin main
```

## `.env` Accidentally Added Before `.gitignore`

Adding `.env` to `.gitignore` does not automatically untrack a file already committed. Remove it from Git tracking without deleting the local file:

```bash
git rm --cached .env
git commit -m "Stop tracking environment file"
git push origin main
```

If the file contained real secrets and was pushed publicly, rotate/revoke those secrets as well.

---

# Overall Learning Outcomes

After completing the laboratory work, students should be able to:

1. Understand the basic architecture of web applications.
2. Structure frontend applications using HTML.
3. Style interfaces using CSS.
4. Add behaviour using JavaScript.
5. Understand client-server communication.
6. Use Node.js for server-side JavaScript.
7. Build servers with Express.js.
8. Understand HTTP requests and responses.
9. Create and organize routes.
10. Use middleware.
11. Design RESTful API endpoints.
12. Work with JSON request and response bodies.
13. Implement CRUD operations.
14. Validate application input.
15. Handle application errors.
16. Connect applications to databases.
17. Understand persistent storage.
18. Work with MongoDB concepts.
19. Understand Mongoose schemas and models where applicable.
20. Understand relational database concepts.
21. Write and understand basic SQL.
22. Understand document-oriented database concepts.
23. Compare SQL and document database approaches.
24. Understand tables, rows, collections, and documents.
25. Understand relationships, joins, embedding, and references.
26. Install and manage dependencies using npm.
27. Run backend applications locally.
28. Test APIs and web applications.
29. Debug common development errors.
30. Use Git for version control.
31. Use GitHub to maintain laboratory work.
32. Document software projects clearly.

---

# Repository Structure

The intended `LABS` directory is:

```text
LABS/
│
├── EXP-1/
│   └── [Experiment files]
│
├── Lab Test-1 Experiment/
│   └── [Experiment files]
│
├── Lab Test-2 Experiment/
│   └── [Experiment files]
│
├── Lab Test-3 Experiment/
│   └── [Experiment files]
│
├── Lab Test-4 Experiment/
│   └── [Experiment files]
│
├── Relational-vs-Document-Databases-Lab/
│   └── [Experiment files]
│
└── README.md
```

The repository may additionally contain directories such as:

```text
Backend.Develepment.18722/
├── Application/
├── LABS/
├── Theory/
├── .gitignore
└── README.md
```

`[PLACEHOLDER: Update this structure whenever repository folders change.]`

---

# Documentation Checklist

Before considering this README final, replace the following placeholders using the actual source code and official lab instructions:

- [ ] Exact title of EXP-1
- [ ] Exact aim/problem statement of EXP-1
- [ ] Exact Lab Test-1 title, aim, and technologies
- [ ] Exact Lab Test-2 title, routes, port, and entry file
- [ ] Exact Lab Test-3 resources and API endpoints
- [ ] Exact Lab Test-4 database, schema, routes, and port
- [ ] Exact SQL DBMS used in the relational database lab
- [ ] Actual project structures
- [ ] Actual run commands
- [ ] Actual expected outputs
- [ ] Actual validation/error handling
- [ ] Actual test cases
- [ ] Any screenshots/output links required by the course

A quick way to locate unfinished documentation is to search this file for:

```text
[PLACEHOLDER:
```

---

# Conclusion

The **Backend Development Laboratory** provides practical experience in designing and implementing web applications and backend systems.

Across the experiments, the laboratory work develops an understanding of how a web interface communicates with a server, how servers process HTTP requests, how REST APIs expose application functionality, how CRUD operations manage application data, and how databases provide persistent storage.

The database-focused work also introduces the differences between relational and document-oriented data models. This provides a foundation for understanding how application requirements influence database design.

Git and GitHub are used throughout the work to maintain source code, track changes, organize experiments, and document the implementation.

As the individual experiments are finalized, the placeholders in this README should be replaced with details taken directly from the corresponding source code and official laboratory instructions.

---

## Course Information

**Course:** Backend Development  
**Repository:** `Backend.Develepment.18722`  
**Folder:** `LABS`

---

*This README is intended to serve as the central documentation and index for all Backend Development laboratory experiments in the `LABS` directory.*
