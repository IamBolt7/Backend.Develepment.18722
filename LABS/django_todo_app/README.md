# ✅ Django To-Do App

A clean, database-backed **To-Do List application built with Django** for Backend Development practice. The project demonstrates Django models, forms, views, URL routing, templates, static files, CSRF protection, messages, SQLite persistence, and basic automated testing.

## ✨ Features

- Add new tasks with validation
- View tasks newest-first
- Mark tasks complete or pending
- Delete tasks with confirmation
- Dashboard counters for total, pending, and completed tasks
- Responsive interface using Django static files
- CSRF-protected POST actions
- Friendly 404 behavior for missing task IDs
- Django Admin integration
- Automated view tests

## 🧰 Tech Stack

`Python` · `Django` · `SQLite` · `HTML5` · `CSS3`

## 📁 Project Structure

```text
django_todo_app/
├── todo/
│   ├── migrations/
│   ├── static/todo/
│   │   └── style.css
│   ├── templates/todo/
│   │   ├── base.html
│   │   ├── add_task.html
│   │   └── task_list.html
│   ├── admin.py
│   ├── forms.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── todo_project/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
├── .gitignore
├── manage.py
├── requirements.txt
└── README.md
```

## 🧠 Django Concepts Demonstrated

| Concept | Implementation |
| --- | --- |
| Model | `Task` stores title, completion state, and creation time |
| ModelForm | `TaskForm` validates and cleans task input |
| Views | List, add, toggle, and delete task workflows |
| URL Routing | App URLs map requests to view functions |
| Templates | Reusable base template and task pages |
| Static Files | Responsive CSS in `todo/static/todo/` |
| CSRF | All state-changing forms include CSRF tokens |
| HTTP Methods | Toggle and delete operations require `POST` |
| Messages | Success feedback after task actions |
| Admin | Tasks can be searched and filtered in Django Admin |
| Tests | Core list/add/toggle/delete behavior is tested |

## 🔄 Application Flow

```text
Browser
   │
   │ HTTP Request
   ▼
Django URL Router
   │
   ▼
View Function
   │
   ├── TaskForm validation
   │
   ├── Task model
   │      │
   │      ▼
   │   SQLite DB
   │
   ▼
Django Template
   │
   ▼
HTML Response
```

## 🚀 Setup and Run

### 1. Enter the project

```bash
cd django_todo_app
```

### 2. Create a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

On Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Apply database migrations

```bash
python manage.py migrate
```

### 5. Start Django

```bash
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/
```

## 🧪 Run Tests

```bash
python manage.py test
```

The tests cover loading the task list, adding a task, rejecting blank input, requiring POST for task toggling, toggling status, and deleting tasks.

## 🛡️ Improvements Over the Basic Version

The original classroom version was intentionally minimal. This version keeps the same core task manager while improving its implementation:

- Uses `ModelForm` instead of manually reading raw form input
- Strips and validates task titles
- Uses `get_object_or_404()` for safe object retrieval
- Uses POST instead of GET for toggle/delete actions
- Adds CSRF protection to state-changing actions
- Uses `update_fields` for the small toggle update
- Moves default ordering into the model
- Adds reusable templates and static CSS
- Adds user feedback through Django messages
- Adds automated tests and Django Admin configuration
- Excludes local virtual environments, caches, SQLite databases, and editor files from Git

## 🗃️ Data Model

```text
Task
├── id          Auto-generated primary key
├── title       CharField(max_length=200)
├── completed   BooleanField(default=False)
└── created_at  DateTimeField(auto_now_add=True)
```

## 🔗 Main Routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/` | Display all tasks |
| `GET`, `POST` | `/add/` | Show form / create a task |
| `POST` | `/toggle/<id>/` | Toggle completion state |
| `POST` | `/delete/<id>/` | Delete a task |
| `GET` | `/admin/` | Django Admin |

## 🎯 Learning Outcomes

This project provides practice with Django's MVT architecture, ORM, models, forms, templates, routing, static assets, database migrations, CSRF protection, HTTP method handling, testing, and project organization.

## 👨‍💻 Author

**Arnav Daftuar**  
Backend Development — Django To-Do Application
