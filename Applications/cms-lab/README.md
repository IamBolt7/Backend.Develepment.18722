# CMS Lab

A simple, responsive **Content Management System (CMS)** for creating and reading blog posts. The project is built with **Node.js, Express.js, EJS, and MongoDB** and is designed as a practical backend-development lab project.

The application can run in two modes:

- **MongoDB mode** — posts are stored permanently in MongoDB.
- **Demo mode** — if MongoDB is unavailable, the application still starts and uses temporary in-memory sample posts.

This makes the project easy to demonstrate on `localhost:3000` while still showing real database integration when MongoDB is available.

---

## Features

- View all published blog posts.
- Open an individual post and read its complete content.
- Create new blog posts through a web form.
- Validate the title, author, and content before creating a post.
- Store posts in MongoDB when the database is available.
- Automatically fall back to in-memory demo data if MongoDB is not running.
- Automatically add sample blog posts to an empty MongoDB collection.
- Responsive user interface for desktop, tablet, and mobile screens.
- Custom 404 page for invalid URLs or missing posts.
- Clean Express routing and EJS-based server-side rendering.

---

## Technologies Used

| Technology | Purpose |
| --- | --- |
| Node.js | JavaScript runtime used to run the backend server |
| Express.js | Web framework used for routing and request handling |
| EJS | Template engine used to generate dynamic HTML pages |
| MongoDB | Database used to store blog posts permanently |
| MongoDB Node.js Driver | Connects the Express application to MongoDB |
| HTML5 | Provides the structure of the web pages |
| CSS3 | Provides styling and responsive design |

---

## Project Structure

```text
cms-lab/
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── screenshot.jpg
├── public/
│   └── style.css
└── views/
    ├── posts.ejs
    ├── post.ejs
    ├── new-post.ejs
    └── not-found.ejs
```

### Important Files

**`app.js`**  
Contains the Express server, routes, MongoDB connection, form validation, sample data, error handling, and application startup logic.

**`public/style.css`**  
Contains the complete styling and responsive layout of the application.

**`views/posts.ejs`**  
Displays the main blog page containing the list of posts.

**`views/post.ejs`**  
Displays the complete content of one selected blog post.

**`views/new-post.ejs`**  
Contains the form used to create a new post and displays validation errors when required fields are missing.

**`views/not-found.ejs`**  
Displays the custom 404 page when a route or post cannot be found.

---

## Prerequisites

Before running the project, make sure **Node.js** and **npm** are installed.

Check them from Terminal:

```bash
node --version
npm --version
```

If both commands display version numbers, Node.js and npm are ready.

MongoDB is **optional** for simply running and demonstrating this version of the project. It is required only if you want posts to remain saved after restarting the server.

---

## Installation

### 1. Extract the project

Extract `cms-lab.zip` to a folder on your computer.

### 2. Open Terminal in the project folder

For example, on macOS:

```bash
cd /path/to/cms-lab
```

Replace `/path/to/cms-lab` with the actual location of the extracted project.

A simple alternative on macOS is to type `cd ` in Terminal and drag the `cms-lab` folder into the Terminal window.

### 3. Install dependencies

Run:

```bash
npm install
```

This installs the packages listed in `package.json`, including Express, EJS, and the MongoDB driver.

### 4. Start the application

Run:

```bash
npm start
```

The application uses port **3000** by default.

When it starts successfully, Terminal displays a message similar to:

```text
CMS Lab is running at http://localhost:3000
```

### 5. Open the application

Open a browser and visit:

```text
http://localhost:3000
```

The root URL automatically redirects to `/posts`.

---

## Running Without MongoDB — Demo Mode

MongoDB does **not** have to be running for the application to open.

If the application cannot connect to MongoDB, it automatically switches to **demo mode** and displays six sample blog posts stored temporarily in memory.

Terminal will show messages similar to:

```text
MongoDB is unavailable - running in demo mode with in-memory posts.
Start MongoDB and restart the app when you want persistent posts.
CMS Lab is running at http://localhost:3000
```

You can still:

- Browse all sample posts.
- Open individual posts.
- Create new posts.
- Test form validation.
- Demonstrate the user interface.

### Important limitation of demo mode

Posts created in demo mode are stored only in the server's memory. They will disappear when the Node.js server is stopped or restarted.

Use MongoDB mode if you need permanent data storage.

---

## Running With MongoDB — Persistent Mode

By default, the application tries to connect to:

```text
mongodb://127.0.0.1:27017
```

The database and collection used by the application are:

```text
Database:   cms_lab
Collection: posts
```

When MongoDB connects successfully, Terminal displays:

```text
Connected to MongoDB
```

If the `posts` collection is empty, the application automatically inserts the included sample posts. It checks the collection first, so these starter posts are not inserted repeatedly every time the server starts.

New posts created through the application are then stored permanently in MongoDB.

---

## Using a Different MongoDB Connection

The application reads a custom MongoDB connection string from the `MONGO_URL` environment variable.

For example:

```bash
MONGO_URL="mongodb://127.0.0.1:27017" npm start
```

You can also use a compatible remote MongoDB connection string instead of the local URL.

The database name remains `cms_lab` unless it is changed in `app.js`.

---

## Application Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Redirects the user to `/posts` |
| GET | `/posts` | Displays all blog posts |
| GET | `/posts/new` | Displays the create-post form |
| POST | `/posts` | Validates and creates a new blog post |
| GET | `/posts/:id` | Displays one complete blog post using its ID |
| GET | Any unknown route | Displays the custom 404 page |

---

## How the Application Works

### 1. Server startup

When `npm start` is executed, Node.js runs `app.js`.

The application first attempts to connect to MongoDB. If the connection succeeds, it uses the `cms_lab` database. If the connection fails, it creates temporary in-memory copies of the sample posts and continues running normally.

### 2. Viewing posts

When the browser requests:

```text
GET /posts
```

Express retrieves the posts from MongoDB or the in-memory array, sorts them with the newest posts first, and renders `views/posts.ejs`.

### 3. Creating a post

The user opens:

```text
GET /posts/new
```

The form accepts:

- Title
- Author
- Content

When the form is submitted, it sends:

```text
POST /posts
```

The server removes unnecessary leading/trailing whitespace and checks that all three fields contain a value.

If a field is empty, the form is displayed again with validation errors. If all values are valid, a new post is created with the current date and time.

### 4. Opening one post

Each post has a unique MongoDB-style `ObjectId`. Selecting a post sends a request to:

```text
GET /posts/:id
```

The server validates the ID, finds the corresponding post, and renders `views/post.ejs`. If the ID is invalid or no matching post exists, the custom 404 page is displayed.

---

## Data Structure

A blog post follows this general structure:

```javascript
{
    _id: ObjectId,
    title: "Post title",
    author: "Author name",
    content: "Complete blog post content",
    createdAt: Date
}
```

### Field Description

| Field | Description |
| --- | --- |
| `_id` | Unique identifier generated using MongoDB `ObjectId` |
| `title` | Title of the blog post |
| `author` | Name of the post author |
| `content` | Full text/content of the post |
| `createdAt` | Date and time when the post was created |

---

## Form Validation

The server validates new posts before saving them.

The following fields are required:

```text
Title
Author
Content
```

If any field is empty, the server returns the form with an appropriate error instead of creating an incomplete post.

Validation is performed on the backend, so it is not dependent only on browser-side HTML validation.

---

## Sample Blog Posts

The project contains six starter posts covering topics such as:

- Node.js and Express
- MongoDB
- REST routes
- EJS templates
- Coding practices
- Lessons from building a mini CMS

They make it possible to demonstrate the application immediately without manually creating content first.

In MongoDB mode, they are added only when the collection is empty. In demo mode, temporary copies are created each time the server starts.

---

## Changing the Port

The default port is:

```text
3000
```

The server uses the `PORT` environment variable when one is provided.

For example, to run on port 4000:

```bash
PORT=4000 npm start
```

Then open:

```text
http://localhost:4000
```

---

## Troubleshooting

### `localhost:3000` is not opening

Make sure the server is actually running:

```bash
npm start
```

Keep that Terminal window open while using the website.

Then open the full address:

```text
http://localhost:3000
```

Do not try to open `localhost:3000` before starting the Node.js server.

### `npm: command not found`

Node.js/npm is not installed correctly. Install Node.js and reopen Terminal before running the project again.

### `Cannot find module ...`

The dependencies may not have been installed. Run:

```bash
npm install
```

Then start the application again:

```bash
npm start
```

### MongoDB is not installed or is not running

That is acceptable for this project. The app automatically switches to demo mode and should still open on port 3000.

Remember that posts created in demo mode disappear after a server restart.

### Port 3000 is already in use

Another application may already be using port 3000. Start this project on another port:

```bash
PORT=4000 npm start
```

Then visit:

```text
http://localhost:4000
```

### A post URL displays the 404 page

The post may not exist, or the supplied ID may not be a valid `ObjectId`. Return to `/posts` and open a post from the available list.

---

## Stopping the Server

Return to the Terminal window in which the application is running and press:

```text
Control + C
```

This stops the Node.js server.

If you were using demo mode, any posts created during that session will be cleared when the application is started again.

---

## Possible Future Improvements

The project can be extended with:

- Edit post functionality
- Delete post functionality
- User registration and login
- Admin authentication
- Categories and tags
- Search and filtering
- Image uploads
- Draft and published post states
- Pagination
- Comments
- Rich-text editing
- MongoDB Atlas deployment
- Production deployment

---

## Learning Outcomes

This project demonstrates several important backend-development concepts:

1. Creating a web server with Node.js and Express.
2. Defining GET and POST routes.
3. Handling HTML form submissions.
4. Performing server-side input validation.
5. Rendering dynamic pages with EJS.
6. Serving static CSS files with Express.
7. Connecting a Node.js application to MongoDB.
8. Performing basic database insert and read operations.
9. Working with MongoDB `ObjectId` values.
10. Handling 404 and server errors.
11. Using environment variables for configuration.
12. Providing a fallback mode when an external service is unavailable.

---

## Quick Start

For a quick demonstration, the complete process is:

```bash
# Open Terminal in the extracted cms-lab folder
npm install
npm start
```

Then visit:

```text
http://localhost:3000
```

MongoDB is optional for this quick-start workflow. If it is unavailable, the application automatically runs in demo mode.

---

## Project Summary

**CMS Lab** is a beginner-friendly backend web application that combines Express routing, EJS templates, form processing, validation, MongoDB storage, and responsive frontend styling in one project. Its fallback demo mode makes the application easy to run for demonstrations, while MongoDB support provides persistent storage for normal use.
