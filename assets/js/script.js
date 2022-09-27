//DOM Element Constants
const buttons = document.getElementsByClassName('controls');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const choicesArray = ['rock', 'paper', 'scissors'];
const messages = document.getElementById('messages');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const modal = document.getElementById("myModal");
const heading = document.getElementById("modal-heading");
const modalMessage = document.getElementById("modal-message");
const span = document.getElementById("close");

// changes modal visibility to visible when called
function openModal() {
    modal.style.visibility = "visible";
}
// changes modal visibility to hidden when user clicks on modal background
window.onclick = function(event) {
    if (event.target == modal)
    modal.style.visibility = "hidden";
}

span.onclick = function() {
    modal.style.visibility = "hidden";
}

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
// if the players wins it changes modal content and calls the openModal function
function playerWin(playerScore) {
    if (playerScore === 3) {
        heading.innerText = "You Win!";
        modalMessage.innerText = "Well Done"
        openModal();
    }
}
// if the computer wins the playerLose function changes the modal content and calls the openModal function
function playerLose(computerScore) {
    if (computerScore === 3) {
        heading.innerText = "You Lose...";
        modalMessage.innerText = "Better luck next time"
        openModal();
    }
}