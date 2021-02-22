import { Character, validateCharacter } from "./exercicio1";

export const performAttack = (attacker: Character, defender: Character) => {

    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("this character doesnt exist");
    }

    if(attacker.strength > defender.strength) {
        defender.life -= attacker.strength - defender.defense
    }

}

export const performAttackInvert = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if(!validator(attacker) || !validator(defender)) {
        throw new Error("this character doesnt exist");
    }

    if(attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}