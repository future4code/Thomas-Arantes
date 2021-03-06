//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { textSpanContainsPosition } from 'typescript';
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]


// Resposta 1

app.get("/users/all", (req: Request, res: Response) => {
    const result = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.type,
        age: user.age
    }));

    res.status(200).send(result);
})

//Resposta 1.a - É utilizado o método .get
//1.b - indiquei a entidade usando o "/users/all"

// Resposta 2 

app.get("/user/:type", (req: Request, res: Response) => {
    let errorCode: number = 400;

    enum userTypes {
        NORMAL = "NORMAL",
        ADMIN = "ADMIN"
    };

    try {

        const type: string = req.params.type as string;

        if(!type){
            errorCode = 422;
            throw new Error("Tipo Inválido, insira valores NORMAL OU ADMIN");
        }

        const myUser = users.filter(((u: user) => u.type.toUpperCase() === type.toUpperCase()));

        if(!myUser) {
            errorCode = 404;
            throw new Error("Tipo não encontrado, , insira valores NORMAL OU ADMIN");
        }

        const result = myUser;
        res.status(200).send(result);
    }
    catch(error) {
        res.status(errorCode).send(error.message)
    }
})

//2.a - Usei PathParams da URL com o req.params.type
//2.b - É possível utilizando o ENUM

// Resposta 3 

app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try{
        const nome: string = req.query.nome as string
        
        if(!nome) {
            errorCode = 422;
            throw new Error("Nome inválido");
        }

        const myUser = users.find(((u: user) => u.name.toLowerCase() === nome.toLowerCase()));

        if(!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        const result = myUser;
        res.status(200).send(result)
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//3.a É utilizado o QueryParams


// Resposta 4 

app.post("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {

        const reqBody: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        if(!reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age) {
            errorCode = 422;
            throw new Error("Algum campo está inválido, confira e preencha novamente.")
        }

        users.push(reqBody);
        res.status(200).send({message: "Usuário inserido com sucesso "})
    }
    catch(error) {
        res.status(errorCode).send({message: error.message});
    }
})

//4.a Nada de diferente aconteceu em relação ao .post
//4.b O .post tem mais vantagens, sendo quase um coeinga em relação ao put e o patch

// Resposta 5

app.put("/user/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const reqBody: {id: number, name: string} = {
            id: Number(req.params.id),
            name: req.body.name
        }

        if(!reqBody.name){
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }

        if(isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("id inválido");
        }

        const myUserIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)))

        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado, tente outros parametros.");
        }

        users[myUserIndex].name = reqBody.name;

        res.status(200).send({message: "Dados do usuário atualizados com sucesso"})

    }
    catch(error) {
        res.status(errorCode).send({message: error.message});
    }
})

// Resposta 6

app.patch("/user/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const reqBody: {id: number, name: string} = {
            id: Number(req.params.id),
            name: req.body.name
        }

        if(!reqBody.name){
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }

        if(isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("id inválido");
        }

        const myUserIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)))

        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado, tente outros parametros.");
        }

        users[myUserIndex].name = reqBody.name;

        res.status(200).send({message: "Dados do usuário atualizados com sucesso"})

    }
    catch(error) {
        res.status(errorCode).send({message: error.message});
    }
})

// Resposta 7

app.delete("/user/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const reqBody: {id: number, name: string} = {
            id: Number(req.params.id),
            name: req.body.name
        }

        if(!reqBody.name){
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }

        if(isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("id inválido");
        }

        const myUserIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)))

        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado, tente outros parametros.");
        }

        users[myUserIndex].name = reqBody.name;

        res.status(200).send({message: "Dados do usuário atualizados com sucesso"})

    }
    catch(error) {
        res.status(errorCode).send({message: error.message});
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
