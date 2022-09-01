// Rock - Paper - Scissors Game
let scoreComputer = 0;
let scorePlayer = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// c. playRound() function
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "It\s a tie!";
    } else if (playerSelection === "paper"){
         return (computerSelection === "rock") ? (scorePlayer += 1) : (scoreComputer += 1);
    } else if (playerSelection === "scissor"){
        return (computerSelection === "paper") ? (scorePlayer += 1) : (scoreComputer += 1);
    } else if (playerSelection === "rock"){
        return (computerSelection === "scissor") ? (scorePlayer += 1) : (scoreComputer += 1);
    } else {
        return `It\s a tie!`;
    }
}
// Game() and loop 5 times
const game = () => {
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Let's play 'Rock - Paper - Scissors'!!").toLowerCase();
        const computerSelection = computerPlay();

        console.log(`YOU chose ${playerSelection} while the COMPUTER chose ${computerSelection}.`);
                
        playRound(playerSelection, computerSelection);
    }
    
    if (scorePlayer > scoreComputer) {
        alert("You win the game!Great job!");
        console.log(`YOURS is ${scorePlayer}, while the score of the COMPUTER is ${scoreComputer}.`);
    } else if (scoreComputer > scorePlayer) {
        alert("Computer wins the game!");
        console.log(`The score of the COMPUTER is ${scoreComputer}, while YOURS is ${scorePlayer}.`);
    } else if (scoreComputer === scorePlayer) {
        alert("Its a Tie!Nobody wins!");
        console.log("It\s a tie! You both chose the same!!");
    }
}
game();