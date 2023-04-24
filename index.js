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

//assign computerChoice
function getComputerChoice(){
   let computerChoice = weapons[Math.floor(Math.random()*3)]
   console.log(computerChoice)
}

//when clicking on rock, paper, or scissors - run function to get computer choice
rock.addEventListener("click", function(){
   if (computerChoice === "images/paper.png"){
      computerScore += 1
   } else if (computerChoice === "images/scissors.png"){
      playerScore += 1
   } else {
   }
   playerScoreEl.innerHTML = playerScore
   computerScoreEl.innerHTML = computerScore
})
paper.addEventListener("click", getComputerChoice)
scissors.addEventListener("click", getComputerChoice)

//compare computerChoice to the clicked element
