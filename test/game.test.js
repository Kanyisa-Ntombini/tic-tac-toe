const assert = require('assert');
const game = require('../game');

describe('The game function', function(){

    it('should multiply 2 and 5 correctly', function(){
        assert.equal(10, game(2,5));
    });
    it('should multiply 5 and 3 correctly', function(){
        assert.equal(15, game(5,3));
    });
});