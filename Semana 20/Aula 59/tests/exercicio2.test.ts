import { validateCharacter } from "../src/exercicio1"

describe("test validateCharacter", () => {

    test("Should return false for an empty name", () => {
        const result = validateCharacter({
            name: "",
            strength: 250,
            defense: 400,
            life: 1500
        })
        expect(result).toBe(false);
    })

    test("Should return false for 0 life", () => {
        const result = validateCharacter({
            name: "Zangief",
            strength: 250,
            defense: 400,
            life: 0
        })
        expect(result).toBe(false);
    })

    test("Should return false for 0 strength", () => {
        const result = validateCharacter({
            name: "Riu",
            strength: 0,
            defense: 400,
            life: 1500
        })
        expect(result).toBe(false);
    })

    test("Should return false for 0 defense", () => {
        const result = validateCharacter({
            name: "Blanka",
            strength: 250,
            defense: 0,
            life: 1500
        })
        expect(result).toBe(false);
    })

    test("Should return false for negative health", () => {
        const result = validateCharacter({
            name: "Chun Li",
            strength: 250,
            defense: 400,
            life: -100
        })
        expect(result).toBe(false);
    })

    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
            name: "Cammy",
            strength: 250,
            defense: 400,
            life: 1500
        })
        expect(result).toBe(false);
    })
})