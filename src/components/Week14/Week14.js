import React, { useState } from 'react';
import styles from './Week14.module.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { FormGroup } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star'; // Import StarIcon

export default function Week14() {
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

  const handleRating = (newValue, index) => {
    const updatedNewReviews = [...newReviews];
    updatedNewReviews[index].rating = newValue;
    setNewReviews(updatedNewReviews);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedNewReviews = [...newReviews];
    updatedNewReviews[index][name] = value;
    setNewReviews(updatedNewReviews);
  };

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
      <h3 className={`text-info ${styles.week14Title}`}>Week 14: Props, State, Events, & Lifecycle Methods</h3>
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
              <button
                onClick={() => handleReviewSubmit(movie.id, index)}
                className="btn btn-info text-white mt-3"
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
