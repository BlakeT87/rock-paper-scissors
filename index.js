//gather elements from DOM
computerChoiceEl = document.getElementById("computer-choice-el")
playerScoreEl = document.getElementById("player-score")
computerScoreEl = document.getElementById("computer-score")
rock = document.getElementById("rock")
paper = document.getElementById("paper")
scissors = document.getElementById("scissors")

//assign starting score
playerScoreEl.innerHTML = 0
computerScoreEl.innerHTML = 0
playerScore = 0
computerScore = 0
//create array of weapons and assign images as index
weapons = ["images/rock.png", "images/paper.png", "images/scissors.png"]

computerChoice = ""


function getComputerChoice(){
   let computerChoice = weapons[Math.floor(Math.random()*3)]
   console.log(computerChoice)
}

//when clicking on rock - run function to get computer choice
rock.addEventListener("click", getComputerChoice)
paper.addEventListener("click", getComputerChoice)
scissors.addEventListener("click", getComputerChoice)