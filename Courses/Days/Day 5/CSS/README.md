# CSS Overview

## What is CSS?

CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the visual appearance of HTML elements (e.g., colors, fonts, spacing).

### Purpose
Controls the design and presentation of web content.

## Types of CSS

1. **Inline CSS**: Styles applied directly to an HTML element.
2. **Internal CSS**: Styles placed within a `<style>` tag in the `<head>` of the document.
3. **External CSS**: Styles written in an external stylesheet and linked via the `<link>` tag.

---

## Pseudo-Classes and Pseudo-Elements

### Pseudo-Classes
Pseudo-classes define the special state of an element.
- `:hover` - Applies styles when hovering over an element.
- `:nth-child()` - Targets specific child elements.
- `:first-child` - Styles the first child of a parent element.

### Pseudo-Elements
Pseudo-elements style specific parts of an element.
- `::before` - Inserts content before an element.
- `::after` - Inserts content after an element.
- `::first-letter` - Styles the first letter of an element.
- `::first-line` - Styles the first line of an element.

### Summary:
- **Pseudo-classes**: Define special states of elements.
- **Pseudo-elements**: Style specific parts of elements.

---

## Specificity Rule

CSS specificity determines the priority of styles when there are conflicts. The order is:

1. Inline styles
2. IDs
3. Classes/Pseudo-classes
4. Elements/Pseudo-elements

---

## CSS Box Model

The CSS box model represents the structure of an element as a box, composed of four parts:

1. **Content box**: The area where content is displayed (controlled by `width` and `height`).
2. **Padding box**: The space around the content (controlled by `padding`).
3. **Border box**: Wraps the content and padding (controlled by `border`).
4. **Margin box**: The outermost layer (controlled by `margin`).

---

## CSS Layout Techniques

### Display
Controls how elements are displayed. Common values include `block`, `inline`, `inline-block`, `flex`, and `grid`.

### Position
Defines element placement. Includes:
- `static` (default)
- `relative`
- `absolute`
- `fixed`
- `sticky`

### Float
Floats elements to the left or right, allowing other content to wrap around.

### Clear
Prevents wrapping around floated elements.

---

## CSS Flexbox

Flexbox is a layout system designed for creating flexible and responsive layouts.

### Key Concepts:
- **Flex Container**: The parent element with `display: flex;`.
  - `flex-direction`: Specifies row or column layout.
  - `flex-wrap`: Allows items to wrap onto multiple lines.
  - `justify-content`: Aligns items along the main axis.
  - `align-items`: Aligns items along the cross axis.

- **Flex Items**: The child elements of a flex container.
  - `flex-grow`: Controls how much an item will grow relative to others.
  - `flex-shrink`: Controls how much an item will shrink.
  - `flex-basis`: Defines the initial size of a flex item.
  - `align-self`: Overrides `align-items` for individual items.
  - `order`: Controls the order of items in the layout.

---

## CSS Grid

CSS Grid is a two-dimensional layout system for arranging elements in rows and columns.

### Key Concepts:
- **Grid Container**: The parent element with `display: grid;`.
- **Grid Items**: The child elements within the grid container.

### Defining Grid Structure:
- `grid-template-columns`: Defines the number and size of columns.
- `grid-template-rows`: Defines the number and size of rows.

### Placing Grid Items:
- `grid-column`: Specifies the start and end columns of an item.
- `grid-row`: Specifies the start and end rows of an item.
- `span`: Allows an item to span across multiple rows or columns.

### Grid Gap:
- `gap`: Defines the space between grid items.

### Grid Areas:
- `grid-template-areas`: Defines named areas of the grid, making complex layouts (like headers, footers, sidebars) easier to implement.
