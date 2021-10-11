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

    else {
        if (flag == 1) {
            document.querySelector('.turn').innerHTML = 'Player X turn';
        } else {
            document.querySelector('.turn').innerHTML = 'Player O turn';
        }
        
    }
}

function restartFunc() {
    /*location.reload();*/

    document.querySelector('.box1').value = '';
    document.querySelector('.box2').value = '';
    document.querySelector('.box3').value = '';
    document.querySelector('.box4').value = '';
    document.querySelector('.box5').value = '';
    document.querySelector('.box6').value = '';
    document.querySelector('.box7').value = '';
    document.querySelector('.box8').value = '';
    document.querySelector('.box9').value = '';

    document.querySelector('.box1').disabled = false;
    document.querySelector('.box2').disabled = false;
    document.querySelector('.box3').disabled = false;
    document.querySelector('.box4').disabled = false;
    document.querySelector('.box5').disabled = false;
    document.querySelector('.box6').disabled = false;
    document.querySelector('.box7').disabled = false;
    document.querySelector('.box8').disabled = false;
    document.querySelector('.box9').disabled = false;

    document.querySelector('.win').innerHTML  = '';
    document.querySelector('.turn').innerHTML  = '';
}

flag = 1;

function func1() {
    let b1 = document.querySelector('.box1');
    if (flag == 1) {
        b1.value = 'X';
        b1.disabled = true;
        flag = 0;
    } else {
        b1.value = '0';
        b1.disabled = true;
        flag = 1;
    }
}

function func2() {
    let b2 = document.querySelector('.box2');
    if (flag == 1) {
        b2.value = 'X';
        b2.disabled = true;
        flag = 0;
    } else {
        b2.value = '0';
        b2.disabled = true;
        flag = 1;
    }
}

function func3() {
    let b3 = document.querySelector('.box3');
    if (flag == 1) {
        b3.value = 'X';
        b3.disabled = true;
        flag = 0;
    } else {
        b3.value = '0';
        b3.disabled = true;
        flag = 1;
    }
}

function func4() {
    let b4 = document.querySelector('.box4');
    if (flag == 1) {
        b4.value = 'X';
        b4.disabled = true;
        flag = 0;
    } else {
        b4.value = '0';
        b4.disabled = true;
        flag = 1;
    }
}

function func5() {
    let b5 = document.querySelector('.box5');
    if (flag == 1) {
        b5.value = 'X';
        b5.disabled = true;
        flag = 0;
    } else {
        b5.value = '0';
        b5.disabled = true;
        flag = 1;
    }
}

function func6() {
    let b6 = document.querySelector('.box6');
    if (flag == 1) {
        b6.value = 'X';
        b6.disabled = true;
        flag = 0;
    } else {
        b6.value = '0';
        b6.disabled = true;
        flag = 1;
    }
}

function func7() {
    let b7 = document.querySelector('.box7');
    if (flag == 1) {
        b7.value = 'X';
        b7.disabled = true;
        flag = 0;
    } else {
        b7.value = '0';
        b7.disabled = true;
        flag = 1;
    }
}

function func8() {
    let b8 = document.querySelector('.box8');
    if (flag == 1) {
        b8.value = 'X';
        b8.disabled = true;
        flag = 0;
    } else {
        b8.value = '0';
        b8.disabled = true;
        flag = 1;
    }
}

function func9() {
    let b9 = document.querySelector('.box9');
    if (flag == 1) {
        b9.value = 'X';
        b9.disabled = true;
        flag = 0;
    } else {
        b9.value = '0';
        b9.disabled = true;
        flag = 1;
    }
}