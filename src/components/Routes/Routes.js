import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Routes.module.css';
import Create from '../Create/Create';
import Read from '../Read/Read';
import Update from '../Update/Update';
import Delete from '../Delete/Delete';
import Welcome from '../Welcome/Welcome';
import MonkeyJokes from '../MonkeyJokes/MonkeyJokes';
import Week3 from '../Week3/Week3';
import Week4 from '../Week4/Week4';
import Week5 from '../Week5/Week5';
import Week6 from '../Week6/Week6';
import Week7 from '../Week7/Week7';
import Week8 from '../Week8/Week8';
import Week9 from '../Week9/Week9';
import Week9A from '../Week9A/Week9A';
import Week10 from '../Week10/Week10';
import Week11 from '../Week11/Week11';
import Week11A from '../Week11A/Week11A';
import Week12 from '../Week12/Week12';
import Week14 from '../Week14/Week14';


const CrudRow = ({ data, setSelectedId }) => (
  <div className={`bg-info container ${styles.crudContainer}`}>
    <div className="row">
      <div className={`col-md-3 mb-3 ${styles.themeContainer}`}>
        <div className="container">
          <Create />
        </div>
      </div>
      <div className={`col-md-3 mb-3 ${styles.themeContainer}`}>
        <div className="container">
          <Read data={data} setSelectedId={setSelectedId} />
        </div>
      </div>
      <div className={`col-md-3 mb-3 ${styles.themeContainer}`}>
        <div className="container">
          <Update />
        </div>
      </div>
      <div className={`col-md-3 mb-3 ${styles.themeContainer}`}>
        <div className="container">
          <Delete />
        </div>
      </div>
    </div>
  </div>
);

const HomePageElement = ({ data, setSelectedId }) => (
  <>
    <div className={styles.WelcomeSection}>
      <Welcome />
    </div>
    <CrudRow data={data} setSelectedId={setSelectedId} />
    <div className={`${styles.mjContainer} d-flex align-items-center text-center mt-4`}>
      <MonkeyJokes />
    </div>
  </>
);

const CustomRoutes = ({ data, setSelectedId }) => (
  <Routes>
    <Route path="/" element={<HomePageElement data={data} setSelectedId={setSelectedId} />} />
    <Route path="/home" element={<HomePageElement data={data} setSelectedId={setSelectedId} />} />
    <Route path="/javascript" element={
      <div>
        <CrudRow data={data} setSelectedId={setSelectedId} />
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


// Elements used in the code:
// <div>: Used for grouping and structuring content.
// <Routes>, <Route>: Components provided by React Router for route definition and rendering.
// <CrudRow>: A custom component to render CRUD operations.
// <HomePageElement>: A custom component to render the home page.
// Custom Components:
// Create, Read, Update, Delete: Components for CRUD operations.
// Welcome: A component to display welcome message.
// MonkeyJokes: A component to display jokes.
// Week3 to Week14: Components corresponding to various weeks.
// CSS Module Classes:
// styles.crudContainer: Styles the container for CRUD operations.
// styles.themeContainer: Styles individual theme containers.
// styles.WelcomeSection: Styles the welcome section.
// styles.mjContainer: Styles the MonkeyJokes component container.
// Bootstrap Classes (Modifiers) used in the code:
// bg-info: Sets the background color to Bootstrap's "info" color.
// container: A Bootstrap class for setting max-width and responsive padding to a container.
// row: A Bootstrap class for rows in a grid system.
// col-md-3: Sets the column width to 3 when the screen is medium or larger.
// mb-3: Adds bottom margin to the element.
// d-flex: Sets the element as a flex container.
// align-items-center: Aligns flex items vertically at the center of the container.
// text-center: Sets text alignment to center.
// mt-4: Adds top margin to the element.
// Detailed Description:
// This code defines a React functional component named CustomRoutes, which serves as the routing configuration for a web application. The component imports necessary modules, including React, React Router, and various custom components for CRUD operations and weekly tasks.

// The CrudRow component is a functional component that houses the four CRUD operation components (Create, Read, Update, Delete) in a row. It is styled using both CSS modules and Bootstrap classes.

// The HomePageElement component is another functional component that renders the Welcome component, the CrudRow component, and the MonkeyJokes component. It's structured to appear on the home page of the application.

// Within the CustomRoutes component, the <Routes> component from React Router is used to define the application's routing logic. Various <Route> components are nested inside it to specify what components should be rendered at different paths.

// The HomePageElement component is used for the root path ("/") and the "/home" path. For the "/javascript" path, multiple weekly components are rendered along with CrudRow and MonkeyJokes.

// Additional routes for "/java", "/python", "/SQL", and "/infotech" are defined to render the MonkeyJokes component with a category passed as a prop.

// A catch-all route is also defined at the end to display a "404 Not Found" message for undefined routes.

// In summary, the CustomRoutes component is a central hub for routing in the application. It leverages React Router for routing, and Bootstrap and CSS Modules for styling. This ensures a well-structured and styled web application, enhancing the overall user experience.