import React, { useEffect, useState } from 'react'
import {Header} from './styles.js'
import {useHistory} from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage.js'
import axios from 'axios'

const ListTrips = () => {
  const [trips, setTrip] = useState([])
  useProtectedPage();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thomas-dumont/trips",
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
        )
        .then((response) => {
          setTrip(response.data.trips)
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const history = useHistory(); 
  
  const goToCreateTrip = () => {
      history.push("/trips/create")
  }

  const goToTripDetails = () => {
    history.push("/trips/details")
  }

  const renderTrips = trips.map((trip) => {
    return(
      <div key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Destino: {trip.planet}</p>
        <p>Duração: {trip.durationInDays} dias</p>
        <p>Data: {trip.date} </p>
        <button onClick = {goToTripDetails}> Detalhes da Viagem </button>
      </div>
    )
  })

    return (
      <div className="App">
          <Header>
              <p>Logo</p>
              <button onClick = {goToCreateTrip}> Criar Viagens </button>
          </Header>
          <div>
            {renderTrips}
          </div>

      </div>
    );
  }

  
  export default ListTrips;