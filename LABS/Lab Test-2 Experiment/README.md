# Experiment 03 — Create a Responsive Web Page with HTML and CSS

A polished, responsive webpage for the **Backend Development Lab**, built entirely with HTML5 and CSS3. The experiment demonstrates semantic HTML, Flexbox, CSS Grid, fluid sizing, and media queries without Bootstrap or another framework.

## Objective

Build a responsive webpage from scratch that adapts cleanly to desktop, tablet, and mobile screens while demonstrating the viewport meta tag, Flexbox, CSS Grid, and media queries.

## Project Structure

```text
Lab Test-2 Experiment/
├── index.html
└── README.md
```

## Technologies

| Technology | Use |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling and responsive design |
| Flexbox | Navigation and alignment |
| CSS Grid | Responsive card layouts |
| Media Queries | Layout changes at breakpoints |
| `clamp()` | Fluid typography and spacing |

No external framework or JavaScript is required.

## Responsive Behaviour

| Screen width | Result |
|---|---|
| `> 768px` | Three-column card layout |
| `561px–768px` | Two-column card layout |
| `≤ 560px` | Single-column layout and compact navigation |
| `≤ 360px` | Extra-small phone navigation adjustments |

## Features

- Correct viewport meta tag
- Semantic HTML5 structure
- Sticky responsive navigation
- Modern responsive hero section
- CSS Grid cards
- Flexbox navigation
- Fluid typography and spacing
- Desktop, tablet, phone, and extra-small-screen handling
- Hover effects
- Responsive breakpoint demonstration
- No horizontal page overflow
- Clean footer
- No CSS framework

## Core Concepts

### Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

This makes the page use the actual device width on mobile browsers.

### CSS Grid

The desktop card area uses three equal columns:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
```

### Media Queries

At tablet width the grid becomes two columns:

```css
@media (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

At phone width it becomes one column:

```css
@media (max-width: 560px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

## How to Run

1. Extract `Lab Test-2 Experiment.zip`.
2. Open the extracted folder.
3. Double-click `index.html`.
4. The page will open in Safari, Chrome, Firefox, or another modern browser.

There are no dependencies to install and no server is required.

## How to Test Responsiveness

Resize the browser window from desktop width down to phone width. You should see the cards change from **3 → 2 → 1 columns**, while the navigation, typography, and spacing adapt automatically.

You can also use browser responsive-design tools. In Safari, use **Develop → Enter Responsive Design Mode**. In Chrome, open Developer Tools and enable the device toolbar.

Suggested widths to test: **1440px, 1024px, 768px, 560px, 480px, and 375px**.

## Expected Result

The page should remain readable and visually balanced across screen sizes without horizontal scrolling. The layout should reorganize rather than simply scale down.

## Learning Outcomes

After completing this experiment, you should be able to:

- explain responsive web design;
- configure the viewport for mobile devices;
- use Flexbox for flexible alignment;
- use CSS Grid for responsive multi-column layouts;
- create and apply media queries;
- design useful breakpoints for different screen widths;
- build a webpage without relying on a CSS framework.

## Conclusion

This experiment shows how HTML5 and modern CSS can produce a professional responsive interface. CSS Grid manages the main content layout, Flexbox manages flexible navigation, and media queries adapt the design to the available viewport.

---

**Experiment:** 03 — Create a Responsive Web Page with HTML and CSS  
**Course:** Backend Development Lab
