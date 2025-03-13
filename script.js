function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = "";
    do {
    humanChoice = prompt("Rock Paper Scissors, SHOOT!").toLowerCase();

    if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"))
    {
        console.log("Please enter between rock, paper and scissors!")
    }
    } while (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"))
        return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`)
    console.log(`Computer chose ${computerChoice}`)

        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper"))
        {
            humanScore++;
            return console.log("You win!")
        } else if (humanChoice === computerChoice) {
            return console.log("Tie!")
        } else {
            computerScore++;
            return console.log("You lose")
        }

}

let humanScore = 0; 
let computerScore = 0;

function playGame () {
    for (let i = 0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("Your score : " + humanScore)
    console.log(`Computer score : ${computerScore}`)
}

playGame()