function Play() {
    let theLetter = '';
    let inputNumberError = '';

    function setLetter(letter) {
        if (isNaN(letter)) {
            theLetter = letter.toLowerCase();
        } else {
            inputNumberError = 'Please do not enter a number'
        }
    }

    function checkLetterLength() {
        return theLetter.length == 1;
    }

    function checkLetterChar() {
        if (theLetter == 'x' || theLetter == 'o') {
            return true;
        } else {
            return false;
        }
    }

    function letterErrorMessage() {
        return 'Please enter X or O';
    }

    function numberErrorMessage() {
        return inputNumberError;
    }

    function getLetter() {
        return theLetter;
    }



    return {
        setLetter,
        checkLetterLength,
        checkLetterChar,
        letterErrorMessage,
        numberErrorMessage,
        getLetter
    }
}