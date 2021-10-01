describe('Greetings function:' , 
    function() {
        it ('should check if something is typed', 
            function () {
                let testPlay = Play();
                testPlay.setLetter('');
                assert.deepEqual(false, testPlay.checkLetterLength());

                let testPlay1 = Play();
                testPlay1.setLetter('O');
                assert.deepEqual(true, testPlay1.checkLetterLength());

                let testPlay2 = Play();
                testPlay2.setLetter('Apple');
                assert.deepEqual(false, testPlay2.checkLetterLength());
            }
        );

        it ('should check if only X or O is typed', 
            function () {
                let testPlay = Play();
                testPlay.setLetter('');
                assert.deepEqual(false, testPlay.checkLetterChar());

                let testPlay1 = Play();
                testPlay1.setLetter(7);
                assert.deepEqual(false, testPlay1.checkLetterChar());

                let testPlay2 = Play();
                testPlay2.setLetter('Beach');
                assert.deepEqual(false, testPlay2.checkLetterChar());

                let testPlay3 = Play();
                testPlay3.setLetter('M');
                assert.deepEqual(false, testPlay3.checkLetterChar());

                let testPlay4 = Play();
                testPlay4.setLetter('0');
                assert.deepEqual(false, testPlay4.checkLetterChar());

                let testPlay5 = Play();
                testPlay5.setLetter('O');
                assert.deepEqual(true, testPlay5.checkLetterChar());

                let testPlay6 = Play();
                testPlay6.setLetter('X');
                assert.deepEqual(true, testPlay6.checkLetterChar());
            }
        );

        /*it ('should check if only X or O is typed', 
            function () {
                let testPlay = Play();
                testPlay.setLetter('');
                assert.deepEqual(false, testPlay.checkLetterChar());

                let testPlay1 = Play();
                testPlay1.setLetter(7);
                assert.deepEqual(false, testPlay1.checkLetterChar());

                let testPlay2 = Play();
                testPlay2.setLetter('Beach');
                assert.deepEqual('shoe', testPlay2.checkLetterChar());
            }
        );*/
    }
);