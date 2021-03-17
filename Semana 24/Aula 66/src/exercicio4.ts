const printArray = (
    array: number[], 
    index: number = array.length -1
    ) => {
        if(index >=0) {
            printArray(array, index - 1)
            console.log(`elemento ${index}:`, array[index])
    }
}

const array = [1, 2, 3, 4, 5]
printArray(array)