const ftoc = function(degreeFahrenheit) {
      let celsius;
      celsius = ((degreeFahrenheit - 32) * 5) / 9;
      celsius = round(celsius);
      return celsius;
};

const ctof = function(degreeCelsius) {
      let fahrenheit;
      fahrenheit = ((degreeCelsius * 9)/5) + 32;
      fahrenheit = round(fahrenheit);
      return fahrenheit;
};

function round(value, precision = 1) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
