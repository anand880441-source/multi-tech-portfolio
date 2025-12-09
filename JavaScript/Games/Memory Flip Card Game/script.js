// DOM elements
const board = document.getElementById('board');           // Game board container
const movesEl = document.getElementById('moves');         // Moves counter display
const pairsEl = document.getElementById('pairs');         // Matched pairs display
const timeEl = document.getElementById('timeLeft');       // Timer display
const startBtn = document.getElementById('startBtn');     // Start game button
const restartBtn = document.getElementById('restartBtn'); // Restart game button
const resetBtn = document.getElementById('resetBtn');     // Reset game button
const bestScoreEl = document.getElementById('bestScore'); // Best score display
const overlay = document.getElementById('countdownoverlay'); // Countdown overlay

// Game configuration
const rows = 3;           // 3 rows in grid
const cols = 6;           // 6 columns in grid  
const totalPairs = 9;     // 9 pairs = 18 cards total
const initialTime = 60;   // 60-second game timer

// State
let firstCard = null;      // First card clicked in current turn
let secondCard = null;     // Second card clicked in current turn  
let busy = false;          // Prevents clicking during card flip animations
let moves = 0;             // Number of moves made
let matchedPairs = 0;      // Number of successfully matched pairs
let timeleft = initialTime; // Remaining game time
let timerId = null;        // Reference to timer interval
let pendingTimeouts = [];  // Stores setTimeout references for cleanup
let bestscore = null;      // Best score from localStorage


//onLoad function
function onLoad() {
    var temp = localStorage.getItem('bestPair');  //to store score into bestscore.
    if (temp != null) {    //if previous score exists, it load best score from browser storage.
        bestscore = parseInt(temp);
    }
    else {      // if no previous score exists,sets bestscore to 0.
        bestscore = 0;
    }
}


//displayContent function
function displayContent() {  //Display initial game state
    timeEl.textContent = timeleft;  //Shows initial time (60 seconds)
    movesEl.textContent = moves;
    pairsEl.textContent = matchedPairs;
    bestScoreEl.textContent = bestscore; //Displays best score (0 or previous record)
}

onLoad();  // function call
displayContent();  //function call


//Randomize card positions
var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffle(num2) {  //where => num2 = [...num1, ...num1]
    console.log(num2); // Debug: show original array
    for (let i = num2.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        console.log(j); // Debug: show random index
        [num2[i], num2[j]] = [num2[j], num2[i]]; // Swap elements
    }
    return num2;
}

//Create HTML structure for a single card
function createCard(value) {
    const card = document.createElement('div');  //div created 
    card.classList.add('card');  //div with "class=card"

    const inner = document.createElement('div');
    inner.classList.add('inner');

    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = '';  //blank front side

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = value;  //number on back side

    inner.appendChild(front); //front div become child of inner div
    inner.appendChild(back);  //back div become child of inner div
    card.appendChild(inner);  //inner div become child of card div

    return card;
}

function endGame(){
    clearInterval(timerId);
    busy = false;
    firstCard = null;
    secondCard = null;
    
    // Calculate and update best score if player wins
    if(matchedPairs == 9){
        const score = calculateScore(true);
        alert(`Congratulations! You won with ${moves} moves and ${timeleft} seconds left! Score: ${score}`);
        if(score > bestscore){
            bestscore = score;
            localStorage.setItem('bestPair', bestscore);
            bestScoreEl.textContent = bestscore;
        }
    } 
    else{
        const score = calculateScore(false);
        alert(`Game Over! You matched ${matchedPairs} pairs. Score: ${score}`);
    }
}

function calculateScore(isWin) {
    if (isWin) {
        return Math.floor(1500 - (moves * 8) + (timeleft * 30) - Math.random() * 100);
    } else {
        return Math.floor((matchedPairs * 80) + Math.random() * 200 - (moves * 4));
    }
}

function displayValue(card){
    if(busy == false)return;
    if(card === firstCard || card.classList.contains('matched')) return;
    card.classList.add('flipped');  // card -> fliped

    if(firstCard == null){   //when user select the first card it should always store in firstcard variable
        firstCard = card;
        return;
    }
    secondCard = card;  //second card will always br store in second card variable...
    moves++;
    movesEl.textContent = moves; 

    var a = firstCard.querySelector('.back');
    console.log("a value is :" + a.textContent);

    var b = secondCard.querySelector('.back')
    console.log("b value is :" + b.textContent);

    if(a.textContent === b.textContent){
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedPairs++;
        pairsEl.textContent = matchedPairs;

        if(matchedPairs == 9){
            endGame();
        }
        firstCard = null;
        secondCard = null;
    }
    else{
        setTimeout(function() {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');

            firstCard = null;
            secondCard = null;
            
        },700);
    }
}

// Initialize and display the game board.
function createBoxGame() {
    board.innerHTML = '';  //Clear existing cards
    //duplicate and shuffle numbers.
    const reshuffleNumber = shuffle([...num1, ...num1]);
    console.log(reshuffleNumber);

    //Create card for each number.
    reshuffleNumber.forEach(value => {
        const card = createCard(value);
        board.appendChild(card);

        //Add click handler
        card.addEventListener('click', () => {
            displayValue(card);
            console.log(card)
        });
    });
}

function resetGame(){
    //Clear any existing game state
    clearInterval(timerId);

    // Reset game state
    firstCard = null;
    secondCard = null;
    busy = false;
    moves = 0;
    matchedPairs = 0;
    timeleft = initialTime;

    //Clear all pending timeouts
    pendingTimeouts.forEach(timeout => clearTimeout(timeout));
    pendingTimeouts = [];

    //Update display
    displayContent();

    //Recreate the game board
    createBoxGame();
}

function hardReset(){
    //Reset best score
    bestscore = 0;
    localStorage.setItem('bestPair', bestscore);
    bestScoreEl.textContent = bestscore;

    //Reset current game
    resetGame();

    alert("Best score has been reset to 0!");
}

function startGame(){
    if(busy) return;  //prevent multiple starts

    busy = true;
    timeleft = 60;
    moves = 0;
    matchedPairs = 0;

    //Reset display
    displayContent();

    //Clear any existing board and create new one
    createBoxGame();

    //Start timer
    timerId = setInterval(function(){
        timeleft--;

        if(timeleft <= 0){
            endGame();
        }
        displayContent();
    },1000)
}
startBtn.addEventListener('click', startGame);

//Event listeners 
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', resetGame);   
resetBtn.addEventListener('click', hardReset);   

//Initial game setup
createBoxGame();