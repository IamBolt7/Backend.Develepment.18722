# 🎨 Lab Test-7 Experiment — EJS Templating Engine

> A server-side rendering project using **Express.js + EJS** to build dynamic student pages, reusable templates, forms, and route-driven views.

## 📌 Overview
This experiment demonstrates EJS output tags, JavaScript logic inside templates, dynamic routing, form submission, static CSS, and custom 404 rendering.

## ✨ Features
| Feature | Implementation |
|---|---|
| Dynamic output | `<%= %>` |
| Loops / conditions | `<% %>` |
| Server-side rendering | `res.render()` |
| Student list | `/students` |
| Student details | `/student/:id` |
| Add-student form | `GET/POST /form` |
| Validation | Marks must be 0–100; name/branch required |
| 404 page | Custom `404.ejs` |

## 📂 Structure
```text
Lab Test-7 Experiment/
├── app.js
├── package.json
├── .gitignore
├── public/
│   └── style.css
└── views/
    ├── index.ejs
    ├── students.ejs
    ├── student-detail.ejs
    ├── form.ejs
    └── 404.ejs
```

## ▶️ Run
```bash
cd "Lab Test-7 Experiment"
npm install
npm run dev
```
Open **http://localhost:3005**.

## 🧭 Routes
| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Home page |
| GET | `/students` | List all students |
| GET | `/student/:id` | Student details |
| GET | `/form` | Add-student form |
| POST | `/form` | Validate and add a student |

## 🎯 Learning Outcomes
- Configure EJS as an Express view engine
- Pass server data into templates
- Use loops and conditions in EJS
- Process HTML forms on the server
- Build dynamic parameterized routes
- Serve static CSS
- Validate user input and render errors

## 👨‍💻 Author
**Arnav Daftuar**  
Backend Development — Lab Test-7
