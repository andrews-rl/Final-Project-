// Import necessary modules from React and react-syntax-highlighter
import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Define the main function component Week7
function Week7() {
  // Declare state for storing copied code
  const [copiedCode, setCopiedCode] = useState(null);

  // Declare a constant containing the HTML code for the Home page
  const homeHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
</head>
<body>
  <header>
    <h1>Home</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section class="image-section">
      <img src="https://static6.depositphotos.com/1000931/559/i/600/depositphotos_5592386-stock-photo-aggressive-monkey.jpg" alt="A Monkey that needs a dentist">
      <p>Here is a picture of a monkey who needs a dentist.</p>
    </section>
  </main>
</body>
</html>`;

  // Declare a constant containing the HTML code for the About page
  const aboutHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About</title>
</head>
<body>
  <header>
    <h1>About</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section class="image-section">
      <img src="https://static6.depositphotos.com/1000931/559/i/600/depositphotos_5592386-stock-photo-aggressive-monkey.jpg" alt="A Monkey that needs a dentist">
      <p>Here is a picture of a monkey who needs a dentist.</p>
    </section>
  </main>
</body>
</html>`;

  // Declare a constant containing the HTML code for the Contact page
  const contactHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact</title>
</head>
<body>
  <header>
    <h1>Contact</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
  <main>
    <section class="table-section">
      <table>
        <thead>
          <tr>
            <th>Site</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Facebook</td>
            <td><a href="#">Visit our Facebook</a></td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td><a href="#">Visit our Twitter</a></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="form-section">
      <h2>Contact Us</h2>
      <form>
        <input type="text" name="firstName" placeholder="First Name">
        <input type="text" name="lastName" placeholder="Last Name">
        <input type="text" name="phoneNumber" placeholder="Phone Number">
        <input type="text" name="email" placeholder="Email">
        <br><br>
        <input type="text" name="questionsComments" placeholder="Questions/Comments">
        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
</body>
</html>`;

  // Function to copy code to clipboard
  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      // Remove copied code alert after 3 seconds
      setTimeout(() => setCopiedCode(null), 3000);
    });
  };

  // Return JSX for rendering the UI
  return (
    <div className="container">
      <hr />
      <h3 className="text-info text-center mt-3">Week 7: HTML</h3>
      <hr />
      {/* Button group for copying HTML code */}
      <div className="row justify-content-around">
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(homeHtmlCode)}>Copy Home Page</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(aboutHtmlCode)}>Copy About Page</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(contactHtmlCode)}>Copy Contact Page</button>
        </div>
      </div>
      {/* Alert message when code is copied */}
      {copiedCode && (
        <div className="alert alert-success mt-3">Code copied to clipboard!</div>
      )}
      <hr />
      {/* Syntax-highlighted code snippets */}
      <div className="code-snippet">
        <h4>home.html</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {homeHtmlCode}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div className="code-snippet">
        <h4>about.html</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {aboutHtmlCode}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div className="code-snippet">
        <h4>contact.html</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {contactHtmlCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

// Export the function component
export default Week7;

// Elements used in the code:
// <div>: Used for grouping and structuring content.
// <button>: A standard HTML button element.
// <hr>: Creates a thematic break or horizontal line.
// <h3> and <h4>: Headings to provide titles and sub-titles.
// <SyntaxHighlighter>: A component provided by react-syntax-highlighter for code syntax highlighting.
// React Hooks and Functions:
// useState: React hook for state management.
// copyCodeToClipboard: Function to copy code to clipboard using the navigator.clipboard.writeText method.
// CSS Bootstrap classes used in the code:
// btn btn-info: Applies Bootstrap styling to buttons.
// text-info: Sets the text color to Bootstrap's "info" color (typically blue).
// text-center: Centers the text horizontally.
// mt-3: Adds margin to the top of the element.
// row: Defines a new row in the Bootstrap grid system.
// col-auto: Auto-sets the width of a column within a row.
// container: Wraps site contents in a container for proper alignment and padding.
// alert alert-success: Styles the alert messages.
// Additional CSS classes used in the code:
// justify-content-around: Distributes space evenly around flex items horizontally.
// Detailed Description:
// This code defines a React functional component named 'Week7' that serves as a code snippet display and copy tool for HTML pages. The component imports necessary modules, including React and react-syntax-highlighter, to create a responsive and styled display.

// The code contains three HTML templates: homeHtmlCode, aboutHtmlCode, and contactHtmlCode. These templates are stored as string constants and used to display HTML code in a syntax-highlighted format using the SyntaxHighlighter component.

// Within the 'Week7' component, a series of elements and classes are employed to structure and style the interface. A container is created using the Bootstrap class container, encapsulating all other elements.

// Bootstrap button elements are used to provide a copy functionality for each HTML template. Upon clicking, the corresponding HTML code is copied to the clipboard using the copyCodeToClipboard function. A temporary alert is displayed to confirm that the code has been copied, which auto-dismisses after 3 seconds.

// The code snippets for Home, About, and Contact pages are displayed in syntax-highlighted format using the SyntaxHighlighter component. Each code snippet is enclosed within a <div> element and labeled appropriately.

// In summary, the 'Week7' component provides a user-friendly interface for viewing and copying various HTML templates. It employs various technologies, including React, react-syntax-highlighter, and Bootstrap, to achieve both its functionality and styling, enhancing the overall user experience.

// Light as SyntaxHighlighter
// What It Is:
// "Light as SyntaxHighlighter" is a streamlined variant of the react-syntax-highlighter library, specifically optimized for minimal bundle size. This version includes only a subset of languages and styles, reducing the overall footprint of the package.

// What It Provides:
// The library allows you to add syntax-highlighted code blocks to your React application. You can select from various styles and specify which programming language you're using to ensure that the code is highlighted accurately.

// How to Use It:
// To use this feature, you need to install the react-syntax-highlighter package via your package manager. Once installed, import the "Light as SyntaxHighlighter" component into your React file. Then, you can use this component within your JSX code. You'll need to specify attributes such as 'language' and 'style' to indicate which language the code is in and how the highlighted code should look. This is generally done by passing these as props to the SyntaxHighlighter component.

// docco
// What It Is:
// "docco" is a specific style scheme for code highlighting provided by the react-syntax-highlighter package. It's named after the original Docco, a quick-and-dirty documentation generator, but in this context, it refers to a particular aesthetic for displaying code.

// What It Provides:
// The "docco" style offers a clean and readable layout for your code, making it easier for users to understand the code snippets you are presenting. It mostly uses a light background with dark text, which is widely considered to be easy on the eyes.

// How to Use It:
// You can specify that you want to use the "docco" style when you are setting up your SyntaxHighlighter component. There's an attribute named 'style' where you can specify that you want to use "docco." You would generally import this style from the react-syntax-highlighter package and then pass it as a prop to the SyntaxHighlighter component.
