import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Week8() {
  const [copiedCode, setCopiedCode] = useState(null);

  const cssCode = ` body {
    background-color: rgb(38, 113, 235);
  }
  
  h1 {
    color: goldenrod;
  }
  
  h2 {
    color: gold;
  }
  
  div {
    background-color: cornflowerblue;
    border-style: solid;
    border-color: black;
    border-radius: 5px;
  }
  
  .shadow-text {
    text-shadow: black .5px .5px;
  }
  
  #large-paragraph {
    font-size: 20px;
    color: white;
    background-color: black;
  }
  
  p {
    border-radius: 5px;
    font-size: 20px;
  }
  
  .p1 {
    font-size: 20px;
    font-weight: bold;
  }
  
  ul {
    border-radius: 5px;
    font-size: 20px;
    color: white;
    background-color: black;
  }
  
  ol {
    border-radius: 5px;
    color: red;
  }
  
  img {
    border-style: solid;
    border-color: black;
    border-radius: 5px;
  }
  
  table {
    border-style: solid;
    border-color: black;
    border-radius: 10px;
    padding: 10%;
  }
  
  tr, th, td {
    color-scheme: normal;
    color: black;
  }
  
  th {
    font-size: 30px;
  }
  
  form {
    border-style: solid;
    border-color: black;
    border-radius: 10px;
    padding: 2%;
  }`;

  const cssPropertiesReport = (
    <div>
      <h3 className="text-info">CSS Properties</h3>
      <hr />
      <h4 className="text-info">Box Model and Sizing Properties</h4>
      <ul className="list-unstyled text-white">
        <li style={{ marginLeft: '20px' }}>width - Sets the width of an element.</li>
        <li style={{ marginLeft: '20px' }}>height - Sets the height of an element.</li>
        <li style={{ marginLeft: '20px' }}>margin - Sets the margin area on all four sides of an element.</li>
        <li style={{ marginLeft: '20px' }}>padding - Sets the padding area on all four sides of an element.</li>
        <li style={{ marginLeft: '20px' }}>border - Sets the border on all four sides of an element.</li>
        <li style={{ marginLeft: '20px' }}>box-sizing - Defines how the width and height of an element are calculated.</li>
        <li style={{ marginLeft: '20px' }}>max-width - Sets the maximum width of an element.</li>
        <li style={{ marginLeft: '20px' }}>min-width - Sets the minimum width of an element.</li>
        <li style={{ marginLeft: '20px' }}>max-height - Sets the maximum height of an element.</li>
        <li style={{ marginLeft: '20px' }}>min-height - Sets the minimum height of an element.</li>
      </ul>

      <h4 className="text-info">Text and Font Styling</h4>
      <ul className="list-unstyled text-white">
        <li style={{ marginLeft: '20px' }}>font-family - Specifies the font for text.</li>
        <li style={{ marginLeft: '20px' }}>font-size - Sets the size of the font.</li>
        <li style={{ marginLeft: '20px' }}>font-weight - Sets the thickness of characters in text.</li>
        <li style={{ marginLeft: '20px' }}>text-align - Sets the horizontal alignment of text.</li>
        <li style={{ marginLeft: '20px' }}>line-height - Sets the height of line boxes.</li>
        <li style={{ marginLeft: '20px' }}>color - Sets the color of text.</li>
        <li style={{ marginLeft: '20px' }}>text-transform - Controls the capitalization of text.</li>
        <li style={{ marginLeft: '20px' }}>letter-spacing - Sets the spacing between letters.</li>
        <li style={{ marginLeft: '20px' }}>text-indent - Sets the first line indent of a block of text.</li>
        <li style={{ marginLeft: '20px' }}>white-space - Sets how white space inside the element is handled.</li>
      </ul>

      <h4 className="text-info">Background</h4>
      <ul className="list-unstyled text-white">
        <li style={{ marginLeft: '20px' }}>background-color - Sets the background color of an element.</li>
        <li style={{ marginLeft: '20px' }}>background-image - Sets one or several background images for an element.</li>
        <li style={{ marginLeft: '20px' }}>background-size - Specifies the size of the background images.</li>
        <li style={{ marginLeft: '20px' }}>background-repeat - Sets if/how a background image will be repeated.</li>
        <li style={{ marginLeft: '20px' }}>background-position - Sets the initial position for each background image.</li>
      </ul>

      <h4 className="text-info">Display and Positioning</h4>
      <ul className="list-unstyled text-white">
        <li style={{ marginLeft: '20px' }}>display - Sets how an element should be displayed.</li>
        <li style={{ marginLeft: '20px' }}>position - Sets the type of positioning for an element.</li>
        <li style={{ marginLeft: '20px' }}>top, right, bottom, left - Sets the top, right, bottom, and left positions of a positioned element.</li>
        <li style={{ marginLeft: '20px' }}>z-index - Sets the stack order of a positioned element.</li>
        <li style={{ marginLeft: '20px' }}>float - Specifies how an element should float.</li>
      </ul>

      <h4 className="text-info">Flexbox and Grid</h4>
      <ul className="list-unstyled text-white">
        <li style={{ marginLeft: '20px' }}>flex - Shorthand property for setting all flex properties at once.</li>
        <li style={{ marginLeft: '20px' }}>grid - Shorthand for setting all of the explicit grid properties at once.</li>
        <li style={{ marginLeft: '20px' }}>grid-row - Determines a grid item’s location within the grid row.</li>
        <li style={{ marginLeft: '20px' }}>grid-column - Determines a grid item’s location within the grid column.</li>
        <li style={{ marginLeft: '20px' }}>justify-content - Aligns items along the main axis of the flex container.</li>
      </ul>

      <h4 className="text-info">Transitions and Animations</h4>
      <ul className="list-unstyled text-white">
        <li style={{ marginLeft: '20px' }}>transition - Shorthand property for setting transition properties.</li>
        <li style={{ marginLeft: '20px' }}>animation - Shorthand property for setting various animation properties.</li>
        <li style={{ marginLeft: '20px' }}>transform - Applies a 2D or 3D transformation to an element.</li>
        <li style={{ marginLeft: '20px' }}>animation-delay - Specifies when the animation will start.</li>
        <li style={{ marginLeft: '20px' }}>transition-timing-function - Specifies the speed curve of the transition effect.</li>
      </ul>

      <h4 className="text-info">Others</h4>
      <ul className="list-unstyled text-white">
        <li style={{ marginLeft: '20px' }}>opacity - Sets the opacity level for an element.</li>
        <li style={{ marginLeft: '20px' }}>visibility - Sets whether an element is visible.</li>
        <li style={{ marginLeft: '20px' }}>overflow - Specifies what should happen if the content overflows an element's box.</li>
        <li style={{ marginLeft: '20px' }}>cursor - Sets the type of cursor to be displayed.</li>
        <li style={{ marginLeft: '20px' }}>list-style - Shorthand property for setting all the properties for a list item.</li>
        <li style={{ marginLeft: '20px' }}>outline - Sets all the outline properties in a single declaration.</li>
        <li style={{ marginLeft: '20px' }}>table-layout - Sets the algorithm used to lay out table cells, rows, and columns.</li>
        <li style={{ marginLeft: '20px' }}>border-collapse - Sets whether table borders should collapse into a single border or be separated.</li>
        <li style={{ marginLeft: '20px' }}>word-wrap - Allows unbreakable words to be broken.</li>
        <li style={{ marginLeft: '20px' }}>clip-path - Clips an element to a basic shape or an SVG source.</li>
      </ul>
    </div>
  );

  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 3000);
    });
  };

  return (
    <div className="container">
      <hr />
      <h3 className="text-info text-center mt-3">Week 8: CSS</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(cssCode)}>Copy CSS Code</button>
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={() => copyCodeToClipboard(cssPropertiesReport)}>Copy CSS Properties</button>
        </div>
      </div>

      {copiedCode && (
        <div className="alert alert-success mt-3">Code copied to clipboard!</div>
      )}

      <hr />

      <div className="code-snippet">
        <h4>styles.css</h4>
        <SyntaxHighlighter language="css" style={docco}>
          {cssCode}
        </SyntaxHighlighter>
      </div>

      <hr />

      <div className="code-snippet">
        {cssPropertiesReport}
      </div>
    </div>
  );
}

export default Week8;

// Elements used in the code:
// - <div>: Represents a HTML div element.
// - <h3>: Represents a HTML heading element.
// - <hr>: Represents a thematic break or horizontal rule.
// - <button>: Represents a standard HTML button element.

// CSS Properties:
// Box Model and Sizing Properties
// - border-radius - Sets the border radius of an element.

// Text and Font Styling
// - color - Sets the color of text.
// - font-size - Sets the size of the font.

// Background
// - background-color - Sets the background color of an element.

// Display and Positioning
// - display - Sets how an element should be displayed.
// - position - Sets the type of positioning for an element.
// - top, right, bottom, left - Sets the positions of a positioned element.

// Others
// - opacity - Sets the opacity level for an element.

// Detailed Description:
// This code defines a React functional component named 'Week8' that represents a section of a web page dedicated to showcasing CSS properties and code snippets. It includes HTML elements like divs, headings, buttons, and horizontal rules for structuring and formatting content.

// In the CSS section, various CSS properties are used to style elements. These properties include those related to box model and sizing, text and font styling, background, display and positioning, and others. The properties are applied to elements within the component to achieve desired styling effects.

// The component uses CSS Modules for styling, which is not explicitly mentioned in the code but is implied by the use of CSS classes like 'text-info' and 'list-unstyled.' These classes are assumed to be defined in CSS Modules and applied to elements.

// Overall, the 'Week8' component serves the purpose of displaying CSS-related content, including code snippets and property descriptions, in a structured and styled manner.
