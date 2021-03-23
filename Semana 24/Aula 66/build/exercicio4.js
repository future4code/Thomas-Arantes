"use strict";
const printArray = (array, index = array.length - 1) => {
    if (index >= 0) {
        printArray(array, index - 1);
        console.log(`elemento ${index}:`, array[index]);
    }
};
const array = [1, 2, 3, 4, 5];
printArray(array);
//# sourceMappingURL=exercicio4.js.map