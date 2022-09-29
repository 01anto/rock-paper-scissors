//DOM Element Constants
const buttons = document.getElementsByClassName('controls');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const choicesArray = ['rock', 'paper', 'scissors'];
const messages = document.getElementById('messages');
const modal = document.getElementById("myModal");
const heading = document.getElementById("modal-heading");
const modalMessage = document.getElementById("modal-message");
const span = document.getElementById("close");
const isAudio = document.querySelector("#isAudio");
const rules = document.getElementById("rules");

/** Opens a rules model when the #rules paragraph is clicked.*/
rules.onclick = function() {
    heading.innerText = "Rules";
    modalMessage.innerText = "Rock crushes Scissors, Paper covers Rock, Scissors cuts Paper";
    openModal();
}

/** changes modal visibility to visible when called */
function openModal() {
    modal.style.visibility = "visible";
}

/** changes modal visibility to hidden and reloads the page when user clicks on modal background */
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.visibility = "hidden";
    window.location.reload();
    }
};

/** changes modal visibility to hidden and reloads the page when user clicks on modal close span*/
span.onclick = function() {
    modal.style.visibility = "hidden";
    window.location.reload();
};

/** Button Event Listener */
for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-index');
        runGame(playerChoice);
    });
}

//playerImage.src and computerImage.src origin before editing: https://www.bing.com/images/search?view=detailV2&ccid=as5zSfEA&id=15BBCF74BD081E3CAB771B8C026FB198A604AF51&thid=OIP.as5zSfEAyQdEMkBFxmZvNAHaGP&mediaurl=https%3a%2f%2fvectorified.com%2fimage%2frock-paper-scissors-vector-22.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6ace7349f100c90744324045c6666f34%3frik%3dUa8EppixbwKMGw%26pid%3dImgRaw%26r%3d0&exph=691&expw=820&q=Rock+Paper+Scissors+Drawing&simid=608035187682051565&FORM=IRPRST&ck=8DCCB665DED98D36687455CA3B5B6A58&selectedIndex=9&ajaxhist=0&ajaxserp=0-
/** run Game Function */
function runGame(playerChoice) {
    playerImage.src = `assets/images/${choicesArray[playerChoice]}.jpg`;
    playerImage.alt = choicesArray[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    computerImage.src = `assets/images/${choicesArray[computerChoice]}.jpg`;
    computerImage.alt = choicesArray[computerChoice];

    let resultOne = choicesArray[playerChoice];
    let resultTwo = choicesArray[computerChoice];
    checkResult(resultOne, resultTwo);
}

/** compares results to game rules, adjusts messages text accordingly,
 calls an increment player or computer score function and an audio function if  
 isAudio is checked */
function checkResult(resultOne, resultTwo) {
    if (resultOne === 'rock' && resultTwo === 'scissors'||
    resultOne === 'paper' && resultTwo === 'rock'||
    resultOne === 'scissors' && resultTwo === 'paper') {
        incrementPlayerScore();
        messages.innerText = 'Nice!';
        if (isAudio.checked) {
            audioCorrect();
        }
    } else if (resultOne === 'rock' && resultTwo === 'paper'||
    resultOne === 'paper' && resultTwo === 'scissors'||
    resultOne === 'scissors' && resultTwo === 'rock') {
        incrementComputerScore();
        messages.innerText = 'Ouch!';
        if (isAudio.checked) {
            audioIncorrect();
        }
    } else {
        messages.innerText = 'Almost';
        if (isAudio.checked) {
            audioDraw();
        }
    }
}

/** gets the players current score, increments it and passes it to playerWin Function */
function incrementPlayerScore() {
    let playerScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById("player-score").innerText = ++playerScore;
    playerWin(playerScore);
}

/** gets the computers current score, increments it and passes it to computerWin function */
function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
    playerLose(computerScore);
}

/** when player score reaches 3 this changes modal header and content, plays audio if checked,
 and calls the openModal function */
function playerWin(playerScore) {
    if (playerScore === 3) {
        heading.innerText = "You Win!";
        modalMessage.innerText = "Well Done";
        if (isAudio.checked) {
            audioWin();
        }
        openModal();
    }
}

/** when computer score reaches 3 this changes modal header and content, plays audio if checked,
 and calls the openModal function */
function playerLose(computerScore) {
    if (computerScore === 3) {
        heading.innerText = "You Lose...";
        modalMessage.innerText = "Better luck next time";
        if (isAudio.checked) {
            audioLose();
        }
        openModal();
    }
}

// All sound effects taken from https://pixabay.com/ro/sound-effects/ except for audioDraw(see below)
/** audio that is played when the player wins */
function audioWin() {
    const audio = new Audio('assets/audio/win.mp3');
    audio.loop = false;
    audio.play();
}

/** audio that is played when the players hand beats the computers hand */
function audioCorrect() {
    const audio = new Audio('assets/audio/correct.mp3');
    audio.loop = false;
    audio.play();
}

/** audio that is played when the player loses */
function audioLose() {
    const audio = new Audio('assets/audio/lose.mp3');
    audio.loop = false;
    audio.play();
}

/** audio that is played when the computers hand beats the players hand */
function audioIncorrect() {
    const audio = new Audio('assets/audio/wrong.mp3');
    audio.loop = false;
    audio.play();
}
// This sound effect was taken from https://minecraft.fandom.com/wiki/Category:Sound_effects
/** audio that is played when the players hand and computers hand are the same (Draw) */
function audioDraw() {
    const audio = new Audio('assets/audio/draw.oga');
    audio.loop = false;
    audio.play();
}