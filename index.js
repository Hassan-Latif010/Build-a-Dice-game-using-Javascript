
let player1Score = 0
let player2Score = 0

let player1Turn = true






const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const message = document.getElementById("message")
const active = document.getElementsByClassName("active")


function displayBtn(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


function rollDice(){
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if(player1Turn === true){
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"

    }else{                
        player2Score +=randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    if(player1Score >= 20){
        message.textContent = "Player 1 won! 🥳"
        displayBtn()

    }else if(player2Score >= 20){
        message.textContent = "Player 2 won! 🎉"
        displayBtn()
    }
    player1Turn = !player1Turn

}

function resetDice(){
    message.textContent = "Player 1 turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
}

rollBtn.addEventListener("click",rollDice)

resetBtn.addEventListener("click",resetDice)