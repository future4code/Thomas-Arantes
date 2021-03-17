"use strict";
const calculateSum = (integer, acc = 0) => {
    if (integer === 0) {
        return acc;
    }
    return calculateSum(integer - 1, acc + integer);
};
console.log(calculateSum(8));
//# sourceMappingURL=exercicio2.js.map