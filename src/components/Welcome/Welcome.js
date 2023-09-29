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
        <h1 className="display-4">Welcome {singleUser.name}</h1>
        <p className="lead">Today is {singleUser.date}. The time is {singleUser.time}.</p>
        <div className={styles.moreDropdown}> 
          
        </div>
      </div>
    </section>
  );
}

export default Welcome;
