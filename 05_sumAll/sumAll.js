const sumAll = function(x, y) {
    let sumOfNumbers = 0;
    if (x < 0 || y < 0 || typeof(x) != "number" || 
        typeof(y) != "number") {
        return "ERROR";
        }
    if (x < y) {
        for(let i = x; i <= y; i++) {
            sumOfNumbers += i;
        }
    } else {
            for(let i = x; i >= y; i--) {
                sumOfNumbers += i;
        }
    }
    return sumOfNumbers;
};

// Do not edit below this line
module.exports = sumAll;
