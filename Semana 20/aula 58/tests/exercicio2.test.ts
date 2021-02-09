import { performPucrhase, User } from "../src/exercicio1"

describe("value is greater than balance", () => {
    test("Testing if balance is greater then the value", () => {
        const user: User = {
            name: "Thomas",
            balance: 200
        }
    
        const result = performPucrhase(user, 100)
    
        expect(result).toEqual({
            ...user,
            balance: 100
        })
    })

    test("Testing if the balance is greater than the value", () => {
        const user: User = {
            name: "Thomas",
            balance: 40
        }

        const result = performPucrhase(user, 400)

        expect(result).toEqual(undefined)
    })

    test("Testing if the balance is greater than the value", () => {
        const user: User = {
            name: "Thomas",
            balance: 2000
        }

        const result = performPucrhase(user, 2000)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
})
