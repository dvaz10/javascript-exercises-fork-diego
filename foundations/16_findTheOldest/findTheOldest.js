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

    const older = peopleAge.sort((a,b) => b.age - a.age);

    return older[0];

};

// Do not edit below this line
module.exports = findTheOldest;
