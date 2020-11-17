import React from 'react'
import {Header} from './styles.js'
import {useHistory} from 'react-router-dom'

const CreateTrip = () => {
  
    const history = useHistory(); 
  
    const goToTripsList = () => {
        history.push("/trips/list")
  }
  
    return (
      <div className="App">
          <Header>
              <p>Logo</p>
              <button onClick = {goToTripsList}> Criar Viagens </button>
          </Header>
          <div>
            <p>Nome:</p>
            <input />
            <p>Data:</p>
            <input />
            <p>Destino:</p>
            <input />
            <p>Duração:</p>
            <input />
            <p>Descrição:</p>
            <input />
            <button> Criar Viagem </button>
        </div>
      </div>
    );
  }
  
  export default CreateTrip;