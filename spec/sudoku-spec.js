import { confirmBoardSize, validateRowSum, validateColSum, validateIndividualRow, validateIndividualCol } from './../src/sudoku.js';

describe('confirmBoardSize', function() {
    it('should validate that there are nine columns', function() {

        var sampleArray = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];
        expect(confirmBoardSize(sampleArray)).toEqual(9)
    });
});


describe('validateRowSum', function() {
    it('should validate the sum of each row totals 45', function() {

        var sampleArray = [
            [1,2,3,4,5,6,7,8,9],
            [9,1,2,3,4,5,6,7,8],
            [8,9,1,2,3,4,5,6,7],
            [7,8,9,1,2,3,4,5,6],
            [6,7,8,9,1,2,3,4,5],
            [5,6,7,8,9,1,2,3,4],
            [4,5,6,7,8,9,1,2,3],
            [3,4,5,6,7,8,9,1,2],
            [2,3,4,5,6,7,8,9,1]
        ];
        expect(validateRowSum(sampleArray)).toEqual(true)
    });
});

describe('validateColSum', function() {
    it('should validate the sum of each column totals 45', function() {

        var sampleArray = [
            [1,2,3,4,5,6,7,8,9],
            [9,1,2,3,4,5,6,7,8],
            [8,9,1,2,3,4,5,6,7],
            [7,8,9,1,2,3,4,5,6],
            [6,7,8,9,1,2,3,4,5],
            [5,6,7,8,9,1,2,3,4],
            [4,5,6,7,8,9,1,2,3],
            [3,4,5,6,7,8,9,1,2],
            [2,3,4,5,6,7,8,9,1]
        ];
        expect(validateColSum(sampleArray)).toEqual(true)
        var sampleArray2 = [
            [45,0,0,0,0,0,0,0,0],
            [0,45,0,0,0,0,0,0,0],
            [0,0,45,0,0,0,0,0,0],
            [0,0,0,45,0,0,0,0,0],
            [0,0,0,0,45,0,0,0,0],
            [0,0,0,0,0,45,0,0,0],
            [0,0,0,0,0,0,45,0,0],
            [0,0,0,0,0,0,0,45,0],
            [0,0,0,0,0,0,0,0,45]
        ];
        expect(validateColSum(sampleArray2)).toEqual(true)
    });
});

describe('validateIndividualRow', function() {
    it('should validate each row to see if it contains numbers 1 through 9 integers', function() {

        var sampleArray = [
            [1,2,3,4,5,6,7,8,9],
            [9,1,2,3,4,5,6,7,8],
            [8,9,1,2,3,4,5,6,7],
            [7,8,9,1,2,3,4,5,6],
            [6,7,8,9,1,2,3,4,5],
            [5,6,7,8,9,1,2,3,4],
            [4,5,6,7,8,9,1,2,3],
            [3,4,5,6,7,8,9,1,2],
            [2,3,4,5,6,7,8,9,1]
        ];
        expect(validateIndividualRow(sampleArray)).toEqual(true)
    });
});

describe('validateIndividualCol', function() {
    it('should validate each column to see if it contains numbers 1 through 9 integers', function() {

        var sampleArray = [
            [9,2,3,4,5,6,7,8,9],
            [9,1,2,3,4,5,6,7,8],
            [8,9,1,2,3,4,5,6,7],
            [7,8,9,1,2,3,4,5,6],
            [6,7,8,9,1,2,3,4,5],
            [5,6,7,8,9,1,2,3,4],
            [4,5,6,7,8,9,1,2,3],
            [3,4,5,6,7,8,9,1,2],
            [2,3,4,5,6,7,8,9,1]
        ];
        expect(validateIndividualCol(sampleArray)).toEqual(true)
    });
});
