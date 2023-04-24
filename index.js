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

//when clicking on rock, paper, or scissors - run function to get computer choice
rock.addEventListener("click", function(){
   let computerChoice = weapons[Math.floor(Math.random()*3)]
   if (computerChoice === "images/paper.png"){
      computerScore += 1
   } else if (computerChoice === "images/scissors.png"){
      playerScore += 1
   } else {
   }
   playerScoreEl.innerHTML = playerScore
   computerScoreEl.innerHTML = computerScore
   computerChoiceEl.src = computerChoice
})
paper.addEventListener("click", function(){
   let computerChoice = weapons[Math.floor(Math.random()*3)]
   if (computerChoice === "images/scissors.png"){
      computerScore += 1
   } else if (computerChoice === "images/rock.png"){
      playerScore += 1
   } else {
   }
   playerScoreEl.innerHTML = playerScore
   computerScoreEl.innerHTML = computerScore
   computerChoiceEl.src = computerChoice
})
scissors.addEventListener("click", function(){
   let computerChoice = weapons[Math.floor(Math.random()*3)]
   if (computerChoice === "images/rock.png"){
      computerScore += 1
   } else if (computerChoice === "images/paper.png"){
      playerScore += 1
   } else {
   }
   playerScoreEl.innerHTML = playerScore
   computerScoreEl.innerHTML = computerScore
   computerChoiceEl.src = computerChoice
})
//compare computerChoice to the clicked element
