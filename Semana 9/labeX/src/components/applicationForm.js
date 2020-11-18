import React from 'react'
import {Header,} from './styles.js'
import {useHistory} from 'react-router-dom'
import { useInput } from '../hooks/useInput.js'

const ApplicationForm = () => {
    const [name, handleName] = useInput();
    const [age, handleAge] = useInput();
    const [applicationText, handleApplicationText] = useInput();
    const [job, handleJob] = useInput();
    const [country, handleCountry] = useInput();
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
            <input value = {name} onChange = {handleName}/>
            <p>Idade:</p>
            <input value = {age} onChange = {handleAge}/>
            <p>Texto de aplicação:</p>
            <input value = {applicationText} onChange = {handleApplicationText}/>
            <p>Profissão:</p>
            <input value = {job} onChange = {handleJob} />
            <p>País:</p>
            <input value = {country} onChange = {handleCountry} />
            <button> Enviar </button>
        </div>
      </div>
    );
  }
  
  export default ApplicationForm;