import React, { useState, useEffect } from 'react'; // Import necessary React modules
import axios from 'axios'; // Import Axios for making HTTP requests
import './Crud.module.css'; // Import CSS styles (assuming this is for styling)

const CRUD = () => {
  // Define state variables using the useState hook
  const [dataList, setDataList] = useState([]); // Store the list of data
  const [id, setId] = useState(''); // Store ID input value
  const [name, setName] = useState(''); // Store Name input value
  const [email, setEmail] = useState(''); // Store Email input value
  const [notes, setNotes] = useState(''); // Store Notes input value
  const [createSuccessAlert, setCreateSuccessAlert] = useState(false); // Show create success alert
  const [updateSuccessAlert, setUpdateSuccessAlert] = useState(false); // Show update success alert
  const [deleteSuccessAlert, setDeleteSuccessAlert] = useState(false); // Show delete success alert
  const [updateSectionVisible, setUpdateSectionVisible] = useState(false); // Show update section
  const [showData, setShowData] = useState(false); // Show/hide data table
  const [displayButtonText, setDisplayButtonText] = useState('Display'); // Button text for showing/hiding data
  const [confirmAction, setConfirmAction] = useState(''); // Action to confirm (delete/update)
  const [alertTimeoutDuration] = useState(2000); // Duration for alert messages (2 seconds)

  // Function to fetch all data from the API
  const fetchAllData = async () => {
    try {
      const response = await axios.get('https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud');
      if (response.status === 200) {
        setDataList(response.data); // Update the dataList state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchAllData();
  }, []);

  // Function to handle reading data based on the provided ID
  const handleReadData = async () => {
    if (id) {
      try {
        const response = await axios.get(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${id}`);
        if (response.status === 200) {
          const selectedData = response.data;
          setName(selectedData.name); // Update name state with fetched data
          setEmail(selectedData.email); // Update email state with fetched data
          setNotes(selectedData.notes); // Update notes state with fetched data
          setUpdateSectionVisible(true); // Show the update section
        } else {
          setUpdateSectionVisible(false); // Hide the update section
          console.error('Data with the specified ID not found');
        }
      } catch (error) {
        console.error('Error reading data: ', error);
      }
    } else {
      console.error('Please enter an ID to read data');
    }
  };

  // Function to handle updating data
  const handleUpdateData = async () => {
    if (id) {
      try {
        const response = await axios.put(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${id}`, {
          name,
          email,
          notes,
        });
        if (response.status === 200) {
          setUpdateSuccessAlert(true); // Show update success alert
          fetchAllData(); // Fetch updated data from the API
          displayData(); // Display the updated data
          setTimeout(() => {
            setUpdateSuccessAlert(false); // Hide the update success alert after a delay
          }, alertTimeoutDuration);
        } else {
          console.error('Failed to update data');
        }
      } catch (error) {
        console.error('Error updating data: ', error);
      }
    } else {
      console.error('Please enter an ID to update data');
    }
  };

  // Function to handle deleting data (sets confirmAction to 'delete' and stores the ID)
  const handleDelete = async (dataId) => {
    setConfirmAction('delete'); // Set the action to confirm as 'delete'
    setId(dataId); // Store the ID to be deleted
  };

  // Function to confirm the deletion
  const confirmDelete = async () => {
    if (confirmAction === 'delete') {
      try {
        const response = await axios.delete(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${id}`);
        if (response.status === 200) {
          setDeleteSuccessAlert(true); // Show delete success alert
          setId(''); // Clear the ID input field
          setName(''); // Clear the name input field
          setEmail(''); // Clear the email input field
          setNotes(''); // Clear the notes input field
          fetchAllData(); // Fetch updated data from the API
          setTimeout(() => {
            setDeleteSuccessAlert(false); // Hide the delete success alert after a delay
          }, alertTimeoutDuration);
          displayData(); // Display the updated data
          setConfirmAction(''); // Clear the confirmAction state
        } else {
          console.error('Failed to delete data');
        }
      } catch (error) {
        console.error('Error deleting data: ', error);
      }
    } else {
      console.error('Confirmation action is not set to delete');
    }
  };

  // Function to handle creating data
  const handleCreateData = async () => {
    try {
      const response = await axios.post('https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud', {
        id,
        name,
        email,
        notes,
      });
      if (response.status === 201) {
        setCreateSuccessAlert(true); // Show create success alert
        fetchAllData(); // Fetch updated data from the API
        displayData(); // Display the updated data
        setTimeout(() => {
          setCreateSuccessAlert(false); // Hide the create success alert after a delay
        }, alertTimeoutDuration);
      } else {
        console.error('Failed to create data');
      }
    } catch (error) {
      console.error('Error creating data: ', error);
    }
  };

  // Function to open the API link in a new tab
  const handleApi = () => {
    window.open('https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud', '_blank');
  };

  // Function to toggle the display of the data table
  const toggleDisplay = () => {
    setShowData(!showData); // Toggle the showData state
    setDisplayButtonText(showData ? 'Display' : 'Hide'); // Update button text based on showData state
  };

  // Function to fetch and display data
  const displayData = () => {
    fetchAllData(); // Fetch data from the API
  };

  // Function to clear input fields
  const handleClearFields = () => {
    setId(''); // Clear the ID input field
    setName(''); // Clear the name input field
    setEmail(''); // Clear the email input field
    setNotes(''); // Clear the notes input field
  };

  // Render the JSX content of the component
  return (
    <div className="container text-center ">
      <h4 className="display-6 mt-3"> CRUD Genesis: Birthplace of Web Creations</h4>

      {/* Buttons for CRUD operations */}
      <div className="my-5"></div>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary border-5 border-info custom-button"
            onClick={handleCreateData}
          >
            Create
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-success text-white border-5 border-info custom-button"
            onClick={handleReadData}
            disabled={!id}
          >
            Read
          </button>
        </div>
        {updateSectionVisible && (
          <>
            <div className="col">
              <button
                className="btn btn-info text-dark border-5 border-white custom-button"
                onClick={handleUpdateData}
              >
                Update
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-danger border-5 border-info custom-button"
                onClick={() => {
                  setConfirmAction('delete');
                  confirmDelete();
                }}
              >
                Delete
              </button>
            </div>
          </>
        )}
        <div className="col">
          <button
            className="btn btn-warning text-white border-5 border-info custom-button"
            onClick={handleClearFields}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Success alerts for CRUD operations */}
      <div className="my-5"></div>
      {createSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Create successful! Record added.
        </div>
      )}
      {updateSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Update successful! Record updated.
        </div>
      )}
      {deleteSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Delete successful! Record deleted.
        </div>
      )}

      {/* Confirmation modal */}
      {confirmAction && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body bg-danger rounded-3">
                <p className="text-light">
                  Are you sure you want to {confirmAction === 'update' ? 'update' : 'delete'} this data?
                </p>
              </div>
              <div className="bg-secondary modal-footer">
                <button
                  type="button"
                  className="btn btn-info custom-button"
                  onClick={() => setConfirmAction('')}
                >
                  No
                </button>
                <button
                  type="button"
                  className={`btn ${confirmAction === 'update' ? 'btn-info' : 'btn-danger'} custom-button`}
                  onClick={() => {
                    if (confirmAction === 'update') {
                      handleUpdateData();
                    } else if (confirmAction === 'delete') {
                      confirmDelete();
                    }
                    setConfirmAction('');
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Input fields for ID, Name, Email, and Notes */}
      <div>
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control border border-5 border-info p-2 rounded-5"
                  placeholder="ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control border border-5 border-info p-2 rounded-5"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control border border-5 border-info p-2 rounded-5"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control border border-5 border-info rounded-5"
                  placeholder="Notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{ height: '50px', textAlign: 'left' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Buttons to toggle data display and open the API link */}
      <div className="row my-5">
        <div className="col">
          <button
            className="btn text-dark border-5 border-info custom-button"
            onClick={toggleDisplay}
            style={{ backgroundColor: '#B0BEC5', color: 'black' }}
          >
            {displayButtonText}
          </button>
        </div>
        <div className="col">
          <button
            className="btn border-5 border-info custom-button"
            onClick={handleApi}
            style={{ backgroundColor: '#B0BEC5', color: 'black' }}
          >
            API
          </button>
        </div>
      </div>

      {/* Data table */}
      {showData && (
        <div>
          <h4 className="display-6  mb-5">API DATA</h4>
          <div className="row">
            <div className="col">
              <table className="table form-control border border-5 border-info p-2 dataTable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Notes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataList.map((data) => (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.notes}</td>
                      <td>
                        <button
                          className="btn btn-danger border-5 border-info custom-button d-flex align-items-center justify-content-center"
                          style={{ height: '100%' }}
                          onClick={() => handleDelete(data.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CRUD;  // Export the component for use in other files


// 1. Import Statements
// javascript
// Copy code
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Crud.module.css';
// The code begins by importing essential modules: React, useState, useEffect for managing state and side effects, and axios for making HTTP requests.
// It also imports a CSS file assumed to contain styling for the component.
// 2. State Variables
// javascript
// Copy code
// const [dataList, setDataList] = useState([]);
// const [id, setId] = useState('');
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [notes, setNotes] = useState('');
// const [createSuccessAlert, setCreateSuccessAlert] = useState(false);
// const [updateSuccessAlert, setUpdateSuccessAlert] = useState(false);
// const [deleteSuccessAlert, setDeleteSuccessAlert] = useState(false);
// const [updateSectionVisible, setUpdateSectionVisible] = useState(false);
// const [showData, setShowData] = useState(false);
// const [displayButtonText, setDisplayButtonText] = useState('Display');
// const [confirmAction, setConfirmAction] = useState('');
// const [alertTimeoutDuration] = useState(2000);
// These state variables are declared using the useState hook. They manage various aspects of the component's behavior, such as data storage, input fields, and visibility of success alerts.
// 3. Fetching Data (GET Request)
// javascript
// Copy code
// const fetchAllData = async () => {
//   try {
//     const response = await axios.get('https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud');
//     if (response.status === 200) {
//       setDataList(response.data);
//     } else {
//       console.error('Failed to fetch data');
//     }
//   } catch (error) {
//     console.error('Error fetching data: ', error);
//   }
// };

// useEffect(() => {
//   fetchAllData();
// }, []);
// fetchAllData is an asynchronous function that sends a GET request to an API endpoint using Axios.
// If the request is successful (HTTP status 200), it updates the dataList state with the received data.
// If there is an error, it logs an error message.
// The useEffect hook is used to automatically fetch data when the component mounts, ensuring an initial data load.
// 4. Reading Data (Read Operation)
// javascript
// Copy code
// const handleReadData = async () => {
//   // ...
// };
// handleReadData is an asynchronous function responsible for reading data based on the provided id.
// It sends a GET request to a specific API endpoint, retrieving data associated with the provided id.
// If the data is found, it populates the name, email, and notes states and makes the update section visible.
// If the data is not found or if there's an error, appropriate error messages are logged.
// 5. Updating Data (Update Operation)
// javascript
// Copy code
// const handleUpdateData = async () => {
//   // ...
// };
// handleUpdateData is an asynchronous function responsible for updating data.
// It sends a PUT request to a specific API endpoint with the updated name, email, and notes values.
// If the update is successful (HTTP status 200), it displays a success alert, fetches updated data, and updates the displayed data.
// If there is an error, it logs an error message.
// 6. Deleting Data (Delete Operation)
// javascript
// Copy code
// const handleDelete = async (dataId) => {
//   // ...
// };

// const confirmDelete = async () => {
//   // ...
// };
// handleDelete is a function that sets the confirmAction to 'delete' and stores the ID of the data to be deleted.
// confirmDelete is an asynchronous function that confirms and executes the deletion.
// It sends a DELETE request to the API with the stored id.
// If the deletion is successful (HTTP status 200), it displays a success alert, clears input fields, fetches updated data, and updates the displayed data.
// If there is an error, it logs an error message.
// 7. Creating Data (Create Operation)
// javascript
// Copy code
// const handleCreateData = async () => {
//   // ...
// };
// handleCreateData is an asynchronous function responsible for creating new data.
// It sends a POST request to the API with the provided id, name, email, and notes values.
// If the creation is successful (HTTP status 201), it displays a success alert, fetches updated data, and updates the displayed data.
// If there is an error, it logs an error message.
// 8. Handling API Link
// javascript
// Copy code
// const handleApi = () => {
//   // ...
// };
// handleApi is a function that opens a new tab/window with the URL of the API endpoint for external access.
// 9. Toggling Data Visibility
// javascript
// Copy code
// const toggleDisplay = () => {
//   // ...
// };
// toggleDisplay is a function that toggles the visibility of the data table.
// It inversely updates the showData state and the display button text.
// 10. Clearing Input Fields
// javascript
// Copy code
// const handleClearFields = () => {
//   // ...
// };
// handleClearFields is a function that clears the input fields (id, name, email, notes).
// 11. Rendered JSX
// The component's render method returns JSX code, defining the structure and layout of the UI.
// It includes buttons for CRUD operations, success alerts, a confirmation modal, input fields, buttons for toggling data visibility and accessing the API, and a data table for displaying fetched data.
// Conclusion
// The CRUD component is a crucial part of a web application, enabling users to interact with data by performing CRUD operations. It utilizes React for state management and Axios for making HTTP requests to an API. The code is structured to handle user interactions, display success alerts, and manage data visibility effectively, providing a user-friendly experience.

// This report has provided a detailed explanation of the code, highlighting key functions and their roles within the component. It serves as a reference for understanding how the component functions and manages data in a real-world web application.