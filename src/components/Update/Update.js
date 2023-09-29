// Import React and other necessary libraries
import React, { useState, useEffect } from 'react';  // Importing React and hooks
import axios from 'axios';  // Importing Axios for HTTP requests

// Define the Update functional component
function Update({ selectedId, fetchAndDisplayData }) {

  // Initialize state variables with React's useState hook
  const [name, setName] = useState('');  // State for storing the name
  const [email, setEmail] = useState('');  // State for storing the email
  const [notes, setNotes] = useState('');  // State for storing the notes

  // Use React's useEffect hook to execute code when 'selectedId' changes
  useEffect(() => {
    // Make an HTTP GET request to fetch data if 'selectedId' is not null
    if (selectedId) {
      axios.get(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${selectedId}`)
        .then((response) => {
          // Update state variables if the request is successful
          if (response.status === 200) {
            setName(response.data.name);
            setEmail(response.data.email);
            setNotes(response.data.notes);
          } else {
            console.error('Data not found');
          }
        })
        // Log any errors that occur during the HTTP request
        .catch((error) => console.error('Error fetching data: ', error));
    }
  }, [selectedId]);

  // Define a function to handle the update action
  const handleUpdate = () => {
    // Prepare the data to be sent in the HTTP PUT request
    const updatedData = {
      name: name,
      email: email,
      notes: notes,
    };

    // Make an HTTP PUT request to update data
    axios.put(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${selectedId}`, updatedData)
      .then((response) => {
        // Refresh the displayed data if the request is successful
        if (response.status === 200) {
          fetchAndDisplayData();
        } else {
          console.error('Failed to update data');
        }
      })
      // Log any errors that occur during the HTTP request
      .catch((error) => console.error('Error updating data: ', error));
  };

  // Return the JSX to render the component
  return (
    <div className="text-center"> 
      <div className="d-flex justify-content-center align-items-center flex-column"> 
        <div className="d-flex">   
          <span
            id="Update"
            title="After Using the Read Button You Can Make Changes and Submit Changes to Database"
            className="createButton p-2 m-3"
            onClick={handleUpdate}
            style={{ fontSize: '25px' }}  // Inline styling to set the font size
          >
            UPDATE  
          </span>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="mb-3 col-12">
          <input
            id="name"
            type="text"
            className="form-control border border-5 border-info p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 col-12">
          <input
            id="email"
            type="email"
            className="form-control border border-5 border-info p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 col-12">
          <textarea
            className="form-control border border-5 border-info p-2"
            id="textarea"
            rows="4"
            maxLength="200"
            placeholder="Notes (up to 200 characters)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

// Export the Update component so it can be used in other parts of the application
export default Update;


// Elements used in the code:
// div: Used for grouping and structuring content.
// span: Inline container for text, styling, and other inline-level elements.
// input: HTML element to collect user input; used for text and email fields.
// textarea: HTML element to collect multi-line user input; used for notes.
// Bootstrap Classes (Modifiers) used in the code:
// text-center: Centers the text inside the element.
// d-flex: Establishes the element as a flex container, allowing for a flexible layout.
// justify-content-center: Centers flex items horizontally within the flex container.
// align-items-center: Aligns flex items vertically at the center of the flex container.
// mb-3: Adds a margin-bottom of size 3.
// col-12: Sets the width to occupy all 12 columns of the Bootstrap grid.
// form-control: Applies Bootstrap styling to form controls like input fields.
// border: Adds a border around the element.
// border-5: Sets the border width to 5.
// border-info: Sets the border color to Bootstrap's "info" color, usually blue.
// p-2: Adds padding of size 2 to all sides of the element.
// m-3: Adds a margin of size 3 to all sides of the element.
// Detailed Description:
// This code defines a React functional component named Update. The component is designed to handle the "Update" functionality in a CRUD (Create, Read, Update, Delete) application. It imports React and its hooks (useState and useEffect) along with Axios for HTTP requests.

// The Update component receives selectedId and fetchAndDisplayData as props. The selectedId is used to fetch the details of a specific record from an API, and fetchAndDisplayData is a function that refreshes the list of records after an update operation.

// Three state variables (name, email, notes) are initialized using React's useState hook to store the details of the selected record.

// The useEffect hook is employed to fetch the details of the selected record from an API when selectedId changes. Axios is used to make a GET request to the API, and upon a successful response, the state variables are updated with the fetched data.

// The handleUpdate function is defined to handle the update operation. It creates an object (updatedData) containing the updated values and uses Axios to make a PUT request to update the record in the API. If the update is successful, it calls fetchAndDisplayData to refresh the list of records.

// The JSX returned by the component contains:

// A "UPDATE" button that, when clicked, triggers the handleUpdate function.
// Input fields for name, email, and notes to capture user input, which are bound to the respective state variables.
// Bootstrap classes and inline styles are used extensively for styling the elements.

// By using a combination of React's hooks, Axios for API interaction, and Bootstrap for styling, this Update component provides an effective way to update a specific record in a CRUD application.