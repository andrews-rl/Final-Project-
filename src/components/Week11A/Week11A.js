// Elements and CSS Classes Used
// Elements Used in the Code:
// <nav>: Represents the navigation bar container.
// <div>: Used for grouping and structuring content.
// <Link>: Provided by React Router, creates navigation links.
// <DropdownButton>: A Bootstrap component for a dropdown button.
// <Dropdown.Item>: A Bootstrap component for dropdown items.
// <button>: A standard HTML button element.
// CSS Modules Classes Used in the Code:
// styles.navBar: Applies styling to the navigation bar.
// styles.navList: Styles for the list within the navigation bar.
// styles.navItem: Styles for individual navigation items.
// styles.navLink: Styles for navigation links.
// styles.dropdownButton: Styles for the Bootstrap dropdown button.
// styles.dropdownItem: Styles for individual dropdown items.
// Bootstrap Classes (Modifiers) Used in the Code:
// text-white: Sets the text color to white.
// variant="info": Sets the Bootstrap variant to 'info,' changing the button color.
// Additional CSS Classes Used in the Code:
// d-flex: Sets the element as a flex container, allowing flexible layout.
// align-items-center: Aligns flex items vertically at the center of the container.
// justify-content-between: Distributes space evenly between flex items horizontally, pushing them to the edges of the container.

// Introduction
// The 'Week11A' component is a React functional component designed to implement a Tic Tac Toe game. It utilizes React, React Bootstrap, and CSS Modules to create a responsive and visually appealing game interface.

// Functionality
// Game Board Initialization
// The component initializes the game board, player's turn, and game status using the useState hook. The game board is represented as an array of squares, initially filled with null values.
// Square Click Handling
// The handleClick function is responsible for handling square click events. It updates the game board when a valid move is made by a player (X or O).
// Winner Calculation
// The calculateWinner function checks the game board to determine if a player has won by matching any of the predefined winning combinations.
// Resetting the Game
// The resetBoard function resets the game board, allowing players to start a new game. It also sets the game as started.
// Game Status Display
// The component displays the game status, indicating the current player's turn or declaring a winner. If the game ends in a draw, it displays a corresponding message.
// User Interface
// Styling
// CSS Modules are used to apply custom styling to various elements, such as the game board, status messages, and buttons.
// Responsive Design
// The component uses Bootstrap classes to create a responsive layout that adapts to different screen sizes.
// Game Interaction
// Players can click on empty squares to make their moves, and the game status updates accordingly.
// Play Again Button
// After the game ends, a "Play Again" button is displayed, allowing players to restart the game.
// Play Game Button
// Initially, a "Play Game" button is shown, which starts the game when clicked.
// Summary
// The 'Week11A' component provides a fully functional Tic Tac Toe game with an interactive user interface. It leverages React for component management, React Bootstrap for styling and UI components, and CSS Modules for custom styling. The game allows two players to take turns, displays the game status, and offers the option to start a new game after it concludes.



// Import necessary modules and styles
import React, { useState } from 'react';
import styles from './Week11A.module.css';

// Function to calculate the winner of the Tic Tac Toe game
function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check each winning line to determine if a player has won
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

// Define the Week11A component
function Week11A() {
  // Initialize the game board, player's turn, and game status
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  // Function to handle a square click event
  const handleClick = (i) => {
    const squares = board.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = isXNext ? 'X' : 'O';
    setBoard(squares);
    setIsXNext(!isXNext);
  };

  // Function to reset the game board
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStarted(true);
  };

  // Determine the game status and winner
  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  // Render the component
  return (
    <div className="container">
      <hr />
      <h3 className="text-info text-center">Week 11: Tic Tac Toe</h3>
      <hr />

      <div className="d-flex justify-content-center align-items-center">
        <div className={`text-info text-center `}></div>
        <div className={`row ${styles.gameBoard}`}>
          <div className="col">
            {gameStarted ? (
              <>
                <div className={`alert ${styles.status}`}>{status}</div>
                <div className={`row ${styles.boardRow}`}>
                  {board.map((square, i) => (
                    <div className="col-4" key={i}>
                      <button
                        className={`btn btn-outline-info btn-lg ${styles.box}`}
                        onClick={() => handleClick(i)}
                        disabled={square || winner}
                      >
                        {square}
                      </button>
                    </div>
                  ))}
                </div>
                {(winner || status === "It's a draw!") && (
                  <div className="row">
                    <div className="col text-center">
                      <button
                        className={`btn btn-info mt-5 mb-5`}
                        onClick={resetBoard}
                      >
                        <span className={`text-dark`}>Play Again</span>
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="row">
                <div className="col text-center ">
                  <button className={`btn btn-info  `} onClick={resetBoard}>
                    Play Game
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="border" />
    </div>
  );
}

// Export the Week11A component
export default Week11A;
