// Import required modules
import React, { Component } from 'react';
import './Week6.module.css';  // Import CSS for styling

// Define the Week6 class component
class Week6 extends Component {
  // Constructor to initialize state and props
  constructor(props) {
    super(props);
    // Initialize state variables
    this.state = {
      player1Score: 0,  // Score for Player 1
      player2Score: 0,  // Score for Player 2
      rounds: [],       // Array to store details of each round
      gameWinner: '',   // To store the winner of the game
      gameStarted: false,  // Boolean to check if game has started
    };
  }

  // Method to start and play the game
  playGame = () => {
    // Reset the game state
    this.setState({
      player1Score: 0,
      player2Score: 0,
      rounds: [],
      gameWinner: '',
      gameStarted: true,  // Mark the game as started
    });

    // Define card suits and values
    const suits = ['♥', '♦', '♣', '♠'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    // Initialize deck
    const deck = [];

    // Create a deck of cards
    for (const suit of suits) {
      for (const value of values) {
        deck.push({ name: value, suit: suit, value: value });
      }
    }

    // Function to shuffle the array
    function shuffle(arr) {
      let i = arr.length,
        randomIndex;
      while (i !== 0) {
        randomIndex = Math.floor(Math.random() * i);
        i--;
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
      }
      return arr;
    }

    // Shuffle the deck
    shuffle(deck);

    // Distribute cards to players
    const player1Cards = deck.slice(0, 26);
    const player2Cards = deck.slice(26, 52);

    // Initialize rounds array
    const newRounds = [];

    // Loop to simulate each round
    for (let i = 0; i < player1Cards.length; i++) {
      // Initialize round details
      const roundDetails = {
        roundNumber: i + 1,
        player1Card: `${player1Cards[i].name}${player1Cards[i].suit}`,
        player2Card: `${player2Cards[i].name}${player2Cards[i].suit}`,
        winner: '',
      };

      // Determine round winner
      if (player1Cards[i].value > player2Cards[i].value) {
        roundDetails.winner = 'Player 1';
        this.setState((prevState) => ({
          player1Score: prevState.player1Score + 1,
        }));
      } else if (player2Cards[i].value > player1Cards[i].value) {
        roundDetails.winner = 'Player 2';
        this.setState((prevState) => ({
          player2Score: prevState.player2Score + 1,
        }));
      }

      // Add round details to rounds array
      newRounds.push(roundDetails);
    }

    // Determine game winner
    if (this.state.player1Score > this.state.player2Score) {
      this.setState({ gameWinner: 'Player 1' });
    } else if (this.state.player2Score > this.state.player1Score) {
      this.setState({ gameWinner: 'Player 2' });
    } else {
      this.setState({ gameWinner: 'Tie' });
    }

    // Update rounds in state
    this.setState({ rounds: newRounds });
  };

  // Render method
  render() {
    // Destructure state variables for easier access
    const { player1Score, player2Score, rounds, gameWinner, gameStarted } = this.state;

    // JSX to render the component
    return (
      <div className="container text-center">
        <hr />
        <h3 className="text-info text-center mt-3">Week 6: DevTools, Debugging, & Unit Tests</h3>
        <hr />
        <button onClick={this.playGame} className="btn btn-info">
          {gameStarted ? 'Play Again' : 'Start Game'}  // Button text based on game state
        </button>
        <hr />
        {gameStarted && (  // Conditional rendering based on game state
          <div>
            <hr />
            {rounds.map((round) => (  // Loop through each round to display details
              <div key={round.roundNumber} className="row mt-3">
                <div className="col">
                  <p>
                    Round {round.roundNumber}:  // Display round number
                  </p>
                </div>
                <div className="col">
                  <span style={{ fontSize: '24px' }}>  // Display player 1's card
                    {round.player1Card.includes('♥') || round.player1Card.includes('♦') ? (
                      <span style={{ color: 'red' }}>{round.player1Card}</span>
                    ) : (
                      <span style={{ color: 'black' }}>{round.player1Card}</span>
                    )}
                  </span>
                </div>
                <div className="col">  // vs separator
                  vs
                </div>
                <div className="col">  // Display player 2's card
                  <span style={{ fontSize: '24px' }}>
                    {round.player2Card.includes('♥') || round.player2Card.includes('♦') ? (
                      <span style={{ color: 'red' }}>{round.player2Card}</span>
                    ) : (
                      <span style={{ color: 'black' }}>{round.player2Card}</span>
                    )}
                  </span>
                </div>
                <div className="col">  // Display winner label
                  Winner:
                </div>
                <div className="col">  // Display round winner
                  {round.winner === 'Player 1' ? 'Player 1' : round.winner === 'Player 2' ? 'Player 2' : 'Tie'}
                </div>
              </div>
            ))}
            <div className="mt-3">  // Display game results
              <h5 className="text-info" style={{ fontSize: '24px' }}>
                Results:
              </h5>
              <p className="text-info" style={{ fontSize: '24px' }}>
                Player 1 Wins {player1Score} Rounds
              </p>
              <p className="text-info" style={{ fontSize: '24px' }}>
                Player 2 Wins {player2Score} Rounds
              </p>
              <p className="text-info" style={{ fontSize: '24px' }}>
                {26 - (player1Score + player2Score)} Rounds Resulted in Tie
              </p>
              <p className="text-info" style={{ fontSize: '24px' }}>
                <span className="text-info">
                  {gameWinner === 'Player 1' ? 'Player 1 Wins Game!' : gameWinner === 'Player 2' ? 'Player 2 Wins Game!' : 'Tie Game!'}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// Export the component
export default Week6;


// Elements used in the code:
// <div>: Used for grouping and structuring content.
// <hr>: Horizontal rule used for separating content.
// <h3>: Header tag used to display titles.
// <h5>: Header tag used to display sub-titles.
// <button>: A standard HTML button element.
// <span>: Used for inline styling of text.
// <p>: Paragraph element used for displaying text.
// <col>: Bootstrap column class used for layout.
// CSS Modules classes used in the code:
// container: Applies Bootstrap styling to the main container.
// text-center: Centers the text.
// mt-3: Adds top margin.
// btn btn-info: Bootstrap classes for styling buttons.
// text-info: Sets the text color to Bootstrap's "info" color.
// row: Bootstrap class for creating a row.
// Inline Styles:
// fontSize: '24px': Sets the font size for some elements to 24px.
// color: 'red': Changes the color of text to red.
// color: 'black': Changes the color of text to black.
// Detailed Description:
// The Week6 React component simulates a simple card game where two players are dealt cards, and the winner of each round is determined based on the value of the cards. The component also keeps track of the scores and displays the game's winner at the end.

// State Initialization: In the constructor, the state is initialized with properties to store player scores, rounds, and game status.

// Game Logic: The playGame method contains the core logic for the game. It initializes the deck of cards, shuffles them, deals them to two players, and determines the winner of each round. It also calculates the scores for both players and the game's winner.

// Deck Creation and Shuffle: A deck of cards is created using two arrays: suits and values. The deck is then shuffled using the shuffle function.

// Round Details: For each round, details such as the cards dealt and the round's winner are stored in an object, which is then pushed into the rounds array in the state.

// Conditional Rendering: The component conditionally renders the game results, including each round's details and the overall winner, only after the game has started.

// Styling and Layout: Bootstrap classes are used extensively for styling and layout. Inline styles are also used for specific styling needs, such as changing text color based on card suits.

// Button Functionality: A button is provided to start the game or play again. The button's label changes conditionally based on whether the game has started.

// Result Display: At the end of the game, the scores for both players and the game's winner are displayed.

// In summary, the Week6 component demonstrates the use of React's state management, array manipulation, conditional rendering, and basic game logic, all while maintaining an interactive user interface.
