const colorBox = document.querySelector('[data-testid="colorBox"]');
const startGame = document.querySelector('#start');

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

startGame.addEventListener('click', randomColor)