function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = prompt("Rock Paper Scissors, SHOOT : 1. Rock  2. Paper  3. Scissors").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")
    {
        return humanChoice;
    }else{
        return "Please only insert between rock, paper and scissors";
    }
}

function playRound (humanChoice, computerChoice) {
    
}

let humanScore, computerScore = 0;

console.log(playRound())