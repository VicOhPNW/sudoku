export function confirmBoardSize(input) {
    var count = 0;
    for(var i = 0; i < input.length; i++) {
        if (input.length === input[i].length)
        {
            count++;
        }
    }
    return count;
}

export function validateRowSum(input) {
    var sum = 0
    for(var i = 0; i < input.length; i++) {
        for(var j = 0; j < input.length; j++) {
            sum += input[i][j];
        }
        if (sum !== 45) {
            return false;
        }
        sum = 0;
    }
    return true;
}

export function validateColSum(input) {
    var sum = 0;
    for(var i = 0; i < input.length; i++) {
        for(var j = 0; j < input.length; j++) {
            sum += input[j][i];
        }
        if (sum !== 45) {
            return false;
        }
        sum = 0;
    }
    return true;
}

export function validateIndividualRow(input) {
    var masterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var tempArr = masterArr.slice();
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < masterArr.length; j++) {
            if (tempArr.includes(input[i][j])) {
                tempArr.splice(tempArr.indexOf(input[i][j]),1);
            } else {
                return false;
            } 
        }
        tempArr = masterArr.slice();
    }
    return true;
}

export function validateIndividualCol(input) {
    var masterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var tempArr = masterArr.slice();
    for (var i=0; i < input.length; i++) {
        for (var j = 0; j <masterArr.length; j++) {
            if (tempArr.includes(input[j][i])) {
                tempArr.splice(tempArr.indexOf(input[j][i]),1);
            } else {
                return false;
            }
        }
        tempArr = masterArr.slice();
    }
    return true;
}

export function checkThreeByThree(input) {
    var masterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var tempArr = masterArr.slice();
    var startingPoints = [
        [0,0],
        [0,3],
        [0,6],
        [3,0],
        [3,3],
        [3,6],
        [6,0],
        [6,3],
        [6,6]
    ];
    startingPoints.forEach(function(startingPoint) {
        for (var i=0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (tempArr.includes(input[i + startingPoint[0]][j + startingPoint[1]])) {
                    tempArr.splice(tempArr.indexOf(input[i + startingPoint[0]][j + startingPoint[1]]),1);
                } else {
                    return false;
                }
            }
            tempArr = masterArr.slice();
        }
    });
    return true;
    
}