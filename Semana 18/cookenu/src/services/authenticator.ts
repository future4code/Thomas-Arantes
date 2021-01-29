import * as jwt from "jsonwebtoken"

export type AuthenticationData = {
    id: string
}

export function generateToken(payload: AuthenticationData): string{
    const token: string = jwt.sign(
        payload, 
        process.env.JWT_KEY as string,
        {expiresIn: "24h"}
    );

    return token
}