import { connection } from '../index'

export default async function selectAllUsers(offset: number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
       LIMIT 5
       OFFSET ${offset}
    `)
 
    return result[0]
 }