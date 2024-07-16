const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput =='paper' || userInput ==='scissors') {
    return userInput
    } else {
    console.log("Error, please type: rock, paper, or scissors.");
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const winner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Computer won!";
        } else {
            return "Congrats, you won!";
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Computer won!";
        } else {
            return "Congrats, you won!";
        }
    }
    if (userChoice === 'scissors'){
        if (computerChoice === 'rock') {
            return "Computer won!";
        } else {
            return "Congrats, you won!";
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose: ' + computerChoice);

    console.log(winner(userChoice, computerChoice));
};

playGame();