// Elements used in the code:
// - useState: A React Hook for managing component state.
// - SyntaxHighlighter: A component for syntax highlighting code.
// - docco: A code highlighting style from react-syntax-highlighter.
// - <div>: Used for structuring and grouping content in JSX.
// - <button>: Represents a clickable button in HTML.
// - <h4>: An HTML heading element with a medium level of importance.
// - <hr>: Represents a thematic break, often used for section separation.

// CSS Modules classes used in the code:
// - container: Styles for the main container of the component.
// - row: Styles for a row within the container.
// - col-auto: Styles for a column with automatic width.
// - alert: Styles for an alert message.
// - text-info: Styles for text with an 'info' color.
// - mt-3: Margin-top utility class with a value of 3.
// - code-snippet: Styles for a code snippet container.

// JavaScript functions used in the code:
// - useState: A React Hook used to manage component state.
// - navigator.clipboard.writeText(code): A function for copying text to the clipboard.
// - setTimeout(callback, delay): Sets a timer for executing a callback function after a specified delay.

// Detailed Description:
// This code defines a React functional component named 'Week11' that serves as a code snippet display and copying tool. The component provides a user interface for displaying and copying HTML, JavaScript, and CSS code snippets.

// Within the 'Week11' component, several elements and CSS Modules classes are utilized to structure and style the user interface. A main container ('container') holds the entire content. Rows and columns ('row' and 'col-auto') are used to create a responsive layout, ensuring proper alignment of elements.

// Buttons are included to allow users to copy code snippets to their clipboard. These buttons trigger the 'copyCodeToClipboard' function when clicked, which utilizes the Clipboard API to copy the code and provides feedback to the user.

// Additionally, an alert message is displayed when code is successfully copied, using the 'alert' and 'text-info' classes to style the message. The alert is automatically removed after a brief delay using the 'setTimeout' function.

// Code snippets are displayed within separate containers ('code-snippet') for HTML, JavaScript, and CSS. Each container contains a heading ('h4') indicating the code type and a 'SyntaxHighlighter' component to display the code with syntax highlighting.

// Overall, the 'Week11' component offers a user-friendly interface for showcasing and copying code snippets. It leverages React, React Bootstrap, and CSS Modules to create a structured and visually appealing code presentation tool, enhancing the development experience for users.

import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Week11() {
  const [copiedCode, setCopiedCode] = useState(null);

  const indexHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic Tac Toe</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="container">
    <h1 id="nameStatus">Tic Tac Toe</h1>
    <button id="restartBtn">Restart</button>
    <hr />
    <div id="tttboard">
      <div class="box" id="0"></div>
      <div class="box" id="1"></div>
      <div class="box" id="2"></div>
      <div class="box" id="3"></div>
      <div class="box" id="4"></div>
      <div class="box" id="5"></div>
      <div class="box" id="6"></div>
      <div class="box" id="7"></div>
      <div class="box" id="8"></div>
    </div>
    <hr />
  </div>
  <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
  <script src="index.js"></script>
</body>
</html>`;

  const indexJsCode = `let nameStatus = document.getElementById("nameStatus");
let restartButton = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));
let winnerIndicator = getComputedStyle(document.body).getPropertyValue("--winner");
const X_Player = "X";
const O_Player = "O";
let currentPlayer = X_Player;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach(box => box.addEventListener("click", boxClicked));
}

function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (playerWon() !== false) {
      nameStatus.innerHTML = \`\${currentPlayer} is the winner!\`
      let winner = playerWon();
      winner.map(box => boxes[box].style.backgroundColor = winnerIndicator);
      return;
    }
  }
  currentPlayer = currentPlayer === X_Player ? O_Player : X_Player;
}

restartButton.addEventListener("click", restart);

function restart() {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach(box => {
    box.innerText = "";
    box.style.backgroundColor = ''
  });
  nameStatus.innerHTML = 'Tic Tac Toe'
  currentPlayer = X_Player;
}

const winningArrayCombos = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

function playerWon() {
  for (const condition of winningArrayCombos) {
    let [a, b, c] = condition;
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}

startGame();`;

  const stylesCssCode = `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --orange: #f26d21;
  --winner: #60b347;
}

body {
  color: var(--orange);
  font-family: 'Bradley Hand', cursive;
}

h1 {
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
}

.container {
  padding: 40px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #636872;
}

#tttboard {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

.box {
  width: 150px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: var(--orange);
  background-color: var(--orange);
  color: white;
  font-size: 120px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transition: all 0.3s ease-in-out;
}

.box:nth-child(3n) {
  border-right: none;
}

.box:nth-child(6n) ~ .box {
  border-bottom: none;
}

button {
  position: relative;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  background-color: var(--orange);
  color: white;
  border-color: var(--orange);
  font-size: 18px;
  transition: 200ms transform;
  font-weight: 600;
}

button:hover {
  cursor: pointer;
  transform: translateY(-2px);
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
      <h3 className="text-info text-center mt-3">Week 11: JQuery & AJAX</h3>
      <hr />
      <div className="row justify-content-around">
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(indexHtmlCode)}>Copy index.html</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(indexJsCode)}>Copy index.js</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(stylesCssCode)}>Copy styles.css</button>
        </div>
      </div>

      {copiedCode && (
        <div className="alert alert-success mt-3">Code copied to clipboard!</div>
      )}

      <hr />

      <div className="code-snippet">
        <h4>index.html</h4>
        <SyntaxHighlighter language="html" style={docco}>
          {indexHtmlCode}
        </SyntaxHighlighter>
      </div>

      <hr />

      <div className="code-snippet">
        <h4>index.js</h4>
        <SyntaxHighlighter language="javascript" style={docco}>
          {indexJsCode}
        </SyntaxHighlighter>
      </div>

      <hr />

      <div className="code-snippet">
        <h4>styles.css</h4>
        <SyntaxHighlighter language="css" style={docco}>
          {stylesCssCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Week11;
