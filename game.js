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

let win = 'no';
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

function playComputer(letter) {
    let move = Math.floor(Math.random() * 9) + 1;
    if (board[move] == ' ') {
        makeMove(move, letter);
    } else {
        console.log('Try another number');
        playComputer('O');
    }
    printBoard();
   
    if (winFunc(letter)) {
        console.log('Player ' + letter + ' WINS!!');
        return;
    }
    if (tieFunc()) {
        console.log('It is a tie!!');
        return;
    }
}

function playHuman(letter) {
    console.log('Player turn: ' + letter);
    prompt.start();

    prompt.get(['position'], function(err, result){
        if(checkNumber(result.position)) {
            makeMove(result.position, letter);
            printBoard();

            if (winFunc(letter)) {
                console.log('Player ' + letter + ' WINS!!');
                return;
            }
            if (tieFunc()) {
                console.log('It is a tie!!');
                return;
            }
        } else {
            console.log('Please try another number');
            playHuman('X');
        }
    });
}

function playerTurn() {
    console.log(win);
    let turn = 1;
    while (win == 'no') {
        console.log('loopy');
        if (turn = 1) {
            turn = 0;
            playHuman('X');
        } else {
            turn = 1;
            playComputer('O');
        }
    }
}

console.log('Well come to the Tic-Tac-Toe game!')
printBoard();
playerTurn();