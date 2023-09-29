// Import the React library
import React from 'react';

// Define the Week4 functional component
function Week4() {
  // Render the JSX elements
  return (
    // Main container div
    <div className="container">
      {/* Horizontal rule */}
      <hr/>
      {/* Title of the page */}
      <h3 className="text-center text-info">Week 4: ECMAScript 6 & Intermediate JavaScript</h3>
      {/* Another horizontal rule */}
      <hr/>

      {/* Section for Question 1 */}
      <div className="mx-auto text-left">
        {/* Question 1 Text */}
        <p><strong><span className="text-info">Question 1:</span></strong> Create an array called ages that contains the following values: <strong>3, 9, 23, 64, 2, 8, 28, 93.</strong></p>
        {/* Answer to Question 1 */}
        <pre style={{ color: 'red' }}>{`const ages = [3, 9, 23, 64, 2, 8, 28, 93];`}</pre>
        {/* Explanation for Question 1 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We declare an array `ages` containing the provided values using standard JavaScript syntax.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 2 */}
      <div className="mx-auto text-left">
        {/* Question 2 Text */}
        <p><strong><span className="text-info">Question 2:</span></strong> Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically.</p>
        {/* Answer to Question 2 */}
        <pre style={{ color: 'red' }}>{`const ageDifference = ages[ages.length - 1] - ages[0];`}</pre>
        {/* Explanation for Question 2 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We calculate the age difference by subtracting the first element (ages[0]) from the last element (ages[ages.length - 1]) of the array. Using `ages.length - 1` helps us find the last element programmatically.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 3 */}
      <div className="mx-auto text-left">
        {/* Question 3 Text */}
        <p><strong><span className="text-info">Question 3:</span></strong> Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.</p>
        {/* Answer to Question 3 */}
        <pre style={{ color: 'red' }}>{`const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];`}</pre>
        {/* Explanation for Question 3 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We declare an array `names` containing the provided names using standard JavaScript syntax.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 4 */}
      <div className="mx-auto text-left">
        {/* Question 4 Text */}
        <p><strong><span className="text-info">Question 4:</span></strong> Use a loop to iterate through the array and calculate the average number of letters per name.</p>
        {/* Answer to Question 4 */}
        <pre style={{ color: 'red' }}>{`let totalLetters = 0; for (let i = 0; i < names.length; i++) { totalLetters += names[i].length; } const averageNameLength = totalLetters / names.length;`}</pre>
        {/* Explanation for Question 4 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We iterate through the `names` array, calculate the total number of letters in all names, and then divide by the number of names to find the average length.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 5 */}
      <div className="mx-auto text-left">
        {/* Question 5 Text */}
        <p><strong><span className="text-info">Question 5:</span></strong> Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.</p>
        {/* Answer to Question 5 */}
        <pre style={{ color: 'red' }}>{`let concatenatedNames = ''; for (let i = 0; i < names.length; i++) { concatenatedNames += names[i] + ' '; }`}</pre>
        {/* Explanation for Question 5 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We iterate through the `names` array and concatenate each name with a space to create a single string containing all names.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 6 */}
      <div className="mx-auto text-left">
        {/* Question 6 Text */}
        <p><strong><span className="text-info">Question 6:</span></strong> How do you access the last element of any array?</p>
        {/* Answer to Question 6 */}
        <pre style={{ color: 'red' }}>{`const lastElement = array[array.length - 1];`}</pre>
        {/* Explanation for Question 6 */}
        <p><strong><span className="text-info">Explanation:</span></strong> To access the last element of an array, you use `array[array.length - 1]`.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 7 */}
      <div className="mx-auto text-left">
        {/* Question 7 Text */}
        <p><strong><span className="text-info">Question 7:</span></strong> How do you access the first element of any array?</p>
        {/* Answer to Question 7 */}
        <pre style={{ color: 'red' }}>{`const firstElement = array[0];`}</pre>
        {/* Explanation for Question 7 */}
        <p><strong><span className="text-info">Explanation:</span></strong> To access the first element of an array, you use `array[0]`.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 8 */}
      <div className="mx-auto text-left">
        {/* Question 8 Text */}
        <p><strong><span className="text-info">Question 8:</span></strong> Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.</p>
        {/* Answer to Question 8 */}
        <pre style={{ color: 'red' }}>{`const nameLengths = []; for (let i = 0; i < names.length; i++) { nameLengths.push(names[i].length); }`}</pre>
        {/* Explanation for Question 8 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We create an empty array `nameLengths` and iterate through `names`, adding the length of each name to `nameLengths` using the `push` method.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 9 */}
      <div className="mx-auto text-left">
        {/* Question 9 Text */}
        <p><strong><span className="text-info">Question 9:</span></strong> Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.</p>
        {/* Answer to Question 9 */}
        <pre style={{ color: 'red' }}>{`let sum = 0; for (let i = 0; i < nameLengths.length; i++) { sum += nameLengths[i]; }`}</pre>
        {/* Explanation for Question 9 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We iterate through `nameLengths` and calculate the sum of its elements.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 10 */}
      <div className="mx-auto text-left">
        {/* Question 10 Text */}
        <p><strong><span className="text-info">Question 10:</span></strong> Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.</p>
        {/* Answer to Question 10 */}
        <pre style={{ color: 'red' }}>{`function concatenateWord(word, n) { return word.repeat(n); }`}</pre>
        {/* Explanation for Question 10 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We define a function `concatenateWord` that takes two parameters, `word` and `n`, and uses the `repeat` method to concatenate `word` to itself `n` times.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 11 */}
      <div className="mx-auto text-left">
        {/* Question 11 Text */}
        <p><strong><span className="text-info">Question 11:</span></strong> Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.</p>
        {/* Answer to Question 11 */}
        <pre style={{ color: 'red' }}>{`function getFullName(firstName, lastName) { return firstName + ' ' + lastName; }`}</pre>
        {/* Explanation for Question 11 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We define a function `getFullName` that takes `firstName` and `lastName` as parameters and returns their concatenation with a space in between.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 12 */}
      <div className="mx-auto text-left">
        {/* Question 12 Text */}
        <p><strong><span className="text-info">Question 12:</span></strong> Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.</p>
        {/* Answer to Question 12 */}
        <pre style={{ color: 'red' }}>{`function isSumGreaterThan100(numbers) { const sum = numbers.reduce((acc, num) => acc + num, 0); return sum > 100; }`}</pre>
        {/* Explanation for Question 12 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We define a function `isSumGreaterThan100` that takes an array of numbers, calculates their sum using `reduce`, and returns `true` if the sum is greater than 100.</p>
        {/* Horizontal rule */}
        <hr />
      </div>

      {/* Section for Question 13 */}
      <div className="mx-auto text-left">
        {/* Question 13 Text */}
        <p><strong><span className="text-info">Question 13:</span></strong> Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.</p>
        {/* Answer to Question 13 */}
        <pre style={{ color: 'red' }}>{`function isAverageGreaterThan(arr1, arr2) { const avg1 = arr1.reduce((acc, num) => acc + num, 0) / arr1.length; const avg2 = arr2.reduce((acc, num) => acc + num, 0) / arr2.length; return avg1 > avg2; }`}</pre>
        {/* Explanation for Question 13 */}
        <p><strong><span className="text-info">Explanation:</span></strong> We define a function `isAverageGreaterThan` that calculates the average of elements in two arrays and returns `true` if the average of the first array is greater than the average of the second array.</p>
        {/* Horizontal rule */}
        <hr />
      </div>
    </div>
  );
}

// Export the Week4 component
export default Week4;


// Elements used in the code
// div: A block-level container for grouping HTML elements.
// hr: A horizontal rule used for thematic breaks in the page.
// h3: Heading 3, used for sub-section titles.
// p: Paragraph element for containing text.
// strong: Bold text for emphasis.
// span: Inline container for styling a part of the text.
// pre: Preformatted text, retains both spaces and line breaks.
// Bootstrap Classes used in the code
// container: Sets the max-width of the content to 100% of the viewport width.
// text-center: Centers the text.
// text-info: Sets the text color to an "info" blue.
// text-left: Aligns the text to the left.
// text-white: Sets the text color to white.
// mx-auto: Centers the block horizontally.
// Detailed Description
// Import the React library to enable React features in this file.

// Define a functional component named Week4.

// The JSX returned by the component starts with a div with a class of 'container', providing a responsive fixed-width container.

// An hr element is used for a thematic break in content.

// An h3 element with classes 'text-center' and 'text-info' is used for displaying the section title.

// Another hr element is used for a thematic break.

// A div with the class 'mx-auto text-left' is used to align the inner content.

// 8-9. A paragraph element contains a strong and a span element to emphasize the text for "Question 1". It also provides the code snippet using a pre element styled with color red.

// A text-based explanation follows, contained within a paragraph element.

// A thematic break is added using hr.

// 12-43. The same pattern is followed for each subsequent question, each contained in their own div elements, with thematic breaks using hr in between.

// The main div container closes.

// The component is exported to be used in other parts of the application.
