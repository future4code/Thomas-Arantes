import { Request, Response } from "express";
import { generate } from "../services/idGenerator";
import { hash } from "../services/hashManager";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator"

export default async function createUser(req: Request, res: Response) {
    try {
        if(
            !req.body.name ||
            !req.body.email || 
            !req.body.password
        ) {
            throw new Error("Preencha os campos, nome, email e senha")
        }

        if (req.body.password.length < 6){
            throw new Error("A senha precisa ter pelo menos 6 caracters")
        }

        const id: string = generate();

        const cypherPassword: string = hash(req.body.password)

        await insertUser(
            id,
            req.body.name,
            req.body.email,
            cypherPassword
        )

        const token = generateToken({
            id
        })

        res.status(200).send(token)
    }
    catch(err) {
        res.status(400).send({
            message: err.message || err.sqlMessage
        })
    }
}