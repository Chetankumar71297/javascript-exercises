const fibonacci = function(n) {
    if (n < 0) return "OOPS"
    let nth_number_in_series = Math.round((Math.pow(((1 + Math.sqrt(5))/2), n)
    - Math.pow(((1 - Math.sqrt(5)/2)), n)) / Math.sqrt(5));
    return nth_number_in_series
};

/* The nth number in the Fibonacci sequence can be found using the formula:
   F(n) = ( ( (1 + √5) / 2 )^n - ( (1 - √5) / 2 )^n ) / √5, where n is the position of the desired number in the sequence.*/
/*The final answer is rounded because Binet's formula calculates the nth number in the Fibonacci sequence as a 
  floating-point number, which may contain decimal values.  */

  // Do not edit below this line
module.exports = fibonacci;
