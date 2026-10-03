const path = require("path");
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017";
const DB_NAME = "cms_lab";
const COLLECTION_NAME = "posts";

const app = express();
const client = new MongoClient(MONGO_URL, { serverSelectionTimeoutMS: 1200 });
let postsCollection;
let usingMongo = false;
let memoryPosts = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Format a Date as e.g. "26 September 2026".
app.locals.formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

// Format a Date with time, e.g. "26 September 2026, 14:05".
app.locals.formatDateTime = (date) =>
    new Date(date).toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

// Home page redirects to the post list.
app.get("/", (req, res) => {
    res.redirect("/posts");
});

// Display all posts (title, author, date only - no content).
app.get("/posts", async (req, res, next) => {
    try {
        const posts = usingMongo
            ? await postsCollection.find({}, { projection: { title: 1, author: 1, createdAt: 1 } }).sort({ createdAt: -1 }).toArray()
            : [...memoryPosts].sort((a, b) => b.createdAt - a.createdAt);

        res.render("posts", { posts });
    } catch (err) {
        next(err);
    }
});

// Display the create-post form.
app.get("/posts/new", (req, res) => {
    res.render("new-post", { errors: [], values: {} });
});

// Create a new post.
app.post("/posts", async (req, res, next) => {
    const title = (req.body.title || "").trim();
    const content = (req.body.content || "").trim();
    const author = (req.body.author || "").trim();

    const errors = [];
    if (!title) errors.push("Title must not be empty.");
    if (!content) errors.push("Content must not be empty.");
    if (!author) errors.push("Author must not be empty.");

    if (errors.length > 0) {
        return res
            .status(400)
            .render("new-post", { errors, values: { title, content, author } });
    }

    try {
        const newPost = { title, content, author, createdAt: new Date() };
        if (usingMongo) {
            await postsCollection.insertOne(newPost);
        } else {
            memoryPosts.unshift({ ...newPost, _id: new ObjectId() });
        }

        res.redirect("/posts");
    } catch (err) {
        next(err);
    }
});

// Display one complete post, looked up by its MongoDB _id.
app.get("/posts/:id", async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(404).render("not-found");
    }

    try {
        const post = usingMongo
            ? await postsCollection.findOne({ _id: new ObjectId(req.params.id) })
            : memoryPosts.find((item) => item._id.toString() === req.params.id);

        if (!post) {
            return res.status(404).render("not-found");
        }

        res.render("post", { post });
    } catch (err) {
        next(err);
    }
});

app.use((req, res) => {
    res.status(404).render("not-found");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Something went wrong.");
});

const samplePosts = [
    {
        title: "Getting Started with Node.js and Express",
        author: "Arnav",
        content: "Node.js makes it possible to run JavaScript on the server, while Express gives us a simple way to build routes and web applications. In this project, Express handles requests, renders EJS pages, and connects the browser to our MongoDB data.\n\nA good way to learn backend development is to build a small project like this CMS. Start with a few routes, add a database, validate user input, and then improve the interface step by step.",
        createdAt: new Date("2026-09-29T10:30:00+05:30"),
    },
    {
        title: "Why MongoDB Works Well for a Simple CMS",
        author: "Arnav",
        content: "MongoDB stores information as flexible documents, which makes it convenient for a blog or content management system. Each post can contain a title, author, content, creation date, and any extra fields we decide to add later.\n\nIn this app, the posts collection is queried whenever the blog list is opened. MongoDB also gives every document a unique ObjectId, which we use to open an individual post page.",
        createdAt: new Date("2026-09-27T16:15:00+05:30"),
    },
    {
        title: "Understanding REST Routes in Express",
        author: "Backend Lab Team",
        content: "REST-style routing keeps a web application organized. GET /posts displays all posts, GET /posts/new shows the creation form, POST /posts creates a new post, and GET /posts/:id displays one complete post.\n\nKeeping routes predictable makes the application easier to understand, test, and extend. Later, the same structure can be expanded with edit and delete operations.",
        createdAt: new Date("2026-09-25T12:00:00+05:30"),
    },
    {
        title: "EJS Templates: Making Server Pages Dynamic",
        author: "CMS Editorial",
        content: "EJS lets us mix HTML with values supplied by Express. Instead of creating a separate HTML file for every blog post, we use one template and render different data into it.\n\nTemplates are also useful for reusable components such as headers and footers. This keeps the project cleaner and makes design changes much easier to apply across every page.",
        createdAt: new Date("2026-09-22T09:45:00+05:30"),
    },
    {
        title: "Three Small Habits That Improve Your Code",
        author: "Dev Notes",
        content: "First, use clear names for variables and functions so that your code explains its purpose. Second, validate input before saving anything to the database. Third, keep related responsibilities together instead of putting the entire application into one large block.\n\nSmall habits like these make debugging easier and help other developers understand your work quickly.",
        createdAt: new Date("2026-09-18T18:20:00+05:30"),
    },
    {
        title: "What I Learned Building a Mini Blog CMS",
        author: "Arnav",
        content: "Building a mini CMS brings several backend concepts together in one project: routing, templates, form handling, validation, database operations, and error pages. Seeing these pieces work together is more useful than studying each concept separately.\n\nThe next improvements could include editing and deleting posts, categories, search, user authentication, image uploads, and an admin dashboard.",
        createdAt: new Date("2026-09-15T14:10:00+05:30"),
    },
];

async function seedSamplePosts() {
    const count = await postsCollection.countDocuments();
    if (count === 0) {
        await postsCollection.insertMany(samplePosts);
        console.log(`Added ${samplePosts.length} sample blog posts`);
    }
}

async function start() {
    try {
        await client.connect();
        postsCollection = client.db(DB_NAME).collection(COLLECTION_NAME);
        usingMongo = true;
        console.log("Connected to MongoDB");
        await seedSamplePosts();
    } catch (err) {
        // The lab can still be demonstrated even when MongoDB is not installed/running.
        usingMongo = false;
        memoryPosts = samplePosts.map((post) => ({ ...post, _id: new ObjectId() }));
        console.warn("MongoDB is unavailable - running in demo mode with in-memory posts.");
        console.warn("Start MongoDB and restart the app when you want persistent posts.");
    }

    app.listen(PORT, () => {
        console.log(`CMS Lab is running at http://localhost:${PORT}`);
    });
}

start();
