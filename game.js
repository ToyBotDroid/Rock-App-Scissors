let playerMove
let  computerMove

const choices = document.querySelectorAll('.choices')

const playerChosen = document.querySelector('#playerChosen')
const computerChosen = document.querySelector('#computerChosen')

const displayResult = document.querySelector('#result')
let result 


// Player Selection and the evaluation

choices.forEach(choice => {
  choice.addEventListener('click', (e) =>{

// Computer Random output

const option = ["rock", "paper", "scissors"]
const random = Math.round(Math.random()*(option.length - 1));

function computerOutput(){
  return option[random]
}
  

  playerMove = e.target.id
  computerMove = computerOutput()
  whoWon()
  playerChosen.innerHTML = playerMove
  computerChosen.innerHTML = computerMove
  displayResult.innerHTML = result

  console.log(computerChosen)
  console.log(playerChosen)
  console.log(computerOutput())
  })
})


// Decide winner

function whoWon(){
  if (computerMove === playerMove){
    return result = "It's a tie";
  } else if ( computerMove === "rock" && playerMove === "paper"){
    return result = "Player 1 won !";
  } else if ( computerMove === "rock" && playerMove === "scissors"){
    return result = "Computer won !";
  } else if ( computerMove === "paper" && playerMove === "scissors"){
    return result = "Player 1 won !";
  } else if ( computerMove === "paper" && playerMove === "rock"){
    return result = "Computer won !";
  } else if ( computerMove === "scissors" && playerMove === "rock"){
    return result = "Player 1 won !";
  } else if ( computerMove === "scissors" && playerMove === "paper"){
    return result = "Computer won !";
  }
}




