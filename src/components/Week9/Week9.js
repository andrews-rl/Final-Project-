import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Choose a code style

function Week9() {
  const [copiedCode, setCopiedCode] = useState(null);

  // HTML code for Home page
  const homeHtmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Project 09</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <h1>Home</h1>
        
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>
  `;

  // HTML code for About page
  const aboutHtmlCode = `
    <!-- Bootstrap-styled About page -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Project 09</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <h1>About</h1>
        
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>
  `;

  // HTML code for Contact page
  const contactHtmlCode = `
    <!-- Bootstrap-styled Contact page -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Project 09</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <h1>Contact</h1>
        
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>
  `;

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 3000);
    });
  };

  return (
    <div className="container">
      <hr />
      <h3 className="text-info text-center mt-3">Week 9: Bootstrap</h3>
      <hr />
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

      {copiedCode && (
        <div className="alert alert-success mt-3">Code copied to clipboard!</div>
      )}

      <hr />

      <div className="code-snippet">
        <h4>Home Page</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {homeHtmlCode}
        </SyntaxHighlighter>
      </div>

      <hr />

      <div className="code-snippet">
        <h4>About Page</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {aboutHtmlCode}
        </SyntaxHighlighter>
      </div>

      <hr />

      <div className="code-snippet">
        <h4>Contact Page</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {contactHtmlCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Week9;



// Summary:
// Elements used in the code:
// - <nav>: Represents the navigation bar container.
// - <div>: Used for grouping and structuring content.
// - <button>: A standard HTML button element.
// - <h4>: Represents a level 4 heading.
// - <SyntaxHighlighter>: A component for syntax highlighting.
// - <hr>: Represents a thematic break or horizontal line.

// Detailed Description:
// This code defines a React functional component named 'Week9'. It serves as a presentation of three HTML code snippets for different web pages: Home, About, and Contact. The component allows users to copy these code snippets to their clipboard.

// The component imports necessary modules, including React, React Syntax Highlighter, and styles for code highlighting.

// Three HTML code snippets ('homeHtmlCode', 'aboutHtmlCode', 'contactHtmlCode') are defined as string literals. Each code snippet represents the structure of a web page, including HTML tags, Bootstrap classes, and placeholder content.

// The component utilizes the 'useState' hook to manage the state of 'copiedCode', which is initially set to 'null'. This state variable is used to display a success message when a code snippet is copied to the clipboard.

// Buttons are provided for each HTML code snippet, allowing users to copy the respective code to their clipboard when clicked. The 'copyCodeToClipboard' function uses the 'navigator.clipboard' API to perform the copying operation. After copying, a success message is displayed for 3 seconds.

// The code snippets are displayed within 'SyntaxHighlighter' components, which apply syntax highlighting using the 'docco' style.

// The component is organized into sections for each code snippet, with horizontal lines ('<hr />') separating them. Each section includes a heading ('<h4>') indicating the page name and a 'SyntaxHighlighter' component displaying the HTML code.

// Overall, this component serves as an educational tool for presenting and copying Bootstrap-styled HTML code snippets for Home, About, and Contact pages. It combines React state management, Bootstrap styling, and code syntax highlighting to provide a user-friendly interface.
