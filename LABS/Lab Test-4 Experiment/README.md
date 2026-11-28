# Lab Test-4 Experiment — Express + Mongoose User Management System

> **Navigation:** [Main README](../../README.md) · [LABS README](../README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=LABS/Lab%20Test-4%20Experiment/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

## Experiment 13A — Express + Mongoose User Management System

A beginner-friendly backend development experiment that demonstrates how Node.js, Express.js, MongoDB, and Mongoose work together. The project provides a small browser-based user management system where users can register, log in, and view records stored in MongoDB.

> **Academic note:** This project intentionally keeps authentication simple so the Mongoose workflow is easy to study. Passwords are stored as plain text for demonstration only and this approach must not be used in a production application.

## Aim

To create an Express application connected to MongoDB through Mongoose and understand schemas, models, document creation, database queries, validation, routing, and basic error handling.

## Learning Objectives

After completing this experiment, you should be able to:

- connect a Node.js application to MongoDB with Mongoose;
- define the structure of MongoDB documents using a Mongoose schema;
- create and use a Mongoose model;
- insert documents into MongoDB;
- retrieve one or multiple documents;
- use asynchronous database operations with `async`/`await`;
- handle duplicate keys and common application errors;
- connect HTML forms to Express routes.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Node.js | JavaScript runtime for the backend |
| Express.js | Web server and routing |
| MongoDB | NoSQL document database |
| Mongoose | ODM library between Node.js and MongoDB |
| HTML/CSS | Simple browser interface |

## Features

- User registration with username, email, and password
- Unique username and email fields
- Basic login verification
- View all registered users
- Automatic account creation date
- Mongoose validation
- Duplicate-key error handling
- Responsive browser interface
- Environment-variable support for `PORT` and `DB_URL`
- Friendly error and 404 pages

## Project Structure

```text
Lab Test-4 Experiment/
├── server.js       # Express server, schema, model, routes and UI
├── package.json    # Project information, scripts and dependencies
├── .gitignore      # Files that should not be committed to GitHub
└── README.md       # Experiment documentation
```

`node_modules/` and `package-lock.json` are generated after `npm install`. The dependency folder should not be committed to GitHub.

## Prerequisites

Install the following before running the experiment:

1. **Node.js** and npm
2. **MongoDB Community Edition** locally, or access to MongoDB Atlas
3. A browser such as Safari, Chrome, or Firefox
4. A code editor such as Visual Studio Code (recommended)

Check Node.js and npm:

```bash
node --version
npm --version
```

## Installation and Setup

### 1. Open the project directory

On macOS, open Terminal and move into the extracted folder:

```bash
cd "path/to/Lab Test-4 Experiment"
```

### 2. Install dependencies

```bash
npm install
```

This installs Express and Mongoose from `package.json`.

### 3. Start MongoDB

The default database URL used by the project is:

```text
mongodb://127.0.0.1:27017/userdb
```

If MongoDB was installed through Homebrew, a common command is:

```bash
brew services start mongodb-community
```

Alternatively, use the command appropriate for your MongoDB installation.

### 4. Start the application

```bash
npm start
```

You can also run:

```bash
node server.js
```

For Node.js versions that support watch mode, this project also includes:

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

A successful startup normally prints:

```text
Server running on http://localhost:3000
Connected to MongoDB successfully
```

## How the Application Works

### 1. MongoDB Connection

Mongoose establishes the database connection:

```js
mongoose.connect(DB_URL)
```

By default, the application uses the `userdb` database. You can provide another URL through the `DB_URL` environment variable without changing the source code.

### 2. Mongoose Schema

A schema describes the expected structure and validation rules for a document:

```js
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt:{ type: Date, default: Date.now }
});
```

### 3. Mongoose Model

The model turns the schema into a MongoDB collection:

```js
const User = mongoose.model('User', userSchema);
```

### 4. Register Route

The register route creates and saves a new user document:

```js
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.redirect('/users');
});
```

### 5. Login Route

The login route checks for a matching username and password:

```js
app.post('/login', async (req, res) => {
  const user = await User.findOne({ username, password });
  if (!user) return res.send('Invalid credentials');
  res.redirect('/users');
});
```

### 6. View All Users Route

```js
app.get('/users', async (req, res) => {
  const users = await User.find({}, '-password').sort({ createdAt: -1 });
  // render table
});
```

## Routes Summary

| Method | Route | Action |
|---|---|---|
| GET | `/` | Home page with register and login links |
| GET | `/register` | Registration form |
| POST | `/register` | Create a new user |
| GET | `/login` | Login form |
| POST | `/login` | Verify credentials |
| GET | `/users` | View all registered users |

## Error Handling

**Duplicate key errors** (error code 11000) are caught and a user-friendly message is returned instead of a stack trace:

```js
if (err.code === 11000) {
  return res.send('Username or email already exists.');
}
```

## Learning Summary

This experiment teaches how Mongoose models map to MongoDB collections, how schemas enforce data structure and validation, how `async`/`await` simplifies asynchronous database calls, and how duplicate-key errors can be handled gracefully in a web application.

## Author

**Arnav Daftuar**  
Backend Development — Lab Test-4

---

## Connected Navigation

- [Back to Main Repository README](../../README.md)
- [Back to LABS README](../README.md)
- [Open Website Portal](../../index.html)
