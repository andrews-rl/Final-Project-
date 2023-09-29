import React from 'react';

function Week3() {
  return (
    <div className="container">
      <hr />
      <h3 className="text-center text-info">Week 3: GitHub Zoom & YouTube</h3>
      <hr />
      <div className="mx-auto text-left">
        <h4 className="text-info">Creating a New GitHub Repository</h4>
        <ol className="text-white">
          <li>First, sign into your GitHub account or create a new one if you don't have one yet.</li>
          <li>Once you're logged in, look for the "Repositories" tab and click on it.</li>
          <li>You'll see a "New" button, click it to create a new repository.</li>
          <li>Fill in the details like the name of your repository, a description, and whether you want it to be public or private.</li>
          <li>Click "Create repository" to finalize it.</li>
        </ol>
        <hr />
        
        <h4 className="text-info">Adding and Managing Code through Git</h4>
        <ol className="text-white">
          <li>Open your computer's terminal and navigate to the folder where you want your project to be.</li>
          <li>Use the Git command to clone it.</li>
          <li>After cloning, any changes you make to these files can be tracked using Git.</li>
        </ol>
        <hr />
        
        <h4 className="text-info">Creating a Video in Zoom</h4>
        <ol className="text-white">
          <li>Download and install Zoom, and then open it.</li>
          <li>Start a new meeting and click the "Record" button to start recording.</li>
          <li>When you're done, click "Stop Recording" and then end the meeting.</li>
        </ol>
        <hr />
        
        <h4 className="text-info">Uploading the Video to YouTube</h4>
        <ol className="text-white">
          <li>Sign in to YouTube and go to YouTube Studio.</li>
          <li>Click the "Create" button, then "Upload Video".</li>
          <li>Locate your Zoom recording, upload it, and fill in any details like the title or description.</li>
          <li>Finally, click "Publish" to make your video live.</li>
        </ol>
        <hr />
      </div>
    </div>
  );
}

export default Week3;

// Elements used in the code
// div: This HTML element is commonly used for grouping and structuring content.
// hr: Represents a thematic break or horizontal line, commonly used for separating content.
// h3 and h4: These are heading elements used to label different sections of content.
// ol: This stands for ordered list and contains list items, commonly represented as li.
// Bootstrap Classes (Modifiers) used in the code
// container: This sets the width of the element based on the viewport size and provides automatic margins.
// text-center: This centers the text inside the element.
// text-info: Sets the text color to Bootstrap's "info" color, which is usually a shade of blue.
// text-white: Sets the text color to white.
// mx-auto: This class centers the element horizontally within its parent using auto margins.
// Detailed Description
// The first line imports the React library so that the component can use React features.

// The function Week3 is defined as a functional React component.

// The return statement is used to specify the JSX (JavaScript XML) that the component will render.

// A div element with a class of "container" is used to encapsulate all the content. The container class is a Bootstrap class that sets the width and provides automatic margins.

// An hr element is used to create a thematic break or horizontal line for separating content.

// An h3 element is used to provide a heading for the week's content. It uses Bootstrap classes to center the text and set its color.

// Another hr element is used to create another thematic break.

// A div element with Bootstrap classes is used to horizontally center the content within its parent.

// An h4 element with text describing how to create a GitHub repository is added. The text color is set using Bootstrap's text-info class.

// 10-14. An ordered list ol with steps for creating a GitHub repository is provided. Each step is contained within an li element. The text color for the list is set to white using Bootstrap's text-white class.

// Another hr element is used to add another thematic break.
// 16-29. Similar to steps 9-14, additional h4 elements and ordered lists are used to provide steps for other tasks like managing code through Git, creating a video in Zoom, and uploading the video to YouTube.

// The inner div element is closed.

// The main div container is closed.

// The return statement is closed.

// The function definition for Week3 is closed.

// The component is exported as a default export, allowing it to be imported and used in other parts of the application.

// This Week3 component provides a structured and styled list of instructions for various tasks related to GitHub, Zoom, and YouTube. It leverages Bootstrap for styling and React for component structure.
