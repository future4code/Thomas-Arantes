import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());

type client = {
    id: number,
    name: string,
    cpf: number,
    birthday: number,
    balance: number,
    extract: []
}

type extract = [
    value: number,
    date: string,
    description: string
]

let clients: client[] = [
    {
        id: 1,
        name: "Thomas",
        cpf: 12312312300,
        birthday: 1997,
        balance: 10000000000000.00,
        extract: []
    }
]

app.post("/client/create", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const reqBody: client = {
            id: Date.now(),
            name: req.body.name,
            cpf: req.body.cpf,
            birthday: req.body.birthday,
            balance: 0,
            extract: []
        }

        if(!reqBody.name || !reqBody.cpf || !reqBody.birthday) {
            errorCode = 422; 
            throw new Error("Algum dado está inválido, preencha novamente!")
        }

        if(reqBody.birthday > 2003) {
            errorCode = 401
            throw new Error("Você tem menos de 18 cai fora")
        }

        clients.push(reqBody);
        res.status(200).send({message: "Conta criada com sucesso!"})
    }
    catch(error){
        res.status(errorCode).send({message: error.message})
    }

})

app.get("/client/all", (req: Request, res: Response) => {
    const result = clients.map(user => ({
        id: user.id,
        name: user.name,
        cpf: user.cpf,
        birthday: user.birthday,
        balance: user.balance,
        extract: user.extract
    }));

    res.status(200).send(result);
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});