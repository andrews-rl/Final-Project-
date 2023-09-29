// Import necessary modules and components from React and react-bootstrap
import React, { useState, useEffect, useCallback } from 'react';
import styles from './OffCanvasSidebar.module.css';
import { Offcanvas, Accordion, Card } from 'react-bootstrap';

// Define the OffCanvasSidebar functional component
const OffCanvasSidebar = () => {
  // Initialize state to control the visibility of the sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // Define menu items, categories, and associated links
  const menuItems = [
    {
      category: 'JavaScript',
      colorClass: 'category-header--JavaScript',
      links: [
        { name: 'Codewars', url: 'https://www.codewars.com/' },
        { name: 'Coursera', url: 'https://www.coursera.org/' },
        { name: 'Udemy', url: 'https://www.udemy.com/' },
        { name: 'Pluralsight', url: 'https://www.pluralsight.com/' },
        { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' },
        { name: 'ECMAScript Specification', url: 'https://www.ecma-international.org/ecma-262/' },
        { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' },
        { name: 'GitHub', url: 'https://github.com/' },
        { name: 'JavaScript.info', url: 'https://javascript.info/' },
        { name: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
        { name: 'MDN JavaScript Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com/' },
        { name: 'W3Schools JavaScript Reference', url: 'https://www.w3schools.com/jsref/' },
        { name: 'W3Schools JavaScript Tutorial', url: 'https://www.w3schools.com/js/' }
      ],
    },
    {
      category: 'Java',
      colorClass: 'category-header--Java',
      links: [
        { name: 'Codecademy', url: 'https://www.codecademy.com/learn/learn-java' },
        { name: 'Coursera', url: 'https://www.coursera.org/' },
        { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/java/' },
        { name: 'JavaTpoint', url: 'https://www.javatpoint.com/java-tutorial' },
        { name: 'Oracle Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/' }
      ],
    },
    {
      category: 'Python',
      colorClass: 'category-header--Python',
      links: [
        { name: 'Codecademy', url: 'https://www.codecademy.com/learn/learn-python' },
        { name: 'Coursera', url: 'https://www.coursera.org/' },
        { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/python-programming-language/' },
        { name: 'Python.org', url: 'https://docs.python.org/3/tutorial/' },
        { name: 'Real Python', url: 'https://realpython.com/' }
      ],
    },
    {
      category: 'SQL',
      colorClass: 'category-header--SQL',
      links: [
        { name: 'Codecademy', url: 'https://www.codecademy.com/learn/learn-sql' },
        { name: 'Coursera', url: 'https://www.coursera.org/' },
        { name: 'SQLZoo', url: 'https://sqlzoo.net/' },
        { name: 'W3Schools', url: 'https://www.w3schools.com/sql/' },
        { name: 'Udemy', url: 'https://www.udemy.com/' }
      ],
    },
    {
      category: 'Information Technology',
      colorClass: 'category-header--InformationTechnology',
      links: [
        { name: 'CompTIA', url: 'https://www.comptia.org/' },
        { name: 'Coursera', url: 'https://www.coursera.org/' },
        { name: 'edX', url: 'https://www.edx.org/' },
        { name: 'InfoWorld', url: 'https://www.infoworld.com/' },
        { name: 'TechCrunch', url: 'https://techcrunch.com/' },
        { name: 'TestOut', url: 'https://w3.testout.com/' },
        { name: 'Udacity', url: 'https://www.udacity.com/' }
      ],
    }
  ];

  // Function to toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Use useCallback to memoize the function and avoid re-creating it on every render
  const handleMouseMove = useCallback((e) => {
    if (e.clientX < 20 && !showSidebar) {
      setShowSidebar(true);
    }
  }, [showSidebar]);

  // Use useEffect to add and remove the 'mousemove' event listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);  // Updated dependency array to include the memoized function

  // Render the Offcanvas sidebar and its content
  return (
    <>
      <Offcanvas show={showSidebar} onHide={toggleSidebar} className={styles.offcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.menuTitle}>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvasBody}>
          <Accordion defaultActiveKey="0">
            {menuItems.map((menuItem, index) => (
              <Card key={index}>
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header className={styles[menuItem.colorClass]}>
                    {menuItem.category}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles.listUnstyled}>
                      {menuItem.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            className="noColorChange"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#17a2b8', textDecoration: 'none' }}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Card>
            ))}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// Export the OffCanvasSidebar component
export default OffCanvasSidebar;





// Elements used in the code:
// <Offcanvas>: A Bootstrap component for creating off-canvas sidebars.
// <Offcanvas.Header>: The header section of the Offcanvas.
// <Offcanvas.Title>: The title section of the Offcanvas header.
// <Offcanvas.Body>: The main body content of the Offcanvas.
// <Accordion>: A Bootstrap component for creating collapsible content.
// <Card>: A Bootstrap component for displaying content in a card layout.
// <Accordion.Item>: A child component of Accordion, representing a single item.
// <Accordion.Header>: The header of an Accordion item.
// <Accordion.Body>: The body content of an Accordion item.
// <ul>: Unordered list HTML element.
// <li>: List item HTML element.
// <a>: Anchor HTML element for hyperlinks.
// CSS Modules classes used in the code:
// styles.offcanvas: Applies styling to the Offcanvas sidebar.
// styles.menuTitle: Styles the title inside the Offcanvas header.
// styles.offcanvasBody: Styles the body section of the Offcanvas.
// styles.listUnstyled: Removes default styling from the list items.
// styles[menuItem.colorClass]: Dynamically applies category-specific color classes.
// Bootstrap Classes (Modifiers) used in the code:
// show={showSidebar}: Controls the visibility of the Offcanvas sidebar.
// defaultActiveKey="0": Sets the default active key for the Accordion.
// closeButton: Adds a close button to the Offcanvas header.
// target="_blank": Opens the link in a new tab.
// rel="noopener noreferrer": Security measure for opening links in a new tab.
// Detailed Description:
// The OffCanvasSidebar is a functional component in React that displays an off-canvas sidebar using Bootstrap's Offcanvas and Accordion components. The sidebar includes various categories like "JavaScript," "Java," etc., each with a list of links.

// It uses the useState hook to manage the state of the sidebar visibility (showSidebar) and the useEffect hook to attach a mousemove event listener to the window. When the mouse moves close to the left edge of the window, the sidebar is displayed.

// Each category and its associated links are stored in an array called menuItems, which is mapped to generate multiple Accordion items. These items are displayed in a Card layout. When clicked, the Accordion items expand to reveal the list of links. The links are styled and open in a new browser tab when clicked.

// The styling is achieved using CSS Modules, and the styles are imported from an external CSS file (OffCanvasSidebar.module.css). The component is then exported for use in other parts of the application.
