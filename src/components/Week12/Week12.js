// Week 12: CRUD Application

// Introduction:
// Week 12 introduces a CRUD (Create, Read, Update, Delete) web application. The application is designed to manage contact information and provides a user-friendly interface for performing CRUD operations. The code is structured as a React functional component and includes HTML, JavaScript, and CSS for rendering and functionality.

// HTML Structure:
// The HTML structure defines the layout and elements of the web page. It includes a form for inputting contact details, buttons for CRUD operations, and a section for displaying contact data. Here's an overview of key HTML elements:
// - Buttons: Four buttons are provided for Create, Read, Update, and Delete operations.
// - Form Fields: Input fields for Name, ID#, Email, and Notes.
// - Data Display: A list element ('ul') is used to display contact information.
// - Additional Elements: An image, a joke container, and scripts for Bootstrap and jQuery are included.

// JavaScript Functionality:
// The JavaScript code provides functionality to interact with the web page and perform CRUD operations. It utilizes jQuery for DOM manipulation and AJAX requests to communicate with a backend API. Key functionalities include:
// - Fetch and Display Data: A function ('fetchAndDisplayData') fetches contact data from the API and displays it in the Data Display section.
// - Read Operation: Reading contact data based on the provided ID and populating form fields.
// - Create Operation: Creating new contact entries and sending them to the API.
// - Update Operation: Modifying existing contact data and updating it in the API.
// - Delete Operation: Deleting contact data based on the provided ID.
// - Fetching Jokes: Fetching a random joke from an external API and displaying it.

// CSS Styling:
// CSS is used for styling the web page, enhancing its visual appeal and user experience. Key CSS classes and styles are applied to various elements, including buttons, forms, containers, and images. Some notable styles include:
// - Button Styling: Custom styles for buttons, such as color, size, and spacing.
// - Form and Input Styling: Borders, padding, and margin settings for form elements.
// - Container Styling: Background color and margins for containers.
// - Image Styling: Border and sizing for the displayed image.

// Code Organization:
// The code is well-organized into separate sections for HTML, JavaScript, and CSS. Each section serves a specific purpose, making it easier to understand and maintain the codebase.

// Code Clipboard Copy:
// The code includes a feature that allows users to copy HTML, JavaScript, or CSS code snippets to their clipboard. This feature enhances code sharing and convenience for developers.

// Conclusion:
// Week 12's code represents a functional CRUD application that manages contact information. It demonstrates the integration of React, jQuery, and Bootstrap to create an interactive and visually appealing web application. The code is organized and includes comments for clarity, making it a valuable learning resource for web development.

// Import necessary modules and components from React and external libraries
import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Define the Week12 functional component
function Week12() {
  // Initialize state variable 'copiedCode' using the 'useState' hook
  const [copiedCode, setCopiedCode] = useState(null);

  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Promineo Week 12 CRUD</title>
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
      <link rel="stylesheet" href="style.css">
    </head>
    <body class="container">
      <div id="Button" class="button-container">
        <button id="Create" type="submit" title="Updates Database With New Contact Info(Must Add Unused ID Number)" class="custom-btn btn-lg mt-3 btn btn-primary p-2">Create</button>
        <button id="Read" type="submit" title="After Inputting ann Id, the Software Reads, Pulls and Displays Data Below" class="custom-btn btn-lg mt-3 btn btn-secondary p-2">Read</button>
        <button id="Update" type="submit" title="After Using the Read Button You Can Make Changes and Submit Changes to Database" class="custom-btn btn-lg mt-3 btn btn-success p-2">Update</button>
        <button id="Delete" type="submit" title="Deletes all Data Within the Fields from Database" class="custom-btn btn-lg mt-3 btn btn-danger p-2">Delete</button>
      </div>
      <form class="container custom-form mt-4">
        <div class="row">
          <div class="form-group col-md-6">
            <input id="name" type="text" class="form-control border border-info p-2" placeholder="Name">
          </div>
          <div class="form-group col-md-6">
            <input id="id" type="text" class="form-control border border-info p-2" placeholder="ID#">
          </div>
        </div>
        <div class="form-group">
          <input id="email" type="email" class="form-control border border-info p-2" placeholder="Email">
        </div>
        <div class="form-group">
          <textarea class="form-control border border-info p-2" id="textarea" rows="4" maxlength="200" placeholder="Notes (up to 200 characters)"></textarea>
        </div>
        <ul id="dataDisplay" class="list-group mt-3">
        </ul>
        <div class="row mt-4">
          <div class="col pt-2 d-flex"></div>
          <div class="col pt-2 d-flex justify-content-center">
            <img class="bordered-image" src="monkeyt.jpg" alt="Smart Monkey" width="150" height="150">
          </div>
          <div class="col pt-2 pb-2"></div>
        </div>
        <div class="row mt-4">
          <div class="col pt-2"></div>
          <div class="col-md-6 pt-2">
            <div id="joke-container" class="container form-control bg-white p-3 custom-width border border-info">
              <div class="text-center font-weight-bold fs-5">Jokes: Have you heard this one?</div>
              <div id="jokes" class="fs-6"></div>
            </div>
          </div>
          <div class="col pt-2"></div>
        </div>
      </form>
      <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="app.js"></script>
    </body>
    </html>
  `;

  const jsCode = `
    $(function () {
      function fetchAndDisplayData() {
        $.get("http://localhost:3000/people", function (data) {
          $("#dataDisplay").empty();
          data.forEach(function (person) {
            const item = \`
              <li class="list-group-item">
                <strong>\${person.name}</strong><br>
                Email: \${person.email}<br>
                Notes: \${person.notes}<br>
                ID#: \${person.id}
              </li>\`;
            $("#dataDisplay").append(item);
          });
        });
      }

      $("#Read").on("click", function () {
        const id = $("#id").val();
        if (id) {
          $.get(\`http://localhost:3000/people/\${id}\`, function (person) {
            if (person) {
              $("#name").val(person.name);
              $("#email").val(person.email);
              $("#textarea").val(person.notes);
            } else {
              alert("No data found for the given ID.");
            }
          });
        } else {
          alert("Please provide an ID to fetch data.");
        }
      });

      $("#Create").on("click", function () {
        const name = $("#name").val();
        const id = $("#id").val();
        const email = $("#email").val();
        const notes = $("#textarea").val();

        if (name && id && email && notes) {
          const newData = {
            id: parseInt(id),
            name: name,
            email: email,
            notes: notes
          };

          $.ajax({
            type: "POST",
            url: "http://localhost:3000/people",
            data: newData,
            success: function () {
              alert("Data created successfully!");
              fetchAndDisplayData();
              $("#name").val("");
              $("#id").val("");
              $("#email").val("");
              $("#textarea").val("");
            },
            error: function () {
              alert("Error creating data!");
            }
          });
        } else {
          alert("Please fill in all fields.");
        }
      });

      $("#Update").on("click", function () {
        const id = $("#id").val();
        const newName = $("#name").val();
        const newEmail = $("#email").val();
        const newNotes = $("#textarea").val();

        if (id && newName && newEmail && newNotes) {
          const updatedData = {
            name: newName,
            email: newEmail,
            notes: newNotes
          };

          $.ajax({
            type: "PATCH",
            url: \`http://localhost:3000/people/\${id}\`,
            data: updatedData,
            success: function () {
              alert("Data updated successfully!");
              fetchAndDisplayData();
              $("#name").val("");
              $("#id").val("");
              $("#email").val("");
              $("#textarea").val("");
            },
            error: function () {
              alert("Error updating data!");
            }
          });
        } else {
          alert("Please fill in all fields.");
        }
      });

      $("#Delete").on("click", function () {
        const id = $("#id").val();

        if (id) {
          $.ajax({
            type: "DELETE",
            url: \`http://localhost:3000/people/\${id}\`,
            success: function () {
              alert("Data deleted successfully!");
              fetchAndDisplayData();
              $("#name").val("");
              $("#id").val("");
              $("#email").val("");
              $("#textarea").val("");
            },
            error: function () {
              alert("Error deleting data!");
            }
          });
        } else {
          alert("Please provide an ID to delete.");
        }
      });
    });

    const randomJokeURL = 'https://official-joke-api.appspot.com/random_joke';

    $.get(randomJokeURL, (data) => {
        console.log(data);
        $('#jokes').prepend(\`<p> \${data.setup} </p>\`);
        $('#jokes').append(\`<p> \${data.punchline} </p>\`);
    });
  `;

  const cssCode = `
    .container {
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: #209ab3;
    }

    .button-container {
      text-align: center;
      margin-bottom: 20px;
    }

    .button-container .btn {
      margin-right: 10px;
    }

    .custom-form {
      color: #0dcaf0;
      padding: 20px;
      border-radius: 1px;
      margin-top: 20px;
    }

    .custom-form .form-group {
      margin-bottom: 15px;
    }

    #jokes {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    #joke-container {
      margin-bottom: 20px;
      max-width: 450px;
    }

    #joke-container .card {
      background-color: #0dcaf0;
      color: #fff;
      padding: 20px;
      border-radius: 1px;
    }

    .custom-width {
      width: 100%;
    }

    .bordered-image {
      border-radius: 5px;
      border: 1px solid #0dcaf0;
      box-sizing: content-box;
    }

    .custom-btn {
      width: 152px;
    }
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
      {/* Header */}
      <h3 className="text-info text-center mt-3">Week 12: CRUD</h3>
      <hr />
      {/* Buttons for Copying Code */}
      <div className="row justify-content-around">
        <div className="col-auto">
          {/* Button to Copy HTML Code */}
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(htmlCode)}>Copy HTML</button>
        </div>
        <div className="col-auto">
          {/* Button to Copy JavaScript Code */}
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(jsCode)}>Copy JavaScript</button>
        </div>
        <div className="col-auto">
          {/* Button to Copy CSS Code */}
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(cssCode)}>Copy CSS</button>
        </div>
      </div>

      {/* Success Alert */}
      {copiedCode && (
        <div className="alert alert-success mt-3">Code copied to clipboard!</div>
      )}

      <hr />

      {/* HTML Code Snippet */}
      <div className="code-snippet">
        <h4>HTML</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {htmlCode}
        </SyntaxHighlighter>
      </div>

      <hr />

      {/* JavaScript Code Snippet */}
      <div className="code-snippet">
        <h4>JavaScript</h4>
        <SyntaxHighlighter language="javascript" style={docco}>
          {jsCode}
        </SyntaxHighlighter>
      </div>

      <hr />

      {/* CSS Code Snippet */}
      <div className="code-snippet">
        <h4>CSS</h4>
        <SyntaxHighlighter language="css" style={docco}>
          {cssCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Week12;
