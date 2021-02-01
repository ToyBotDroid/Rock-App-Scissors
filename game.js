let playerMove
let  computerMove
const choices = document.querySelectorAll('.choices')
const playerChosen = document.querySelector('#playerChosen')
const computerChosen = document.querySelector('#computerChosen')
const displayResult = document.querySelector('#result')
let result 
var playerScore = 0
var computerScore = 0
const displayPlayerScore = document.querySelector('.playerScore')
const displayComputerScore = document.querySelector('.computerScore')



// Player Selection and the evaluation

choices.forEach(choice => {
  choice.addEventListener('click', (e) =>{

// Computer Random output

const option = ["rock", "paper", "scissors"]
const random = Math.floor(Math.random()*(option.length));

function computerOutput(){
  return option[random]
}
  

  playerMove = e.target.id
  computerMove = computerOutput()
  play()
  updateScore()
  playerChosen.innerHTML = `<b>  You chose : ${playerMove} </b>` 
  computerChosen.innerHTML = `<b> Computer chose : ${computerMove} </b>` 
  displayResult.innerHTML = result

  displayPlayerScore.innerHTML = `<b> Player Score = ${playerScore} </b>` 
  displayComputerScore.innerHTML = `<b> Computer Score = ${computerScore} </b>`

  // console.log(computerChosen)
  // console.log(playerChosen)
  // console.log(computerOutput())
  console.log(playerScore)
  console.log(computerScore)
  })
})


// Play function 

function play(){
  if (computerMove === playerMove){
    return result = "It's a tie";
  } else if ( computerMove === "rock" && playerMove === "paper"){
    return result = "Player won !";
    // return playerScore++;
  } else if ( computerMove === "rock" && playerMove === "scissors"){
    return result = "Computer won !";
    // computerScore++;
  } else if ( computerMove === "paper" && playerMove === "scissors"){
    return result = "Player won !";
    // return playerScore++;
  } else if ( computerMove === "paper" && playerMove === "rock"){
    return result = "Computer won !";
    // computerScore++;
  } else if ( computerMove === "scissors" && playerMove === "rock"){
    return result = "Player won !";
    // return playerScore++;
  } else if ( computerMove === "scissors" && playerMove === "paper"){
    return result = "Computer won !";
    // computerScore++;
  }
}

// because it doesn't work if i do it on the above function

function updateScore(){
  
  if ( computerMove === "rock" && playerMove === "paper"){
    return playerScore++;
  } else if ( computerMove === "rock" && playerMove === "scissors"){
    computerScore++;
  } else if ( computerMove === "paper" && playerMove === "scissors"){
    return playerScore++;
  } else if ( computerMove === "paper" && playerMove === "rock"){
    computerScore++;
  } else if ( computerMove === "scissors" && playerMove === "rock"){
    return playerScore++;
  } else if ( computerMove === "scissors" && playerMove === "paper"){
    computerScore++;
  }
}

let restart = document.querySelector('.restart')

restart.addEventListener('click', () => {
  playerScore = 0
  computerScore = 0

  playerChosen.innerHTML = `` 
  computerChosen.innerHTML = `` 
  displayResult.style.display = "none"

  displayPlayerScore.innerHTML = `<b> Player Score = 0 </b>` 
  displayComputerScore.innerHTML = `<b> Computer Score = 0 </b>`

})
