const prompt = require('prompt');

let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
}

let winningCombo = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];


function makeMove(position, letter) {
    board[position] = letter.toUpperCase();
}

function printBoard() {
    console.log('\n' + ' ' + board[1] + '|' + board[2] + '|' + board[3] + '\n' + '---------\n'+
    ' ' + board[4] + '|' + board[5] + '|' + board[6] + '\n' + '---------\n' +
    ' ' + board[7] + '|' + board[8] + '|' + board[9] + '\n');
}

function checkNumber(position) {
    return !isNaN(position) && board[position] == ' '; //check if the place you want to put in your X or O is empty
}

function winFunc(letter) {
    for (let i=0; i< winningCombo.length; i++){
        let moves = 0;
        for (let j=0; j< winningCombo[i].length; j++) {
            if (board[winningCombo[i][j]] == letter){
                moves++;
            }
            if (moves === 3) {
                win = 'yes';
                return true;
            }
        }
    }
    return false;
}

function tieFunc() {
    for (let i=1; i<=Object.keys(board).length; i++) {
        if (board[i] == ' ') {
            return false
        }
    }
    return true;
}

function play() {
    let winner = '';

    //Human makes move
    console.log('Player turn: X');

    prompt.start();

    prompt.get(['position'], function(err, result){
        if(checkNumber(result.position)) {
            makeMove(result.position, 'X');
            printBoard();

            if (winFunc('X')) {
                winner = 'X';
                console.log('Player X WINS!!');
                return;
            }
            if (tieFunc()) {
                console.log('It is a tie!!');
                return;
            }
        } else {
            console.log('Please try another number');
            play();
        }

        //Computer makes move
        console.log('Player turn: O');

        let computerPosition = 100;

        /*while (board[computerPosition] != ' ') {
            computerPosition = Math.floor(Math.random() * 9) + 1;
            console.log('Computer position: ' + computerPosition);
        }*/

        computerPosition = Math.floor(Math.random() * 9) + 1;
        console.log('Computer position: ' + computerPosition);

        makeMove(computerPosition, 'O');
        printBoard();
        if (winFunc('O')) {
            winner = 'X';
            console.log('Player O WINS!!');
            return;
        }
        if (tieFunc()) {
            console.log('It is a tie!!');
            return;
        }

        if (winner.length > 0) {
            console.log('Game over!');
            return;
        } else {
            play();
        }
    });
}

console.log('Well come to the Tic-Tac-Toe game!')
printBoard();

play();