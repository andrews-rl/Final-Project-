// Import React library
import React from 'react';

// Import axios for making HTTP requests
import axios from 'axios';

// Define the Delete function component
function Delete({ selectedId, fetchAndDisplayData }) {

  // Function to handle the deletion of a contact
  const handleDelete = () => {

    // Check if a contact ID is selected
    if (selectedId) {

      // Make a DELETE request to remove the contact with the selected ID
      axios.delete(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${selectedId}`)
        .then((response) => {

          // If deletion is successful (status 200), update the data display
          if (response.status === 200) {
            fetchAndDisplayData();
          } else {

            // Log error if deletion fails
            console.error('Failed to delete data');
          }
        })

        // Catch any errors during the request
        .catch((error) => console.error('Error deleting data: ', error));
    }
  };

  // Render the component
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex">
          <span
            id="Delete"
            title="Deletes Data"
            className="deleteButton p-2 m-3 text-white" // Add the text-white class here
            onClick={handleDelete}
            style={{ fontSize: '25px' }}
          >
            DELETE
          </span>
        </div>
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
// 7. text-white: sets the text color to white

// Summary:
// The Delete component is responsible for deleting a contact entry. It receives a selected ID and a function to fetch and display data as props. When the DELETE button is clicked, the component sends a DELETE request to the server to remove the contact with the provided ID. If the deletion is successful, the component triggers an update to display the remaining contacts.

export default Delete;
