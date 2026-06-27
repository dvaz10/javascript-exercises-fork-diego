/*
const removeFromArray = function(array, ...values) {
    for (const value of values) {
        let index = array.findIndex(arr => arr === value)
        array.splice(index, 1)
    }
    return array;
};
*/
const removeFromArray = function(array, ...values) {
    return array.filter(arr => !values.includes(arr))
        
};
console.log((removeFromArray([1, 2, 2, "he"], 1,"2",4)))
// Do not edit below this line
module.exports = removeFromArray;
