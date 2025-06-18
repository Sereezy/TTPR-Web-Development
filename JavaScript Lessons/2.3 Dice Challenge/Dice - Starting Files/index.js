function getRandomDiceValue() {
    return Math.floor(Math.random() * 6) + 1;
}

function setDiceImage(playerId, diceValue) {
    if (playerId == 1){
        img = document.querySelectorAll('img')[0];
    } else {
        img = document.querySelectorAll('img')[1];
        }
    img.setAttribute("src", `./images/dice${diceValue}.png`);
}

function diceRoll() {
    const dice1 = getRandomDiceValue();
    const dice2 = getRandomDiceValue();
    setDiceImage(1, dice1);
    setDiceImage(2, dice2);

    if (dice1 > dice2){
        document.querySelector('h1').innerHTML = 'Player 1 Wins!'
    } else if (dice2 > dice1) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins!'
    } else {
        document.querySelector('h1').innerHTML = 'Draw'
    }
}

diceRoll();
