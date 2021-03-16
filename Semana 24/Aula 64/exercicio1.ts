function isOneEdit(stringA: string, stringB: string): boolean {
    
    if (Math.abs(stringB.length - stringA.length) > 1) return false

    if(stringB.length > stringA.length) return stringB.includes(stringA)

    if(stringA.length > stringB.length) return stringA.includes(stringB)

    let charDifference = 0 

    for(let i = 0; i< stringA.length; i++) {
        if(stringA[i] !== stringB[i]) charDifference++
    }

    return charDifference === 1

}