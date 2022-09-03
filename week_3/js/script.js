// --------------- Rock - Paper - Scissors Game ------------------
let scoreComputer = 0;
let scorePlayer = 0;
const choices = ["rock", "paper", "scissor"];

const computerPlay = () => {

    return choices[Math.floor(Math.random() * choices.length)];
}

// playRound() function
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "It\'s a tie!";
    } else if (playerSelection === "paper"){
         return (computerSelection === "rock") ? `You won! Your score is ${scorePlayer += 1}` : `You lost! Computer scored ${scoreComputer += 1}`;
    } else if (playerSelection === "scissor"){
        return (computerSelection === "paper") ? `You won! Your score is ${scorePlayer += 1}` : `You lost! Computer scored ${scoreComputer += 1}`;
    } else if (playerSelection === "rock"){
        return (computerSelection === "scissor") ? `You won! Your score is ${scorePlayer += 1}` : `You lost! Computer scored ${scoreComputer += 1}`;
    } else {
        return "Invalid entry, equals to a tie!";
    }
}

// Game() and loop 5 times
const game = () => {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play 'Rock - Paper - Scissors'!!".toLowerCase());
        const computerSelection = computerPlay();

            while (choices.indexOf(playerSelection) === -1) {
                playerSelection = prompt("You typed something WRONG! Choose again!!!");
                playerSelection = prompt("Let's play 'Rock - Paper - Scissors'!!".toLowerCase());
            }

        console.log(`YOU chose ${playerSelection} while the COMPUTER chose ${computerSelection}.`);             
        console.log(playRound(playerSelection, computerSelection));
    }  
    
    if (scorePlayer > scoreComputer) {
        alert("You win the game!Great job!");
        console.log(`YOUR score is ${scorePlayer}, while the score of the COMPUTER is ${scoreComputer}.`);
    } else if (scoreComputer > scorePlayer) {
        alert("Computer wins the game!");
        console.log(`The score of the COMPUTER is ${scoreComputer}, while YOUR score is ${scorePlayer}.`);
    } else if (scoreComputer === scorePlayer) {
        alert("It\'s a Tie!Nobody wins!");
        console.log("It\s a tie! You both chose the same!!");
    }
}
game();