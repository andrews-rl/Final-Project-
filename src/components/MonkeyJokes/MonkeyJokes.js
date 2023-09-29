import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import monkeyImage from './monkeyt.jpg'; // Import an image
import styles from './MonkeyJokes.module.css'; // Import a CSS module for styling

function MonkeyJokes() {
  // Component Setup: The code sets up a functional React component called 'MonkeyJokes' using React hooks, including useState and useEffect.

  const [joke, setJoke] = useState(''); // Initial State: It initializes a state variable named 'joke' to store the fetched joke and a function 'setJoke' to update this variable.

  useEffect(() => {
    // Fetching Jokes: The 'useEffect' hook is used to fetch an initial programming-related joke from an external API when the component mounts. This joke is retrieved from the 'https://v2.jokeapi.dev' API, and the 'nsfw, religious, political, racist, sexist' flags are blacklisted to ensure the content is appropriate.
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist')
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setJoke(data.joke)) // Set the 'joke' state variable with the fetched joke
      .catch((error) => console.error('Error fetching joke: ', error)); // Error Handling: Handle errors during the fetch operation by logging them to the console for debugging.

  }, []); // The empty dependency array ensures this effect runs only once, when the component mounts.

  const fetchAnotherJoke = () => {
    // Handling User Interaction: When the "Another Joke" button is clicked, it triggers the 'fetchAnotherJoke' function, which fetches and updates the displayed joke with a new one.
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist')
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setJoke(data.joke)) // Set the 'joke' state variable with the fetched joke
      .catch((error) => console.error('Error fetching joke: ', error)); // Error Handling: Handle errors during the fetch operation by logging them to the console for debugging.

  };

  return (
    <div className={styles.container}>
      {/* Styling with CSS Modules: Render a styled container for the component using CSS classes imported from 'MonkeyJokes.module.css'. */}
      <h2 className={`${styles.customHeading} ${styles.textCenter}`}>Jokes</h2>
      {/* Displaying Content: Display a title with custom styles that aligns to the center. */}
      <div className={`${styles.monkeyImageContainer} ${styles.textCenter}`}>
        <img
          src={monkeyImage}
          alt="Prophet Monkey"
          className={`${styles['monkey-image']} img-fluid rounded`}
        />
      </div>
      {/* Render an image of "Prophet Monkey" with custom styling that includes rounded corners and responsiveness. */}
      <div className={`${styles.customParagraph} ${styles.textCenter}`}>
        <p className="text-white">{joke}</p>
      </div>
      {/* Display the fetched joke with custom paragraph styles and white text color. */}
      <div className={`${styles.textCenter}`}>
        <button className="btn btn-info" onClick={fetchAnotherJoke}>
          Another Joke
        </button>
      </div>
      {/* Bootstrap Styling: Render a button labeled "Another Joke" that, when clicked, triggers the 'fetchAnotherJoke' function. The button is styled with Bootstrap classes for a blue color and responsiveness. */}
    </div>
  );
}

export default MonkeyJokes;

/*
Bootstrap Class Explanation:
- Bootstrap is a popular CSS framework that provides pre-designed styles and components for building responsive web applications.
- In this code, Bootstrap classes are used for styling some elements:
  - 'btn btn-info': Bootstrap classes to style the button as an informative button with a blue background.
  - 'img-fluid': A Bootstrap class to make the image responsive, ensuring it scales with the container size.
  - 'rounded': A Bootstrap class to add rounded corners to the image.

Summary:
This code defines a React component named 'MonkeyJokes' that displays programming-related jokes fetched from an external API and allows users to request new jokes. It sets up initial state using React hooks, fetches jokes when the component mounts and when the "Another Joke" button is clicked, and applies custom and Bootstrap styling for a visually appealing user experience. Users can enjoy a continuous stream of jokes by clicking the "Another Joke" button, all while ensuring that inappropriate content is filtered out.
*/
