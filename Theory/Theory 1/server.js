const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const students = [
  { id: 1, name: "Aarav", branch: "CSE" },
  { id: 2, name: "Diya", branch: "ECE" },
  { id: 3, name: "Rohan", branch: "IT" },
];

app.get("/", (req, res) => {
  res.render("home", { studentCount: students.length });
});

app.get("/students", (req, res) => {
  res.render("students", { students });
});

app.get("/api/students", (req, res) => {
  res.json({ success: true, count: students.length, students });
});

app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
