const removeFromArray = function(array, ...theArgs) {
    for (let argsIndex = 0; argsIndex < theArgs.length; argsIndex++) {
        let arg = theArgs[argsIndex];

        for (let index = 0; index < array.length; index++) {
            if (array[index] === arg) {
                array.splice(index, 1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
