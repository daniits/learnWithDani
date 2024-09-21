What is CSS ?
CSS stands for Cascading Style Sheets. It’s used to style and layout web pages.
Purpose: Controls the visual appearance of HTML elements (colors, fonts, spacing, etc.).

// There are Three Types of CSS 
Inline CSS 
External CSS
Internal CSS


What is Pseudo-classes and pseudo-elements? 
Pseudo-classes and pseudo-elements are used to style elements based on their state or position within the document.

Pseudo-classes
Pseudo-classes are used to define the special states of an element. They allow you to style elements when they are in a specific condition, such as when they are hovered over or when they are the first child of their parent.
Example:
:hover
:nth-child()
:first-child


Pseudo-elements
Pseudo-elements allow you to style specific parts of an element, such as the first letter or first line, or to insert content before or after an element.
Example: 
::before
::after
::first-letter
::first-line

Summary
Pseudo-classes define a special state of an element (like :hover, :first-child, etc.).
Pseudo-elements allow you to style specific parts of an element (::before, ::after, ::first-letter, ::first-line).



What is Specificity Rule?
Order of Specificity: Inline styles > IDs > Classes/Pseudo-classes > Elements/Pseudo-elements




What is CSS Box Model?
The CSS box model as a whole applies to block boxes and defines how the different parts of a box — margin, border, padding, and content — work together to create a box that you can see on a page. Inline boxes use just some of the behavior defined in the box model.


Content box: The area where your content is displayed; size it using properties like inline-size and block-size or width and height.
Padding box: The padding sits around the content as white space; size it using padding and related properties.
Border box: The border box wraps the content and any padding; size it using border and related properties.
Margin box: The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements; size it using margin and related properties.


What is Layout Techniques in CSS?
Layout techniques in CSS are methods used to control how elements are positioned and displayed on a webpage. These techniques help organize the structure of a webpage to make it look visually appealing and user-friendly. CSS provides several layout techniques such as:

Display: Defines how elements are displayed, such as block, inline, inline-block, flex, or grid.
Position: Allows for precise control over the placement of elements. It includes properties like static, relative, absolute, fixed, and sticky.
Float: Floats elements to the left or right of their container, allowing other elements to wrap around.
Clear: Clears floated elements, preventing the next elements from wrapping around them.



What is CSS Flexbox?
CSS Flexbox (short for "Flexible Box Layout") is a modern layout module in CSS that makes it easier to design flexible and responsive layouts. It is particularly useful for creating dynamic, one-dimensional layouts (either rows or columns) where elements within a container can adjust and distribute space efficiently according to the available screen size or content.
Flexbox is designed to provide better alignment and space distribution among items inside a container, even when their size is unknown or dynamic. It solves many layout challenges that were difficult to manage with older techniques like floats or inline-block.
Key Concepts of Flexbox
Flex Container 
The parent element that has display: flex; applied to it. This container contains "flex items."
Example
display: flex;
flex-direction:
flex-wrap:
Controls whether the flex items should wrap onto multiple lines if they overflow the container.
nowrap (default): Items will stay on one line and shrink to fit.
wrap: Items will wrap onto multiple lines.
wrap-reverse: Items will wrap in the reverse direction
justify-content: 
aligin-items:
Controls the vertical alignment of flex items along the cross axis (perpendicular to the main axis).
flex-start: Items are aligned to the start of the cross axis.
flex-end: Items are aligned to the end.
center: Items are aligned in the center.
stretch: Items stretch to fill the container (default).

Flex Items: The child elements inside the flex container that are arranged according to the flexbox rules.
flex-grow:
Defines how much a flex item will grow relative to the rest of the flex items in the container when there is extra space.
Example: If one item has flex-grow: 2; and another has flex-grow: 1;, the first item will grow twice as much as the second.
flex-shrink
Defines how much a flex item will shrink relative to the other flex items when there is not enough space.
Default is 1, meaning items shrink proportionally. If set to 0, the item will not shrink.
flex-basis
Specifies the initial size of a flex item before any space distribution takes place.
It can be defined in any CSS unit (e.g., px, %, rem).
align-self
Allows overriding the align-items property for individual flex items.
Possible values: flex-start, flex-end, center, stretch, baseline.
order
Controls the order of flex items in the layout. Items with lower values appear first.
Default value is 0. Negative or positive integers can be used.

CSS Flexbox is a powerful and versatile tool for creating flexible, responsive, and well-aligned layouts. By using flex containers and flex items along with properties like justify-content, align-items, and flex-grow, you can easily create complex layouts that adapt to various screen sizes and user interfaces.


