// Define player names
const player1 = "Player 1";
const player2 = "Player 2";

// Track current player
let currentPlayer = "X";

// Create an array to represent the board state
let board = ["", "", "", "", "", "", "", "", ""];

// Create an array to represent the winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to check for a win
const checkWin = () => {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

// Function to update the status message with the winner's name or draw message
const updateStatusMessage = (winner) => {
    const statusElement = document.getElementById("status");
    statusElement.style.marginBottom = "10px"; // Adjust the margin value as per your requirements
  
    if (winner) {
      if (winner === "X") {
        statusElement.innerHTML = `<span style="color: green; font-weight: bold; font-size: 25px">Hurrey!! ${player1} wins!</span>`;
      } else if (winner === "O") {
        statusElement.innerHTML = `<span style="color: blue; font-weight: bold; font-size: 25px">Hurrey!! ${player2} wins!</span>`;
      }
    }  else if (board.indexOf("") === -1) {
        statusElement.innerHTML = `<span style="background: linear-gradient(45deg, black, orange); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; font-size: 25px">Oops!! It's a draw!</span>`;
      }
  };
  
  
  

// Function to handle a cell click
const makeMove = (index) => {
  if (board[index] !== "" || checkWin()) {
    return;
  }

  board[index] = currentPlayer;
  document.getElementsByClassName("cell")[index].innerText = currentPlayer;

  const winner = checkWin();
  if (winner) {
    updateStatusMessage(winner);
    document.getElementById("board").classList.add("winner");
  } else if (board.indexOf("") === -1) {
    updateStatusMessage(null);
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

// Function to reset the board
const resetBoard = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  document.getElementById("board").classList.remove("winner");
  document.getElementById("status").innerText = "";
};
