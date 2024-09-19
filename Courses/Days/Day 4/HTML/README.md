What Are New Featurs in HTML5? 

HTML5 introduced several new features and enhancements that significantly improved the capabilities of the web. Here are some of the key new features of HTML5:


New Semantic Elements
    Purpose: Introduces elements that provide more meaningful structure to a document, enhancing accessibility and SEO.
    Examples:
    <header>: Represents the header of a section or page.
    <nav>: Defines a block of navigation links.
    <section>: Represents a generic section of content.
    <article>: Defines an independent piece of content.
    <aside>: Contains content indirectly related to the main content.
    <footer>: Represents the footer of a section or page.

Multimedia Elements
    Purpose: Provides native support for embedding audio and video content.
    Examples
    <audio>: Embeds sound content like music or audio streams.
    <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>

    <video>: Embeds video content without requiring third-party plugins.
    <video controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video element.
    </video>

New Form Controls and Input Types
    Purpose: Enhances forms by adding new input types and attributes, improving user experience and simplifying data validation.
    Examples:
    <input type="date">: For date selection.
    <input type="email">: For email addresses with built-in validation.
    <input type="range">: For sliders.
    <input type="color">: For color picking.
    <input type="number">: For numerical input.
    Attributes:
    placeholder: Shows placeholder text inside an input field.
    required: Specifies that an input field must be filled out.
    pattern: Provides a regular expression for input validation.

Canvas and SVG for Graphics
    Purpose: Enables drawing and animating graphics directly in the browser without needing third-party plugins.
    Examples
    <canvas>: A drawing surface for 2D graphics using JavaScript.
    <canvas id="myCanvas" width="200" height="100"></canvas>
    <script>
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.fillStyle = 'blue';
        context.fillRect(10, 10, 150, 75);
    </script>
    SVG: Scalable Vector Graphics, an XML-based format for vector graphics.
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>

APIs for Web Applications
    Purpose: Provides various APIs that enable richer web applications.
    Examples:
    Geolocation API: Retrieves the user's geographical location.
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
    });
    Web Storage: Stores data on the client side with localStorage and sessionStorage.
    localStorage.setItem('username', 'JohnDoe');
    console.log(localStorage.getItem('username')); // Output: JohnDoe
    Web Workers: Runs scripts in background threads to improve performance.
    var worker = new Worker('worker.js');
    worker.postMessage('Start');

Enhanced Accessibility and ARIA
    Purpose: Improves accessibility for users with disabilities by defining roles and properties for elements.
    Examples
    ARIA (Accessible Rich Internet Applications): Provides attributes like role, aria-label, and aria-hidden to make content more accessible.
    <button aria-label="Close">X</button>

Responsive Design Features
    Purpose: Enhances the creation of responsive layouts that adapt to various screen sizes.
    Examples
    Viewport Meta Tag: Controls the layout on mobile devices
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    Media Queries: Combined with CSS3, allows for responsive styling.
    @media only screen and (max-width: 600px) {
    body {
        font-size: 14px;
    }
    }

Offline Web Applications
    Purpose: Enables web applications to work offline.
    Examples:
    Application Cache (deprecated): Allowed caching of web application resources.
    Service Workers: More robust replacement for Application Cache, allowing offline functionality and background synchronization.

New Attributes and Elements for Improved Markup
    Example
    <progress>: Displays progress of a task.
    <progress value="70" max="100">70%</progress>
    <meter>: Represents a scalar measurement within a known range.
    <meter min="0" max="100" value="50">50%</meter>

Improved Parsing Rules
    Purpose: HTML5 has more consistent and forgiving parsing rules, resulting in more predictable behavior across different browsers.
    Examples:
    Allows omitted tags like <html>, <body>, and <head>, which the browser will infer.
    Improved handling of errors and malformed HTML.

