import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());


const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

type user = {
    id: string,
    name: string,
    nickname: string,
    email: string
};

const users: user[] = []

app.post("/users/new", async (req: Request, res: Response) => {
  let errorCode: number = 400;
    try {
        const reqBody: user = {
          id: Date.now() as unknown as string,
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email
        }

        if(!reqBody.name || !reqBody.nickname || !reqBody.email){
          errorCode = 422
          throw new Error("Algum dado está inválido, preencha novamente!")
        }

        users.push(reqBody);
        res.status(200).send("Usuário criado com sucesso")
    } 
    catch(error) {
      res.status(errorCode).send({message: error.message})
    }
})

app.get("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try{
    const id = req.params.id 

    if(!id){
      errorCode: 422
      throw new Error("insira uma id válida")
    }

    const myUser = users.filter(((u : user) => u.id === id))

    const result = myUser
    res.status(200).send(myUser)
  }
  catch(error){
    errorCode = 422;
            throw new Error("ID Inválida, tente novamente");
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


