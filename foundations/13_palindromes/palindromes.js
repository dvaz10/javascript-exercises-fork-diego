const palindromes = function (string) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

    const original = string
    .toLowerCase()
    .split("")
    .filter(character => characters.includes(character))
    .join("");


    const palindrome = original
    .split("")
    .reverse()
    .join("");
    

    console.log(original)
    console.log(palindrome)

    return palindrome === original;

};
console.log(palindromes("race car!"))
// Do not edit below this line
module.exports = palindromes;
