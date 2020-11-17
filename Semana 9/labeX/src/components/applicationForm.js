import React from 'react'
import {Header,} from './styles.js'
import {useHistory} from 'react-router-dom'

const ApplicationForm = () => {
    const history = useHistory(); 

    const goToLoginPage = () => {
        history.push("/login")
    };

    return (
        <div className="App">
          <Header>
              <p>Logo</p>
              <button onClick = {goToLoginPage}>Login</button>
          </Header>
        <div>
            <p>Nome:</p>
            <input />
            <p>Idade:</p>
            <input />
            <p>Texto de aplicação:</p>
            <input />
            <p>Profissão:</p>
            <input />
            <p>País:</p>
            <input />
            <button> Enviar </button>
        </div>
      </div>
    );
  }
  
  export default ApplicationForm;