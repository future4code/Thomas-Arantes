import { generate } from "../services/idGenerator";
import insertRecipe from "../data/insertRecipe"
import { Request, Response } from "express";

export default async function createRecipe(req: Request, res: Response) {

    try {
        if(
            !req.body.name||
            !req.body.description
        ) {
            throw new Error("Preencha todos os campos")
        }

        const id: string = generate()

        await insertRecipe(
            id,
            req.body.name,
            req.body.description,
            Date.now()
        )


        res.status(200).send({
            message: "Receita adicionada com sucesso"
        })
    }
    catch(err) {
        res.status(400).send({
            message: err.message || err.sqlMessage
        })
    }
    
}