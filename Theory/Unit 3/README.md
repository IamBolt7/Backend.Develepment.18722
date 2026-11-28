# Unit 3 — Django Student System

> **Navigation:** [🏠 Main README](../../README.md) · [📚 Theory README](../README.md) · [🌐 Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/Unit%203/README.md) · [💻 GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

Theory Unit 3 introduces **Django** project and application architecture through a minimal `student_system` web service.

---

## 📂 Structure

```text
Unit 3/
├── Django/
│   └── student_system/
│       ├── manage.py
│       ├── student_system/
│       │   ├── settings.py
│       │   ├── urls.py
│       │   ├── asgi.py
│       │   └── wsgi.py
│       └── students/
│           ├── views.py
│           ├── models.py
│           ├── admin.py
│           └── tests.py
└── README.md
```

---

## 🧭 Implemented Endpoints

| Method | Route | View Function | Response |
| --- | --- | --- | --- |
| `GET` | `/` | `students.views.index` | Plain HTTP welcome response |
| `GET` | `/json/` | `students.views.json_response` | JSON API status payload (`message`, `version`, `status`) |
| `GET` | `/admin/` | Django Admin | Built-in Django administrative portal |

---

## ⚙️ How to Run

```bash
cd "Theory/Unit 3/Django/student_system"
python3 -m venv .venv
source .venv/bin/activate
pip install django
python manage.py migrate
python manage.py runserver
```

Then visit:
- `http://127.0.0.1:8000/`
- `http://127.0.0.1:8000/json/`

---

## 🔗 Connected Navigation

- [🏠 Back to Main Repository README](../../README.md)
- [📚 Back to Theory README](../README.md)
- [✅ Related: Django To-Do App Lab](../../LABS/django_todo_app/README.md)

**Made by Arnav Daftuar** · Backend Development (18722)
