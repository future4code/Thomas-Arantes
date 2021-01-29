import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    description: string,
    date: number,
) { 
    await connection.insert({
        id,
        name,
        description,
        date
    }).into("cookenu_recipes")
   
}