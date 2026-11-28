# NoteSpace — Web Storage Notes App

Navigation: [Main README](../../README.md) · [Theory README](../README.md) · [Open Live App](./index.html) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/Assignment-1-Notes-App/README.md)

NoteSpace is a browser-based notes app built with plain HTML, CSS, and JavaScript for **Theory Assignment 1**. Saved notes persist in `localStorage`, unfinished drafts are kept in `sessionStorage`, and objects are serialized with JSON — no backend server or package manager needed.

---

## What It Does

- Create, edit, pin, search, filter, and delete notes right in the browser
- Persist notes under `notes-app-notes` in `localStorage`
- Auto-save the active editor draft under `notes-app-draft` in `sessionStorage`
- Persist light/dark theme under `notes-app-theme`
- Export all notes as a `.json` file and re-import validated JSON backups
- Includes an interactive playground for testing `localStorage`, `sessionStorage`, `JSON.stringify()`, and `JSON.parse()`

---

## Project Structure

```text
Assignment-1-Notes-App/
├── index.html      # App markup and playground UI
├── style.css       # Responsive layout and light/dark themes
├── script.js       # Storage logic, CRUD, and JSON helpers
└── README.md
```

---

## How to Run

Open [`index.html`](./index.html) directly in a browser, or run a local static server:

```bash
cd Theory/Assignment-1-Notes-App
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Create a note, refresh the page, and confirm it persists.

---

## Storage Model

Notes are stored as a JSON-serialized array of objects:

```javascript
{
  id: "...",
  title: "Web Storage revision",
  category: "Study",
  content: "Revise JSON.stringify and JSON.parse",
  pinned: false,
  createdAt: "...",
  updatedAt: "..."
}
```

```javascript
localStorage.setItem("notes-app-notes", JSON.stringify(notes));
const notes = JSON.parse(localStorage.getItem("notes-app-notes"));
```

| Feature | `localStorage` | `sessionStorage` |
| --- | --- | --- |
| Survives page refresh | Yes | Yes |
| Survives closing tab/browser | Yes | No |
| Stored value type | String | String |
| Used here for | Saved notes and theme | In-progress editor draft |

---

## Navigation

- [Back to Main README](../../README.md)
- [Theory README](../README.md)
- [Open NoteSpace Live App](./index.html)

Made by **Arnav Daftuar**
