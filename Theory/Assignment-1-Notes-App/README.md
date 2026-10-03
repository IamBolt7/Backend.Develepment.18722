# NoteSpace — Web Storage Notes App

> **Backend Development · Theory · Assignment 01**  
> Final Task: Build a Notes App using `localStorage`, `sessionStorage`, and JSON.

## Overview

**NoteSpace** is a responsive, browser-based notes application built with plain HTML, CSS, and JavaScript. The project turns the Web Storage API tutorial into a complete practical application: saved notes persist in `localStorage`, unfinished editor content is preserved in `sessionStorage`, and JavaScript objects are serialized with JSON before storage.

No framework, backend, database, package manager, or account is required.

## Assignment objectives

This project demonstrates how to:

- use `localStorage.setItem()`, `getItem()`, `removeItem()`, `key()`, and `length`;
- use `sessionStorage` for temporary, tab-scoped state;
- convert objects to strings with `JSON.stringify()`;
- restore strings with `JSON.parse()` and handle invalid JSON safely;
- implement CRUD operations using browser storage;
- build search, category filtering, pinning, import/export, and theme persistence;
- create a responsive interface using semantic HTML and modern CSS.

## Main features

### Notes workspace

- Create notes with a **title, category, and content**.
- Edit existing notes without creating duplicates.
- Delete notes with confirmation.
- Pin important notes to the top of the list.
- Search across note titles and content in real time.
- Filter notes by Study, Project, Idea, Personal, or Other.
- View saved-note, pinned-note, character, and draft statistics.

### Browser storage

- Notes are stored under `notes-app-notes` in **localStorage**.
- The current editor draft is stored under `notes-app-draft` in **sessionStorage**.
- The selected theme is stored under `notes-app-theme`.
- Notes are stored as an array of JavaScript objects converted with `JSON.stringify()`.
- Stored note data is restored with `JSON.parse()`.

### Learning playground

The application also includes interactive areas for experimenting with:

- `localStorage.setItem()` / `getItem()` / `removeItem()`;
- `sessionStorage` using the same API;
- viewing all keys and values;
- JSON formatting and parsing;
- saving a JSON object directly to localStorage.

### Data portability

Notes can be exported as a formatted `.json` file and imported later. Imported data is validated before it replaces the current note collection.

## Project structure

```text
Assignment-1-Notes-App/
├── index.html      # Page structure and application UI
├── style.css       # Responsive design, light/dark themes
├── script.js       # Notes logic, storage, JSON and interactions
└── README.md       # Project documentation
```

## How to run

1. Download or clone the repository.
2. Open the `Assignment-1-Notes-App` folder.
3. Open `index.html` in a modern browser.
4. Create a note and refresh the page — the saved note remains available.

For a more development-friendly setup, open the folder in VS Code and use a local static server such as Live Server. The project does **not** require `npm install` or a database.

## How the storage flow works

When a note is saved, the application first creates a normal JavaScript object:

```js
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

The notes array is converted to a string and saved:

```js
localStorage.setItem("notes-app-notes", JSON.stringify(notes));
```

When the page loads, the stored string is converted back to an array:

```js
const notes = JSON.parse(localStorage.getItem("notes-app-notes"));
```

The editor draft follows the same JSON process but uses `sessionStorage`, making it suitable for temporary state.

## localStorage vs sessionStorage

| Feature | localStorage | sessionStorage |
|---|---|---|
| Persists after refresh | Yes | Yes |
| Persists after browser/tab session ends | Yes, until deleted | No |
| API | `setItem`, `getItem`, `removeItem`, `clear` | Same |
| Stored value type | String | String |
| Best suited for | Notes, preferences, persistent state | Drafts, temporary state |

> Storage capacity and exact session behavior are browser-dependent. Web Storage should not be used for passwords, authentication secrets, or other sensitive information.

## JSON in this project

Web Storage stores strings. Saving a JavaScript object directly would coerce it to an unhelpful string such as `[object Object]`. JSON solves this problem:

```js
const user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // Alice
```

The project uses a safe parsing helper so malformed or missing stored data does not break the interface.

## Testing checklist

- [ ] Create a note and refresh the page; the note should remain.
- [ ] Edit a note and confirm the card updates.
- [ ] Pin a note and confirm it moves above unpinned notes.
- [ ] Search and filter the note collection.
- [ ] Start typing a draft, refresh the same tab, and verify it is restored.
- [ ] Try the localStorage and sessionStorage playgrounds.
- [ ] Enter valid and invalid JSON in the JSON lab.
- [ ] Export notes, then import the generated JSON file.
- [ ] Toggle dark mode and refresh to confirm the preference persists.
- [ ] Resize the browser window and verify the responsive layout.

## Concepts covered

`Web Storage API` · `localStorage` · `sessionStorage` · `JSON.stringify()` · `JSON.parse()` · CRUD · DOM manipulation · event handling · responsive CSS · data import/export · persistent UI state

## Learning outcome

After completing this assignment, a student should be able to explain the difference between persistent and session-scoped browser storage, store structured JavaScript data safely as JSON, retrieve and modify that data, and use those concepts to build a complete client-side application.

---

**Assignment 01 — Web Storage API / Final Task: Notes App**
