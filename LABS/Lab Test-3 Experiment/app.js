const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 25, city: 'New York' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 23, city: 'London' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 27, city: 'Toronto' }
];

app.get('/', (req, res) => res.render('index', {
  title: 'Lab Test-3 Experiment',
  topics: ['Node.js', 'NPM', 'Express.js', 'HTTP Responses', 'Route Parameters', 'Query Parameters', 'POST Data', 'EJS', 'Nodemon']
}));

app.get('/text', (req, res) => res.send('This is a plain text response from Express.js.'));
app.get('/html', (req, res) => res.send('<h1>HTML Response</h1><p>This HTML was sent directly by an Express route.</p>'));
app.get('/json', (req, res) => res.json({ message: 'This is a JSON response', status: 'success', data: { name: 'Student', course: 'Backend Development' } }));
app.get('/status', (req, res) => res.status(201).json({ status: 201, message: 'Created successfully' }));

app.get('/user/:id', (req, res) => res.json({ message: 'User details', userId: req.params.id }));
app.get('/product/:category/:id', (req, res) => {
  const { category, id } = req.params;
  res.json({ category, productId: id });
});

app.get('/search', (req, res) => {
  const { q = '', page = '1', limit = '10' } = req.query;
  res.json({ searchQuery: q, page: Number(page), limit: Number(limit) });
});

app.get('/calculate', (req, res) => {
  const { num1, num2, operation } = req.query;
  const n1 = Number(num1);
  const n2 = Number(num2);
  if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
    return res.status(400).json({ error: 'num1 and num2 must be valid numbers' });
  }
  let result;
  switch (operation) {
    case 'add': result = n1 + n2; break;
    case 'subtract': result = n1 - n2; break;
    case 'multiply': result = n1 * n2; break;
    case 'divide':
      if (n2 === 0) return res.status(400).json({ error: 'Division by zero is not allowed' });
      result = n1 / n2;
      break;
    default: return res.status(400).json({ error: 'operation must be add, subtract, multiply, or divide' });
  }
  res.json({ num1: n1, num2: n2, operation, result });
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ success: false, message: 'username, email and password are required' });
  res.status(201).json({ success: true, message: 'Registration successful', user: { username, email } });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === 'password123') {
    return res.json({ success: true, message: 'Login successful', token: 'sample-jwt-token' });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.post('/feedback', (req, res) => {
  const name = String(req.body.name || '').trim();
  const message = String(req.body.message || '').trim();
  if (!name || !message) return res.status(400).send('Name and message are required.');
  res.render('result', { title: 'Feedback Received', name, message });
});

app.get('/home', (req, res) => res.render('home', {
  title: 'Home Page', heading: 'Welcome to EJS Templating', message: 'EJS makes it easy to generate dynamic HTML from server-side data.'
}));

app.get('/users', (req, res) => res.render('users', { users }));
app.get('/profile/:id', (req, res) => {
  const user = users.find(item => item.id === Number(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.render('profile', { user });
});

app.use((req, res) => res.status(404).json({ error: 'Route not found', path: req.originalUrl }));

app.listen(PORT, () => {
  console.log(`Lab Test-3 server running at http://localhost:${PORT}`);
  console.log('EJS demos: /home, /users, /profile/1');
});
