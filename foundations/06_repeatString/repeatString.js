const repeatString = function(word, repeat) {
    let result = ""
    if (repeat >= 0) {
        for (let i = 0; i < repeat; i++) {
            result += word
        }
        return result;
    }
    else {
        return "ERROR";
    }
    

};
console.log(repeatString('hey', 0))
console.log(repeatString('hello', -1))
// Do not edit below this line
module.exports = repeatString;

