import { connection } from "..";

export default async function updateUser(
   id: string,
   name?: string,
   nickname?: string,
   email?: string
) {

   await connection("Aula50_User")
      .update({
         name, nickname, email
      })
      .where({ 
         id 
      })

}