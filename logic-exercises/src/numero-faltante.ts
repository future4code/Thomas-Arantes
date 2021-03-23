export const missingNumber = (array: number[]): number => {
    const expectedSum = 5050;
    let sum = 0;
    for (const number of array) {
        sum += number
    }

    return expectedSum - sum;
};

missingNumber([1,2,3,4,5,6,7,8,10,11,12])