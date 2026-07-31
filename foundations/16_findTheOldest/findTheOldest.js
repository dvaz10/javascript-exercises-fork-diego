const findTheOldest = function(array) {
    const peopleAge = array.map(item => {

        let age = 0
        if (Object.keys(item).includes("yearOfDeath")) {
            age = item.yearOfDeath - item.yearOfBirth;
        }
        else {
            age = (new Date()).getFullYear() - item.yearOfBirth;
        };
    
       return {
            name: item.name,
            age
        };
})

    console.log(peopleAge);

    const older = peopleAge.sort((a,b) => b.age - a.age);

    return older;

};








    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
        
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
