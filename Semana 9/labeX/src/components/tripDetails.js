import React from 'react'
import {Header} from './styles.js'

function TripDetails() {
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
          </div>

      </div>
    );
  }
  
  export default TripDetails;