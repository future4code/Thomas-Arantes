import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generate } from "../service/idGenerator";
import { generateToken } from "../service/authenticator";
import { hash } from "../service/hashManager";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) {
          throw new Error('Preencha os campos "name","nickname" e "email"')
        }

        const userData = {
            name: req.body.name,
            nickname: req.body.nickname,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        }

        const hashPassword: string = await hash(req.body.password);

        const id: string = generate();

        await insertUser(
            id,
            userData.name,
            hashPassword,
            userData.email,
            userData.role
        );

        const token = generateToken({id, role: userData.role});

        res
            .status(200)
            .send({token});

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}