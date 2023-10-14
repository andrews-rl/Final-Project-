// Summary of Code:

// This code defines a React functional component named 'Week14' that showcases the use of React state, event handling, and material design components.
// It presents a movie review application with a list of movies, their details, and an interface for users to submit reviews.

// Elements used in the code:
// - React components: useState, Box, Rating, FormGroup
// - Material-UI components: Box, Rating
// - React Bootstrap components: FormGroup
// - Material-UI icon: StarIcon

// CSS Modules classes used in the code:
// - styles.week14Container: Styles the main container of the component.
// - styles.movieCard: Styles individual movie cards.
// - styles.reviewList: Styles the list of reviews.
// - styles.reviewForm: Styles the form for submitting reviews.

// Detailed Description:
// This code defines a React functional component named 'Week14' that demonstrates the use of React state and various components from Material-UI and React Bootstrap.
// The component presents a movie review application with a pre-defined list of movies, their details (title, year, info), and existing reviews. Users can submit their own reviews for each movie.

// The 'useState' hook is used to manage state variables, including 'movies' (to store movie data) and 'newReviews' (to store user-submitted reviews).

// Event handling functions ('handleRating', 'handleInputChange', 'handleReviewSubmit') are defined to manage user interactions. Users can rate movies, input their name and review text, and submit reviews.

// The component iterates over the 'movies' array, displaying movie information, existing reviews, and a form for submitting new reviews for each movie.

// Material-UI components such as 'Box' and 'Rating' are used for styling and rating input. React Bootstrap's 'FormGroup' is used for form inputs.

// In summary, 'Week14' showcases the integration of React state management, Material-UI components, and React Bootstrap in a movie review application. It allows users to interact with movie data, submit reviews, and see existing reviews for each movie.

import React, { useState } from 'react';  // Import React and useState
import styles from './Week14.module.css'; // Import CSS modules stylesheet as 'styles'
import Box from '@mui/material/Box';  // Import the 'Box' component from MUI
import Rating from '@mui/material/Rating';  // Import the 'Rating' component from MUI
import { FormGroup } from 'react-bootstrap';  // Import the 'FormGroup' component from React Bootstrap
import StarIcon from '@mui/icons-material/Star'; // Import the 'StarIcon' component from MUI icons

export default function Week14() {
  // Define state variables for movies and newReviews
  const [movies, setMovies] = useState([
    {
      id: 1,
      img: 'https://i.ibb.co/WcN9FfL/POSTER-1-1-d-for-web.jpg',
      title: 'Blade Runner 2049',
      year: ' (2017)',
      info:
        "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
      reviews: [
        {
          name: 'John Doe',
          rating: '5',
          text: 'This movie is awesome!',
        },
        {
          name: 'Jane Smith',
          rating: '4',
          text: 'Great sci-fi film!',
        },
      ],
    },
    {
      id: 2,
      img:
        'https://m.media-amazon.com/images/I/71l6fadsRMS._AC_SL1406_.jpg',
      title: 'Arrival',
      year: ' (2016)',
      info:
        'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
      reviews: [
        {
          name: 'Alice Johnson',
          rating: '5',
          text: 'A thought-provoking movie!',
        },
        {
          name: 'Bob Anderson',
          rating: '3',
          text: 'Interesting storyline.',
        },
      ],
    },
  ]);

  const [newReviews, setNewReviews] = useState([
    {
      name: '',
      rating: 0,
      text: '',
    },
    {
      name: '',
      rating: 0,
      text: '',
    },
  ]);

  // Handle changes in the rating input
  const handleRating = (newValue, index) => {
    const updatedNewReviews = [...newReviews];
    updatedNewReviews[index].rating = newValue;
    setNewReviews(updatedNewReviews);
  };

  // Handle changes in the input fields for name and text
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedNewReviews = [...newReviews];
    updatedNewReviews[index][name] = value;
    setNewReviews(updatedNewReviews);
  };

  // Handle the submission of a review
  const handleReviewSubmit = (movieId, index) => {
    const updatedMovies = [...movies];
    updatedMovies[movieId - 1].reviews.push(newReviews[index]);
    setMovies(updatedMovies);

    const updatedNewReviews = [...newReviews];
    updatedNewReviews[index] = {
      name: '',
      rating: 0,
      text: '',
    };
    setNewReviews(updatedNewReviews);
  };

  return (
    <div className={`container ${styles.week14Container}`}>
      <hr />
      <h3 className={`text-center display-6`}>Props, State, Events, & Lifecycle Methods</h3>
      <hr />
      {movies.map((movie, index) => (
        <div key={movie.id} className={`mb-4 p-3 ${styles.movieCard} rounded`}>
          <img src={movie.img} alt={movie.title} className="img-fluid" />
          <h3>
            {movie.title} {movie.year}
          </h3>
          <p>{movie.info}</p>
          <div className={`border-info rounded p-3 ${styles.reviewList}`}>
            <h4>Reviews:</h4>
            <ul>
              {movie.reviews.map((review, reviewIndex) => (
                <li key={reviewIndex}>
                  <strong>{review.name}</strong> - Rating:{' '}
                  {[...Array(parseInt(review.rating))].map((_, starIndex) => (
                    <StarIcon
                      key={starIndex}
                      style={{ color: 'white' }}
                    />
                  ))}
                  <p>{review.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`p-3 ${styles.reviewForm}`}>
            <div className="mb-3">
              <FormGroup>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={newReviews[index].name}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </FormGroup>
            </div>
            {/* Render a Rating component for user rating input */}
            <div className="mb-3">
              <FormGroup>
                <Box>
                  <span className="mr-2">Your Rating:</span>
                  <Rating
                    name={`user-rating-${index}`}
                    value={newReviews[index].rating}
                    onChange={(_, newValue) => handleRating(newValue, index)}
                  />
                </Box>
              </FormGroup>
            </div>
            <div className="mb-3">
              <FormGroup>
                <textarea
                  name="text"
                  className="form-control"
                  placeholder="Review"
                  value={newReviews[index].text}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </FormGroup>
            </div>
            <div>
              {/* Button to submit the review */}
              <button
                onClick={() => handleReviewSubmit(movie.id, index)}
                className="btn btn-info text-dark border-5 border-white custom-button mt-3"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/*
   JavaScript Report: Spread and Rest Operators

   --- Spread Operator ---
   The spread operator is used to spread elements of an iterable into another iterable.

   --- Array Spreading ---
   const array1 = [1, 2, 3];
   const array2 = [...array1, 4, 5]; // Spread elements of array1 into array2
    Output: [1, 2, 3, 4, 5]

   --- String Spreading ---
   const str = "hello";
   const strArray = [...str]; // Spread characters of a string into an array
    Output: ["h", "e", "l", "l", "o"]

   --- Object Spreading (Shallow Copy) ---
   const obj1 = { name: "John", age: 30 };
   const obj2 = { ...obj1, location: "New York" }; // Spread properties of obj1 into obj2
    Output: { name: "John", age: 30, location: "New York" }

   --- Function Argument Spreading ---
   function sum(...numbers) { // Spread function arguments into an array
     return numbers.reduce((acc, num) => acc + num, 0);
   }
   sum(1, 2, 3, 4, 5); // Output: 15

   --- Rest Operator ---
   The rest operator is used to collect multiple elements into a single array or object.

   --- Function Argument Collection ---
   function printArgs(...args) { // Collect function arguments into an array
     console.log(args);
   }
   printArgs(1, 2, 3); // Output: [1, 2, 3]

   --- Object Rest Properties (ES6) ---
   const { prop1, ...rest } = { prop1: 1, prop2: 2, prop3: 3, prop4: 4 }; // Collect rest properties into an object
    Output: { prop3: 3, prop4: 4 }

   --- Destructuring Assignment (Array and Object) ---
   The spread operator can be used within destructuring to spread or collect elements.

   --- Array Destructuring with Spread ---
   const [first, ...rest] = [1, 2, 3, 4, 5]; // Spread elements of an array into variables
    Output: first = 1, rest = [2, 3, 4, 5]

   --- Object Destructuring with Spread ---
   const { prop1, ...rest } = { prop1: 1, prop2: 2, prop3: 3 }; // Spread properties of an object into variables
    Output: prop1 = 1, rest = { prop2: 2, prop3: 3 }

*/
