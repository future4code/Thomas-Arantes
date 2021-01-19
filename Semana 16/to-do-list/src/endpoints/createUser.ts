import { Request, Response} from 'express';
import  insertUser  from '../data/insertUser'

export default async function createUser(req: Request, res: Response) {
    let errorCode: number = 400;
      try { 
          if(
              !req.body.name ||
              !req.body.nickname ||
              !req.body.email
            ) {
            errorCode = 422
            throw new Error("Algum dado está inválido, preencha novamente!")
          }

          const id: string = Date.now() + Math.random().toString()

          await insertUser(
              id, req.body.name, req.body.nickname, req.body.email
            )
  
          res.status(200).send("Usuário criado com sucesso")
      } 
      catch(error) {
        res.status(errorCode).send({message: error.message})
      }
  }