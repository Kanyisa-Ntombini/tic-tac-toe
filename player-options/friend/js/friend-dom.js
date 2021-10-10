let player = Play();

function nextFunc() {
    /*document.querySelector('.error-messages').innerHTML = '';
    document.querySelector('.turn').innerHTML = '';

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

    const win = document.querySelector('.win');
    const errorMessages = document.querySelector('.error-messages');
    const turn = document.querySelector('.turn');

    //Check if X or O is inserted

    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    

    if (box1=='x' || box1=='X' || box1=='o' || box1=='O') {
        console.log('box 1 if');
        b1 = box1.toLowerCase();
    } else if (box2=='x' || box2=='X' || box2=='o' || box2=='O') {
        console.log('box 2 if');
        b2 = box2.toLowerCase();
    } else if (box3=='x' || box3=='X' || box3=='o' || box3=='O') {
        console.log('box 3 if');
        b3 = box3.toLowerCase();
    } else {
        console.log('else');
        document.querySelector('.error-messages').innerHTML = 'Please enter X or O';
    }

    /*if (player.checkLetterLength(box1) && player.checkLetterChar(box1)) {
        b1 = box1.toLowerCase();
    } else if (! player.checkLetterLength(box1) || ! player.checkLetterChar(box1)) {
        errorMessages.innerHTML = 'Please enter X or O';
        console.log(box1);
        console.log('else');
    }

    if (player.checkLetterLength(box2) && player.checkLetterChar(box2)) {
        b2 = box2.toLowerCase();
    }  

    if (player.checkLetterLength(box3) && player.checkLetterChar(box3)) {
        b3 = box3.toLowerCase();
    }  

    if (player.checkLetterLength(box4) && player.checkLetterChar(box4)) {
        b4 = box4.toLowerCase();
    }    

    if (player.checkLetterLength(box5) && player.checkLetterChar(box5)) {
        b5 = box5.toLowerCase();
    }  

    if (player.checkLetterLength(box6) && player.checkLetterChar(box6)) {
        b6 = box6.toLowerCase();
    }

    if (player.checkLetterLength(box7) && player.checkLetterChar(box7)) {
        b7 = box7.toLowerCase();
    }    

    if (player.checkLetterLength(box8) && player.checkLetterChar(box8)) {
        b8 = box8.toLowerCase();
    }  

    if (player.checkLetterLength(box9) && player.checkLetterChar(box9)) {
        b9 = box9.toLowerCase();
    }
    
    //Player X
    
    if (b1 == 'x' && b2 == 'x' && b3 == 'x') {
        win.innerHTML  = 'Player X wins';
    }

    else if (b4 == 'x' && b5 == 'x' && b6 == 'x') {
        win.innerHTML  = 'Player X wins';
    }

    else if (b7 == 'x' && b8 == 'x' && b9 == 'x') {
        win.innerHTML  = 'Player X wins';
    }
    
    else if (b1 == 'x' && b4 == 'x' && b7 == 'x') {
        win.innerHTML  = 'Player X wins';
    }

    else if (b2 == 'x' && b5 == 'x' && b8 == 'x') {
        win.innerHTML  = 'Player X wins';
    }

    else if (b3 == 'x' && b6 == 'x' && b9 == 'x') {
        win.innerHTML  = 'Player X wins';
    }
    
    else if (b1 == 'x' && b5 == 'x' && b9 == 'x') {
        win.innerHTML  = 'Player X wins';
    }

    else if (b3 == 'x' && b5 == 'x' && b7 == 'x') {
        win.innerHTML  = 'Player X wins';
    }

    //Player O
    
    if (b1 == 'o' && b2 == 'o' && b3 == 'o') {
        win.innerHTML  = 'Player O wins';
    }

    else if (b4 == 'o' && b5 == 'o' && b6 == 'o') {
        win.innerHTML  = 'Player O wins';
    }

    else if (b7 == 'o' && b8 == 'o' && b9 == 'o') {
        win.innerHTML  = 'Player O wins';
    }
    
    else if (b1 == 'o' && b4 == 'o' && b7 == 'o') {
        win.innerHTML  = 'Player O wins';
    }

    else if (b2 == 'o' && b5 == 'o' && b8 == 'o') {
        win.innerHTML  = 'Player O wins';
    }

    else if (b3 == 'o' && b6 == 'o' && b9 == 'o') {
        win.innerHTML  = 'Player O wins';
    }
    
    else if (b1 == 'o' && b5 == 'o' && b9 == 'o') {
        win.innerHTML  = 'Player O wins';
    }

    else if (b3 == 'o' && b5 == 'o' && b7 == 'o') {
        win.innerHTML  = 'Player O wins';
    }

    //Next turn
    if (b1=='x' || b2=='x' || b3=='x' || b4=='x' || b5=='x' || b6=='x' || b7=='x' || b8=='x' || b9=='x') {
        turn.classList.add('blue');
        turn.innerHTML = 'Player O turn';
    }
    else if (b1=='o' || b2=='o' || b3=='o' || b4=='o' || b5=='o' || b6=='o' || b7=='o' || b8=='o' || b9=='o') {
        turn.classList.add('yellow');
        turn.innerHTML = 'Player X turn';
    }*/
    alert('next');
}

/* Restart Function */

function restartFunc() {
    alert('Restart');
}

function func1() {
    document.querySelector('.box1').innerHTML = 'X';
}