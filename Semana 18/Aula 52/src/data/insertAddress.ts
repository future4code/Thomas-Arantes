import { connection } from "../index";
import insertTask from "./insertTask";

export default async function insertTask(
    id: string,
    name: string,
    neighbourhood: string,
    city: string,
    state: string
){
await connection.insert({
    name, 
    neighbourhood,
    city, 
    state
}).into("Aula51_Address")}