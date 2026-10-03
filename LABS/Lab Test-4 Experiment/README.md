# Lab Test-4 Experiment

## Experiment 13A — Express + Mongoose User Management System

A beginner-friendly backend development experiment that demonstrates how **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** work together. The project provides a small browser-based user management system where users can register, log in, and view records stored in MongoDB.

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

On macOS, open Terminal and move into the extracted folder. For example:

```bash
cd "/path/to/Lab Test-4 Experiment"
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
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
```

### 3. Mongoose Model

```js
const User = mongoose.model('User', userSchema);
```

The `User` model is the interface used to create and query user documents. Mongoose normally maps this model to a MongoDB collection named `users`.

### 4. Express Routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/` | Display registration, login, and user-list controls |
| `POST` | `/signup` | Validate and save a new user |
| `POST` | `/login` | Find a user and check the supplied credentials |
| `GET` | `/users` | Retrieve and display all users |

## Mongoose Methods Covered

| Method | Purpose | Example |
| --- | --- | --- |
| `.save()` | Save a document instance | `await user.save()` |
| `.create()` | Create and save a document | `await User.create(data)` |
| `.find()` | Retrieve multiple documents | `await User.find()` |
| `.findOne()` | Retrieve one matching document | `await User.findOne({ username })` |
| `.findById()` | Retrieve a document by its ID | `await User.findById(id)` |
| `.updateOne()` | Update one matching document | `await User.updateOne(filter, update)` |
| `.deleteOne()` | Delete one matching document | `await User.deleteOne(filter)` |

The application directly demonstrates `create()`, `findOne()`, and `find()`. The remaining methods are included because they are important CRUD operations covered by the Mongoose topic.

## Testing Procedure

### Test 1 — Register a User

1. Open `http://localhost:3000`.
2. Enter a username, email, and password.
3. Select **Create Account**.
4. A success page should appear.
5. MongoDB should now contain the new document.

### Test 2 — Duplicate User

Try registering the same username or email again. MongoDB's unique index should cause error code `11000`, and the application displays a readable duplicate-user message.

### Test 3 — Login

Enter the username and password of a registered account. Correct credentials display the user's details; incorrect credentials display a login error.

### Test 4 — View All Users

Select **View All Users**. The application uses `User.find()` and displays the users stored in the database without displaying passwords.

## Expected Database Document

A user document is conceptually similar to:

```json
{
  "_id": "MongoDB-generated ObjectId",
  "username": "student01",
  "email": "student01@example.com",
  "password": "demo-password",
  "createdAt": "automatically generated date"
}
```

MongoDB automatically creates `_id`. Mongoose supplies `createdAt` using the schema's default value.

## Common Mongoose Concepts

**Schema:** Defines fields, types, defaults, and validation rules for documents.

**Model:** A JavaScript interface created from a schema and used to interact with a MongoDB collection.

**Document:** One stored record in a MongoDB collection. Each registered user is a document.

**Collection:** A group of related MongoDB documents. This experiment uses the `users` collection.

**Query:** An operation used to find, insert, update, or delete data.

**Async/Await:** Database operations take time and are asynchronous. `await` allows the program to wait for the operation inside an `async` function without using deeply nested callbacks.

## Troubleshooting

### `MongoDB connection error` / `ECONNREFUSED`

MongoDB is probably not running, or the connection URL is incorrect. Start the MongoDB service and then restart the Node.js application.

### `npm: command not found`

Install Node.js, reopen Terminal, and verify with `node --version` and `npm --version`.

### `EADDRINUSE: address already in use :::3000`

Another application is already using port 3000. On macOS you can run the project on another port without editing the file:

```bash
PORT=3001 npm start
```

Then open `http://localhost:3001`.

### Duplicate key / error code `11000`

A username or email already exists. Both fields are marked `unique` in the schema, so MongoDB rejects duplicates.

### Application opens but database actions fail

Check the Terminal where `npm start` is running. Database and server errors are printed there and usually reveal whether MongoDB is disconnected or validation failed.

## MongoDB Atlas (Optional)

Instead of a local database, obtain a MongoDB Atlas connection string and provide it as `DB_URL`. For example on macOS/Linux:

```bash
DB_URL="your-mongodb-connection-string" npm start
```

Do **not** commit a real database username, password, or connection secret to GitHub.

## Security Note

This lab compares passwords directly because its purpose is to teach Express and Mongoose fundamentals. Real authentication systems should use password hashing (for example, bcrypt or Argon2), sessions or secure tokens, server-side validation, rate limiting, secure cookies, environment variables, and appropriate production security controls.

## Possible Extensions

After completing the basic experiment, you can extend it with update/delete routes, password hashing, sessions, stronger validation, separate models/controllers/routes, a frontend template engine, REST APIs, MongoDB Atlas, and automated tests.

## Result

The experiment successfully demonstrates how an Express application can connect to MongoDB through Mongoose, define a schema and model, save user documents, retrieve data with queries, process HTML forms, and handle common database errors.

## Conclusion

This project provides a foundation for MongoDB-backed Node.js applications. It connects the main concepts—**Express routes → Mongoose model → MongoDB documents**—in a small application that can be run and tested locally.
