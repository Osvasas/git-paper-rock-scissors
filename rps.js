function getComputerChoice() {
    let x = Math.floor((Math.random() *3) +1)
    if (x === 1) {
        return "rock"
    } else if (x === 2) {
        return "paper"
    } else (x === 3);
        return "scissors"
}


function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "scissors") {
        return "PC wins!"
    } else if (computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "paper") {
        return "You win!"
    } else if (computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "rock") {
        return "You win!"
    } else if (computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "paper") {
        return "PC Wins!"
    } else if (computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "rock") {
        return "PC wins!"
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() == "scissors") {
        return "You win!"
    } else if  (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
     return "Try again" }
    
}

let playerSelection 
playerSelection = prompt("Lets Play!")
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));




/*let me 
me = prompt("Rock, Paper, Scissors")

let pc
pc = getComputerChoice()


if (pc == "rock" && me == "scissors") {
    console.log("PC wins!")
} else if (pc == "rock" && me == "paper") {
    console.log("You win!") 
} else if (pc == "scissors" && me == "rock") {
    console.log("You win!") 
} else if (pc == "scissors" && me == "paper") {
    console.log("PC Wins!")
} else if (pc == "paper" && me == "rock") {
    console.log("PC wins!")
} else if (pc === "paper" && me == "scissors") {
    console.log("You win!") 
} else if  (pc === me) {
 console.log ("Try again") }


 console.log(pc, me)*/