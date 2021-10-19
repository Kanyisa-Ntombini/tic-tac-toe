function winFunc() {
    //HTML ELEMENTS
    const box1 = document.querySelector('.box1').value;
    const box2 = document.querySelector('.box2').value;
    const box3 = document.querySelector('.box3').value;
    const box4 = document.querySelector('.box4').value;
    const box5 = document.querySelector('.box5').value;
    const box6 = document.querySelector('.box6').value;
    const box7 = document.querySelector('.box7').value;
    const box8 = document.querySelector('.box8').value;
    const box9 = document.querySelector('.box9').value;

    //Player X Wins
    if (box1=='X' && box2 == 'X' && box3 == 'X') {
        document.querySelector('.win').innerHTML  = 'Player X wins';
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box6').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
        document.querySelector('.box9').disabled = true;
    }
    else if (box4=='X' && box5 == 'X' && box6 == 'X') {
        document.querySelector('.win').innerHTML  = 'Player X wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
        document.querySelector('.box9').disabled = true;
    }
    else if (box7=='X' && box8 == 'X' && box9 == 'X') {
        document.querySelector('.win').innerHTML  = 'Player X wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box6').disabled = true;
    }
    if (box1=='X' && box4 == 'X' && box7 == 'X') {
        document.querySelector('.win').innerHTML  = 'Player X wins';
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box6').disabled = true;
        document.querySelector('.box8').disabled = true;
        document.querySelector('.box9').disabled = true;
    }
    else if (box2=='X' && box5 == 'X' && box8 == 'X') {
        document.querySelector('.win').innerHTML  = 'Player X wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box6').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box9').disabled = true;
    }
    else if (box3=='X' && box6 == 'X' && box9 == 'X') {
        document.querySelector('.win').innerHTML  = 'Player X wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
    }
    else if (box1=='X' && box5 == 'X' && box9 == 'X') {
        document.querySelector('.win').innerHTML  = 'Player X wins';
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box6').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
    }
    else if (box3=='X' && box5 == 'X' && box7 == 'X') {
        document.querySelector('.win').innerHTML  = 'Player X wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
    }

    //Player 0 wins
    if (box1=='0' && box2 == '0' && box3 == '0') {
        document.querySelector('.win').innerHTML  = 'Player 0 wins';
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box6').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
        document.querySelector('.box9').disabled = true;
    }
    else if (box4=='0' && box5 == '0' && box6 == '0') {
        document.querySelector('.win').innerHTML  = 'Player 0 wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
        document.querySelector('.box9').disabled = true;
    }
    else if (box7=='0' && box8 == '0' && box9 == '0') {
        document.querySelector('.win').innerHTML  = 'Player 0 wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box6').disabled = true;
    }
    if (box1=='0' && box4 == '0' && box7 == '0') {
        document.querySelector('.win').innerHTML  = 'Player 0 wins';
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box6').disabled = true;
        document.querySelector('.box8').disabled = true;
        document.querySelector('.box9').disabled = true;
    }
    else if (box2=='0' && box5 == '0' && box8 == '0') {
        document.querySelector('.win').innerHTML  = 'Player 0 wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box6').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box9').disabled = true;
    }
    else if (box3=='0' && box6 == '0' && box9 == '0') {
        document.querySelector('.win').innerHTML  = 'Player 0 wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
    }
    else if (box1=='0' && box5 == '0' && box9 == '0') {
        document.querySelector('.win').innerHTML  = 'Player 0 wins';
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box3').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box6').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
    }
    else if (box3=='0' && box5 == '0' && box7 == '0') {
        document.querySelector('.win').innerHTML  = 'Player 0 wins';
        document.querySelector('.box1').disabled = true;
        document.querySelector('.box2').disabled = true;
        document.querySelector('.box4').disabled = true;
        document.querySelector('.box5').disabled = true;
        document.querySelector('.box7').disabled = true;
        document.querySelector('.box8').disabled = true;
    }
    else if ((box1=='X' || box1=='0') && (box2=='X' || box2=='0') && (box3=='X' || box3=='0') && (box4=='X' || box4=='0') && (box5=='X' || box5=='0') && (box6=='X' || box6=='0') && (box7=='X' || box7=='0') && (box8=='X' || box8=='0') && (box9=='X' || box9=='0')) {
        document.querySelector('.win').innerHTML  = 'Its a tie!';
    }
}

//flag = 1;
const row = document.querySelector('.row');
let rowChildren = Object.values(row.children);

function func1() {
    let b1 = document.querySelector('.box1');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b1) {
            rowChildren.splice(i, 1);
        }
    }
    b1.value = 'X';
    b1.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1);
    }
}

function func2() {
    let b2 = document.querySelector('.box2');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b2) {
            rowChildren.splice(i, 1);
        }
    }
    b2.value = 'X';
    b2.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1);
    }
}

function func3() {
    let b3 = document.querySelector('.box3');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b3) {
            rowChildren.splice(i, 1);
        }
    }
    b3.value = 'X';
    b3.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1);
    }
}

function func4() {
    let b4 = document.querySelector('.box4');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b4) {
            rowChildren.splice(i, 1);
        }
    }
    b4.value = 'X';
    b4.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1);
    }
}

function func5() {
    let b5 = document.querySelector('.box5');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b5) {
            rowChildren.splice(i, 1);
        }
    }
    b5.value = 'X';
    b5.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1);
    }
}

function func6() {
    let b6 = document.querySelector('.box6');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b6) {
            rowChildren.splice(i, 1);
        }
    }
    b6.value = 'X';
    b6.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1);
    }
}

function func7() {
    let b7 = document.querySelector('.box7');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b7) {
            rowChildren.splice(i, 1);
        }
    }
    b7.value = 'X';
    b7.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1);
    }
}

function func8() {
    let b8 = document.querySelector('.box8');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b8) {
            rowChildren.splice(i, 1);
        }
    }
    b8.value = 'X';
    b8.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1); 
    }
}

function func9() {
    let b9 = document.querySelector('.box9');
    for (let i=0; i<rowChildren.length; i++) {
        if (rowChildren[i] == b9) {
            rowChildren.splice(i, 1);
        }
    }
    b9.value = 'X';
    b9.disabled = true;

    if (rowChildren.length > 0) {
        console.log(rowChildren.length);
        var num = Math.floor(Math.random()*(rowChildren.length));
        console.log(num);
        const computerElement = rowChildren[num];
        computerElement.value = '0';
        computerElement.disabled = true;
        rowChildren.splice(num, 1);
    }
}

function restartFunc() {
    location.reload();
}