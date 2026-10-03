const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();

const mongoURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongoURL);

let postsCollection;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

async function connectDB() {
    await client.connect();

    const database = client.db("cms_lab");
    postsCollection = database.collection("posts");

    console.log("Connected to MongoDB");
}

app.get("/", async (req, res) => {
    const posts = await postsCollection
        .find()
        .sort({ createdAt: -1 })
        .toArray();

    res.render("posts", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new-post");
});

app.post("/posts", async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;

   if (!title.trim() || !content.trim() || !author.trim()) {
    return res.send("All fields are required");
}
    await postsCollection.insertOne({
        title: title,
        content: content,
        author: author,
        createdAt: new Date()
    });

    res.redirect("/");
});

app.get("/posts/:id", async (req, res) => {
    const post = await postsCollection.findOne({
        _id: new ObjectId(req.params.id)
    });

    if (!post) {
        return res.send("Post not found");
    }

    res.render("post", { post });
});

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server running at http://localhost:3000");
    });
});