var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var pauseButton = document.querySelector('#pauseButton');
var resetButton = document.querySelector('#resetButton');
var statusMessage = document.querySelector('#statusMessage');
var videoC = document.querySelector('.video-container');
var aidioC = document.querySelector('audio-containert');
var color = document.querySelector('.color');

var current = 0;
var high = 0;
var time1 = 10;
var track = false;
var idTrack = null;
var paused = false;


function loadContent() {
    dataLoad();
    displayMessage();
}

function dataLoad() {
    var temp = localStorage.getItem('highScore');
    if (temp != null) {
        high = parseInt(temp);
    } else {
        high = 0;
    }
}

function displayMessage() {
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;
    if (current > 20) {
        currentScore.style.color = 'red';
    } else {
        currentScore.style.color = '';
    }
}


function statuMsg(msg) {
    statusMessage.textContent = msg;
}

function endGame() {
    clearInterval(idTrack);
    track = false;
    clickButton.disabled = true;
    startButton.disabled = false;
    pauseButton.disabled = true;
    startButton.textContent = "Play Again"

    var cps = current / 10;
    if (current >= high) {
        localStorage.setItem('highScore', current);
        high = current;
        displayMessage();
        statuMsg("🎉 Great job! Your score is higher than the previous one! 🏆" + " And Your click per second is : " + `${cps} CPS`);
        videoC.style.display = 'block';
    } else {
        statuMsg("😕 Oops! Your score is lower than your high score. Try again! 💪" + "And Your click per second is : " + `${cps} CPS`);
    }
}


function startGame() {
    track = true;
    paused = false;
    time1 = 10;
    current = 0;
    clickButton.disabled = false;
    startButton.disabled = true;
    pauseButton.disabled = false; statuMsg("🚀 Game started! Click as fast as you can! 🖱⏳");
    videoC.style.display = 'none';
    idTrack = setInterval(function () {
        if (!paused) {
            time1--;
            if (time1 <= 0) {
                endGame();
                clickButton.style.transform = 'scale(1)';
            }
            displayMessage();
        }
    }, 1000);
}

var size = 1;
const masSize = 1.10;
function clickMe() {
    if (track && !paused) {
        current++;
        displayMessage();
    }
    if (size < masSize) {
        size += 0.01;
        clickButton.style.transform = `scale(${size})`;
    }
}

function pauseGame() {
    if (!track) return;
    paused = !paused;
    if (paused) {
        statuMsg("⏸ Game paused! Click resume to continue!");
        pauseButton.textContent = "Resume";
        clickButton.disabled = true;
    } else {
        statuMsg("▶ Game resumed! Keep clicking!");
        pauseButton.textContent = "Pause";
        clickButton.disabled = false;
    }
}

function resetGame() {
    localStorage.removeItem('highScore');
    high = 0;
    current = 0;
    time1 = 10;
    displayMessage();
    statuMsg("🔄 Game has been reset. Ready for a fresh start! 🌟");
    clearInterval(idTrack);
    track = false;
    paused = false;
    startButton.disabled = false;
    clickButton.disabled = true;
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
}

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', clickMe);
pauseButton.addEventListener('click', pauseGame);
resetButton.addEventListener('click', resetGame);
window.addEventListener('load', loadContent);