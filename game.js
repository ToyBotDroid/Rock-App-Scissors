let playerMove
let  computerMove

const choices = document.querySelectorAll('.choices')

const playerChosen = document.querySelector('#playerChosen')
const computerChosen = document.querySelector('#computerChosen')

const displayResult = document.querySelector('#result')
const result = whoWon()


// Player Selection and the evaluation

choices.forEach(choice => {
  choice.addEventListener('click', (e) =>{
  playerMove = e.target.id
  computerOutput()
  whoWon()
  playerChosen.innerHTML = playerMove
  computerChosen.innerHTML = computerMove
  displayResult.innerHTML = result

  console.log(computerChosen)
  console.log(playerChosen)
  })
})

// Computer Random output

const option = ["rock", "paper", "scissors"]
const random = Math.round(Math.random()*(2));

function computerOutput(){
  return option[random]
}

// Decide winner

function whoWon(){
  if (computerMove === playerMove){
    return "It's a tie";
  } else if ( computerMove === "rock" && playerMove === "paper"){
    return "Player 1 won !";
  } else if ( computerMove === "rock" && playerMove === "scissors"){
    return "Computer won !";
  } else if ( computerMove === "paper" && playerMove === "scissors"){
    return "Player 1 won !";
  } else if ( computerMove === "paper" && playerMove === "rock"){
    return "Computer won !";
  } else if ( computerMove === "scissors" && playerMove === "rock"){
    return "Player 1 won !";
  } else if ( computerMove === "scissors" && playerMove === "paper"){
    return "computer won !";
  }
}

console.log(computerOutput())


