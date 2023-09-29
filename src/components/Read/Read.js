// Import React library and useState hook for component state management
import React, { useState } from 'react';

// Import Axios library for making HTTP requests
import axios from 'axios';

// Define a functional component called Read
function Read({ data, setSelectedId }) {

  // Initialize state variable 'id' with an empty string
  const [id, setId] = useState('');

  // Define a function called handleRead for fetching data by ID
  const handleRead = () => {
    // Make a GET request to the API to fetch data by ID
    axios.get(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${id}`)
      .then((response) => {
        // Log the API response
        console.log('Response:', response);

        // Check if the API response status is 200 OK
        if (response.status === 200) {
          // Update the setSelectedId state with the fetched ID
          setSelectedId(id);
        } else {
          // Log an error message if data is not found
          console.error('Data not found');
        }
      })
      // Handle any errors during the API request
      .catch((error) => console.error('Error reading data: ', error));
  };

  // Return JSX for rendering the component
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center flex-column">

        
        <div className="d-flex">
          <span
            id="Read"
            title="After Inputting an ID, the Software Reads, Pulls and Displays Data Below"
            className="createButton p-2 m-3"
            onClick={handleRead}
            style={{ fontSize: '25px' }}
          >
            READ
          </span>
        </div>
      </div>

      
      <div className="mb-3 col-12">
        <input
          id="id"
          type="text"
          className="form-control border border-5 border-info p-2"
          placeholder="ID#"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
    </div>
  );
}

// Export the Read component for use in other parts of the application
export default Read;

// Elements used in the code:
// <div>: Used for grouping and structuring content.
// <span>: Inline-level container for text.
// <input>: A standard HTML input element for capturing user input.
// State Variables:
// id: Holds the value of the ID entered by the user.
// Functions and Methods:
// useState: React hook for state management.
// axios.get: Axios method for making GET HTTP requests.
// then: Promise-based method for handling successful HTTP requests.
// catch: Promise-based method for handling failed HTTP requests.
// handleRead: Custom function to handle the read operation.
// Bootstrap Classes (Modifiers) used in the code:
// text-center: Aligns text and content to the center.
// d-flex: Sets the element as a flex container, enabling flexible layout.
// justify-content-center: Horizontally aligns flex items at the center of the container.
// align-items-center: Vertically aligns flex items at the center of the container.
// flex-column: Sets the flex direction to column.
// m-3: Adds margin to the element.
// p-2: Adds padding to the element.
// mb-3: Adds bottom margin to the element.
// col-12: Sets the width to occupy all 12 columns of the Bootstrap grid.
// form-control: Bootstrap class for form styling.
// border: Adds a border to the element.
// border-info: Sets the border color to Bootstrap's "info" color.
// Detailed Description:
// The code defines a React functional component named Read, which is designed to handle the reading of data based on a given ID. The component imports React for component building and Axios for HTTP requests. It utilizes state management through the useState React hook to hold the ID entered by the user.

// The handleRead function is a custom function responsible for making an Axios GET request to read data from an API. This function checks the API response's status code and either sets the ID in the parent component through setSelectedId or logs an error.

// The component returns JSX for rendering. It uses Bootstrap classes for styling and layout, including flexbox classes for alignment and positioning. The <span> element acts as a clickable button to trigger the handleRead function, and an <input> field captures the ID from the user.

// The state variable id is two-way bound to the <input> element, enabling real-time capture and reflection of data. This is achieved through the value attribute and the onChange event handler, which updates the id state variable whenever the input changes.

// In summary, the Read component provides a user interface for reading data based on an ID. It uses Axios for API interaction and Bootstrap for styling, making it a functional part of a larger CRUD application.