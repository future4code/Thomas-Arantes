import { connection } from "../index";

export async function getUserByEmail(email: string) {
    const result = await 
    connection
    .select("*")
    .from("cookenu_user")
    .where({email})

    return result[0]
}