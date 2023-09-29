// Import React and useState hook
import React, { useState } from 'react';

// Import axios for making API requests
import axios from 'axios';

// Create function component
function Create({ fetchAndDisplayData }) {

  // Initialize state variables for name, email, and notes
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Function to handle creation of new contact
  const handleCreate = () => {

    // Prepare data for new contact
    const newContact = {
      name: name,
      email: email,
      notes: notes,
    };

    // Make POST request to create new contact
    axios.post('https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud', newContact, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // Handle server response
    .then((response) => {
      // If creation is successful (status 201), update the data and clear the form
      if (response.status === 201) {
        fetchAndDisplayData();
        setName('');
        setEmail('');
        setNotes('');
      } else {
        // Log error if creation fails
        console.error('Failed to create contact');
      }
    })
    // Catch any errors during the request
    .catch((error) => console.error('Error creating contact: ', error));
  };

  // Render the component
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex">
          <span
            id="Create"
            title="Updates Database With New Contact Info"
            className="createButton p-2 m-3"
            onClick={handleCreate}
            style={{ fontSize: '25px' }}
          >
            CREATE
          </span>
        </div>
      </div>
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
          className="mb-4 form-control border border-5 border-info p-2"
          id="textarea"
          rows="4"
          maxLength="200"
          placeholder="Notes (up to 200 characters)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
    </div>
  );
}

// Bootstrap Class Explanations:
// 1. d-flex: enables flexbox layout
// 2. justify-content-center: centers items horizontally
// 3. align-items-center: centers items vertically
// 4. flex-column: arranges flex items in a column
// 5. p-2: padding of 2 units on all sides
// 6. m-3: margin of 3 units on all sides
// 7. mb-3: margin-bottom of 3 units
// 8. col-12: sets the width to occupy all 12 columns of the grid
// 9. form-control: styles the form control
// 10. border-5: sets border-width to 5
// 11. border-info: sets border color to Bootstrap's "info" color
// 12. mb-4: margin-bottom of 4 units

// Summary:
// This React component is responsible for creating a new contact. It has a form with fields for name, email, and notes. When the user clicks the "CREATE" button, the component sends a POST request to the server to create a new contact with the provided details. If the creation is successful, the component clears the form fields and triggers an update to display the newly created contact in the list.

// The HTTP status code 201 means "Created". It's a standard response for an HTTP POST request that has successfully resulted in the creation of a resource on the server. Essentially, it indicates that the request was successful and led to the creation of a new resource.

// In the context of the above code, when you make a POST request to create a new contact and the server returns a status code of 201, it means that the new contact was successfully created on the server. Your code then proceeds to fetch and display the updated data, and reset the state variables name, email, and notes to empty strings.

export default Create;
