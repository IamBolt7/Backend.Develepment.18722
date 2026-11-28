# Lab Test-2 Experiment — Responsive Web Page (HTML and CSS)

> **Navigation:** [Main README](../../README.md) · [LABS README](../README.md) · [Open Live Page](./index.html) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=LABS/Lab%20Test-2%20Experiment/README.md)

A polished, responsive webpage for the Backend Development Lab, built entirely with HTML5 and CSS3. The experiment demonstrates semantic HTML, Flexbox, CSS Grid, fluid sizing, and media queries without Bootstrap or any other framework.

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
| `<= 560px` | Single-column layout and compact navigation |
| `<= 360px` | Extra-small phone navigation adjustments |

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

### Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This instructs the browser to set the page width to the device width and prevent automatic zooming on mobile.

### CSS Grid

Grid is used for the card section so the number of columns adjusts automatically:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
```

### Flexbox

Flexbox is used for the navigation bar so items align horizontally and wrap when space is limited:

```css
nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

### Media Queries

Explicit breakpoints handle layout changes at specific screen widths:

```css
@media (max-width: 560px) {
  .hero h1 { font-size: clamp(1.4rem, 6vw, 2rem); }
}
```

### Fluid Typography

`clamp()` produces font sizes that scale smoothly between a minimum and maximum value:

```css
h1 { font-size: clamp(1.8rem, 5vw, 3rem); }
```

## Learning Outcomes

After completing this experiment, you should be able to:

1. Add a correct viewport meta tag for mobile display.
2. Use semantic HTML5 elements.
3. Build a sticky responsive navigation bar using Flexbox.
4. Create a responsive card grid with CSS Grid.
5. Apply fluid typography using `clamp()`.
6. Write media queries that adjust layout at specific breakpoints.
7. Avoid horizontal overflow on small screens.
8. Build a complete page without a CSS framework.

## Author

**Arnav Daftuar**  
Backend Development — Lab Test-2 Responsive Web Page

---

## Connected Navigation

- [Back to Main Repository README](../../README.md)
- [Back to LABS README](../README.md)
- [Open Website Portal](../../index.html)
