const sumAll = function(beginNumber, endingNumber) {
    let result = 0;
    
    if (beginNumber < 0 || endingNumber < 0) {
        return "ERROR";
    }

    if (beginNumber > endingNumber) {
        let helper = endingNumber;
        endingNumber = beginNumber;
        beginNumber = helper;
    }

    if (typeof beginNumber != "number" || typeof endingNumber != "number") {
        return "ERROR";
    }

    for (let index = beginNumber; index <= endingNumber; index++) {
        result += index;
    }
      
    return result;
};

// Do not edit below this line
module.exports = sumAll;
