import { connection } from '../index'

export default async function selectUserByName(userName: string):Promise<any> {

    const name = userName

    const result = await connection.raw(`
       SELECT name
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%";
    `)
 
    return result[0]
 }