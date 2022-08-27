let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//distance to target number
const getAbsoluteDistance = (dist1, dist2) => Math.abs(dist1 - dist2);

//generate random integer between 0 and 9
const generateTarget = () => Math.ceil(Math.random() * 10);

//main logic to determine which guess is closest to target number
const compareGuesses = (userGuess, compGuess, targetGuess) => {
  checkUserInput(userGuess, targetGuess);
  if (userGuess - targetGuess === compGuess - targetGuess) {
    return true;
  } else if (
    getAbsoluteDistance(userGuess, targetGuess) <
    getAbsoluteDistance(compGuess, targetGuess)
  ) {
    return true;
  } else {
    return false;
  }
};

//update the scores after each round
const updateScore = (winner) => {
  winner === 'human' ? (humanScore += 1) : (computerScore += 1);
};

//update current round number
const advanceRound = () => (currentRoundNumber += 1);

//text input validation
const checkUserInput = (humanInput, target) => {
  if (humanInput > 0 && humanInput < target) {
    return;
  } else {
    return alert('This number is out of range!');
  }
};
