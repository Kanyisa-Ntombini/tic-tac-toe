describe('Greetings function:' , 
    function() {
        it ('should check if a name is entered', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('');
                assert.deepEqual(false, testGreeting.checkName());

                let testGreeting2 = GreetMe();
                testGreeting2.setName('Grapes');
                assert.deepEqual(true, testGreeting2.checkName());
            }
        );
    }
);