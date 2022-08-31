// Rock - Paper - Scissors Game
// Create a function called computerPlay 
// that will randomly return either ‘rock’, ‘paper’ or ‘scissors’
// b.
// console.log(choose.length);
// console.log(choose[0]);
// choose[0]:'rock'
// choose[1]:'paper'
// choose[2]:'scissors'

const choices = ['rock', 'paper', 'scissor'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}
// console.log(computerPlay());

// c.
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "It\s a Draw!";
    } 
    else if (playerSelection == "rock"){
        return (computerSelection == "paper")? "You Win!" : "You Lose!"
    }
    else if (playerSelection == "scissor"){
        return (computerSelection == "paper")? "You Win!" : "You Lose!"
    }
    else if (playerSelection == "rock"){
        return (computerSelection == "scissor")? "You Win!" : "You Lose!"
    }
}

const playerSelection = prompt("Please enter your choice here!!").toLowerCase();
const computerSelection = computerPlay();
console.log(`Player chose: ${playerSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(playerSelection,computerSelection));


// e.
const game = (playRound) => {
    for (let i = 0; i < 5; i++) {
       console.log("For loop",playRound(),i) ;
    }
}



