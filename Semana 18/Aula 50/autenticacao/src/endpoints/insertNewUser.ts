import { Request, Response } from "express";
import { generateToken } from "../services/authenticator";
import {generate} from "../services/idGenerator"

export const insertNewUser = async(req: Request, res: Response) => {

    try{
        const userBody = {
            email: req.body.email,
            password: req.body.password
        };

        if(req.body.email || req.body.email.indexOf("@")=== -1) {
            throw new Error ("Email Inválido, tente novamente");
        }

        if(!req.body.password || req.body.password.length < 6) {
            throw new Error ("Senha inválida, é necessário pelo menos 6 caracteres")
        }

        const id = generate();
        
        await newUser(id, userBody.email, userBody.password);

        const token = generateToken({
            id,
        });

        res.status(200).send({
            token
        });
} 
    catch(error) {
        res.status(400).send({message: error.message})
}


}