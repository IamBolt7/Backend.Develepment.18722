# Backend Development Laboratory
**Repository:** [Backend.Develepment.18722](https://github.com/IamBolt7/Backend.Develepment.18722)  
**LABS:** [Open LABS](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS)  
**Course:** Backend Development
This directory contains practical experiments covering web development, backend programming, APIs, CRUD operations, databases, and relational versus document-oriented data models.
> Replace `[PLACEHOLDER: ...]` entries with exact details from the experiment source code or official instructions.
---
## Experiments
| # | Experiment | GitHub Link | Focus |
|---:|---|---|---|
| 1 | EXP-1 | [Open](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/EXP-1) | `[PLACEHOLDER: Exact topic]` |
| 2 | Lab Test-1 Experiment | [Open](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-1%20Experiment) | `[PLACEHOLDER: Exact topic]` |
| 3 | Lab Test-2 Experiment | [Open](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-2%20Experiment) | `[PLACEHOLDER: Exact topic]` |
| 4 | Lab Test-3 Experiment | [Open](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-3%20Experiment) | `[PLACEHOLDER: Exact topic]` |
| 5 | Lab Test-4 Experiment | [Open](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-4%20Experiment) | `[PLACEHOLDER: Exact topic]` |
| 6 | Lab Test-5 Experiment | [Open](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-5%20Experiment) | SQL vs document databases |
## Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **APIs/Data:** REST, JSON, CRUD
- **Databases:** MongoDB, Mongoose, relational database concepts
- **Tools:** npm, Git, GitHub, Terminal, VS Code
- **Testing:** `[PLACEHOLDER: Browser / Postman / Thunder Client / other]`
---
# 1. EXP-1
**Source:** [Open EXP-1](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/EXP-1)
## Aim
`[PLACEHOLDER: Exact EXP-1 aim.]`
## Problem Statement
`[PLACEHOLDER: Official EXP-1 problem statement.]`
## Objectives
- Understand the experiment's fundamental concepts.
- Build the required application.
- Organize source files correctly.
- Run and test the implementation.
## Concepts and Technologies
`[PLACEHOLDER: Add the exact concepts and technologies.]`
Possible introductory topics include HTML, CSS, JavaScript, responsive design, forms, and basic application structure.
## Project Structure
```text
EXP-1/
├── [PLACEHOLDER: main file]
├── [PLACEHOLDER: stylesheet/script]
└── [PLACEHOLDER: other files]
```
## How to Run
For a static project, open its main HTML file. For Node.js:
```bash
cd "EXP-1"
npm install
npm start
```
## Expected Output
`[PLACEHOLDER: Describe the expected output.]`
## Learning Outcomes
- Understand the experiment's main concepts.
- Explain the purpose of important files.
- Execute and test the project.
- Debug basic implementation problems.
## Conclusion
`[PLACEHOLDER: EXP-1 conclusion.]`
---
# 2. Lab Test-1 Experiment
**Source:** [Open Lab Test-1](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-1%20Experiment)
## Aim
`[PLACEHOLDER: Exact Lab Test-1 aim.]`
## Problem Statement
`[PLACEHOLDER: Official Lab Test-1 problem statement.]`
## Concepts and Technologies
- `[PLACEHOLDER: Primary concept]`
- `[PLACEHOLDER: Technologies used]`
- Application structure
- Testing and debugging
## Implementation
1. Analyse the requirements.
2. Create the required project structure.
3. Implement the primary functionality.
4. Add frontend/backend logic as required.
5. Test all required features.
6. Verify the expected output.
## Project Structure
```text
Lab Test-1 Experiment/
├── [PLACEHOLDER: entry file]
├── [PLACEHOLDER: supporting files]
└── [PLACEHOLDER: other files]
```
## How to Run
```bash
cd "Lab Test-1 Experiment"
```
If Node.js is used:
```bash
npm install
npm start
```
Otherwise open `[PLACEHOLDER: main file]`.
## Expected Output
`[PLACEHOLDER: Describe expected output.]`
## Learning Outcomes
- Apply course concepts to a practical task.
- Understand program flow.
- Run, test, and debug the implementation.
- Explain the purpose of major files.
## Conclusion
`[PLACEHOLDER: Lab Test-1 conclusion.]`
---
# 3. Lab Test-2 Experiment
**Source:** [Open Lab Test-2](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-2%20Experiment)
## Aim
`[PLACEHOLDER: Exact Lab Test-2 aim.]`
## Concepts
If applicable, this experiment may cover:
- Node.js
- Express.js
- HTTP requests and responses
- Routing
- Middleware
- npm dependencies
## Theory
**Node.js** is a JavaScript runtime commonly used for server-side development. **Express.js** is a Node.js framework that simplifies server creation, routing, middleware, and HTTP handling.
```javascript
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(3000, () => console.log("Server running"));
```
## Request-Response Flow
```text
Client -> HTTP Request -> Express Server
       -> Middleware -> Route -> Logic
       -> HTTP Response -> Client
```
## Project Structure
```text
Lab Test-2 Experiment/
├── package.json
├── [PLACEHOLDER: server.js/app.js]
├── [PLACEHOLDER: routes/public]
└── [PLACEHOLDER: other files]
```
## How to Run
```bash
cd "Lab Test-2 Experiment"
npm install
npm start
```
Or:
```bash
node [PLACEHOLDER: server filename]
```
Open `http://localhost:[PLACEHOLDER: port]`.
## Learning Outcomes
- Understand server-side JavaScript.
- Create and run a backend server.
- Understand HTTP communication.
- Understand routing and middleware.
- Manage dependencies with npm.
## Conclusion
`[PLACEHOLDER: Lab Test-2 conclusion.]`
---
# 4. Lab Test-3 Experiment
**Source:** [Open Lab Test-3](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-3%20Experiment)
## Aim
`[PLACEHOLDER: Exact Lab Test-3 aim.]`
## REST and CRUD
REST APIs commonly use HTTP methods to operate on resources.
| CRUD | HTTP | Purpose |
|---|---|---|
| Create | POST | Create data |
| Read | GET | Retrieve data |
| Update | PUT/PATCH | Modify data |
| Delete | DELETE | Remove data |
## API Endpoints
`[PLACEHOLDER: Replace with actual routes.]`
| Method | Endpoint | Description |
|---|---|---|
| GET | `[PLACEHOLDER]` | Retrieve resource(s) |
| POST | `[PLACEHOLDER]` | Create resource |
| PUT/PATCH | `[PLACEHOLDER]` | Update resource |
| DELETE | `[PLACEHOLDER]` | Delete resource |
## API Flow
```text
Client -> HTTP Request -> Express Route
       -> Application Logic -> Data Source
       -> JSON Response -> Client
```
## Project Structure
```text
Lab Test-3 Experiment/
├── package.json
├── [PLACEHOLDER: entry file]
├── [PLACEHOLDER: routes]
├── [PLACEHOLDER: models/controllers]
└── [PLACEHOLDER: other files]
```
## How to Run
```bash
cd "Lab Test-3 Experiment"
npm install
npm start
```
Open `http://localhost:[PLACEHOLDER: port]`.
## Testing
Test GET, POST, UPDATE, DELETE, invalid input, and missing-resource cases using `[PLACEHOLDER: testing tool]`.
## Learning Outcomes
- Understand REST architecture.
- Design API endpoints.
- Use HTTP methods correctly.
- Work with JSON.
- Implement and test CRUD operations.
## Conclusion
`[PLACEHOLDER: Lab Test-3 conclusion.]`
---
# 5. Lab Test-4 Experiment
**Source:** [Open Lab Test-4](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-4%20Experiment)
## Aim
`[PLACEHOLDER: Exact Lab Test-4 aim.]`
## Concepts
If applicable:
- Database connectivity
- Persistent storage
- MongoDB
- Mongoose
- Schemas and models
- CRUD operations
- API/database integration
## MongoDB and Mongoose
MongoDB is a document-oriented database that stores JSON-like documents in collections. Mongoose can provide schemas, models, validation, and convenient database operations for Node.js applications.
```javascript
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/[DATABASE]")
  .then(() => console.log("Connected"))
  .catch(console.error);
```
## Architecture
```text
Client -> Express API -> Routes/Logic
       -> Mongoose Model -> MongoDB
       -> Response -> Client
```
## Database Schema
| Field | Type | Required | Description |
|---|---|---|---|
| `[PLACEHOLDER]` | `[TYPE]` | `[YES/NO]` | `[DESCRIPTION]` |
| `[PLACEHOLDER]` | `[TYPE]` | `[YES/NO]` | `[DESCRIPTION]` |
## How to Run
```bash
cd "Lab Test-4 Experiment"
npm install
npm start
```
Ensure the required database service is running.
## Expected Output
`[PLACEHOLDER: Describe API/UI/database output.]`
## Learning Outcomes
- Connect a backend to a database.
- Understand persistent storage.
- Define schemas and models.
- Perform database CRUD operations.
- Integrate database operations with API routes.
## Conclusion
`[PLACEHOLDER: Lab Test-4 conclusion.]`
---
# 6. Lab Test-5 Experiment

## Topic
Relational vs Document Databases
**Source:** [Open Lab Test-5](https://github.com/IamBolt7/Backend.Develepment.18722/tree/main/LABS/Lab%20Test-5%20Experiment)
## Aim
To understand and compare relational and document-oriented databases, including their structures, schemas, relationships, queries, and common use cases.
## Relational Databases
Relational databases organize information into **tables** containing rows and columns. Relationships can be represented with primary keys, foreign keys, and joins.
Examples include MySQL, PostgreSQL, SQLite, Oracle Database, and Microsoft SQL Server.
```sql
SELECT * FROM users;
```
## Document Databases
Document databases store information as documents. MongoDB stores JSON-like BSON documents inside collections.
```json
{
  "name": "Example User",
  "email": "example@example.com",
  "skills": ["JavaScript", "Node.js"]
}
```
```javascript
db.users.find({})
```
## Comparison
| Feature | Relational | Document |
|---|---|---|
| Structure | Tables | Collections |
| Record | Row | Document |
| Attribute | Column | Field |
| Schema | Usually predefined | Often flexible |
| Relationships | Keys/joins | Embedding/references |
| Query style | SQL | Document query API |
| Example | MySQL/PostgreSQL | MongoDB |
Neither model is universally better. Selection depends on data relationships, consistency requirements, query patterns, scale, and operational needs.
## Implementation
**Relational:** `[PLACEHOLDER: Add actual tables and SQL queries.]`  
**Document:** `[PLACEHOLDER: Add actual collections and MongoDB operations.]`
## Learning Outcomes
- Understand relational and document databases.
- Compare tables/rows with collections/documents.
- Understand schemas and relationships.
- Understand joins, embedding, and references.
- Compare SQL and document queries.
- Choose a data model based on application requirements.
## Conclusion
This experiment demonstrates the structural and conceptual differences between relational and document-oriented databases and provides a foundation for selecting an appropriate model.
---
# Backend Development Reference
## HTTP Methods
| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create data |
| PUT | Replace/update data |
| PATCH | Partially update data |
| DELETE | Remove data |
## Typical Workflow
```text
User -> Browser/API Client -> HTTP Request
     -> Node.js/Express -> Routes/Logic
     -> Database -> HTTP Response -> Client
```
## CRUD
```text
Create -> POST
Read   -> GET
Update -> PUT / PATCH
Delete -> DELETE
```
---
# Git and GitHub
## Add an Individual Experiment
```bash
git add "LABS/Lab Test-2 Experiment"
git commit -m "Add Lab Test-2 Experiment"
git push origin main
```
## Update This README
```bash
git add "LABS/README.md"
git commit -m "Update LABS README"
git push origin main
```
## Recommended `.gitignore`
```gitignore
node_modules/
.env
.env.local
.env.*.local
.DS_Store
*.log
coverage/
dist/
build/
.vscode/
.idea/
```
---
# Troubleshooting
### Missing dependencies
```bash
npm install
```
### MongoDB connection error
Check that MongoDB is running, the connection URI is correct, credentials are valid, and required environment variables are loaded.
### Git repository error
Run `git status` from the root of the cloned repository.
### Changes not appearing on GitHub
```bash
git status
git log --oneline -5
git remote -v
git push origin main
```
---
# Overall Learning Outcomes
Students should be able to:
1. Understand web and backend application architecture.
2. Understand client-server communication.
3. Develop server-side applications where applicable.
4. Understand HTTP, routing, and middleware.
5. Design and test REST APIs.
6. Work with JSON and CRUD operations.
7. Connect applications to databases.
8. Understand persistent storage.
9. Compare relational and document-oriented databases.
10. Test and debug backend applications.
11. Manage dependencies using npm.
12. Use Git and GitHub for version control and documentation.
---
# Repository Structure
```text
Backend.Develepment.18722/
├── Application/
├── LABS/
│   ├── EXP-1/
│   ├── Lab Test-1 Experiment/
│   ├── Lab Test-2 Experiment/
│   ├── Lab Test-3 Experiment/
│   ├── Lab Test-4 Experiment/
│   ├── Lab Test-5 Experiment/
│   └── README.md
├── Theory/
├── .gitignore
└── README.md
```
# Final Checklist
- [ ] Replace remaining placeholders.
- [ ] Confirm exact experiment titles and aims.
- [ ] Confirm technologies and project structures.
- [ ] Add actual API endpoints and server ports.
- [ ] Add database/schema details.
- [ ] Confirm run commands and expected outputs.
- [ ] Verify every GitHub experiment link.
---
# Conclusion
The **Backend Development Laboratory** provides practical experience with web and backend development, progressing through application structure, server-side programming, HTTP communication, REST APIs, CRUD operations, persistent databases, and database modelling.
The direct GitHub links above provide quick access to every experiment, while this README summarizes their important concepts, execution process, and learning outcomes.
