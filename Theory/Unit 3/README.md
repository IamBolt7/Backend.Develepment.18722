# Unit 3 — Django Student System

Navigation: [Main README](../../README.md) · [Theory README](../README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/Unit%203/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

Theory Unit 3 introduces Django's project and app layout using a small `student_system` web service.

---

## Structure

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

## Endpoints

| Method | Route | View | Response |
| --- | --- | --- | --- |
| `GET` | `/` | `students.views.index` | Plain text welcome response |
| `GET` | `/json/` | `students.views.json_response` | JSON payload (`message`, `version`, `status`) |
| `GET` | `/admin/` | Django Admin | Built-in admin interface |

---

## How to Run

```bash
cd "Theory/Unit 3/Django/student_system"
python3 -m venv .venv
source .venv/bin/activate
pip install django
python manage.py migrate
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` or `http://127.0.0.1:8000/json/`.

---

## Navigation

- [Back to Main README](../../README.md)
- [Theory README](../README.md)
- [Related: Django To-Do App](../../LABS/django_todo_app/README.md)

Made by **Arnav Daftuar**
