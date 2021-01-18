import { connection } from '../index'

export default async function selectUserByName(userType: string):Promise<any> {

    const type = userType

    const result = await connection.raw(`
       SELECT name
       FROM aula48_exercicio
       WHERE type = "${type}";
    `)
 
    return result[0]
 }