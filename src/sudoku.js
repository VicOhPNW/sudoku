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
