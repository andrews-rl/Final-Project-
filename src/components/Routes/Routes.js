import React from 'react'; // Import React library
import { Routes, Route } from 'react-router-dom'; // Import necessary components from 'react-router-dom'
import styles from './Routes.module.css'; // Import CSS styles for this component
import Welcome from '../Welcome/Welcome'; // Import the Welcome component
import MonkeyJokes from '../MonkeyJokes/MonkeyJokes'; // Import the MonkeyJokes component
import Week3 from '../Week3/Week3'; // Import Week3 component
import Week4 from '../Week4/Week4'; // Import Week4 component
import Week5 from '../Week5/Week5'; // Import Week5 component
import Week6 from '../Week6/Week6'; // Import Week6 component
import Week7 from '../Week7/Week7'; // Import Week7 component
import Week8 from '../Week8/Week8'; // Import Week8 component
import Week9 from '../Week9/Week9'; // Import Week9 component
import Week9A from '../Week9A/Week9A'; // Import Week9A component
import Week10 from '../Week10/Week10'; // Import Week10 component
import Week11 from '../Week11/Week11'; // Import Week11 component
import Week11A from '../Week11A/Week11A'; // Import Week11A component
import Week12 from '../Week12/Week12'; // Import Week12 component
import Week14 from '../Week14/Week14'; // Import Week14 component
import CRUD from '../Crud/Crud'; // Import the CRUD component

// A component that represents a row in the CRUD section
const CrudRow = ({ data, setSelectedId }) => (
  <div>
    <div>
      <div className={`col-md-12 mb-3 ${styles.crudContainer}`}>
        <div className="container">
          <CRUD /> {/* Display the CRUD component here */}
        </div>
      </div>
    </div>
  </div>
);

// A component representing the home page section
const HomePageElement = ({ data, setSelectedId }) => (
  <>
    <div className={styles.WelcomeSection}>
      <Welcome />
    </div>

    <div className={`custom-form mt-4`}>
      <CrudRow data={data} setSelectedId={setSelectedId} />
    </div>

    <div className={`${styles.mjContainer} d-flex align-items-center text-center mt-4`}>
      <MonkeyJokes />
    </div>
  </>
);

// The main component that defines the routes for the application
const CustomRoutes = ({ data, setSelectedId }) => (
  <Routes>
    <Route path='/crud' element={<CRUD />} />
    <Route path="/" element={<HomePageElement data={data} setSelectedId={setSelectedId} />} />
    <Route path="/home" element={<HomePageElement data={data} setSelectedId={setSelectedId} />} />
    <Route path="/javascript" element={

      // This route displays various components related to JavaScript
      <div>
        <div className={`custom-form mt-4`}>
          <CrudRow data={data} setSelectedId={setSelectedId} />
        </div>
        <div className={`${styles.mjContainer} d-flex align-items-center text-center mt-4`}>
          <MonkeyJokes />
        </div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week3 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week4 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week5 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week6 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week7 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week8 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week9 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week9A /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week10 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week11 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week11A /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week12 /></div>
        <div className={`${styles.themeContainer} custom-form mt-4`}><Week14 /></div>
      </div>
    } />
    <Route path="/java" element={<div className={`${styles.mjContainer} d-flex align-items-center text-center mt-4`}><MonkeyJokes category="java" /></div>} />
    <Route path="/python" element={<div className={`${styles.mjContainer} d-flex align-items-center text-center mt-4`}><MonkeyJokes category="python" /></div>} />
    <Route path="/SQL" element={<div className={`${styles.mjContainer} d-flex align-items-center text-center mt-4`}><MonkeyJokes category="SQL" /></div>} />
    <Route path="/infotech" element={<div className={`${styles.mjContainer} d-flex align-items-center text-center mt-4`}><MonkeyJokes category="infotech" /></div>} />
    <Route path="*" element={<div>404 Not Found</div>} />
  </Routes>
);

export default CustomRoutes;

// Summary of Code:
// This code defines a React functional component named 'CustomRoutes' that sets up routing for a web application. It uses the React Router library to manage different routes and display corresponding components. Additionally, it integrates various components like 'Welcome,' 'MonkeyJokes,' and 'Week' components to render content on different pages.

// Elements used in the code:
// - <Routes>: Represents the container for defining routes in React Router.
// - <Route>: Defines individual routes within the 'Routes' component.
// - <div>: Used for structuring and grouping content.
// - <HomePageElement>: A custom component that represents the homepage section.
// - <CrudRow>: A custom component that represents a row in the CRUD section.
// - <CRUD>: A custom component responsible for CRUD operations.
// - <MonkeyJokes>: A custom component for displaying jokes.
// - Various other custom components for different weeks.

// CSS Modules classes used in the code:
// - styles.WelcomeSection: Applies styling to the Welcome section.
// - styles.crudContainer: Styles for the CRUD container.
// - styles.custom-form: Styles for custom forms.
// - styles.mjContainer: Styles for the MonkeyJokes container.
// - styles.themeContainer: Styles for various theme containers.

// Detailed Description:
// The 'CustomRoutes' component serves as the main routing component for the web application. It leverages React Router to define different routes and specifies which components to render for each route.

// The code begins with importing necessary libraries and custom components required for the application. These include 'Welcome,' 'MonkeyJokes,' and various 'Week' components that likely contain content related to specific weeks of a course.

// Inside 'CustomRoutes,' we define multiple routes using the '<Route>' component from React Router. Each route is associated with a specific path and renders a particular component. For example, the '/crud' path renders the 'CRUD' component, the '/' and '/home' paths render the 'HomePageElement' component, and the '/javascript' path renders a complex structure with multiple components.

// The 'HomePageElement' component represents the homepage section of the application. It includes the 'Welcome' component, 'CrudRow' component, and 'MonkeyJokes' component, arranged using custom CSS Modules classes for styling.

// The 'CrudRow' component represents a row in the CRUD section and includes the 'CRUD' component.

// The '/javascript' path represents a section of the application related to JavaScript. It includes multiple components, including 'CrudRow,' 'MonkeyJokes,' and various 'Week' components, each enclosed within custom CSS Modules containers.

// The other routes, such as '/java,' '/python,' and '/SQL,' render the 'MonkeyJokes' component with different categories, likely displaying jokes related to those categories.

// Finally, there is a fallback route ('*') that renders a "404 Not Found" message if none of the defined routes match the URL.

// In summary, 'CustomRoutes' defines routing for a web application, rendering different components for specific paths. It uses React Router for routing and custom CSS Modules for styling, providing a structured and dynamic user experience.