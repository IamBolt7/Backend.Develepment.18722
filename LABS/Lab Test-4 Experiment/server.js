const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/userdb';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const page = (title, content) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | User Management System</title>
<style>
*{box-sizing:border-box} body{margin:0;font-family:Arial,sans-serif;background:#f4f7fb;color:#1f2937}
main{width:min(1000px,92%);margin:42px auto}.hero{background:#111827;color:white;padding:32px;border-radius:18px;margin-bottom:22px}.hero h1{margin:0 0 8px}.hero p{margin:0;color:#cbd5e1}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:18px}.card{background:white;padding:22px;border-radius:14px;box-shadow:0 8px 28px #0f172a12;border:1px solid #e5e7eb}.card h2{margin-top:0}
label{font-size:14px;font-weight:700}input{width:100%;padding:11px 12px;margin:6px 0 14px;border:1px solid #cbd5e1;border-radius:8px}button,.button{display:inline-block;background:#2563eb;color:white;border:0;padding:11px 16px;border-radius:8px;text-decoration:none;cursor:pointer;font-weight:700}button:hover,.button:hover{background:#1d4ed8}.secondary{background:#475569}.success{color:#15803d}.error{color:#b91c1c}.user{padding:14px 0;border-bottom:1px solid #e5e7eb}.muted{color:#64748b;font-size:14px}nav{margin-top:20px}
</style>
</head><body><main>${content}</main></body></html>`;

// 1. Connect to MongoDB
mongoose.connect(DB_URL)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((error) => console.error('MongoDB connection error:', error.message));

// 2. Define a schema (the structure of each user document)
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true, minlength: 4 },
  createdAt: { type: Date, default: Date.now }
});

// 3. Create a model (interface used to work with the users collection)
const User = mongoose.model('User', userSchema);

// 4. Routes
app.get('/', (req, res) => {
  res.send(page('Home', `
    <section class="hero"><h1>Express + Mongoose User Management</h1><p>Lab Test-4 • Experiment 13A • MongoDB, Mongoose and Express basics</p></section>
    <div class="grid">
      <section class="card"><h2>Register User</h2><form action="/signup" method="POST">
        <label>Username</label><input name="username" minlength="3" required placeholder="e.g. arnav">
        <label>Email</label><input type="email" name="email" required placeholder="name@example.com">
        <label>Password</label><input type="password" name="password" minlength="4" required placeholder="Minimum 4 characters">
        <button type="submit">Create Account</button></form></section>
      <section class="card"><h2>Login</h2><form action="/login" method="POST">
        <label>Username</label><input name="username" required placeholder="Your username">
        <label>Password</label><input type="password" name="password" required placeholder="Your password">
        <button type="submit">Login</button></form></section>
      <section class="card"><h2>Registered Users</h2><p>Retrieve documents from MongoDB using <code>User.find()</code>.</p><a class="button secondary" href="/users">View All Users</a></section>
    </div>`));
});

app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await User.create({ username, email, password });
    res.status(201).send(page('Registration Successful', `<section class="card"><h1 class="success">User registered successfully</h1><p><b>Username:</b> ${escapeHtml(username)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><nav><a class="button" href="/">Back to Home</a></nav></section>`));
  } catch (error) {
    const message = error.code === 11000 ? 'That username or email is already registered.' : error.message;
    res.status(400).send(page('Registration Error', `<section class="card"><h1 class="error">Registration failed</h1><p>${escapeHtml(message)}</p><a class="button" href="/">Try Again</a></section>`));
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username.trim() });
    if (!user || user.password !== password) {
      return res.status(401).send(page('Login Failed', `<section class="card"><h1 class="error">Login failed</h1><p>Invalid username or password.</p><a class="button" href="/">Try Again</a></section>`));
    }
    res.send(page('Login Successful', `<section class="card"><h1 class="success">Login successful</h1><p>Welcome back, <b>${escapeHtml(user.username)}</b>.</p><p>Email: ${escapeHtml(user.email)}</p><p class="muted">Account created: ${user.createdAt.toDateString()}</p><a class="button" href="/">Back to Home</a></section>`));
  } catch (error) {
    res.status(500).send(page('Server Error', `<section class="card"><h1 class="error">Something went wrong</h1><p>${escapeHtml(error.message)}</p><a class="button" href="/">Back to Home</a></section>`));
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    const list = users.length ? users.map((user, i) => `<div class="user"><b>${i + 1}. ${escapeHtml(user.username)}</b><br>${escapeHtml(user.email)}<br><span class="muted">Joined ${user.createdAt.toDateString()}</span></div>`).join('') : '<p>No users registered yet.</p>';
    res.send(page('Registered Users', `<section class="card"><h1>Registered Users</h1><p class="muted">${users.length} user(s) found in MongoDB.</p>${list}<nav><a class="button" href="/">Back to Home</a></nav></section>`));
  } catch (error) {
    res.status(500).send(page('Server Error', `<section class="card"><h1 class="error">Could not load users</h1><p>${escapeHtml(error.message)}</p><a class="button" href="/">Back to Home</a></section>`));
  }
});

app.use((req, res) => res.status(404).send(page('Not Found', '<section class="card"><h1>404 - Page Not Found</h1><a class="button" href="/">Back to Home</a></section>')));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
