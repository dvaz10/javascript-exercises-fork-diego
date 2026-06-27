const sumAll = function(start, end) {
    let arr = [];
    if ((Number.isInteger(start) && start >= 0) && (Number.isInteger(end) && end >= 0)) {
        if (start <= end ) {
            for (let i = start; i <= end; i++ )
                arr.push(i)
        }
        else {
            for (let i = end; i <= start; i++ )
                arr.push(i)           
        }
         
    }   
    else {
        return "ERROR";
    }
    return arr.reduce((a,b) => a + b)
    
   
    

};

console.log(sumAll(1,4000000))

// Do not edit below this line
module.exports = sumAll;
