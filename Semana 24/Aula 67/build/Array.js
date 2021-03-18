"use strict";
const hogwartsHouses = new Array("corvinal", "lufa lufa", "grifinória", "sonserina");
const spliceRaiz = (array, index) => {
    const removedItem = array[index];
    for (let i = index; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    array.length--;
    return removedItem;
};
const grifinoria = spliceRaiz(hogwartsHouses, 2);
console.log({
    grifinoria,
    hogwartsHouses
});
//# sourceMappingURL=Array.js.map