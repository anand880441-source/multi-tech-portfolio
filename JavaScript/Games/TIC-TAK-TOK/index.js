const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");
const saveLocalButton = document.getElementById("saveLocalBtn");
const retrieveLocalButton = document.getElementById("retrieveLocalBtn");
const saveSessionButton = document.getElementById("saveSessionBtn");
const retrieveSessionButton = document.getElementById("retrieveSessionBtn");
const outputParagraph = document.getElementById("output");
const gameBoard = document.getElementById("gameBoard");
const size3x3Btn = document.getElementById("size3x3");
const size6x6Btn = document.getElementById("size6x6");

let player1 = prompt("Enter Player1 Name ") || "Player 1";
let player2 = prompt("Enter Player2 Name ") || "Player 2";
let player = true;
let currentBoardSize = 3;
let boxes = [];

// Winning combinations for 3x3
const winner3x3 = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

// Winning combinations for 6x6 (6 in a row)
const winner6x6 = [
    // Rows (6 consecutive)
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],
    // Columns (6 consecutive)
    [0, 6, 12, 18, 24, 30],
    [1, 7, 13, 19, 25, 31],
    [2, 8, 14, 20, 26, 32],
    [3, 9, 15, 21, 27, 33],
    [4, 10, 16, 22, 28, 34],
    [5, 11, 17, 23, 29, 35],
    // Diagonals (6 consecutive)
    [0, 7, 14, 21, 28, 35],
    [5, 10, 15, 20, 25, 30]
];

function createBoard(size) {
    gameBoard.innerHTML = '';
    gameBoard.className = `board board-${size}x${size}`;
    
    const totalBoxes = size * size;
    boxes = [];
    
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("button");
        box.className = "btn";
        box.dataset.index = i;
        box.addEventListener("click", () => handleBoxClick(box));
        gameBoard.appendChild(box);
        boxes.push(box);
    }
    
    currentBoardSize = size;
    resetGame();
}

function handleBoxClick(box) {
    if (box.innerHTML !== "" || box.disabled) return;
    
    if (player) {
        box.innerHTML = "O";
        box.dataset.player = "O";
        statusText.textContent = `${player2}'s turn (X)`;
        player = false;
    } else {
        box.innerHTML = "X";
        box.dataset.player = "X";
        statusText.textContent = `${player1}'s turn (O)`;
        player = true;
    }
    box.disabled = true;
    checkWinner();
}

function disablebtn() {
    for (let b of boxes) {
        b.disabled = true;
    }
}

function resetGame() {
    for (let b of boxes) {
        b.innerHTML = "";
        b.removeAttribute('data-player');
        b.disabled = false;
    }
    player = true;
    statusText.textContent = `${player1}'s turn (O)`;
    outputParagraph.textContent = "Game started!";
    
    // Make sure output is visible
    outputParagraph.style.opacity = "1";
    outputParagraph.style.visibility = "visible";
}

function checkWinner() {
    const winnerPatterns = currentBoardSize === 3 ? winner3x3 : winner6x6;
    const winLength = currentBoardSize === 3 ? 3 : 6;
    
    for (let pattern of winnerPatterns) {
        const values = pattern.map(index => boxes[index]?.innerHTML);
        
        if (values.every(val => val === "O" && val !== "")) {
            statusText.textContent = `🎉 ${player1} wins!`;
            outputParagraph.textContent = `Congratulations ${player1}! You won the game! 🎊`;
            outputParagraph.style.opacity = "1";
            outputParagraph.style.visibility = "visible";
            disablebtn();
            return;
        }
        
        if (values.every(val => val === "X" && val !== "")) {
            statusText.textContent = `🎉 ${player2} wins!`;
            outputParagraph.textContent = `Congratulations ${player2}! You won the game! 🎊`;
            outputParagraph.style.opacity = "1";
            outputParagraph.style.visibility = "visible";
            disablebtn();
            return;
        }
    }

    // Check for draw
    let filled = true;
    for (let b of boxes) {
        if (b.innerHTML === "") {
            filled = false;
            break;
        }
    }
    if (filled) {
        statusText.textContent = "😮 It's a Draw!";
        outputParagraph.textContent = "The game ended in a draw! Well played both! 🤝";
        outputParagraph.style.opacity = "1";
        outputParagraph.style.visibility = "visible";
    }
}

// Event Listeners
resetBtn.addEventListener("click", resetGame);

size3x3Btn.addEventListener("click", () => {
    createBoard(3);
    size3x3Btn.classList.add("active");
    size6x6Btn.classList.remove("active");
    outputParagraph.textContent = "Switched to 3x3 mode!";
    outputParagraph.style.opacity = "1";
    outputParagraph.style.visibility = "visible";
});

size6x6Btn.addEventListener("click", () => {
    createBoard(6);
    size6x6Btn.classList.add("active");
    size3x3Btn.classList.remove("active");
    outputParagraph.textContent = "Switched to 6x6 mode!";
    outputParagraph.style.opacity = "1";
    outputParagraph.style.visibility = "visible";
});

// Storage functions
function getGameState() {
    const boardState = boxes.map(b => ({
        content: b.innerHTML,
        player: b.dataset.player || ""
    }));
    return {
        board: boardState,
        playerTurn: player,
        player1: player1,
        player2: player2,
        status: statusText.textContent,
        boardSize: currentBoardSize
    };
}

function setGameState(state) {
    player1 = state.player1;
    player2 = state.player2;
    player = state.playerTurn;
    statusText.textContent = state.status;
    
    // Recreate board with saved size
    createBoard(state.boardSize || 3);
    
    // Restore board state
    for (let i = 0; i < boxes.length && i < state.board.length; i++) {
        boxes[i].innerHTML = state.board[i].content;
        if (state.board[i].player) {
            boxes[i].dataset.player = state.board[i].player;
        }
        boxes[i].disabled = state.board[i].content !== "";
    }
    
    // Update active button
    const size = state.boardSize || 3;
    size3x3Btn.classList.toggle("active", size === 3);
    size6x6Btn.classList.toggle("active", size === 6);
    
    outputParagraph.textContent = "Game state restored successfully!";
    outputParagraph.style.opacity = "1";
    outputParagraph.style.visibility = "visible";
}

saveLocalButton.addEventListener("click", () => {
    const gameState = getGameState();
    localStorage.setItem("ticTacToeLocal", JSON.stringify(gameState));
    outputParagraph.textContent = "✅ Game saved to Local Storage successfully!";
    outputParagraph.style.opacity = "1";
    outputParagraph.style.visibility = "visible";
});

retrieveLocalButton.addEventListener("click", () => {
    const saved = localStorage.getItem("ticTacToeLocal");
    if (saved) {
        const gameState = JSON.parse(saved);
        setGameState(gameState);
        outputParagraph.textContent = "📥 Game loaded from Local Storage successfully!";
        outputParagraph.style.opacity = "1";
        outputParagraph.style.visibility = "visible";
    } else {
        outputParagraph.textContent = "⚠️ No saved game found in Local Storage.";
        outputParagraph.style.opacity = "1";
        outputParagraph.style.visibility = "visible";
    }
});

saveSessionButton.addEventListener("click", () => {
    const gameState = getGameState();
    sessionStorage.setItem("ticTacToeSession", JSON.stringify(gameState));
    outputParagraph.textContent = "✅ Game saved to Session Storage successfully!";
    outputParagraph.style.opacity = "1";
    outputParagraph.style.visibility = "visible";
});

retrieveSessionButton.addEventListener("click", () => {
    const saved = sessionStorage.getItem("ticTacToeSession");
    if (saved) {
        const gameState = JSON.parse(saved);
        setGameState(gameState);
        outputParagraph.textContent = "📥 Game loaded from Session Storage successfully!";
        outputParagraph.style.opacity = "1";
        outputParagraph.style.visibility = "visible";
    } else {
        outputParagraph.textContent = "⚠️ No saved game found in Session Storage.";
        outputParagraph.style.opacity = "1";
        outputParagraph.style.visibility = "visible";
    }
});

// Initialize the game
createBoard(3);