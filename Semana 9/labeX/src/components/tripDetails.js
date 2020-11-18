import React, { useEffect, useState } from 'react'
import {Header} from './styles.js'
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from '../hooks/useProtectedPage.js';
import axios from  'axios'

function TripDetails() {
  const [detail, setDetail] = useState({})
  const history = useHistory();
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  })
  
  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/thomas-dumont/trip/$id`
      )
  }

  const goBack = () => {
    history.goBack();
  }

    return (
      <div className="App">
          <Header>
              <p>Logo</p>
          </Header>
          <div>
            <p>"id": "NoIFVcOiSgTKTIPVZwXS", </p>
            <p>"planet": "Mercúrio", </p>
            <p>"durationInDays": 7, </p>
            <p>"date": "31/12/2019", </p>
            <p>"name": "Ano novo em Mercúrio", </p>
            <p>"description": "Venha passar a virada pertinho do Sol!",</p>
            <button onClick = {goBack} > Voltar </button>
          </div>

      </div>
    );
  }
  
  export default TripDetails;