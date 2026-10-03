# Theory - Backend Development Practice Project

A small learning project containing **two independent backend examples**:

1. **Node.js + Express + EJS** - a simple Student Management website and JSON API.
2. **Python + Flask** - a minimal server demonstrating HTML and JSON responses.

The project is useful for understanding backend fundamentals such as routing, server-side rendering, static files, JSON APIs, and running development servers.

## Project Structure

```text
Theory/
├── flask server/
│   ├── main.py            # Flask application
│   ├── Pipfile            # Optional Pipenv configuration
│   └── Pipfile.lock
├── public/
│   └── style.css          # Express/EJS website styling
├── views/
│   ├── home.ejs           # Express home page
│   └── students.ejs       # Student listing page
├── .gitignore
├── package.json           # Node dependencies and scripts
├── package-lock.json
├── requirements.txt       # Python dependency list
├── server.js              # Express application
└── README.md
```

## What the Express Application Does

The Express application runs on port **3000** by default and contains these routes:

| Route | Purpose |
| --- | --- |
| `/` | Displays the project home page |
| `/students` | Renders the sample student list with EJS |
| `/api/students` | Returns the student list as JSON |

The sample data is currently stored in memory inside `server.js`. No database is required.

## What the Flask Application Does

The Flask example runs on port **5000** and demonstrates simple backend responses:

| Route | Purpose |
| --- | --- |
| `/` | Shows a basic Flask landing page |
| `/data` | Returns sample data as JSON |
| `/html` | Displays the same data as server-generated HTML |

## Requirements

For the Express example:

- Node.js
- npm

For the Flask example:

- Python 3
- pip

## Run the Express + EJS Application

From the `Theory` directory, install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

For automatic restart during development:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

Useful URLs:

```text
http://localhost:3000/students
http://localhost:3000/api/students
```

## Run the Flask Application

From the `Theory` directory, create a virtual environment if desired:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install Flask:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python3 "flask server/main.py"
```

Then open:

```text
http://127.0.0.1:5000
```

Useful URLs:

```text
http://127.0.0.1:5000/data
http://127.0.0.1:5000/html
```

## Concepts Demonstrated

- Creating backend servers
- HTTP routing
- Express middleware
- EJS server-side templates
- Serving static CSS files
- Returning JSON from an API endpoint
- Flask routes
- Flask `jsonify`
- Basic separation of views and backend logic
- Environment-based server ports in Node.js
- Basic 404 handling

## Improvements Made

The original project was functional as a basic Express demonstration, but it also contained duplicated files and an incomplete Flask example. The updated version includes:

- A cleaner project structure
- Duplicate Flask files removed
- macOS metadata removed
- Fixed Flask code that previously referenced an undefined `data` variable
- Proper JSON output from Flask
- A new Express JSON API endpoint
- Responsive EJS pages with shared CSS styling
- Improved page metadata and mobile support
- Configurable Express port through the `PORT` environment variable
- Basic Express 404 handling
- A repository-wide `.gitignore`
- Simplified Python requirements
- This complete README

## Possible Next Steps

This is intentionally still a beginner-friendly project. It can later be extended with:

- MongoDB or another database
- Add/Edit/Delete student operations
- HTML forms and validation
- REST API `POST`, `PUT`, and `DELETE` routes
- Authentication
- Error-handling middleware
- Automated tests
- Environment variables with `.env`

## Notes

The Express and Flask examples are **separate servers**. You do not need to run both at the same time. Use whichever example you are studying.
