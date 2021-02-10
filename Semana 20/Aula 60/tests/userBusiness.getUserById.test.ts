import { UserBusiness } from "../src/business/UserBusiness";

describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {}; 

    test("should return User not found when user doesn't exist ", async () => {
        expect.assertions(2);
        try {
            const getUserById = jest.fn();
            userDatabase = { getUserById };

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            ); 

            await userBusiness.getUserById("invalid-id")
        }
        catch(error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toEqual("User Not Found")
        }
    })
})