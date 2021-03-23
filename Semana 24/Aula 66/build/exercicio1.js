"use strict";
const printCreasingNumbers = (integer) => {
    if (integer >= 0) {
        printCreasingNumbers(integer - 1);
        console.log(integer);
    }
};
printCreasingNumbers(10);
const printDecreasingNumbers = (integer) => {
    if (integer >= 0) {
        console.log(integer);
        printDecreasingNumbers(integer - 1);
    }
};
printDecreasingNumbers(8);
//# sourceMappingURL=exercicio1.js.map