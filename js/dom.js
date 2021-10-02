let player = Play();

function clickBox() {
    document.querySelector('.error-messages').innerHTML = '';

    //HTML ELEMENTS
    const box1 = document.getElementById('box1').value;
    const box2 = document.getElementById('box2').value;
    const box3 = document.getElementById('box3').value;
    const box4 = document.getElementById('box4').value;
    const box5 = document.getElementById('box5').value;
    const box6 = document.getElementById('box6').value;
    const box7 = document.getElementById('box7').value;
    const box8 = document.getElementById('box8').value;
    const box9 = document.getElementById('box9').value;

    const win = document.getElementById('win');
    const errorMessages = document.querySelector('.error-messages');
    const turn = document.getElementById('turn');

    //New variables for checked letters

    let b1, b2, b3, b4, b5, b6, b7, b8, b9;

    if (player.checkLetterLength(box1) && player.checkLetterChar(box1)) {
        b1 = box1.toLowerCase();
    } else if (! player.checkLetterLength(box1) || ! player.checkLetterChar(box1)) {
        errorMessages.innerHTML = 'Please enter X or O';
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
    }
}

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', clickBox);