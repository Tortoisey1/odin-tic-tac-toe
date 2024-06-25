const gameBoard = (function () {
    console.log("test");
    let board = [[null, null, null], [null, null, null], [null, null, null]];
    let round = 0;
    let winner = null;
    return { board, round, winner };

})();




function playRound() {
    gameBoard.round++;
    // 'X' if odd      'O' if even
    let marker = (gameBoard.round % 2 === 0) ? 'X' : 'O';

    //get user input
    let row = parseInt(prompt("Enter row (0, 1, or 2):"));
    let col = parseInt(prompt("Enter column (0, 1, or 2):"));

    if (gameBoard.board[row][col] !== null) {
        console.log("Cell is already occupied!");
        return;
    }
    gameBoard.board[row][col] = marker;
}

function checkWin() {
    //check columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard.board[0][i] == 'X') {
            if (gameBoard.board[1][i] == 'X' && gameBoard.board[2][i] == 'X') {
                gameBoard.winner = 'X';
                return;
            }
        } else if (gameBoard.board[0][i] == 'O') {
            if (gameBoard.board[1][i] == 'O' && gameBoard.board[2][i] == 'O') {
                gameBoard.winner = 'O';
                return;
            }
        }
    }

    //check the diagonal
    //left diagonal
    if (gameBoard.board[0][0] == 'X') {
        if (gameBoard.board[1][1] == 'X' && gameBoard.board[2][2] == 'X') {
            gameBoard.winner = 'X';
            return;
        }
    } else if (gameBoard.board[0][0] == 'O') {
        if (gameBoard.board[1][1] == 'O' && gameBoard.board[2][2] == 'O') {
            gameBoard.winner = 'O';
            return;
        }
    }

    //right diagonal
    if (gameBoard.board[0][2] == 'X') {
        if (gameBoard.board[1][1] == 'X' && gameBoard.board[2][0] == 'X') {
            gameBoard.winner = 'X';
            return;
        }
    } else if (gameBoard.board[0][2] == 'O') {
        if (gameBoard.board[1][1] == 'O' && gameBoard.board[2][0] == 'O') {
            gameBoard.winner = 'O';
            return;
        }
    }



    //check horizontal row
    for (let i = 0; i < 3; i++) {
        if (gameBoard.board[i][0] == 'X') {
            if (gameBoard.board[i][1] == 'X' && gameBoard.board[i][2] == 'X') {
                gameBoard.winner = 'X';
                return;
            }
        } else if (gameBoard.board[i][0] == 'O') {
            if (gameBoard.board[i][1] == 'O' && gameBoard.board[i][2] == 'O') {
                gameBoard.winner = 'O';
                return;
            }
        }
    }

}


function playGame() {
    for (let i = 0; i < 9; i++) {

        playRound();

        displayBoard();

        checkWin();

        //deal with draw
        if (gameBoard.round == 9 && gameBoard.winner == null) {
            console.log("Draw");
        }

        //someone has won
        if (gameBoard.winner != null) {
            console.log(`${gameBoard.winner} has won`);
            break;
        }
    }


}

function displayBoard(){
    console.log(gameBoard.board[0]);
    console.log(gameBoard.board[1]);
    console.log(gameBoard.board[2]);
}

playGame();