import { render } from "@testing-library/react"
import React from "react"
 
class Etapa1 extends React.Component {
 
    render() {
        
        return(
            <div>
                <h1> Etapa 1 - Dados Gerais </h1>
                <p> 1. Qual o seu nome? </p>
                <input />
                <p> 2. Qual sua idade? </p>
                <input />
                <p> 3. Qual seu email? </p>
                <input />
                <p> 4. Qual a sua escolaridade? </p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
        );
    }
}
export default Etapa1