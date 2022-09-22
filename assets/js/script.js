//DOM Element Constants
const buttons = document.getElementsByClassName('controls');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const choicesArray = ['rock', 'paper', 'scissors'];
const messages = document.getElementById('messages');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

//Button Event Listener
for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-index');
        runGame(playerChoice);
    })
}

//Main Game Function
function runGame(playerChoice) {
    playerImage.src = `../assets/images/${choicesArray[playerChoice]}.jpg`;
    playerImage.alt = choicesArray[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    computerImage.src = `../assets/images/${choicesArray[computerChoice]}.jpg`;
    computerImage.alt = choicesArray[computerChoice];

    let resultOne = choicesArray[playerChoice];
    let resultTwo = choicesArray[computerChoice];
    checkResult(resultOne, resultTwo);
}
// compares results to game rules and adjusts messages text accordingly
function checkResult(resultOne, resultTwo) {
    if (resultOne === 'rock' && resultTwo === 'scissors'
    || resultOne === 'paper' && resultTwo === 'rock'
    || resultOne === 'scissors' && resultTwo === 'paper') {
        incrementPlayerScore();
        messages.innerText = 'Nice!';
    } else if (resultOne === 'rock' && resultTwo === 'paper'
    || resultOne === 'paper' && resultTwo === 'scissors'
    || resultOne === 'scissors' && resultTwo === 'rock') {
        incrementComputerScore();
        messages.innerText = 'Ouch!';
    } else {
        messages.innerText = 'Almost';
    }
}
// gets the players current score and increments it
function incrementPlayerScore() {
    let playerScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById("player-score").innerText = ++playerScore;
    playerWin(playerScore);
}
// gets the computers current score and increments it
function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
    playerLose(computerScore);
}
// if the players score gets to 3 it triggers an alert
function playerWin(playerScore) {
    if (playerScore === 3) {
        alert('You Win!');
    }
}
// if the computers score gets to 3 it triggers an alert
function playerLose(computerScore) {
    if (computerScore === 3) {
        alert('You Lose!');
    }
}