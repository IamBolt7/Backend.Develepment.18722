# Lab Test-3 Experiment — Node.js, Express.js, and EJS Templating

> **Navigation:** [Main README](../../README.md) · [LABS README](../README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=LABS/Lab%20Test-3%20Experiment/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

## Experiment 12: Node.js, Express.js, and EJS Templating

A complete backend development laboratory experiment demonstrating server-side JavaScript with Node.js, web application development with Express.js, request and response handling, route and query parameters, POST requests, dynamic pages with EJS, and automatic server restart using Nodemon.

## Objective

To understand and implement server-side JavaScript using Node.js; build routes and REST-style endpoints using Express.js; work with HTTP responses, URL parameters, query strings, and POST data; generate dynamic HTML using EJS templates; and improve the development workflow using Nodemon.

## Learning Outcomes

After completing this experiment, you should be able to:

- Create and execute Node.js programs.
- Initialize and manage a Node.js project with NPM.
- Build an Express.js web server.
- Send text, HTML, JSON, and custom-status responses.
- Read route parameters and query parameters.
- Process POST request data.
- Render dynamic HTML using EJS templates.
- Use Nodemon to restart the server automatically on file changes.

## Technology Stack

| Tool | Purpose |
|---|---|
| Node.js | JavaScript runtime for server-side code |
| Express.js | Web framework for routing and middleware |
| EJS | Embedded JavaScript templating engine |
| Nodemon | Development tool for automatic restarts |

## Project Structure

```text
Lab Test-3 Experiment/
├── app.js
├── package.json
├── .gitignore
└── views/
    ├── index.ejs
    ├── greet.ejs
    └── form.ejs
```

## Setup and Run

### Step 1: Install Node.js

Confirm Node.js is installed:

```bash
node --version
npm --version
```

### Step 2: Install dependencies

```bash
cd "Lab Test-3 Experiment"
npm install
```

### Step 3: Start the development server

```bash
npm run dev
```

The server starts on `http://localhost:3000`. Nodemon watches for file changes and restarts automatically.

## Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Home page (EJS template) |
| GET | `/hello` | Plain text response |
| GET | `/html` | HTML response |
| GET | `/json` | JSON response |
| GET | `/error` | 500 error response |
| GET | `/greet/:name` | Route parameter greeting |
| GET | `/search?q=...` | Query parameter search |
| GET | `/form` | Display POST form |
| POST | `/form` | Process form submission |

## Key Concepts

### Express Setup

```js
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
```

### Route Parameters

```js
app.get('/greet/:name', (req, res) => {
  res.render('greet', { name: req.params.name });
});
```

### Query Parameters

```js
app.get('/search', (req, res) => {
  const query = req.query.q || '';
  res.json({ query, results: [] });
});
```

### EJS Template

```ejs
<h1>Hello, <%= name %>!</h1>
```

### POST Route

```js
app.post('/form', (req, res) => {
  const { username } = req.body;
  res.render('index', { message: `Welcome, ${username}` });
});
```

## NPM Scripts

```json
{
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

## Learning Summary

This experiment demonstrates the fundamental building blocks of a Node.js web application: initializing a project with NPM, creating an Express server, defining routes for different HTTP methods, reading parameters from URLs and request bodies, rendering HTML dynamically with EJS, and using Nodemon to streamline development.

## Author

**Arnav Daftuar**  
Backend Development — Lab Test-3

---

## Connected Navigation

- [Back to Main Repository README](../../README.md)
- [Back to LABS README](../README.md)
- [Open Website Portal](../../index.html)
