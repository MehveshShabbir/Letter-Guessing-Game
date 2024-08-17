document.addEventListener('DOMContentLoaded', () => {
    startGame();
  });
  
  function startGame() {
    // Object to store game state
    const gameState = {
      secretLetter: generateRandomLetter(),
      attempts: 0,
    };
    
    // Function to generate a random letter between 'a' and 'z'
    function generateRandomLetter() {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      return alphabet[randomIndex];
    }
      
  
    // Array of messages
    const messages = [
      'Too low! Try again.',
      'Too high! Try again.',
      'Congratulations! You guessed the correct letter!',
    ];
  
    // Callback function for user input
    window.checkGuess = function () {
      const userInput = document.getElementById('userInput').value.toLowerCase();
  
      if (validateInput(userInput)) {
        gameState.attempts++;
  
        if (userInput === gameState.secretLetter) {
          displayMessage(messages[2]);
          handleGameResult(true);
        } else {
          const messageIndex = userInput < gameState.secretLetter ? 0 : 1;
          displayMessage(messages[messageIndex]);
        }
      } else {
        displayMessage('Please enter a valid letter between \'a\' and \'z\'');
      }
    };

    // Function to validate user input
    function validateInput(input) {
      return /^[a-z]$/.test(input);
    }
  
    
    function handleGameResult(isWinner) {
      const resultMessage = isWinner ? `You won in ${gameState.attempts} attempts!` : 'Game over. Try again!';
      displayMessage(resultMessage);
    }
  
    // Function to display messages
    function displayMessage(message) {
      document.getElementById('message').innerText = message;
    }
  }
  