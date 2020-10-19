import React from "react"
    
class Etapa3 extends React.Component {
    
    render() {
        
        return(
            <div>
                <h1> Etapa 3- Informações Gerais de Ensino </h1>
                <p> 5. Porque você não terminou um curso de graduação? </p>
                <input />
                <p> 6. Você fez algum curso complementar? </p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Tecnico</option>
                    <option>Curso de Inglês</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
        );
    }
}

export default Etapa3