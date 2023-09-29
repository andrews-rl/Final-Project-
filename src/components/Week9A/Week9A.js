import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Week9A() {
  // State to track whether code is copied to clipboard
  const [copiedCode, setCopiedCode] = useState(null);
// Define the content of the Bootstrap CSS properties report
  const bootstrapCssPropertiesReport = (
    <div>

      <h4 className="text-info">Box Model and Sizing Properties</h4>
      <ul className="list-unstyled text-white" style={{ marginLeft: '20px' }}>
        <li>
          <strong>width</strong> - Sets the width of an element.
          <p>Usage: Width can be set using values like pixels (px), percentages (%), or other CSS units.</p>
          <p>Example: <code>width: 100px;</code></p>
        </li>
        <li>
          <strong>height</strong> - Sets the height of an element.
          <p>Usage: Height can be set using values like pixels (px), percentages (%), or other CSS units.</p>
          <p>Example: <code>height: 200px;</code></p>
        </li>
        <li>
          <strong>margin</strong> - Sets the margin area on all four sides of an element.
          <p>Usage: Define margins using values like pixels (px), percentages (%), or other CSS units.</p>
          <p>Example: <code>margin: 10px;</code></p>
        </li>
        <li>
          <strong>padding</strong> - Sets the padding area on all four sides of an element.
          <p>Usage: Define padding using values like pixels (px), percentages (%), or other CSS units.</p>
          <p>Example: <code>padding: 20px;</code></p>
        </li>
        <li>
          <strong>border</strong> - Sets the border on all four sides of an element.
          <p>Usage: Specify border properties like style, width, and color.</p>
          <p>Example: <code>border: 1px solid #000;</code></p>
        </li>
        <li>
          <strong>box-sizing</strong> - Defines how the width and height of an element are calculated.
          <p>Usage: Determine how an element's dimensions are calculated, such as <code>content-box</code> or <code>border-box</code>.</p>
          <p>Example: <code>box-sizing: border-box;</code></p>
        </li>
        <li>
          <strong>max-width</strong> - Sets the maximum width of an element.
          <p>Usage: Limit the maximum width of an element.</p>
          <p>Example: <code>max-width: 500px;</code></p>
        </li>
        <li>
          <strong>min-width</strong> - Sets the minimum width of an element.
          <p>Usage: Specify the minimum width of an element.</p>
          <p>Example: <code>min-width: 200px;</code></p>
        </li>
        <li>
          <strong>max-height</strong> - Sets the maximum height of an element.
          <p>Usage: Limit the maximum height of an element.</p>
          <p>Example: <code>max-height: 300px;</code></p>
        </li>
        <li>
          <strong>min-height</strong> - Sets the minimum height of an element.
          <p>Usage: Specify the minimum height of an element.</p>
          <p>Example: <code>min-height: 100px;</code></p>
        </li>
      </ul>

      <h4 className="text-info">Text and Font Styling</h4>
      <ul className="list-unstyled text-white" style={{ marginLeft: '20px' }}>
        <li>
          <strong>font-family</strong> - Specifies the font for text.
          <p>Usage: Set the font family of text, such as Arial, Helvetica, sans-serif.</p>
          <p>Example: <code>font-family: Arial, sans-serif;</code></p>
        </li>
        <li>
          <strong>font-size</strong> - Sets the size of the font.
          <p>Usage: Define the font size using values like pixels (px), em, or rem.</p>
          <p>Example: <code>font-size: 16px;</code></p>
        </li>
        <li>
          <strong>font-weight</strong> - Sets the thickness of characters in text.
          <p>Usage: Specify font weight as values like <code>normal</code>, <code>bold</code>, or numeric values.</p>
          <p>Example: <code>font-weight: bold;</code></p>
        </li>
        <li>
          <strong>text-align</strong> - Sets the horizontal alignment of text.
          <p>Usage: Align text within its container, options include <code>left</code>, <code>center</code>, <code>right</code>.</p>
          <p>Example: <code>text-align: center;</code></p>
        </li>
        <li>
          <strong>line-height</strong> - Sets the height of line boxes.
          <p>Usage: Define the space between lines of text.</p>
          <p>Example: <code>line-height: 1.5;</code></p>
        </li>
        <li>
          <strong>color</strong> - Sets the color of text.
          <p>Usage: Specify the text color using color names or hexadecimal values.</p>
          <p>Example: <code>color: #333;</code></p>
        </li>
        <li>
          <strong>text-transform</strong> - Controls the capitalization of text.
          <p>Usage: Transform text to <code>uppercase</code>, <code>lowercase</code>, or <code>capitalize</code>.</p>
          <p>Example: <code>text-transform: uppercase;</code></p>
        </li>
        <li>
          <strong>letter-spacing</strong> - Sets the spacing between letters.
          <p>Usage: Adjust the space between characters in text.</p>
          <p>Example: <code>letter-spacing: 1px;</code></p>
        </li>
        <li>
          <strong>text-indent</strong> - Sets the first line indent of a block of text.
          <p>Usage: Indent the first line of a paragraph or block of text.</p>
          <p>Example: <code>text-indent: 20px;</code></p>
        </li>
        <li>
          <strong>white-space</strong> - Sets how white space inside the element is handled.
          <p>Usage: Control how whitespace, such as spaces and line breaks, is displayed.</p>
          <p>Example: <code>white-space: nowrap;</code></p>
        </li>
      </ul>

      <h4 className="text-info">Background</h4>
      <ul className="list-unstyled text-white" style={{ marginLeft: '20px' }}>
        <li>
          <strong>background-color</strong> - Sets the background color of an element.
          <p>Usage: Define a background color using color names or hexadecimal values.</p>
          <p>Example: <code>background-color: #f0f0f0;</code></p>
        </li>
        <li>
          <strong>background-image</strong> - Sets one or several background images for an element.
          <p>Usage: Specify one or more image URLs as the background.</p>
          <p>Example: <code>background-image: url('image.jpg');</code></p>
        </li>
        <li>
          <strong>background-size</strong> - Specifies the size of the background images.
          <p>Usage: Set the size of background images using values like <code>cover</code> or <code>contain</code>.</p>
          <p>Example: <code>background-size: cover;</code></p>
        </li>
        <li>
          <strong>background-repeat</strong> - Sets if/how a background image will be repeated.
          <p>Usage: Control how background images repeat, options include <code>repeat</code> and <code>no-repeat</code>.</p>
          <p>Example: <code>background-repeat: repeat-x;</code></p>
        </li>
        <li>
          <strong>background-position</strong> - Sets the initial position for each background image.
          <p>Usage: Define the starting position of background images.</p>
          <p>Example: <code>background-position: center top;</code></p>
        </li>
      </ul>

      <h4 className="text-info">Display and Positioning</h4>
      <ul className="list-unstyled text-white" style={{ marginLeft: '20px' }}>
        <li>
          <strong>display</strong> - Sets how an element should be displayed.
          <p>Usage: Control the display style of an element, such as <code>block</code> or <code>inline</code>.</p>
          <p>Example: <code>display: flex;</code></p>
        </li>
        <li>
          <strong>position</strong> - Sets the type of positioning for an element.
          <p>Usage: Specify the positioning method, like <code>relative</code> or <code>absolute</code>.</p>
          <p>Example: <code>position: absolute;</code></p>
        </li>
        <li>
          <strong>top, right, bottom, left</strong> - Sets the top, right, bottom, and left positions of a positioned element.
          <p>Usage: Define the position of an element from its containing element.</p>
          <p>Example: <code>top: 10px;</code></p>
        </li>
        <li>
          <strong>z-index</strong> - Sets the stack order of a positioned element.
          <p>Usage: Control the stacking order of elements on the z-axis.</p>
          <p>Example: <code>z-index: 1;</code></p>
        </li>
        <li>
          <strong>float</strong> - Specifies how an element should float.
          <p>Usage: Determine how an element should float, such as <code>left</code> or <code>right</code>.</p>
          <p>Example: <code>float: left;</code></p>
        </li>
      </ul>

      <h4 className="text-info">Flexbox and Grid</h4>
      <ul className="list-unstyled text-white" style={{ marginLeft: '20px' }}>
        <li>
          <strong>flex</strong> - Shorthand property for setting all flex properties at once.
          <p>Usage: Use the <code>flex</code> property to set multiple flex properties simultaneously.</p>
          <p>Example: <code>flex: 1 1 200px;</code></p>
        </li>
        <li>
          <strong>grid</strong> - Shorthand for setting all of the explicit grid properties at once.
          <p>Usage: Set various grid properties using the <code>grid</code> shorthand.</p>
          <p>Example: <code>grid: 1fr 1fr / 50% 50%;</code></p>
        </li>
        <li>
          <strong>grid-row</strong> - Determines a grid item’s location within the grid row.
          <p>Usage: Specify where a grid item should be placed along the grid row axis.</p>
          <p>Example: <code>grid-row: 2 / span 3;</code></p>
        </li>
        <li>
          <strong>grid-column</strong> - Determines a grid item’s location within the grid column.
          <p>Usage: Specify where a grid item should be placed along the grid column axis.</p>
          <p>Example: <code>grid-column: 2 / span 2;</code></p>
        </li>
        <li>
          <strong>justify-content</strong> - Aligns items along the main axis of the flex container.
          <p>Usage: Align and distribute items along the main axis of a flex container.</p>
          <p>Example: <code>justify-content: center;</code></p>
        </li>
      </ul>

      <h4 className="text-info">Transitions and Animations</h4>
      <ul className="list-unstyled text-white" style={{ marginLeft: '20px' }}>
        <li>
          <strong>transition</strong> - Shorthand property for setting transition properties.
          <p>Usage: Set multiple transition properties like <code>transition-property</code>, <code>transition-duration</code>, and more.</p>
          <p>Example: <code>transition: opacity 0.3s ease-in-out;</code></p>
        </li>
        <li>
          <strong>animation</strong> - Shorthand property for setting various animation properties.
          <p>Usage: Define animations using properties like <code>animation-name</code>, <code>animation-duration</code>, and more.</p>
          <p>Example: <code>animation: slide 2s ease-in-out infinite;</code></p>
        </li>
        <li>
          <strong>transform</strong> - Applies a 2D or 3D transformation to an element.
          <p>Usage: Apply transformations like rotation, scaling, and translation to elements.</p>
          <p>Example: <code>transform: rotate(45deg);</code></p>
        </li>
        <li>
          <strong>animation-delay</strong> - Specifies when the animation will start.
          <p>Usage: Set a delay before an animation starts.</p>
          <p>Example: <code>animation-delay: 1s;</code></p>
        </li>
        <li>
          <strong>transition-timing-function</strong> - Specifies the speed curve of the transition effect.
          <p>Usage: Define the timing function for transitions, such as <code>ease</code>, <code>linear</code>, or <code>cubic-bezier</code>.</p>
          <p>Example: <code>transition-timing-function: ease-in-out;</code></p>
        </li>
      </ul>

      <h4 className="text-info">Others</h4>
      <ul className="list-unstyled text-white" style={{ marginLeft: '20px' }}>
        <li>
          <strong>opacity</strong> - Sets the opacity level for an element.
          <p>Usage: Control the transparency of an element, where <code>0</code> is fully transparent, and <code>1</code> is fully opaque.</p>
          <p>Example: <code>opacity: 0.7;</code></p>
        </li>
        <li>
          <strong>visibility</strong> - Sets whether an element is visible.
          <p>Usage: Toggle the visibility of an element using values like <code>visible</code> or <code>hidden</code>.</p>
          <p>Example: <code>visibility: hidden;</code></p>
        </li>
        <li>
          <strong>overflow</strong> - Specifies what should happen if the content overflows an element's box.
          <p>Usage: Define the behavior when content overflows the element, like <code>auto</code>, <code>scroll</code>, or <code>hidden</code>.</p>
          <p>Example: <code>overflow: scroll;</code></p>
        </li>
        <li>
          <strong>cursor</strong> - Sets the type of cursor to be displayed.
          <p>Usage: Define the cursor style when hovering over an element.</p>
          <p>Example: <code>cursor: pointer;</code></p>
        </li>
        <li>
          <strong>list-style</strong> - Shorthand property for setting all the properties for a list item.
          <p>Usage: Set list properties like <code>list-style-type</code>, <code>list-style-position</code>, and <code>list-style-image</code>.</p>
          <p>Example: <code>list-style: square inside url('icon.png');</code></p>
        </li>
        <li>
          <strong>outline</strong> - Sets all the outline properties in a single declaration.
          <p>Usage: Specify outline properties like <code>outline-color</code>, <code>outline-style</code>, and <code>outline-width</code>.</p>
          <p>Example: <code>outline: 2px solid red;</code></p>
        </li>
        <li>
          <strong>table-layout</strong> - Sets the algorithm used to lay out table cells, rows, and columns.
          <p>Usage: Control how tables are displayed and how they allocate space.</p>
          <p>Example: <code>table-layout: fixed;</code></p>
        </li>
        <li>
          <strong>border-collapse</strong> - Sets whether table borders should collapse into a single border or be separated.
          <p>Usage: Determine the border behavior in tables, including <code>collapse</code> and <code>separate</code>.</p>
          <p>Example: <code>border-collapse: collapse;</code></p>
        </li>
        <li>
          <strong>word-wrap</strong> - Allows unbreakable words to be broken.
          <p>Usage: Control how long words and strings of text are handled in content.</p>
          <p>Example: <code>word-wrap: break-word;</code></p>
        </li>
        <li>
          <strong>clip-path</strong> - Clips an element to a basic shape or an SVG source.
          <p>Usage: Create complex clipping paths for elements using shapes or SVG paths.</p>
          <p>Example: <code>clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);</code></p>
        </li>
      </ul>
      <hr />

      <h4 className="text-info">Using Bootstrap CSS Properties in Regular CSS</h4>
      <p>
        To use Bootstrap CSS properties in regular CSS, simply apply the properties to your HTML elements using CSS
        selectors. For example, you can create a CSS class and apply it to an element:
      </p>
      <SyntaxHighlighter language="css" style={docco}>
        {`.my-box {
  width: 200px;
  height: 200px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  line-height: 200px;
}`}
      </SyntaxHighlighter>
      <p>
        Then, add the <code>my-box</code> class to your HTML element:
      </p>
      <SyntaxHighlighter language="html" style={docco}>
        {`<div class="my-box">My Box</div>`}
      </SyntaxHighlighter>
      <p>
        This will apply the specified Bootstrap CSS properties to the element, giving it a width, height, background
        color, text color, and more.
      </p>
      <hr />

      <h4 className="text-info">Conclusion</h4>
      <p>
        Bootstrap CSS properties provide a powerful set of tools for styling web pages. By understanding and using
        these properties effectively, you can create visually appealing and responsive web designs.
      </p>
    </div>
  );

   // Function to copy the code in the report to the clipboard
  const copyCodeToClipboard = () => {
    const el = document.createElement('textarea'); // Create a <textarea> element  // Combine all the code examples in the report into a single string for copying
    el.value = bootstrapCssPropertiesReport.props.children.reduce(
      (acc, current) => acc + current.props.children,
      ''
    );
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopiedCode('Copied to clipboard!');
  };

  return (
    <div className="container">
      <hr />
      <h3 className="text-info text-center">Week 9: Bootstrap CSS Properties</h3>
      
      <div className="row justify-content-center">
        <hr />
        <div className="col-auto">
          
          <button className="btn btn-info mb-3" onClick=  {copyCodeToClipboard}>
          Copy Code
          </button>
          
        </div>
        <hr />
      </div>
      {copiedCode && <div className="alert alert-success">{copiedCode}</div>}
      {bootstrapCssPropertiesReport}
      </div>
  );
}

export default Week9A;

// Elements used in the code:
// - <div>: Represents a container for organizing content.
// - <hr>: Represents a thematic break, often used for section separation.
// - <h3>: Represents a level 3 heading for displaying the component title.
// - <button>: Represents a clickable button element.
// - <p>: Represents a paragraph of text.
// - <SyntaxHighlighter>: A custom component for displaying code syntax highlighting.
// - <code>: Represents inline code snippets.

// CSS Modules classes used in the code:
// - styles.container: Applies styling to the main container of the component.
// - styles.textInfo: Styles for text with an "info" color.
// - styles.row: Styles for creating rows within the layout.
// - styles.colAuto: Styles for responsive column sizing.
// - styles.alertSuccess: Styles for displaying success messages.
// - styles.listUnstyled: Styles for creating an unordered list without list bullets.
// - styles.listItem: Styles for individual list items.
// - styles.code: Styles for code elements.
// - styles.syntaxHighlighter: Styles for syntax highlighting container.
// - styles.buttonInfo: Styles for buttons with an "info" variant.

// Bootstrap Classes (Modifiers) used in the code:
// - container: A Bootstrap class for creating responsive containers.
// - text-center: Centers text content within an element.
// - btn: A Bootstrap class for styling buttons.
// - btn-info: Sets the Bootstrap button variant to "info," changing the button color.
// - alert: A Bootstrap class for displaying alert messages.
// - alert-success: Sets the Bootstrap alert variant to "success," changing the alert color.

// Detailed Description:
// This code defines a React functional component named 'Week9A' that serves as a web page's content. The component focuses on explaining Bootstrap CSS properties and how to use them. It also provides the functionality to copy the code examples to the clipboard.

// The component starts by importing necessary modules, including React, React Syntax Highlighter (for code highlighting), and CSS styles defined in external files.

// Inside the component, a state variable 'copiedCode' is used to track whether code examples have been copied to the clipboard. It is initially set to 'null' and updated when the user clicks the "Copy Code" button.

// The main content of the component is structured as follows:
// - A Bootstrap container ('container') with centered text content.
// - A title ('<h3>') indicating the topic of the page.
// - A button ('<button>') labeled "Copy Code" that, when clicked, triggers the copying of code examples.
// - A success message displayed if code is successfully copied ('alert-success').
// - Detailed content about Bootstrap CSS properties, grouped by sections such as "Box Model and Sizing Properties," "Text and Font Styling," and more. Each section contains an unordered list ('<ul>') with list items ('<li>') explaining specific CSS properties, their usage, and examples. Code examples are displayed within '<code>' elements and are also syntax-highlighted using the 'SyntaxHighlighter' component.

// After the content, there's a 'copyCodeToClipboard' function that creates a temporary text area element ('<textarea>') to copy code examples to the clipboard when the "Copy Code" button is clicked. The copied code is combined into a single string and then removed from the DOM.

// Overall, this component serves as an educational resource for explaining Bootstrap CSS properties and offers a user-friendly way to copy code examples. It utilizes Bootstrap for styling and provides a clean and organized structure for presenting information.
