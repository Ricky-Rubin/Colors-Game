const colorBox = document.querySelector('[data-testid="colorBox"]');
const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');
const btnThree = document.querySelector('#three');
const btnFour = document.querySelector('#four');
const btnFive = document.querySelector('#five');
const btnSix = document.querySelector('#six');
const startGame = document.querySelector('#start');
const result = document.querySelector('[data-testid="gameStatus"]');
const optionBoard = document.querySelector('[data-testid="colorOption"]');
const pass = document.querySelector('[data-testid="score"]');
const fail = document.querySelector('#incorrect');
const newGame = document.querySelector('[data-testid="newGameButton"]');
const showMain = document.querySelector('#continue');
const slideOne = document.querySelector('.slide-one');
const details = document.querySelector('.details');
const reset = document.querySelector('.reset');

let correct = 0;
let incorrect = 0;

const buttons = [btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix];

function colorShade(colorValue) {
    let percentageIncrease = Math.random() * 0.20;
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
        { r: colorShade(r), g: colorShade(g), b: colorShade(b)},
        { r: colorShade(r), g: colorShade(g), b: colorShade(b)},
        { r: colorShade(r), g: colorShade(g), b: colorShade(b)},
        { r: colorShade(r), g: colorShade(g), b: colorShade(b)},
        { r: colorShade(r), g: colorShade(g), b: colorShade(b)}
    ]

    optionColorShades.sort(() => Math.random() - 0.5);

    for (let i = 0; i < optionColorShades.length; i++) {
        const color = optionColorShades[i];

        buttons[i].style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`
    }
}

let match = false;

function checkMatch(playerChoice) {
    if (colorBox.style.backgroundColor === playerChoice.style.backgroundColor) {
        match = true;
        result.textContent = 'Correct Match!'
        correct++
    } else {
        match = false;
        result.textContent = 'Oops! You missed that one.'
        incorrect++
    }

    pass.textContent = `${correct}`;
    fail.textContent = `${incorrect}`

    setTimeout(() => {
        result.textContent = '';
    }, 1500);

    randomColor();
}

startGame.addEventListener('click', () => {
    randomColor();
    pass.textContent = `${correct}`;
    fail.textContent = `${incorrect}`
    startGame.textContent =`Change Color`;
    // startGame.style.display = 'none'
})

btnOne.addEventListener('click', (event) => {
    checkMatch(event.target);
});

btnTwo.addEventListener('click', (event) => {
    checkMatch(event.target);
});

btnThree.addEventListener('click', (event) => {
    checkMatch(event.target);
});

btnFour.addEventListener('click', (event) => {
    checkMatch(event.target);
});

btnFive.addEventListener('click', (event) => {
    checkMatch(event.target);
});

btnSix.addEventListener('click', (event) => {
    checkMatch(event.target);
});

newGame.addEventListener('click', () => {
    correct = 0;
    incorrect = 0
    pass.textContent = `${correct}`
    fail.textContent = `${incorrect}`
    result.textContent = '';
    colorBox.style.backgroundColor = 'rgb(252, 250, 250)';
    buttons.forEach((button) => {
        button.style.backgroundColor = 'rgb(248, 249, 249)';
    })
    randomColor();
})

showMain.addEventListener('click', () => {
    slideOne.style.display = 'none';
    [colorBox, details, reset].forEach((one) => one.style.display = 'block');
    optionBoard.style.display = 'grid';
})