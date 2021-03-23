const calculateSumIterative = (
    integer: number,
): number => {
    let sum = 0
    for(let i = 0; i <= integer; i++) {
        sum += i
    }
    return sum
}

console.log(calculateSumIterative(8))
