let player = Play();

function clickBox() {

    //HTML ELEMENTS
    const box1 = document.getElementById('box1').value;
    const box2 = document.getElementById('box1').value;
    const box3 = document.getElementById('box1').value;
    const box4 = document.getElementById('box1').value;
    const box5 = document.getElementById('box1').value;
    const box6 = document.getElementById('box1').value;
    const box7 = document.getElementById('box1').value;
    const box8 = document.getElementById('box1').value;
    const box9 = document.getElementById('box1').value;

    const win = document.getElementById('win');

    //New variables for checked letters

    let b1, b2, b3, b4, b5, b6, b7, b8, b9;

    player.setLetter(box1);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b1 = player.getLetter();
    }    

    player.setLetter(box2);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b2 = player.getLetter();
    }   

    player.setLetter(box3);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b3 = player.getLetter();
    }   

    player.setLetter(box4);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b4 = player.getLetter();
    }    

    player.setLetter(box5);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b5 = player.getLetter();
    }   

    player.setLetter(box6);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b6 = player.getLetter();
    }

    player.setLetter(box7);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b7 = player.getLetter();
    }    

    player.setLetter(box8);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b8 = player.getLetter();
    }   

    player.setLetter(box9);
    if (player.checkLetterLength() && player.checkLetterChar()) {
        b9 = player.getLetter();
    }

    //Player X
    
    if (b1 == 'x' && b2 == 'x' && b3 == 'x') {
        console.log('should not work!')
        console.log(b1);
        console.log(b2);
        console.log(b3);
        win.innerHTML  = 'Player X wins';
    }

    /*else if (b4 == 'x' && b5 == 'x' && b6 == 'x') {
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
    }*/
}

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', clickBox);