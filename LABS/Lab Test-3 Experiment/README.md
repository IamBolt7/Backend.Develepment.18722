# Lab Test-3 Experiment

## Experiment 12: Node.js, Express.js, and EJS Templating

A complete Backend Development laboratory experiment demonstrating server-side JavaScript with **Node.js**, web application development with **Express.js**, request/response handling, route and query parameters, POST requests, dynamic pages with **EJS**, and automatic server restart using **Nodemon**.

## Objective

To understand and implement server-side JavaScript using Node.js; build routes and REST-style endpoints using Express.js; work with HTTP responses, URL parameters, query strings and POST data; generate dynamic HTML using EJS templates; and improve the development workflow using Nodemon.

## Learning Outcomes

After completing this experiment, you should be able to:

- Create and execute Node.js programs.
- Initialize and manage a Node.js project with NPM.
- Build an Express.js web server.
- Send text, HTML, JSON and custom-status responses.
- Read route parameters and query parameters.
- Process JSON and URL-encoded POST requests.
- Configure EJS as an Express view engine.
- Pass server-side data to EJS templates.
- Render lists and user profiles dynamically.
- Use Nodemon to restart the development server automatically.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| Node.js | JavaScript runtime for the server |
| NPM | Dependency and script management |
| Express.js | Routing, middleware and HTTP handling |
| EJS | Server-side HTML templating |
| Nodemon | Automatic server restart during development |
| HTML/CSS | User interface and responsive styling |

## Project Structure

```text
Lab Test-3 Experiment/
├── app.js                 # Main Express application
├── script.js              # Basic Node.js example
├── package.json           # Dependencies and npm scripts
├── nodemon.json           # Nodemon configuration
├── public/
│   └── style.css           # Shared responsive styling
├── views/
│   ├── index.ejs           # Experiment dashboard
│   ├── home.ejs            # Basic EJS example
│   ├── users.ejs           # Dynamic user list
│   ├── profile.ejs         # Dynamic profile page
│   └── result.ejs          # Feedback result page
└── README.md
```

## Part A — Node.js and Express Basics

`script.js` demonstrates basic Node.js execution, variables, template literals, arrays and `reduce()`. The Express application then demonstrates multiple response types.

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/` | Main experiment dashboard |
| GET | `/text` | Plain-text response |
| GET | `/html` | HTML response |
| GET | `/json` | JSON response |
| GET | `/status` | Response with HTTP status 201 |

## Part B — URL Parameters, Query Parameters and POST Data

### Route parameters

- `/user/123` reads `123` from `req.params.id`.
- `/product/electronics/456` reads both category and product ID.

### Query parameters

- `/search?q=nodejs&page=2&limit=20`
- `/calculate?num1=10&num2=5&operation=add`

The calculator supports `add`, `subtract`, `multiply`, and `divide`, including division-by-zero handling and input validation.

### POST requests

`POST /register` accepts a JSON body containing `username`, `email`, and `password`. `POST /login` demonstrates simple credential checking for learning purposes.

Example register request:

```bash
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"pass123"}'
```

Example login request:

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

> The login credentials and token in this experiment are intentionally hard-coded demonstrations. They are not a production authentication system.

## Part C — EJS Templating

EJS is configured as the Express view engine. The experiment demonstrates interpolation, passing objects and arrays to templates, loops, and dynamic page rendering.

| Route | Template | Demonstrates |
| --- | --- | --- |
| `/home` | `home.ejs` | Dynamic heading, message and server time |
| `/users` | `users.ejs` | Looping through an array of users |
| `/profile/1` | `profile.ejs` | Rendering a dynamic user object |
| `/` | `index.ejs` | Complete interactive experiment dashboard |

## Part D — Nodemon Auto-Restart

Nodemon is installed as a development dependency and configured through `nodemon.json`. It watches JavaScript, JSON and EJS files and automatically restarts the server when relevant files change.

```bash
npm run dev
```

## Installation and Execution

### 1. Check Node.js and NPM

```bash
node --version
npm --version
```

### 2. Install dependencies

Open Terminal inside the project directory and run:

```bash
npm install
```

### 3. Run normally

```bash
npm start
```

### 4. Run in development mode

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

The home dashboard contains direct links to the GET and EJS demonstrations.

## Testing Checklist

1. Open `/text`, `/html`, `/json`, and `/status` to test response methods.
2. Open `/user/123` and `/product/electronics/456` to test route parameters.
3. Open `/search?q=nodejs&page=2&limit=20` to test query parameters.
4. Open `/calculate?num1=10&num2=5&operation=add` to test the calculator.
5. Test `/register` and `/login` using curl or Postman.
6. Open `/home`, `/users`, and `/profile/1` to test EJS rendering.
7. Submit the feedback form on `/` to test form POST data and server-side rendering.
8. Run `npm run dev`, edit an EJS or JavaScript file, and observe Nodemon restart the server.

## Important Concepts

### Node.js

Node.js is a JavaScript runtime built on the V8 engine. Its event-driven, non-blocking I/O model makes it useful for network applications and backend services.

### NPM

NPM manages project dependencies and scripts. This project uses it to install Express, EJS and Nodemon and to provide the `start` and `dev` commands.

### Express.js

Express provides routing and middleware abstractions for Node.js web applications. This experiment uses `app.get()`, `app.post()`, `res.send()`, `res.json()`, `res.status()` and `res.render()`.

### EJS

EJS (Embedded JavaScript) generates HTML on the server using JavaScript values. `<%= value %>` outputs escaped values, while `<% ... %>` executes control-flow code such as loops and conditions.

### Nodemon

Nodemon monitors project files during development and restarts the Node.js process after changes, reducing the need for manual restarts.

## Expected Result

The Express server should start successfully on port `3000`. Each GET endpoint should return the expected response, POST endpoints should process request bodies, and EJS pages should render dynamic data correctly. The interface is responsive for desktop and smaller screens.

## Conclusion

This experiment demonstrates the core workflow of a Node.js backend application: creating a project with NPM, building routes with Express, processing different forms of request data, returning multiple response types, rendering dynamic pages with EJS, and using Nodemon during development. These concepts provide a foundation for larger REST APIs and server-rendered web applications.
