const add = function(first_num, second_num) {
	  return first_num + second_num
};

const subtract = function(first_num, second_num) {
	  return first_num - second_num
};

const sum = function(array) {
    let result = 0;
    for(i in array) {
        result += array[i];
    };
    return result
};

const multiply = function(array) {
    let result = 1;
    for(i in array) {
        result *= array[i];
    };
    return result
};

const power = function(first_num, second_num) {
    if(first_num == 0) return 0
    if(second_num == 0) return 1
    let result = 1;
    for(i = 1; i <= second_num; i++) {
        result *= first_num;
    };
    return result
};

const factorial = function(integer) {
    let result = 1;
    if(integer == 0 || integer == 1) return result
    for(i = 1; i <= integer; i++) {
        result *= i;
    };
    return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
