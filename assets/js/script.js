const buttons = document.getElementsByClassName('controls');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-index');
        alert(playerChoice);
    })
}