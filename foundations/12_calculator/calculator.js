const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
	return Number(numbers.reduce((sum, value) => sum + value, 0));
};

const multiply = function(numbers) {
  return Number(numbers.reduce((sum, value) => sum * value, 1))
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(number) {
	if (number === 0) return 1;

  else {
    let arr = []
    for (let i = 1; i <= number; i++) {
      arr.push(i)
    }
    return multiply(arr)
  }
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
