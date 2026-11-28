const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(__dirname, 'docker-data'));
const DATA_FILE = path.join(DATA_DIR, 'tasks.json');

const SEED_TASKS = [
  {
    id: 'task-1',
    title: 'Build Docker image with Dockerfile',
    category: 'Docker',
    notes: 'Package Express server and dependencies using node:20-alpine.',
    completed: true,
    createdAt: '2026-11-28T07:00:00.000Z',
    updatedAt: '2026-11-28T07:00:00.000Z'
  },
  {
    id: 'task-2',
    title: 'Verify host volume persistence in docker-data',
    category: 'Storage',
    notes: 'Stop, remove, and recreate container with -v "$(pwd)/docker-data:/app/data".',
    completed: false,
    createdAt: '2026-11-28T07:05:00.000Z',
    updatedAt: '2026-11-28T07:05:00.000Z'
  }
];

function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(SEED_TASKS, null, 2), 'utf8');
  }
}

function readTasks() {
  ensureStorage();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeTasks(tasks) {
  ensureStorage();
  const tempFile = `${DATA_FILE}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify(tasks, null, 2), 'utf8');
  fs.renameSync(tempFile, DATA_FILE);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
  const tasks = readTasks();
  res.json({
    status: 'OK',
    host: HOST,
    port: PORT,
    dataDir: DATA_DIR,
    dataFile: DATA_FILE,
    taskCount: tasks.length,
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/tasks', (req, res) => {
  const { status = 'all', q = '' } = req.query;
  const search = String(q).trim().toLowerCase();
  let tasks = readTasks();

  if (status === 'pending') {
    tasks = tasks.filter((t) => !t.completed);
  } else if (status === 'completed') {
    tasks = tasks.filter((t) => t.completed);
  }

  if (search) {
    tasks = tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(search) ||
        (t.category || '').toLowerCase().includes(search) ||
        (t.notes || '').toLowerCase().includes(search)
    );
  }

  res.json({ count: tasks.length, dataDir: DATA_DIR, tasks });
});

app.post('/api/tasks', (req, res) => {
  const title = String(req.body.title || '').trim();
  const category = String(req.body.category || 'General').trim() || 'General';
  const notes = String(req.body.notes || '').trim();

  if (!title) {
    return res.status(400).json({ error: 'Task title is required.' });
  }

  const tasks = readTasks();
  const now = new Date().toISOString();
  const task = {
    id: `task-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    title: title.slice(0, 140),
    category: category.slice(0, 40),
    notes: notes.slice(0, 400),
    completed: false,
    createdAt: now,
    updatedAt: now
  };

  tasks.unshift(task);
  writeTasks(tasks);
  res.status(201).json({ message: 'Task created.', task });
});

app.put('/api/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const idx = tasks.findIndex((t) => t.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  const current = tasks[idx];
  const nextTitle = req.body.title !== undefined ? String(req.body.title).trim() : current.title;
  if (!nextTitle) {
    return res.status(400).json({ error: 'Task title cannot be empty.' });
  }

  const updated = {
    ...current,
    title: nextTitle.slice(0, 140),
    category:
      req.body.category !== undefined
        ? (String(req.body.category).trim() || 'General').slice(0, 40)
        : current.category,
    notes:
      req.body.notes !== undefined
        ? String(req.body.notes).trim().slice(0, 400)
        : current.notes,
    completed:
      req.body.completed !== undefined ? Boolean(req.body.completed) : current.completed,
    updatedAt: new Date().toISOString()
  };

  tasks[idx] = updated;
  writeTasks(tasks);
  res.json({ message: 'Task updated.', task: updated });
});

app.patch('/api/tasks/:id/toggle', (req, res) => {
  const tasks = readTasks();
  const idx = tasks.findIndex((t) => t.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  tasks[idx] = {
    ...tasks[idx],
    completed: !tasks[idx].completed,
    updatedAt: new Date().toISOString()
  };
  writeTasks(tasks);
  res.json({ message: 'Task status toggled.', task: tasks[idx] });
});

app.delete('/api/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const remaining = tasks.filter((t) => t.id !== req.params.id);
  if (remaining.length === tasks.length) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  writeTasks(remaining);
  res.json({ message: 'Task deleted.' });
});

app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found.` });
});

ensureStorage();

if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
    console.log(`Persistent data directory: ${DATA_DIR}`);
  });
}

module.exports = { app, ensureStorage, readTasks, writeTasks, DATA_DIR, DATA_FILE };
