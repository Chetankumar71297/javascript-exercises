const removeFromArray = function(array, ...theArgs) {
    let newArray =[];
    for (const element of array) {
        if (theArgs.includes(element)){
            continue;
        } else {newArray.push(element);
        }
        
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
