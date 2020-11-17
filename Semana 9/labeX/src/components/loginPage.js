import React from 'react'
import {Header,} from './styles.js'
import {useHistory} from 'react-router-dom'

const LoginPage = () => {
    const history = useHistory(); 

    const goToListTrips = () => {
        history.push("/trips/list")
    };

    return (
      <div className="App">
          <Header>
              <p>Logo</p>
          </Header>
          <div>
            <p>Nome:</p>
            <input />
            <p>Senha:</p>
            <input />
            <button onClick = {goToListTrips}> Login </button>
        </div>
      </div>
    );
  }
  
  export default LoginPage;