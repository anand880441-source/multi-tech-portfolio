// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const timerSelect1 = document.querySelector('.multi-timer1');
const timerSelect2 = document.querySelector('.multi-timer2');
const timerSelect3 = document.querySelector('.multi-timer3');

const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;
let typed = '';
let selectedTimer = 60;

function webLoad() {
    onLoad();
    displayContent();
    setupTimerSelection();
}

function onLoad() {
    var temp = sessionStorage.getItem('previousWpm');
    startBtn.disabled = true;
    if (temp != null) {
        bestWPM = parseInt(temp);
    }
    else {
        bestWPM = 0;
    }
}

function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
    startBtn.disabled = true;
}

function setupTimerSelection() {
    timerSelect1.addEventListener('click', () => selectTimer(15));
    timerSelect2.addEventListener('click', () => selectTimer(30));
    timerSelect3.addEventListener('click', () => selectTimer(60));
    
    selectTimer(0);
}

function selectTimer(timerValue) {
    if (isTestActive == false) {
        selectedTimer = timerValue;
        timeLeft = timerValue;
        timerDisplay.textContent = timeLeft;
        startBtn.disabled = false;

        timerSelect1.classList.remove('active');
        timerSelect2.classList.remove('active');
        timerSelect3.classList.remove('active');
        
        if (timerValue === 15) {
            timerSelect1.classList.add('active');
        } else if (timerValue === 30) {
            timerSelect2.classList.add('active');
        } else if (timerValue === 60) {
            timerSelect3.classList.add('active');
        }
    }
}

webLoad();

function endGame() {
    clearInterval(timerInterval);
    isTestActive = false;
    startBtn.disabled = false;

    const currentWPM = parseInt(wpmDisplay.textContent);
    if (currentWPM > bestWPM) {
        bestWPM = currentWPM;
        sessionStorage.setItem('previousWpm', bestWPM.toString());
        bestWPMDisplay.textContent = bestWPM;
    }

    // Reset to selected timer, not hardcoded 60
    timeLeft = selectedTimer;
    displayContent();

    typingArea.disabled = true;
    typingArea.value = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder', 'The test will start when you begin typing...');

    startTime = null;
}

function startGame() {
    timeLeft = selectedTimer; 
    isTestActive = true;
    startBtn.disabled = true;
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    console.log(currentText);
    textDisplay.textContent = currentText;

    typingArea.disabled = false;
    typingArea.value = "";
    typed = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder', 'Now you are eligible to write and use the input box');

    startTime = null;

    timerInterval = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft; 
        
        if (timeLeft <= 0) {
            endGame();
        }
        
        if (selectedTimer >= 30 && timeLeft > 15 && timeLeft < 35 && typed.length === currentText.length) {
            addNewText();
        }
    }, 1000);
}

function addNewText() {
    var temp = testTexts[Math.floor(Math.random() * testTexts.length)];
    currentText += " " + temp;
    textDisplay.textContent = currentText;
    typingArea.value = "";
    typed = "";
}

function updateStatus() {
    var textContent = typingArea.value;
    typed = textContent;

    const word = textContent.trim().split(/\s+/).filter(w => w.length > 0);
    console.log(word);
    
    const elapsedTime = startTime ? (Date.now() - startTime) / 1000 / 60 : 0;
    console.log(elapsedTime);

    const wpm = elapsedTime > 0 ? Math.floor(word.length / elapsedTime) : 0;
    wpmDisplay.textContent = wpm;

    var currentScore = 0;
    for (var i = 0; i < Math.min(currentText.length, textContent.length); i++) {
        if (currentText[i] === textContent[i]) {
            currentScore++;
        }
    }
    const accurancy = (textContent.length > 0) ? Math.floor(currentScore / textContent.length * 100) : 0;
    accuracyDisplay.textContent = `${accurancy}%`;
}

function highLights() {
    var textContent = typingArea.value;
    var highlightsText = '';

    for (var i = 0; i < currentText.length; i++) {
        if (i < textContent.length) {
            if (currentText[i] == textContent[i]) {
                highlightsText += `<span class = "correct">${currentText[i]}</span>`;
            }
            else {
                highlightsText += `<span class = "incorrect">${currentText[i]}</span>`;
            }
        }
        else {
            highlightsText += currentText[i];
        }
    }
    textDisplay.innerHTML = highlightsText;
}

function wordType() {
    if (!isTestActive && typingArea.value.length > 0) {
        startGame();
    }
    
    if (startTime == null && isTestActive) {
        startTime = Date.now();
    }
    highLights();
    updateStatus();
}

function resetGame() {
    clearInterval(timerInterval);
    timeLeft = selectedTimer; // Reset to selected timer
    isTestActive = false;
    startBtn.disabled = false;
    typingArea.disabled = true;
    typingArea.value = "";
    typed = "";
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "0%";
    timerDisplay.textContent = timeLeft;
    textDisplay.textContent = "Click Start to begin typing test";
    typingArea.setAttribute('placeholder', 'The test will start when you begin typing...');
    startTime = null;
}

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
typingArea.addEventListener('input', wordType);