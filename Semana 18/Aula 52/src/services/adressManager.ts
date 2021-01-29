import axios from "axios";
import { address } from "../types/address";

const baseURL = "https://viacep.com.br/ws";

export async function getAddressByCep(cep: string): Promise<address> {
    console.log(cep)
    try {
        const result = await axios.get(`${baseURL}/${cep}/json`);
        const myAddress: address = {
            name: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }
        
        console.log(result)
        return myAddress
    }
    catch(err) {
        throw new Error(err.message)
    }
}