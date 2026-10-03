# Backend Development Laboratory

This directory contains the experiments and lab-test implementations completed as part of the **Backend Development** course.

The experiments cover the fundamentals of web development and gradually move towards backend development concepts such as Node.js, Express.js, databases, REST APIs, CRUD operations, MongoDB, and the comparison between relational and document-oriented databases.

---

## Table of Contents

1. [EXP-1](#1-exp-1)
2. [Lab Test-1 Experiment](#2-lab-test-1-experiment)
3. [Lab Test-2 Experiment](#3-lab-test-2-experiment)
4. [Lab Test-3 Experiment](#4-lab-test-3-experiment)
5. [Lab Test-4 Experiment](#5-lab-test-4-experiment)
6. [Relational vs Document Databases Lab](#6-relational-vs-document-databases-lab)

---

# 1. EXP-1

## Aim

To understand the basic structure of a web application and implement the introductory concepts of web development.

## Concepts Covered

- HTML document structure
- CSS styling
- Web page layout
- Forms and user input
- Basic client-side development
- Organizing files in a web project

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Description

This experiment introduces the fundamental technologies used to create web applications.

HTML is used to define the structure and content of the webpage, while CSS is used to control its appearance and layout. JavaScript can be used to provide interactivity and dynamic behaviour.

The experiment also introduces the basic organization of files and folders required for a web development project.

## Learning Outcomes

After completing this experiment, we understand:

- The basic structure of an HTML document
- How CSS is connected with HTML
- How web pages are organized
- How browsers render HTML and CSS
- Basic client-side web development

---

# 2. Lab Test-1 Experiment

## Aim

To apply fundamental web development concepts by creating a structured web application using HTML, CSS, and JavaScript.

## Concepts Covered

- HTML elements
- CSS styling
- Page layouts
- Forms
- User interaction
- Responsive web design
- JavaScript basics

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Description

This lab test focuses on applying the fundamental concepts of frontend web development.

The application contains structured HTML content along with CSS styling to create an organized and user-friendly interface.

JavaScript is used where required to add dynamic behaviour and interaction to the webpage.

The experiment demonstrates how HTML, CSS, and JavaScript work together to create a complete web interface.

## Learning Outcomes

The experiment helps in understanding:

- Webpage structure
- CSS-based layouts
- Responsive design
- User input handling
- Basic JavaScript interaction
- Organization of frontend projects

---

# 3. Lab Test-2 Experiment

## Aim

To understand server-side development and create a backend application using Node.js and Express.js.

## Concepts Covered

- Node.js
- Express.js
- Server creation
- Routing
- HTTP requests and responses
- Middleware
- Backend project structure

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm

## Description

This experiment introduces backend development using **Node.js** and the **Express.js** framework.

Node.js provides the runtime environment required to execute JavaScript outside the browser.

Express.js simplifies the process of creating web servers and defining application routes.

A basic Express server can be created using:

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});