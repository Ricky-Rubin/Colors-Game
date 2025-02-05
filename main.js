const colorBox = document.querySelector('[data-testid="colorBox"]');
const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');
const btnThree = document.querySelector('#three');
const btnFour = document.querySelector('#four');
const btnFive = document.querySelector('#five');
const btnSix = document.querySelector('#six');
const startGame = document.querySelector('#start');

const buttons = [one, two, three, four, five, six];

function colorShade(colorValue) {
    let percentageIncrease = Math.random() * 0.25;
    let operandDecider = Math.random() > 0.5;
    let newValue = operandDecider ? colorValue - colorValue * percentageIncrease : colorValue + colorValue * percentageIncrease;
    
    if (newValue > 255) {
        newValue = 255;
    } else if (newValue < 0) {
        newValue = 0;
    }

    return Math.floor(newValue);
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    const red = colorShade(r);
    const green = colorShade(g);
    const blue = colorShade(b);

    const optionColorShades = [
        { r: r, g: g, b: b},
        { r: red, g: g, b: b},
        { r: r, g: green, b: blue},
        { r: red, g: g, b: blue},
        { r: r, g: green, b: b},
        { r: r, g: g, b: blue}
    ]
}

startGame.addEventListener('click', randomColor)