"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingNumber = void 0;
const missingNumber = (array) => {
    const expectedSum = 5050;
    let sum = 0;
    for (const number of array) {
        sum += number;
    }
    return expectedSum - sum;
    console.log(expectedSum - sum);
};
exports.missingNumber = missingNumber;
exports.missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]);
//# sourceMappingURL=numero-faltante.js.map