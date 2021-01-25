import {connection} from '../index'

const userTable = "User";

const createUser = async (
    id: string,
    email: string,
    password: string) => {
        await connection({
            id,
            email,
            password
        })
        .into(userTable)
    }