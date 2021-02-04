import { Request, Response } from "express";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { LoginInput } from "../types/types";
import { getUserByEmail } from "../data/getUserByEmail"

export async function login(req: Request, res: Response) {
    try {
        const input: LoginInput = {
            email: req.body.email,
            password: req.body.password
        }

        if(!input.email || !input.password) {
            throw new Error("Pir favor preeencha os campos de email e senha");
        }

        const user = await getUserByEmail(input.email);

        if(!user) {
            throw new Error("Usuário não encontrado")
        }

        const isPasswordCorrect: boolean = compare(
            input.password,
            user.password
        )

        if(!isPasswordCorrect) {
            throw new Error ("Senha Incorreta! Tente novamente")
        }

        const token = generateToken({
            id: user.id
        })

        res.status(200).send({ token })


    } 
    catch(err) {
        res.status(400).send({ message: err.message })
    }
}