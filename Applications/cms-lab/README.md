# CMS Lab

Navigation: [Main README](../../README.md) · [Applications README](../README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Applications/cms-lab/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

CMS Lab is a blog Content Management System built with Node.js, Express.js, EJS, and MongoDB. It supports two startup modes so it can be demonstrated anywhere:

- **MongoDB mode:** Posts are saved permanently in MongoDB (`cms_lab.posts`).
- **Demo mode:** If MongoDB is not running, the server falls back to in-memory starter posts and still runs on `http://localhost:3000`.

---

## Features

- List all published blog posts sorted newest-first
- Open any post on its own page (`/posts/:id`)
- Create new posts with server-side validation for title, author, and content
- Automatic seeding of six starter posts when the MongoDB collection is empty
- Automatic fallback to in-memory demo data when MongoDB is unavailable
- Custom 404 page for invalid routes or missing post IDs

---

## Tech Stack

| Technology | Role |
| --- | --- |
| Node.js | JavaScript runtime |
| Express.js | Routing, middleware, and request handling |
| EJS | Server-side HTML templates |
| MongoDB + Node Driver | Persistent document storage |
| HTML5 / CSS3 | Responsive layout and styling |

---

## Project Structure

```text
cms-lab/
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── public/
│   └── style.css
└── views/
    ├── posts.ejs
    ├── post.ejs
    ├── new-post.ejs
    └── not-found.ejs
```

---

## Setup and Run

```bash
cd Applications/cms-lab
npm install
npm start
```

Open `http://localhost:3000` (which redirects to `/posts`).

### Optional Configuration

- **Custom port:** `PORT=4000 npm start`
- **Custom MongoDB URI:** `MONGO_URL="mongodb://127.0.0.1:27017" npm start`

When MongoDB is connected, the terminal prints `Connected to MongoDB`. If MongoDB is stopped, it runs in demo mode (posts created in demo mode reset when the server restarts).

---

## Routes

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/` | Redirects to `/posts` |
| `GET` | `/posts` | Displays all blog posts |
| `GET` | `/posts/new` | Displays the new-post form |
| `POST` | `/posts` | Validates input and creates a post |
| `GET` | `/posts/:id` | Displays a single post by `ObjectId` |
| `GET` | `*` | Renders the 404 page |

---

## Post Document Shape

```javascript
{
  _id: ObjectId,
  title: "Post title",
  author: "Author name",
  content: "Complete blog post content",
  createdAt: Date
}
```

---

## Navigation

- [Back to Main README](../../README.md)
- [Applications README](../README.md)
- [Open Website Portal](../../index.html)

Made by **Arnav Daftuar**
