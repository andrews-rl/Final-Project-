// Elements used in the code:
// - <div>: Used for grouping and structuring content.
// - <button>: A standard HTML button element.
// - <h3>: A heading element.
// - <hr>: A horizontal rule element, used for visual separation.
// - <SyntaxHighlighter>: A component for syntax highlighting.
// - <SyntaxHighlighter>: A component for syntax highlighting.
// - <meta>: A metadata element.
// - <link>: A link element for external stylesheets.
// - <form>: A form element.
// - <label>: A label element for form labels.
// - <input>: An input element for form input.
// - <table>: A table element for tabular data.
// - <thead>: A table header element.
// - <tbody>: A table body element.
// - <tr>: A table row element.
// - <th>: A table header cell element.
// - <td>: A table data cell element.
// - <!-- -->: HTML comment used for indicating where table rows will be dynamically added.
// - <script>: A script element for including JavaScript files.

// CSS Modules classes used in the code:
// - styles.container: Applies styling to the container element.
// - styles.textInfo: Styles for text with the 'text-info' class.
// - styles.row: Styles for rows in the layout.
// - styles.colAuto: Styles for columns with automatic width.
// - styles.alertSuccess: Styles for success alert messages.
// - styles.codeSnippet: Styles for the code snippet container.
// - styles.textCenter: Styles for center-aligned text.
// - styles.mt3: Styles for margin-top with value 3.

// Bootstrap Classes (Modifiers) used in the code:
// - btn: A Bootstrap class for buttons.
// - btn-info: Sets the Bootstrap variant to 'info,' changing the button color.
// - btn-primary: A Bootstrap class for primary buttons.
// - btn-success: A Bootstrap class for success buttons.
// - container: A Bootstrap class for container elements.
// - alert: A Bootstrap class for alert messages.
// - alert-success: A Bootstrap class for success alert messages.
// - table: A Bootstrap class for tables.
// - table-dark: A Bootstrap class for dark-themed tables.
// - table-striped: A Bootstrap class for striped tables.

// Additional CSS classes used in the code:
// - mt-5: Sets top margin with value 5.
// - mt-3: Sets top margin with value 3.
// - col-md-4: Sets column width for medium-sized screens.
// - col-12: Sets column width for all screen sizes.
// - row g-3: Styles for rows with gutter spacing.
// - col-auto: Automatically adjusts column width.
// - text-center: Centers text horizontally.
// - text-info: Sets text color to the Bootstrap 'info' color.

// Detailed Description:
// This code defines a React functional component named 'Week10' that represents a web page or section related to Week 10, focusing on JavaScript and DOM Manipulation. The component includes a navigation bar, code snippets, and buttons to copy code to the clipboard.

// The code is structured using various HTML elements, Bootstrap classes, and CSS Modules classes. It starts with an outer container ('container') that encapsulates the entire content. Within this container, a heading ('h3') is centered and styled as 'text-info' to indicate the topic of Week 10.

// Below the heading, there are two buttons ('button') styled as 'btn btn-info' that allow users to copy code snippets to the clipboard when clicked. These buttons are contained within a row ('row') with columns ('col-auto') to manage their layout.

// If code is successfully copied, a success message is displayed using a Bootstrap alert with the class 'alert-success' and custom styling ('styles.alertSuccess').

// Following the buttons, two code snippets are presented using the 'SyntaxHighlighter' component. Each snippet is enclosed in a 'div' element with the class 'code-snippet' ('styles.codeSnippet'). The first snippet displays HTML code for an employee data form, and the second snippet shows JavaScript code for handling form submissions and updating a table dynamically.

// The code uses CSS Modules classes ('styles') for consistent and modular styling, ensuring that elements are visually appealing and easy to read.

// Overall, this 'Week10' component provides a structured and styled representation of Week 10-related content, including code examples and the ability to copy code for practical use or reference.


import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Week10() {
  const [copiedCode, setCopiedCode] = useState(null);

  const employeeHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Week 10 JS and DOM Manipulation</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
</head>
<body>
  <div class="container">
    <h1 class="mt-5">Employee Data</h1>
    <form id="employee-form" class="row g-3 mt-3">
      <div class="col-md-4">
        <label for="first-name" class="form-label">First Name</label>
        <input type="text" class="form-control" id="first-name" required>
      </div>
      <div class="col-md-4">
        <label for="last-name" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="last-name" required>
      </div>
      <div class="col-md-4">
        <label for="zip-code" class="form-label">Zip</label>
        <input type="text" class="form-control" id="zip-code" required>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    <hr>
    <table id="employee-table" class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Zip</th>
        </tr>
      </thead>
      <tbody>
        <!-- Table rows will be dynamically added here -->
      </tbody>
    </table>
  </div>
  <script src="index.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>`;

  const indexJsCode = `// JavaScript code for index.js
document.addEventListener('DOMContentLoaded', () => {
  const employeeForm = document.getElementById('employee-form');
  const employeeTable = document.getElementById('employee-table');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const zipCodeInput = document.getElementById('zip-code');

  employeeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const zipCode = zipCodeInput.value;

    const newRow = employeeTable.insertRow();
    newRow.innerHTML = \`
      <td>\${firstName}</td>
      <td>\${lastName}</td>
      <td>\${zipCode}</td>
    \`;

    firstNameInput.value = '';
    lastNameInput.value = '';
    zipCodeInput.value = '';
  });
});`;

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 3000);
    });
  };

  return (
    <div className="container">
      <hr />
      <h3 className="text-info text-center mt-3">Week 10: JavaScript & DOM Manipulation</h3>
      <hr />
      <div className="row justify-content-around">
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(employeeHtmlCode)}>Copy index.html</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(indexJsCode)}>Copy index.js</button>
        </div>
      </div>

      {copiedCode && (
        <div className="alert alert-success mt-3">Code copied to clipboard!</div>
      )}

      <hr />

      <div className="code-snippet">
        <h4>index.html</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {employeeHtmlCode}
        </SyntaxHighlighter>
      </div>

      <hr />

      <div className="code-snippet">
        <h4>index.js</h4>
        <SyntaxHighlighter language="javascript" style={docco}>
          {indexJsCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Week10;
