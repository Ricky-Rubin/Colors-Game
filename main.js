const colorBox = document.querySelector('[data-testid="colorBox"]');
const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');
const btnThree = document.querySelector('#three');
const btnFour = document.querySelector('#four');
const btnFive = document.querySelector('#five');
const btnSix = document.querySelector('#six');
const startGame = document.querySelector('#start');

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function colorShade(colorValue) {
    let percentageIncrease = Math.random() * 0.25;
    let operandDecider = Math.random() > 0.5;
    let newValue = operandDecider ? colorValue - colorValue * percentageIncrease : colorValue + colorValue * percentageIncrease;
    return newValue;
}

startGame.addEventListener('click', randomColor)