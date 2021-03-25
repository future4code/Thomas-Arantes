function longestCommen(strings) {
    if(strings. length === 0) return ""

    let commonPrefix = ""
    for(let i = 0; i < strings[0].length; i++) {
        let currentCharacter = strings[0][i] 
        let areAllCharactersSame = true

        for(let j = 0; j <strings.length; j++) {
            if(strings[j][i] !== currentCharacter) {
                return commonPrefix
            }
        }

        if(currentCharacter) {
            commonPrefix += currentCharacter
        }
    }

    return commonPrefix
    
}