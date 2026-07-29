const fibonacci = function(num) {
    let fib = [0,1];
    let value = 1;
    for (let i = 0; i < num; i++) {
        value += fib[i];
        fib.push(value);

    }
    console.log(fib)
    return fib[num];

};
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
