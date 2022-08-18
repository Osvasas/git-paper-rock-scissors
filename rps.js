function getComputerChoice() {
    let x = Math.floor((Math.random() *3) +1)
    if (x === 1) {
        return "Rock"
    } else if (x === 2) {
        return "Paper"
    } else (x === 3);
        return "Scissors"
}

let pc = (getComputerChoice())

let me

if (pc === me) {
    console.log ("Try again")
} else if (pc == "Rock" && me == "scissors") {
    console.log("PC wins!")
} else if (pc == "Rock" && me == "paper") {
    console.log("You win!") 
} else if (pc == "Scissors" && me == "rock") {
    console.log("You win!") 
} else if (pc == "Scissors" && me == "paper") {
    console.log("PC Wins!")
} else if (pc == "paper" && me == "rock") {
    console.log("PC wins!")
} else if (pc === "Paper" && me == "Scissors");
    console.log("You win!")
