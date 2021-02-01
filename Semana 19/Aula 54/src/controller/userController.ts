import { Request, Response } from "express";
import { businessSignup } from "../business/userBusiness"

export const signup = async(req: Request, res: Response) {

    const userBusiness = businessSignup();

    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        const token = await userBusiness.createUser(input);

        res.status(200).send({token});
    } 
    catch(err) {
        res.status(400).send ({err: err.message});
    }
}

export const login = async (req: Request, res: Response) {

    try {
        const LoginData = {
            email: req.body.email,
            password: req.body.password
        };
        const userBusiness = businessLogin();
        const token = await userBusiness.getUserByEmail(loginData);

        res.status(200).send({ token })
    }
    catch(err) {
        res.status(400).send ({ err: err.message })
    }

}