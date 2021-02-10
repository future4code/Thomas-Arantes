import { Request, Response } from "express";
import {UserBusiness} from "../business/UserBusiness";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/tokenGenerator";
import { stringToUserRole, UserRole } from "../model/User";

const userBusiness =
 new UserBusiness(new IdGenerator(),
                  new HashGenerator(),
                  new UserDatabase(),
                  new TokenGenerator());

export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getUserById(id: string) {
      const user = await this.userDatabase.getUserById(id);

      if(!user) {
         throw new Error("User not found");
      }

      return {
         id: user.getId(),
         name: user.getName(),
         email: user.getEmail(),
         role: user.getRole()
      };
   }

   public async getAllUsers(role: UserRole) {
      if(stringToUserRole(role) !== UserRole.ADMIN) {
         throw new Error("You must be an admin to acess this endpoint")
      }

      const users = await this.userDatabase.getAllUsers();

      return users.map((user) => ({
         id: user.getId(),
         name: user.getName(),
         email: user.getName(),
         role: user.getRole()
      }));
   }
}

export default new UserController()