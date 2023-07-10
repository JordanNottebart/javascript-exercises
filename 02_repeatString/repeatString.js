const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    
    let repeatedWord = "";

    for (let index = 0; index < num; index++) {
        repeatedWord = repeatedWord + string;
    }

    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
