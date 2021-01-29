import {address} from "../types/address";
import {getAddressByCep} from "../services/adressManager";
import { Request, Response } from "express";

export async function getAddressInfo (req: Request, res: Response) {
    let errorCode: number = 400; 
    console.log(req.params.cep)
    try {
        const cep = req.params.cep;
        if(isNaN(Number(req.params.cep)) || req.params.cep.includes("-")) {
            throw new Error("Insira somente números")
        }

        const address: address = await getAddressByCep(cep);

        res.status(200).send(address)
        console.log(cep)
    } 
    catch(err) {
        res.status(errorCode).send({message: err.message})
    }
}