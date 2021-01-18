import { Request, Response } from "express";
import selectUserByType from "../data/selectUserByType";

export const getUserByType = async(req: Request, res: Response): Promise<void> =>{
    try {
       const userType = req.params.type as string 
       const users = await selectUserByType(userType)
        
       if(!userType){
          res.statusCode = 404
          throw new Error("Insira um tipo válido, são eles 'Teacher', 'Operations' e 'CX'.")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }