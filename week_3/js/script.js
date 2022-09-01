// Rock - Paper - Scissors Game
// Create a function called computerPlay 
// that will randomly return either ‘rock’, ‘paper’ or ‘scissors’
// b.
// console.log(choose.length);
// console.log(choose[0]);
// choose[0]:'rock'
// choose[1]:'paper'
// choose[2]:'scissors'
let scoreComputer = 0;
let scorePlayer = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// c.
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "It\s a Draw!";
    } else if (playerSelection == "paper"){
         return (computerSelection == "rock")? (scorePlayer += 1) : (scoreComputer += 1);
    } else if (playerSelection == "scissor"){
        return (computerSelection == "paper")? (scorePlayer += 1) : (scoreComputer += 1);
    } else if (playerSelection == "rock"){
        return (computerSelection == "scissor")? (scorePlayer += 1) : (scoreComputer += 1);
    }
}

// Loop 5 times
const game = () => {
    for (i = 0; i < 2; i++) {
        const playerSelection = prompt("Please enter your choice here!!").toLowerCase();
        const computerSelection = computerPlay();
    
        console.log(`YOU chose ${playerSelection} while the COMPUTER chose ${computerSelection}.`);
        console.log(`The score of the COMPUTER is ${scoreComputer}, while YOURS is ${scorePlayer}.`);
                
        playRound(playerSelection, computerSelection);
    }

    //  result comparison
    if (scorePlayer > scoreComputer) {
        alert("You win the game!Great job!");
    } else if (scorePlayer < scoreComputer) {
        alert("Computer wins the game!");
    } else {
        alert("Its a Tie!Nobody wins!");
    }
}
game();