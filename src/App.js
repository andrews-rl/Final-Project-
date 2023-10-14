import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import CustomRoutes from './components/Routes/Routes'; // Import the CustomRoutes component for routing
import OffCanvasSidebar from './components/OffCanvasSidebar/OffCanvasSidebar'; // Import the OffCanvasSidebar component

function App() {
  const [data, setData] = useState([]); // State variable to store data from the API
  const [selectedId, setSelectedId] = useState(null); // State variable to store the selected ID
  console.log("App.js: selectedId initially set to:", selectedId);

  useEffect(() => {
    fetchAndDisplayData(); // Call fetchAndDisplayData when selectedId changes
  }, [selectedId]);

  // Function to fetch and display data from the API
  const fetchAndDisplayData = () => {
    axios.get("https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud")
      .then((response) => {
        setData(response.data); // Update the 'data' state with the fetched data
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  console.log("App.js: Rendering. Current selectedId:", selectedId);

  return (
    <div className="container-fluid bg-info fullHeight">
      <Router> {/* Set up the Router for routing */}
        <Navbar /> {/* Render the Navbar component */}
        <OffCanvasSidebar /> {/* Render the OffCanvasSidebar component */}
        {/* Pass 'data', 'setSelectedId', and 'selectedId' as props to CustomRoutes */}
        <CustomRoutes data={data} setSelectedId={setSelectedId} selectedId={selectedId} />
      </Router>
    </div>
  );
}

export default App;


// The App component is the main component of the application.
// It uses the useState and useEffect hooks from React for managing state and side effects.
// selectedId is used to keep track of the selected ID.
// The fetchAndDisplayData function is used to fetch data from the API and update the data state.
// The component renders a Router component from 'react-router-dom' for routing.
// It renders the Navbar, OffCanvasSidebar, and CustomRoutes components.
// It passes data, setSelectedId, and selectedId as props to the CustomRoutes component for routing purposes.
// This code sets up the basic structure of the application, including routing and data fetching.

// In detail:

// Elements used in the code:
// - <div>: Used for structuring and grouping content.
// - <Router>: Provided by React Router, sets up routing functionality.
// - <Navbar>: Custom navigation bar component.
// - <OffCanvasSidebar>: Custom off-canvas sidebar component.

// External libraries and modules used:
// - 'axios': A library for making HTTP requests.
// - 'react-router-dom': Provides routing functionality for React applications.
// - 'useState' and 'useEffect' hooks from React for managing state and side effects.

// State variables used:
// - 'data': Stores data fetched from an API.
// - 'selectedId': Keeps track of the selected ID for data manipulation.

// Detailed Description:
// The code defines the 'App' component, which serves as the main entry point for a web application. It imports necessary modules, including React, Bootstrap CSS, Axios, and React Router for routing.

// Within the 'App' component, two state variables are defined using the 'useState' hook. 
// 'data' is used to store data fetched from an external API, and 'selectedId' keeps track of the selected ID for data manipulation.

// An 'useEffect' hook is utilized to trigger the 'fetchAndDisplayData' function when 'selectedId' changes. This function fetches data from a mock API endpoint and updates the 'data' state accordingly.

// The component structure includes a 'Router' component to enable routing within the application. It also renders the 'Navbar' and 'OffCanvasSidebar' components, providing navigation and sidebar functionality to the application.

// The 'data', 'setSelectedId', and 'selectedId' state variables are passed as props to the 'CustomRoutes' component, enabling routing and data manipulation based on user interactions.

// In summary, the 'App' component is the central component of the web application, responsible for handling data fetching, routing, and rendering custom components like 'Navbar', 'OffCanvasSidebar', and 'CustomRoutes', which collectively create the user interface and functionality of the application.
