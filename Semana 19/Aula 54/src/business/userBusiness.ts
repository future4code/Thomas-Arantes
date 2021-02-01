import { generateToken } from "./services/authenticator";
import { hash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";
import { createUser } from "../data/userDatabase"

export const businessSignup = async (
    name: string,
    email: string,
    password: string,
    role: string
) => {
    try {
        if(!name || !email || !password || !role){
            throw new Error("Preencha todos os campos");
        }

        if(email.indexOf("@") === -1){
            throw new Error("Email Inválido")
        }

        if(password.length < 6){
            throw new Error("A senha deve possuir pelo menos 6 caracteres")
        }

        const id = generateId()
        const hashPassword = await hash(password)
        await createUser(id, name, email, hashPassword, role)
        const token = generateToken({id, role})

        return token;
    }
    catch(err) {
        throw new Error( err.message);
    }

}

export const getUserByEmail = async(
    email: string,
    password: string
) => {
     const userDatabase = userDatabase(); 
     const userFromDatabase = await userDatabase.getUserByEmail(email);

     const hashCompare = await hashCompare.comapre(password, userFromDatabase.getPassword())
     const accessToken = generateToken({id: userFromDatabase.getID()})

     if(!hashCompare) {
         throw new Error('senha inválida')
     }

     return accessToken
}