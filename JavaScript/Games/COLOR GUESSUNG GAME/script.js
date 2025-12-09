const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
const colorBoxes = document.querySelectorAll('.color-box');
const newRoundBtn = document.querySelector('#newRoundBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');

// Variables
let currentStreak = 0;
let bestStreak = 0;
let pickCorrectColor = "";
let colors = [];
let num = 6;
let gameOver = false;

function initGame() {
    loadBestStreak();
    displayContent();
    setupGame();
}

// Load best streak from localStorage
function loadBestStreak() {
    const savedStreak = localStorage.getItem('bestStreak');
    if (savedStreak !== null) {
        bestStreak = parseInt(savedStreak);
    }
}

// Display current content
function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

// Random color generator
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate array of colors
function generateColors(count) {
    const colorArray = [];
    for (let i = 0; i < count; i++) {
        colorArray.push(generateRandomColor());
    }
    return colorArray;
}

// Set up the game
function setupGame() {

    colorBoxes.forEach(box => {
        box.style.border = "none";
        box.style.boxShadow = "none";
    });

    gameOver = false;
    messageDisplay.textContent = "Pick the correct color!";
    messageDisplay.style.color = "white";

    colors = generateColors(num);
    pickCorrectColor = colors[Math.floor(Math.random() * colors.length)];

    colorDisplay.textContent = pickCorrectColor.toUpperCase();

    // Set colors for all boxes and show/hide based on difficulty
    colorBoxes.forEach((box, index) => {
        if (index < colors.length) {
            box.style.backgroundColor = colors[index];
            box.style.display = "block";
            box.style.opacity = "1";
        } else {
            box.style.display = "none";
        }
    });
}

// Handle color box click
function handleColorClick(event) {
    if (gameOver) return;

    const clickedBox = event.target;
    const clickedColor = clickedBox.style.backgroundColor;

    if (clickedColor === pickCorrectColor) {
        messageDisplay.textContent = "Correct! Well done!";
        messageDisplay.style.color = "#4CAF50";
        currentStreak++;

        if (currentStreak >= 3) {
            messageDisplay.textContent = "STREAK"
            messageDisplay.style.color = "green"
        }
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            colorDisplay.style.fontWeight = "bold"
            localStorage.setItem('bestStreak', bestStreak.toString());
        }

        displayContent();
        gameOver = true;

        clickedBox.style.border = "4px solid #FFD700";
        clickedBox.style.boxShadow = "0 0 15px #FFD700";

        colorBoxes.forEach(box => {
            if (box.style.display !== "none") {
                box.style.backgroundColor = pickCorrectColor;
                box.style.opacity = "1";
            }
        });

    } else {
        messageDisplay.textContent = "Wrong! Try again!";
        messageDisplay.style.color = "#f44336";
        clickedBox.style.opacity = "0.3";
        currentStreak = 0;
        displayContent();
        clickedBox.style.border = "4px solid #ff0303ff";
        clickedBox.style.boxShadow = "0 0 15px #ff0000ff";
        clickedBox.classList.add("shake");
    }
}

newRoundBtn.addEventListener('click', function () {
    setupGame();
});

easyBtn.addEventListener('click', function () {
    num = 3;
    easyBtn.classList.add('active');
    hardBtn.classList.remove('active');
    easyBtn.style.backgroundColor = "green";
    hardBtn.style.backgroundColor = "white";
    setupGame();
});

hardBtn.addEventListener('click', function () {
    num = 6;
    hardBtn.classList.add('active');
    easyBtn.classList.remove('active');
    easyBtn.style.backgroundColor = "white";
    hardBtn.style.backgroundColor = "red";
    setupGame();
});

resetStreakBtn.addEventListener('click', function () {
    bestStreak = 0;
    currentStreak = 0;
    localStorage.setItem('bestStreak', '0');
    displayContent();
});

document.querySelector('.color-box-container').addEventListener('click', handleColorClick);

document.addEventListener('DOMContentLoaded', function () {
    initGame();
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGame);
} else {
    initGame();
}