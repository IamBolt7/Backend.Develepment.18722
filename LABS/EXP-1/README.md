# Experiment 1 — Introduction to HTML and CSS

A simple, responsive personal introduction webpage created as **Experiment 1** for web/backend development practice. The experiment demonstrates the basic structure of an HTML document and the use of CSS to create a clean, responsive user interface.

## Overview

The project contains a single webpage introducing the student and displaying basic academic information. It is intentionally lightweight and does not require JavaScript, Node.js, a database, or any external framework.

The improved version focuses on:

- Semantic HTML5 structure
- Responsive CSS
- Clean visual hierarchy
- Reusable CSS variables
- Mobile-friendly layout
- Basic accessibility
- Modern card-based UI
- Clear source-code organization

## Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML5 | Defines the structure and content of the webpage |
| CSS3 | Handles layout, colors, typography, responsiveness, and visual styling |

No external libraries or dependencies are required.

## Project Structure

```text
EXP-1/
├── arnav.html     # Main HTML webpage with embedded CSS
└── README.md      # Project documentation
```

## How to Run

### Method 1 — Open directly

1. Download or clone the repository.
2. Open the `EXP-1` folder.
3. Double-click `arnav.html`.
4. The webpage will open in your default browser.

### Method 2 — Visual Studio Code + Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `arnav.html`.
4. Select **Open with Live Server**.

A local URL similar to the following will open:

```text
http://127.0.0.1:5500/arnav.html
```

## Concepts Demonstrated

### HTML Document Structure

The page uses the standard HTML5 structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
</head>
<body>
  ...
</body>
</html>
```

### Semantic HTML

The `<main>` element identifies the primary content of the page. Paragraphs, headings, and a list are used according to their meaning rather than using generic elements everywhere.

### CSS Variables

Frequently used colors are stored as custom properties in `:root`, making the design easier to maintain.

```css
:root {
  --bg: #080d1a;
  --text: #f3f6ff;
  --accent: #8ec5ff;
}
```

### Responsive Design

The webpage adapts to different screen sizes using flexible widths, `clamp()`, wrapping elements, and a media query. This makes the same page usable on desktop and mobile displays.

### CSS Layout

CSS Grid centers the main card on the screen:

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```

Flexbox is used for the student-detail badges so they can automatically wrap on smaller displays.

## Page Content

The webpage displays:

- Student introduction
- B.Tech CSE program
- UPES affiliation
- HTML and CSS as the technologies demonstrated
- Experiment identification

## Improvements Over the Initial Version

The original experiment contained a functional single-card introduction page but very little content and no documentation. This version improves it by:

- Adding a proper page description meta tag
- Using more semantic HTML
- Improving the introduction text
- Adding structured student-detail badges
- Improving typography and spacing
- Making the design more responsive
- Adding reusable CSS variables
- Adding accessibility information to the details list
- Improving mobile behavior
- Providing complete project documentation
- Removing macOS-generated metadata files from the project package

## Learning Outcomes

After completing this experiment, a student should be able to:

1. Create a valid HTML5 document.
2. Use headings, paragraphs, lists, and semantic elements.
3. Apply CSS rules to HTML elements.
4. Use colors, spacing, borders, shadows, and typography.
5. Center content using CSS Grid.
6. Arrange elements using Flexbox.
7. Build a webpage that responds to different screen sizes.
8. Understand the relationship between HTML structure and CSS presentation.

## Possible Future Enhancements

The experiment can later be extended with:

- A profile image
- Navigation bar
- About section
- Skills section
- Projects section
- Contact section
- External stylesheet
- CSS animations
- JavaScript interactions
- Links to GitHub or a portfolio

These features are intentionally not required for the current experiment because its main purpose is to demonstrate fundamental HTML and CSS concepts.

## Author

**Arnav Daftuar**  
B.Tech Computer Science and Engineering  
UPES

---

> This project is intended for educational and laboratory practice.
