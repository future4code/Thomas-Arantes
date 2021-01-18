import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";

export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const userName = req.query.name as string 
       const users = await selectUserByName(userName)
        
       if(!userName){
          res.statusCode = 404
          throw new Error("Insira um nome válido")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }