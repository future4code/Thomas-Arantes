import express, { Express, Request, Response } from "express";
import selectAllUsers from '../data/selectAllUsers'
import selectUserByName from "../data/selectUserByName";

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const page = "1"
       const pageNumber: number = Number(page)
       const resultsPerPage: number = 5
       const offset: number = resultsPerPage * (pageNumber -1)
       const users = await selectAllUsers(offset)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

       if(!pageNumber){
          res.statusCode = 422
          throw new Error("'page' deve ser um número positivo")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }