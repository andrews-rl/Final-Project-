import React, { Component } from 'react';

class Week5 extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      movies: [],
      selectedMovieIndex: null,
      newMovieName: '',
      newCharacterName: '',
      newCharacterType: 'Hero',
    };
  }

  // Function to create a new movie
  createMovie() {
    const { newMovieName } = this.state;
    if (newMovieName) {
      this.setState((prevState) => ({
        movies: [...prevState.movies, { name: newMovieName, characters: [] }],
        newMovieName: '',
      }));
    }
  }

  // Function to create a new character
  createCharacter() {
    const { selectedMovieIndex, newCharacterName, newCharacterType } = this.state;
    if (selectedMovieIndex !== null && newCharacterName && newCharacterType) {
      const updatedMovies = [...this.state.movies];
      updatedMovies[selectedMovieIndex].characters.push({
        name: newCharacterName,
        type: newCharacterType,
      });
      this.setState({ movies: updatedMovies, newCharacterName: '' });
    }
  }

  // Function to view a specific movie
  viewMovie(index) {
    this.setState({ selectedMovieIndex: index });
  }

  // Function to delete a movie
  deleteMovie(index) {
    const updatedMovies = [...this.state.movies];
    updatedMovies.splice(index, 1);
    this.setState({ movies: updatedMovies, selectedMovieIndex: null });
  }

  // Function to delete a character
  deleteCharacter(characterIndex) {
    const { selectedMovieIndex } = this.state;
    if (selectedMovieIndex !== null) {
      const updatedMovies = [...this.state.movies];
      updatedMovies[selectedMovieIndex].characters.splice(characterIndex, 1);
      this.setState({ movies: updatedMovies });
    }
  }

  // Render function
  render() {
    const {
      movies,
      selectedMovieIndex,
      newMovieName,
      newCharacterName,
      newCharacterType,
    } = this.state;

    return (
      <div className="container">
        <hr />
        <h3 className="text-info text-center mt-3">Week 5: Object Oriented Programming</h3>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Movie"
                  value={newMovieName}
                  onChange={(e) => this.setState({ newMovieName: e.target.value })}
                  className="form-control mb-2"
                />
                <button type="button" onClick={() => this.createMovie()} className="btn btn-info d-block mx-auto mt-4">Create New Movie</button>
              </div>
              {selectedMovieIndex !== null && (
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Character Name"
                    value={newCharacterName}
                    onChange={(e) => this.setState({ newCharacterName: e.target.value })}
                    className="form-control mb-2"
                  />
                  <select value={newCharacterType} onChange={(e) => this.setState({ newCharacterType: e.target.value })} className="form-select mb-2">
                    <option value="Hero">Hero</option>
                    <option value="Villain">Villain</option>
                  </select>
                  <button type="button" onClick={() => this.createCharacter()} className="btn btn-info d-block mx-auto">Create New Character</button>
                </div>
              )}
            </form>
          </div>
          <div className="col-md-8">
            {selectedMovieIndex !== null && (
              <div>
                <h4 className="text-info">{movies[selectedMovieIndex].name}</h4>
              </div>
            )}
            {movies.map((movie, index) => (
              <div key={index} className="mt-3">
                <p className="text-info">{index}) {movie.name}</p>
                <button type="button" onClick={() => this.viewMovie(index)} className="btn btn-info me-2">Characters</button>
                <button type="button" onClick={() => this.deleteMovie(index)} className="btn btn-info">Delete Movie</button>
                {selectedMovieIndex === index && (
                  <div className="mt-3">
                    {movie.characters.length > 0 ? (
                      <div>
                        <p className="text-info">Characters:</p>
                        {movie.characters.map((character, characterIndex) => (
                          <div key={characterIndex} className="mb-2 d-flex justify-content-between align-items-center">
                            <span>{characterIndex}) {character.name} ({character.type})</span>
                            <button type="button" onClick={() => this.deleteCharacter(characterIndex)} className="btn btn-info">Delete Character</button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-info">No characters in this movie.</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Week5;
// Elements used in the code:
// <div>: Used for grouping and structuring content.
// <form>: Represents the container for all form elements.
// <input>: A form element used for text inputs.
// <select>: A form element used for dropdown selections.
// <button>: A standard HTML button element.
// <span>: Used for inline styling of text.
// <p>: Paragraph element used for displaying text.
// <h3>: Header tag used to display titles.
// <hr>: Horizontal rule used for separating content.
// <h4>: Header tag used to display sub-titles.
// CSS Modules classes used in the code:
// container: Applies Bootstrap styling to the main container.
// col-md-4: Sets the width of the left column for medium screens.
// col-md-8: Sets the width of the right column for medium screens.
// text-info: Sets the text color to Bootstrap's "info" color.
// text-center: Centers the text.
// mt-3: Adds top margin.
// mb-3: Adds bottom margin.
// mb-2: Adds a smaller bottom margin.
// d-flex: Makes the element a flexbox container.
// justify-content-between: Aligns flex items with space between them.
// align-items-center: Vertically aligns flex items at the center.
// btn btn-info: Bootstrap classes for styling buttons.
// form-control: Bootstrap class for styling form elements.
// form-select: Bootstrap class for styling the select box.
// me-2: Adds a right margin.
// Detailed Description:
// This code defines a React class component named Week5 that serves as a simple movie and character management application. The component uses local state to manage an array of movies, each containing an array of characters.

// State Initialization: The constructor initializes the component's state, which includes movies, selected movie index, and form inputs for new movie and character creation.

// Creating Movies: The createMovie method is responsible for creating a new movie object and adding it to the state's movies array.

// Creating Characters: The createCharacter method adds characters to the selected movie. It pushes new characters to the characters array of the selected movie.

// Viewing Movies: The viewMovie method sets the index of the currently viewed movie.

// Deleting Movies and Characters: The deleteMovie and deleteCharacter methods remove movies and characters respectively from their corresponding arrays.

// Rendering: The render method handles the component's display logic. It uses Bootstrap classes for styling and layout. The left column contains form inputs for creating movies and characters, while the right column displays the list of movies and their characters.

// Form Inputs: Input and select elements are used for accepting movie names, character names, and character types.

// Buttons: Buttons are used to trigger create, view, and delete operations.

// Conditional Rendering: Conditional rendering is used to display form fields for character creation only when a movie is selected, and to show characters for the selected movie.

// In summary, the Week5 component showcases object-oriented programming principles by modeling movies and characters as objects within arrays. It demonstrates CRUD operations (Create, Read, Update, Delete) on these objects and provides a user interface for these operations using form inputs and buttons.