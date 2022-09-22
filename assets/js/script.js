//DOM Element Constants
const buttons = document.getElementsByClassName('controls');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const choicesArray = ['rock', 'paper', 'scissors'];
const messages = document.getElementById('messages');

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

function checkResult(resultOne, resultTwo) {
    if (resultOne === 'rock' && resultTwo === 'scissors'
    || resultOne === 'paper' && resultTwo === 'rock'
    || resultOne === 'scissors' && resultTwo === 'paper') {
        messages.innerText = 'Nice!';
    }

}