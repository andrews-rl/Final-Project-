// Import the CSS module
import React from 'react';
import styles from './Welcome.module.css'; // Import the CSS module

function Welcome() {
  // Create a new Date object to get the current date and time
  const date = new Date();

  // Define an object called 'singleUser' with properties for name, date, and time
  const singleUser = {
    name: 'Promineo Tech Team',
    date: date.toDateString(),
    time: date.toLocaleTimeString(),
  };

  return (
    <section className={styles.WelcomeSection}>
      <div className={`${styles.centerContent} text-center`}>
        <h1 className="display-4 mt-3">Welcome {singleUser.name}</h1>
        <p className="lead display-7 mt-3">Today is {singleUser.date}. The time is {singleUser.time}.</p>
        <div className={styles.moreDropdown}> 
          
        </div>
      </div>
    </section>
  );
}

export default Welcome;

// Summary of Code:
// This code defines a React functional component named 'Welcome' that generates a welcome message with the current date and time. It utilizes CSS Modules for styling.

// Elements used in the code:
// - <section>: Represents a section of the web page.
// - <div>: Used for grouping and structuring content.
// - <h1>: Represents a top-level heading.
// - <p>: Represents a paragraph.
// - <div> (inside 'WelcomeSection'): A container for additional content.

// CSS Modules classes used in the code:
// - styles.WelcomeSection: Applies styling to the 'section' element.
// - styles.centerContent: Centers content both horizontally and vertically.
// - styles.moreDropdown: Styles for an empty 'div'.

// Detailed Description:
// This code creates a React functional component named 'Welcome' that serves the purpose of displaying a welcome message with the current date and time. It imports a CSS module 'styles' to apply specific styling to the rendered components.

// Inside the component, a new 'Date' object is created to capture the current date and time. The 'singleUser' object is defined, containing properties for 'name', 'date', and 'time'. These properties are populated with values, including the current date in a human-readable format and the current time.

// The JSX returned by the 'Welcome' component includes a 'section' element with a class 'styles.WelcomeSection', which handles styling for the section. Within this section, a 'div' element with classes 'styles.centerContent' and 'text-center' is used to center-align its child elements both horizontally and vertically.

// Inside the 'div', an 'h1' element displays a welcome message, incorporating the 'singleUser.name' property. Additionally, a 'p' element provides information about the current date and time, utilizing 'singleUser.date' and 'singleUser.time'.

// Lastly, an empty 'div' with the class 'styles.moreDropdown' is included, which appears to be a placeholder for potential future content.

// In summary, the 'Welcome' component generates a welcoming message that dynamically includes the user's name along with the current date and time. It achieves this while adhering to specific styling defined using CSS Modules.