export interface Character {
    name: string,
    strength: number,
    defense: number,
    life: number
}

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.strength === undefined ||
        input.defense === undefined ||
        input.life === undefined
    ) {
        return false;
    }

    if (input.strength <= 0 || input.defense <= 0 || input.life <= 0) {
        return false
    }

    return true;
}