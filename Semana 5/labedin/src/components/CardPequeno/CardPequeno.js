import React from 'react';
import './CardPequeno.css'

function CardGrande(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.icone } />
            <div>
                <h4>{ props.email }</h4> 
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;