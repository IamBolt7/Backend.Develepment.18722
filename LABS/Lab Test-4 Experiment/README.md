# Lab Test-4 Experiment

## Experiment 13A: Express + Mongoose User Management Tutorial

A beginner-friendly Node.js experiment demonstrating MongoDB, Mongoose, and Express through a simple user registration and login system.

## Prerequisites

- Node.js installed
- MongoDB installed locally, or a MongoDB Atlas account
- Basic JavaScript knowledge

## Project Setup

```bash
mkdir mongoose-demo
cd mongoose-demo
npm init -y
npm install express mongoose
```

The main application code is in `server.js`.

## Project Structure

```text
Lab Test-4 Experiment/
|-- server.js
|-- package.json
|-- package-lock.json
`-- README.md
```

`node_modules/` is generated automatically after running `npm install`, so it is not included in the ZIP.

## What the Application Demonstrates

### Mongoose
Mongoose is used to work with MongoDB from Node.js. The experiment demonstrates schemas, models, validation, queries, and error handling.

### User Schema
The application stores:

- `username` - String, required and unique
- `email` - String, required and unique
- `password` - String, required
- `createdAt` - Date, automatically set when the user is created

### Model

```js
const User = mongoose.model('User', userSchema);
```

The model is used to create, save, and retrieve user documents. Mongoose uses the `users` collection for the `User` model.

## Features Included

1. Register a new user.
2. Login using username and password.
3. View all registered users.
4. Handle duplicate username/email errors.
5. Connect Express to a local MongoDB database using Mongoose.

## Common Mongoose Methods

| Method | Purpose | Example |
|---|---|---|
| `.save()` | Save a new document | `await user.save()` |
| `.find()` | Find all documents | `await User.find()` |
| `.findOne()` | Find one document | `await User.findOne({ username: 'john' })` |
| `.findById()` | Find a document by ID | `await User.findById(id)` |
| `.updateOne()` | Update one document | `await User.updateOne({ username: 'john' }, { email: 'new@email.com' })` |
| `.deleteOne()` | Delete one document | `await User.deleteOne({ username: 'john' })` |

The supplied application directly uses `.save()`, `.findOne()`, and `.find()`. The other methods are included as Mongoose reference examples from the experiment.

## Running the Experiment

### 1. Start MongoDB

For local MongoDB, make sure the MongoDB service is running. Depending on the installation, this may be done with:

```bash
mongod
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```

or:

```bash
node server.js
```

Expected terminal output:

```text
Server running on http://localhost:3000
Connected to MongoDB successfully
```

### 4. Open the Application

Open `http://localhost:3000` in a browser.

Test the following:

1. **Register a User** - enter a username, email, and password.
2. **Login** - use the credentials you registered.
3. **View All Users** - display the registered users stored in MongoDB.

## Important Notes

1. **No password encryption:** This is a learning example and stores passwords as plain text. A real application should hash passwords, for example with bcrypt.
2. **Error handling:** Basic error handling is included for learning purposes.
3. **Database name:** The local database is `userdb`.
4. **Collection name:** The `User` model normally maps to the `users` collection.
5. **Async/Await:** Database operations are asynchronous and are handled with `async`/`await`.

## Troubleshooting

### MongoDB Connection Error

- For local MongoDB, verify that MongoDB is running.
- For MongoDB Atlas, replace `DB_URL` in `server.js` with the correct Atlas connection string and verify the username/password and network access settings.

### Port Already in Use

Change this line in `server.js`:

```js
const PORT = 3001;
```

Then open the matching port in the browser.

### Duplicate Key Error

MongoDB error code `11000` occurs when a value for a unique field already exists. In this experiment, duplicate usernames and emails are handled by the signup route.

## Optional Next Steps

After understanding the basic experiment, possible extensions include password hashing, sessions, additional schema fields, update/delete routes, stronger input validation, environment variables for the database URL, separate route files, and a dedicated frontend.

## Summary

This experiment demonstrates connecting to MongoDB with Mongoose, defining a schema and model, saving data with `.save()`, retrieving data with `.findOne()` and `.find()`, basic error handling, and creating a simple Express web interface.
