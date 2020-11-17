import React from 'react'
import {Header} from './styles.js'
import {useHistory} from 'react-router-dom'

const ListTrips = () => {
  const history = useHistory(); 

  const goToCreateTrip = () => {
      history.push("/trips/create")
  }

  const goToTripDetails = () => {
    history.push("/trips/details")
  }

    return (
      <div className="App">
          <Header>
              <p>Logo</p>
              <button onClick = {goToCreateTrip}> Criar Viagens </button>
          </Header>
          <div>
          <p>"name": "Multi luau em Jupiter",</p>
          <p>"description": "Noite mágica, com vista para as 69 luas de Jupiter",</p>
          <p>"planet": "Jupiter",</p>
          <p>"durationInDays": 540,</p>
          <p>"date": "21/12/20"</p>
          <button onClick = {goToTripDetails}> Detalhes da Viagem </button>
          </div>

      </div>
    );
  }

  
  export default ListTrips;