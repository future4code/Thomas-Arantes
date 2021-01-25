import {connection }from "../index"

const getUserByEmail = async(email: string) : Promise<any> => {
    const result = await connection 
    .select("*")
    .from("Aula50_User")
    .where({email});

    return result[0]
}