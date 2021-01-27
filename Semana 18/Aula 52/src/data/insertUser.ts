import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES,
    address_number: string,
    address_complement: string,
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password,
        role,
        address_number,
        address_complement
    }).into('to_do_list_users')
}

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}