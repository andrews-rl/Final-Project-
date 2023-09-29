// Import React and necessary components from external libraries
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'; // Importing React Bootstrap components
import { Link } from 'react-router-dom'; // Importing React Router Link component
import styles from './Navbar.module.css'; // Importing CSS Modules styles

// Define an array 'navItems' that holds navigation links and their labels
const navItems = [
  { path: '/home', label: 'Home' },
  { path: '/javascript', label: 'JavaScript' },
  { path: '/java', label: 'Java' },
  { path: '/python', label: 'Python' },
  { path: '/SQL', label: 'SQL' },
  { path: '/infotech', label: 'Infotech' }
];

// Define the 'Navbar' functional component
function Navbar() {
  return (
    // Create a navigation bar container and apply custom styling using CSS Modules
    <nav className={styles.navBar}>
      <div className={`d-flex align-items-center justify-content-between ${styles.navList}`}>
        {/* Create a flex container with alignment and spacing classes for organizing navigation items */}
        <div className="d-flex align-items-center">
          {navItems.map((item, index) => (
            // Map through 'navItems' to create individual navigation items with custom styling
            <div key={index} className={`m-3 ${styles.navItem}`}>
              {/* Create navigation links using React Router's 'Link' component with custom styling */}
              <Link to={item.path} className={`text-white text-decoration-none ${styles.navLink}`} aria-label={item.label}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className={`m-3 ${styles.navItem}`}>
          {/* Create a Bootstrap dropdown button with a custom variant and label */}
          <DropdownButton title="More" variant="info" className={`text-white ${styles.dropdownButton}`}>
            {navItems.map((item, index) => (
              // Map through 'navItems' to create dropdown items as links with custom styling
              <Dropdown.Item key={index} as={Link} to={item.path} className={`${styles.dropdownItem}`}>
                {item.label}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
    </nav>
  );
}

// Export the 'Navbar' component as the default export
export default Navbar;

// Summary of Code:
// Elements used in the code:
// - <nav>: Represents the navigation bar container.
// - <div>: Used for grouping and structuring content.
// - <Link>: Provided by React Router, creates navigation links.
// - <DropdownButton>: A Bootstrap component for a dropdown button.
// - <Dropdown.Item>: A Bootstrap component for dropdown items.
// - <button>: A standard HTML button element.

// CSS Modules classes used in the code:
// - styles.navBar: Applies styling to the navigation bar.
// - styles.navList: Styles for the list within the navigation bar.
// - styles.navItem: Styles for individual navigation items.
// - styles.navLink: Styles for navigation links.
// - styles.dropdownButton: Styles for the Bootstrap dropdown button.
// - styles.dropdownItem: Styles for individual dropdown items.

// Bootstrap Classes (Modifiers) used in the code:
// - text-white: Sets the text color to white.
// - variant="info": Sets the Bootstrap variant to 'info,' changing the button color.

// Detailed Description:
// This code defines a React functional component named 'Navbar' that serves as the navigation bar for a web application. The component imports necessary modules, including React, React Bootstrap, and React Router, to create a responsive and styled navigation bar.

// The 'navItems' array is utilized to store objects with 'path' and 'label' properties, representing the navigation links and their corresponding labels. These links will be dynamically generated in the navigation bar, providing easy access to different sections of the web application.

// Within the 'Navbar' component, a series of elements and classes are employed to structure and style the navigation bar. A navigation bar container is created with custom styling using CSS Modules, ensuring it aligns with the overall design of the application. A flex container ('d-flex') with alignment and spacing classes is established to effectively organize the navigation items, providing both horizontal and vertical alignment.

// The 'navItems' array is mapped to create navigation links, with each link enclosed in a 'div' element that incorporates custom styling through CSS Modules ('styles.navItem'). These links are further styled using CSS Modules ('styles.navLink') to control aspects such as text color and decoration.

// Additionally, a Bootstrap dropdown button is included within the navigation bar. This button is labeled "More" and features a custom variant ('variant="info"') that modifies its color to match the design of the application. Dropdown items are generated dynamically based on the 'navItems' array, ensuring that they are linked to specific paths ('as={Link} to={item.path}') and styled using CSS Modules ('styles.dropdownItem').

// In summary, the 'Navbar' component provides a responsive and visually appealing navigation bar that facilitates easy navigation to different sections of the web application. It leverages various technologies, including React, React Bootstrap, React Router, and CSS Modules, to achieve both its functionality and styling, enhancing the overall user experience.

