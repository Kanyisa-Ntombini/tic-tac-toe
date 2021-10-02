function Play() {
    
    function checkLetterLength(letter) {
        return letter.length == 1;
    }

    function checkLetterChar(letter) {
        if (letter == 'x' || letter == 'o') {
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

    return {
        checkLetterLength,
        checkLetterChar,
        letterErrorMessage,
        numberErrorMessage
    }
}