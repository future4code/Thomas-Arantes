const calculateSum = (
    integer: number, 
    acc: number = 0
): number => {
    if(integer === 0) {
        return acc
    }
    return calculateSum(integer -1, acc + integer)
}

console.log(calculateSum(8))

