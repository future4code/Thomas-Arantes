import { connection } from ".."

export const createUser = async(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
): Promise<void> => {
    try {
        await connection()
        .insert({
            id, email, name, password, role
        })
        .into('User_Arq')
    }
    catch(err){
        throw new Error (err.sqlMessage || err.message)
    }
}

export const getUserByEmail = async(email: string): Promise<any>{
try {

    const result = await connection()
    .select("*")
    .from(UserDatabase.User_Arq)
    .where({ email });

    if(!result[0]){
        throw new Error("Usuário não foi encontrado");  
    }
    return result[0]
} catch(err){
    throw new Error(err.sqlMessage || err.message);
}
}