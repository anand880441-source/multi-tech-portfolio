//DOM Elements
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const audio = document.querySelector('#audio');
const endAudio = document.querySelector('#endAudio');
const resetButton = document.querySelector('#resetButton');
const statusMessage = document.querySelector('#statusMessage');
const psccore = document.querySelector('#pScore');

// required variable
var score = 0;
var time = 60;
var bestScore = 0;
var playGame = false;
var gameID = null;
var score2 = 0;

//Common function
function webLoad() {
    onLoad();
    displayContent();
}

function onLoad() {
    var temp2 = sessionStorage.getItem('lastScore');
    if (temp2 != null) {
        score2 = parseInt(temp2);
    }
    var temp = localStorage.getItem('highScoreMole');
    if (temp != null) {
        bestScore = parseInt(temp);
    }
    else {
        bestScore = 0;
    }
}

function displayContent() {
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
    psccore.textContent = score2;
}

// New function to show messages in the message box
function showMessage(message, type = 'info') {
    statusMessage.textContent = message;
    statusMessage.className = 'status-message'; // Reset classes
    statusMessage.classList.add(type);
    if(score >= 50){
        scoreDisplay.style.color = "gold";
    }
    // Auto-hide certain messages after 3 seconds
    if (type === 'success' || type === 'warning') {
        setTimeout(() => {
            if (statusMessage.textContent === message) {
                statusMessage.textContent = 'Game in progress...';
                statusMessage.className = 'status-message info';
            }
        }, 3000);
    }
}

function endGame() {
    clearInterval(gameID);
    gameID = null;
    startBtn.disabled = false;
    playGame = false;
    audio.pause();
    scoreDisplay.style.background = "background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
    scoreDisplay.style.color = "transparent"
    startBtn.textContent = "Play Again"
    // Hide all moles when game ends
    moles.forEach(mole => {
        mole.classList.remove('up');
        mole.classList.remove('bonked');
    });

    sessionStorage.setItem('lastScore', score);

    if (score > bestScore) {
        localStorage.setItem('highScoreMole', score);
        bestScore = score;
        showMessage(`🎉 New High Score: ${bestScore}! Congratulations!`, 'success');
        endAudio.play();
        maxScoreDisplay.style.textShadow = "2px 2px 2px rgba(255, 251, 0, 1)";

        setTimeout(()=>{
            maxScoreDisplay.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.3)";
        }, 1000);
    }
    else {
        showMessage(`Game Over! Your score: ${score}`, 'warning');
    }

    score2 = score;
    score = 0;
    time = 60;
    displayContent();
}

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole() {
    var index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function popGame() {
    if (!playGame) return;

    let minTime, maxTime;
    if (time < 10) {
        minTime = 200;  
        maxTime = 800;
    } else {
        minTime = 500;
        maxTime = 1500;
    }

    var timer = randomTime(minTime, maxTime);
    var hole = randomHole();
    var mole = hole.querySelector('.mole');

    mole.classList.add('up');

    setTimeout(() => {
        mole.classList.remove('up');
        if (playGame) {
            popGame();
        }
    }, timer);
}

function startGame() {
    time = 60;
    score = 0;
    score2 = 0;
    startBtn.disabled = true;
    playGame = true;
    audio.play();
    endAudio.pause();

    showMessage('Game started! Whack those moles! 🐹', 'info');

    // Clear any existing intervals
    if (gameID) {
        clearInterval(gameID);
    }

    popGame();

    gameID = setInterval(function () {
        time--;
        displayContent();

        if (time <= 10 && time > 0) {
            showMessage(`Hurry! Only ${time} seconds left!`, 'warning');
        }

        if (time <= 0) {
            endGame();
        }
    }, 1000);
}

function bonk(event) {
    if (!event.isTrusted) return; // Prevent fake clicks
    if (!playGame) return;

    if (event.target.classList.contains('up')) {
        score++;
        event.target.classList.remove('up');
        event.target.classList.add('bonked');

        // Show score update message occasionally
        if (score % 5 === 0) {
            showMessage(`Great! ${score} points and counting! 🎯`, 'success');
        }

        // Remove bonked class after animation
        setTimeout(() => {
            event.target.classList.remove('bonked');
        }, 300);

        displayContent();
    }
}

function resetGame() {
    // Clear any running game
    if (gameID) {
        clearInterval(gameID);
        gameID = null;
    }
    scoreDisplay.style.background = "background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
    scoreDisplay.style.color = "transparent"
    // Reset game state
    playGame = false;
    score = 0;
    time = 60;
    score2 = 0;

    // Reset high score in localStorage
    localStorage.removeItem('highScoreMole');
    bestScore = 0;
    sessionStorage.removeItem('lastScore');
    score2 = 0;

    // Reset UI
    startBtn.disabled = false;
    audio.pause();
    endAudio.pause();

    // Hide all moles
    moles.forEach(mole => {
        mole.classList.remove('up');
        mole.classList.remove('bonked');
    });

    // Update displays
    displayContent();

    showMessage('Game reset! High score cleared. Ready to play!', 'info');
}

webLoad();

//event listener
moles.forEach((mole) => {
    mole.addEventListener('click', bonk);
});

startBtn.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);