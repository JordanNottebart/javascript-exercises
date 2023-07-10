const reverseString = function(word) {
    let reverseWord = "";

    for (let index = word.length - 1; index >= 0; index--) {
        let letter = word.substr(index, 1);
        reverseWord += letter;
    }

    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
