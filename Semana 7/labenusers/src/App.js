import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    email: [],
    nameValue: "",
    emailValue: "",
  }

  componentDidMount = () => {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
        headers: {
          Authorization: "thomas-arantes-dumont"
        }
      }
    )
    .then((response) => {
      this.setState({ users: response.data });
      console.log(this.state.users)
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  createUser = () => {
    const body = {
      name:this.state.nameValue,
      email:this.state.emailValue
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: { 
        Authorization: "thomas-arantes-dumont"
      }  
    }
  )
  .then((response) => {
    this.setState({ nameValue: "", emailValue: "" });
    this.getAllUsers();
  })
  .catch((err) => {
    alert(err.message);
  })

  }

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value})
  }

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value})
  }
  
  render (){
    const rederendNames = this.state.users.map((user) => {
      return <p key={user.name}> {user.name} </p>
    })
    
    return (
      <div className="App">
        
        <div>
          <p>Nome: </p>
          <input
              value={this.state.nameValue}
              onChange={this.onChangeNameValue}
          />
          <p>Email: </p>
          <input
              value={this.state.emailValue}
              onChange={this.onChangeEmailValue}
          />
          <button onClick={this.createUser}> Enviar </button> 
         </div> 

         <div>
           {rederendNames}
         </div>

      </div>
    );
  }
}

export default App;
