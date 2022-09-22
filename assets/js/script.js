const buttons = document.getElementsByClassName('controls');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const choicesArray = ['rock', 'paper', 'scissors']

for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-index');
        runGame(playerChoice);
    })
}

function runGame(playerChoice) {
    playerImage.src = `../assets/images/${choicesArray[playerChoice]}.jpg`;
    playerImage.alt = choicesArray[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    computerImage.src = `../assets/images/${choicesArray[computerChoice]}.jpg`;
    computerImage.alt = choicesArray[computerChoice];
}