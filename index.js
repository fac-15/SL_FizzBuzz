'use strict';

function fizzbuzz(number){
    if ( number === 0 ) {
        return 0;
    }
    else if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
    }
    else if (number % 5 === 0) {
        return "Buzz";
    }
    else if (number % 3 === 0 ) {
        return "Fizz";
    } 
    else {
        return number;
    }
}

console.log(Math.floor(Math.random()*100)*3)


module.exports = fizzbuzz;

