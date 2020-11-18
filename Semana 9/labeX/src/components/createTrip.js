import React from 'react'
import {Header} from './styles.js'
import {useHistory} from 'react-router-dom'
import { useInput } from '../hooks/useInput.js'
import { useProtectedPage } from '../hooks/useProtectedPage.js'

const CreateTrip = () => {
    useProtectedPage();
    const [name, setName] = useInput();
    const [date, setDate] = useInput();
    const [destiny, setDestiny] = useInput();
    const [duration, setDuration] = useInput();
    const [description, setDescription] = useInput();
  
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
            <input value = {name} onChange = {setName} />
            <p>Data:</p>
            <input value = {date} onChange = {setDate} />
            <p>Destino:</p>
            <input value = {destiny} onChange = {setDestiny} />
            <p>Duração:</p>
            <input value = {duration} onChange = {setDuration} />
            <p>Descrição:</p>
            <input  value = {description} onChange = {setDescription} />
            <button> Criar Viagem </button>
        </div>
      </div>
    );
  }
  
  export default CreateTrip;