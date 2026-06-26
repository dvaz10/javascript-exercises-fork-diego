const reverseString = function(string) {
    let reverse = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];

    }
    return reverse;


};
console.log(reverseString("Hola soy diego. el num 1"))
// Do not edit below this line
module.exports = reverseString;
