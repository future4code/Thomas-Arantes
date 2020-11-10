import React from 'react'   
import axios from 'axios'  
import styled from "styled-components";


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";  
const axiosConfig = {
    headers: {
      Authorization: "thomas-arantes-dumont"
    }
  };

class UserListPage extends React.Component {
    state = {
        users: []
    };

    

    componentDidMount = () => {
        this.getAllUsers();
    }

    getAllUsers = () => {
        axios
        .get(baseUrl, axiosConfig)
        .then((response) => {
          this.setState({ users: response.data });
        })
        .catch((err) => {
          console.log(err.message);
        });
      };

    deleteUsers = (userId) => {
        axios
        .delete(`${baseUrl}/${userId}`, axiosConfig)
        .then((response) => {
            alert("Você deletou esse usuário")
            this.getAllUsers();
        }) 
        .catch((error) => {
            alert(error.message)
        });   
    };

    render () {
        const rederendNames = this.state.users.map((user) => {
            return (
            <p key={user.id}> {user.name} <button onClick={() => this.deleteUsers(user.id)}> Remover Usuário </button> </p>)
        })
        
        return (
            <div>
                {rederendNames}
            </div>
        )
    }
}

export default UserListPage