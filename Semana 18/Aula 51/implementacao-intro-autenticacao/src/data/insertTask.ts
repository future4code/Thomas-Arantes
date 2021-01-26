import { connection } from "..";

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
) {
    await connection('Aula50_User')
        .insert({
            id,
            title,
            description,
            deadline,
            author_id: authorId
        })
}