// Functions to get computer and player choices

function getComputerChoice() {
    let x = Math.floor((Math.random() *3) +1)
    if (x === 1) {
        return "rock"
    } else if (x === 2) {
        return "paper"
    } else (x === 3);
        return "scissors"
}

function getPlayersChoice () {
    let player = prompt("Rock, Paper or Scissors").toLocaleLowerCase()
    return player
}

// FUNCTION TO PLAY A ROUND
//compares 2 choices to check who wins. Have to pass arguments within the function to don't receive undefined message. This way it will also run the prompt each time this function is invoked so the player's choice will change. 
function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayersChoice()
    computerSelection = getComputerChoice()
    console.log(playerSelection, computerSelection)
    let pcWins = "PC wins!"
    let playerWins = "You win!"
    let draw = "Try again" 
    if (computerSelection === "rock" && playerSelection === "scissors") {
        return pcWins
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return playerWins
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return playerWins
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return pcWins
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return pcWins
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return playerWins
    } else if  (computerSelection === playerSelection) {
     return draw }

}

// DECLARING VARIABLES TO COMPARE SCORES AFTER 5 ROUNDS
// Variables were declared in global scope so function (game function) can store its result to them, and that result can then be used with the play function
let player = 0
let pc = 0
let draw = 0

// CREATING GAME FUNCTION TO PLAY 5 ROUNDS
//this function has a loop to run the game 5 times. Each time the if statement will compare the result of the playRound() function to give one point to player, pc or draw
function game() {
    for (let i = 1; i < 6; i++) {
        let result = playRound()
     if (result === "You win!") {
        player++
    } else if (result === "PC wins!") {
        pc++
    } else draw++
}
   
    console.log(player, pc, draw)
 }

//FUNCTION TO PLAY
//This function will invoke the game function to play 5 times and save the score to player, pc or draw variables. This function will ONLY show the result of these variables to compare their score, and finally declare a winner.
function play() {
    game()
    if (player === pc) {
        return "DRAWWWW" 
    } else if (pc > player) {
       return "NOO PC won :("
    } else return "You WOOOON"
}

console.log(play())
