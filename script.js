const gameBoard = (function () {
    let board = [[null, null, null], [null, null, null], [null, null, null]];
    let round = 0;
    let winner = null;
    return { board, round, winner };

})();




function playRound(row,col) {
    gameBoard.round++;
    // 'X' if odd      'O' if even
    let marker = (gameBoard.round % 2 === 0) ? 'X' : 'O';

    // //get user input
    // let row = parseInt(prompt("Enter row (0, 1, or 2):"));
    // let col = parseInt(prompt("Enter column (0, 1, or 2):"));

    if (gameBoard.board[row][col] !== null) {
        alert("Cell is already occupied!");
        gameBoard.round--;
        return;
    }
    gameBoard.board[row][col] = marker;
    updateBoard();
    checkWin();
}




function checkWin() {
    //check columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard.board[0][i] == 'X') {
            if (gameBoard.board[1][i] == 'X' && gameBoard.board[2][i] == 'X') {
                gameBoard.winner = 'X';
                displayWinner();
                return;
            }
        } else if (gameBoard.board[0][i] == 'O') {
            if (gameBoard.board[1][i] == 'O' && gameBoard.board[2][i] == 'O') {
                gameBoard.winner = 'O';
                displayWinner();
                return;
            }
        }
    }

    //check the diagonal
    //left diagonal
    if (gameBoard.board[0][0] == 'X') {
        if (gameBoard.board[1][1] == 'X' && gameBoard.board[2][2] == 'X') {
            gameBoard.winner = 'X';
            displayWinner();
            return;
        }
    } else if (gameBoard.board[0][0] == 'O') {
        if (gameBoard.board[1][1] == 'O' && gameBoard.board[2][2] == 'O') {
            gameBoard.winner = 'O';
            displayWinner();
            return;
        }
    }

    //right diagonal
    if (gameBoard.board[0][2] == 'X') {
        if (gameBoard.board[1][1] == 'X' && gameBoard.board[2][0] == 'X') {
            gameBoard.winner = 'X';
            displayWinner();
            return;
        }
    } else if (gameBoard.board[0][2] == 'O') {
        if (gameBoard.board[1][1] == 'O' && gameBoard.board[2][0] == 'O') {
            gameBoard.winner = 'O';
            displayWinner();
            return;
        }
    }



    //check horizontal row
    for (let i = 0; i < 3; i++) {
        if (gameBoard.board[i][0] == 'X') {
            if (gameBoard.board[i][1] == 'X' && gameBoard.board[i][2] == 'X') {
                gameBoard.winner = 'X';
                displayWinner();
                return;
            }
        } else if (gameBoard.board[i][0] == 'O') {
            if (gameBoard.board[i][1] == 'O' && gameBoard.board[i][2] == 'O') {
                gameBoard.winner = 'O';
                displayWinner();
                return;
            }
        }
    }

}


// function playGame() {
//     for (let i = 0; i < 9; i++) {

//         playRound();

//         displayBoard();

//         checkWin();

//         //deal with draw
//         if (gameBoard.round == 9 && gameBoard.winner == null) {
//             console.log("Draw");
//         }

//         //someone has won
//         if (gameBoard.winner != null) {
//             console.log(`${gameBoard.winner} has won`);
//             break;
//         }
//     }


// }

// function displayBoard(){
//     console.log(gameBoard.board[0]);
//     console.log(gameBoard.board[1]);
//     console.log(gameBoard.board[2]);
// }

function displayWinner() {
    document.querySelector('.winner').textContent = `${gameBoard.winner} has won`;
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const row = cell.getAttribute('data-row');
        const col = cell.getAttribute('data-col');
        cell.textContent = gameBoard.board[row][col];
    });
}

function cellClicked(event) {
    const row = event.target.getAttribute('data-row');
    const col = event.target.getAttribute('data-col');

    if (!gameBoard.winner && gameBoard.board[row][col] === null) {
        playRound(row, col);
    }
}

function resetGame() {
    gameBoard.board = [[null, null, null], [null, null, null], [null, null, null]];
    gameBoard.round = 0;
    gameBoard.winner = null;
    document.querySelector('.winner').textContent = '';
    updateBoard();
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', cellClicked);
});