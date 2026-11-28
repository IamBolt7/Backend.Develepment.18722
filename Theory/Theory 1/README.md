# Theory 1 — Express/EJS and Flask Practice

Navigation: [Main README](../../README.md) · [Theory README](../README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/Theory%201/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

This folder holds two independent starter servers that demonstrate the same routing and response patterns across two different stacks:

1. **Node.js + Express + EJS** — a small student listing website and JSON endpoint.
2. **Python + Flask** — a minimal server returning JSON and HTML responses.

---

## Project Structure

```text
Theory 1/
├── flask server/
│   ├── main.py            # Flask server
│   ├── Pipfile
│   └── Pipfile.lock
├── public/
│   └── style.css          # Express/EJS stylesheet
├── views/
│   ├── home.ejs
│   └── students.ejs
├── package.json
├── requirements.txt
├── server.js              # Express server
└── README.md
```

---

## Express Application (Port 3000)

| Route | Purpose |
| --- | --- |
| `/` | Home page (`home.ejs`) |
| `/students` | Renders sample student list (`students.ejs`) |
| `/api/students` | Returns student list as JSON |

```bash
cd "Theory/Theory 1"
npm install
npm start       # or: npm run dev
```

Visit `http://localhost:3000`, `http://localhost:3000/students`, or `http://localhost:3000/api/students`.

---

## Flask Application (Port 5000)

| Route | Purpose |
| --- | --- |
| `/` | Basic Flask landing page |
| `/data` | Returns sample data as JSON |
| `/html` | Displays sample data as HTML |

```bash
cd "Theory/Theory 1"
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 "flask server/main.py"
```

Visit `http://127.0.0.1:5000`, `http://127.0.0.1:5000/data`, or `http://127.0.0.1:5000/html`.

The two servers are independent — run whichever stack you are studying.

---

## Navigation

- [Back to Main README](../../README.md)
- [Theory README](../README.md)
- [Open Website Portal](../../index.html)

Made by **Arnav Daftuar**
