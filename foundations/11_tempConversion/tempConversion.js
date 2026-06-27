const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5/9)
  celsius = Math.round(celsius * 10) / 10
  return celsius;

};

const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius * 9/5) + 32
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return fahrenheit;
};

console.log(convertToCelsius(32))
console.log(convertToFahrenheit(73.2))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
