import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// 1.b

const searchActor = async (name: string) : Promise <any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
   return result
}

app.get("/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name as string
    const getActor = await searchActor(name);
    res.status(200).send({ actor : getActor })
  } 
  catch (error){
    console.log(error.sqlMessage || error.message)
    res.send(error.message)
  }
})

//1.c

const countActors = async (gender: string) : Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count 
}

app.get("/gender/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender as string
    const getCount = await countActors(gender);
    res.status(200).send({ actor : getCount })
  } 
  catch (error){
    console.log(error.sqlMessage || error.message)
    res.send(error.message)
  }
})

//2.a

const updateSalary = async (id: number, salary: number): Promise<any> => {
  try{
    await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id)
    console.log("salário alterado")
  }
  catch(error){
    throw new Error(error.sqlMessage || error.message)
  };
};

updateSalary(3, 8520000);









