export const stringCompression = (input) => {
    const substrings = []
    let lastCharacter = input[0]
    let characterCount = 0

    for (const char of input) {
        if(char !== lastCharacter) {
            substrings.push(lastCharacter + characterCount)
            lastCharacter = char
            characterCount = 0
        }
        characterCount++
    }

    substrings.push(lastCharacter + characterCount)
    let result = ""
    for (const key of substrings) {
        result += key
    }
    return result.length > input.length ? input : result
}