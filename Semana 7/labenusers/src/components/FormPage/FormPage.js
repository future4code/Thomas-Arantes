import React from 'react'  ;    
import axios from 'axios'; 
import styled from "styled-components";

const FormPageContainer = styled.div`
    display: flex; 
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

const InputContainer = styled.div`
    display: flex;
    width: 650px;
    height: 100px;
    justify-content: center;
    align-items: center;
    border: solid 1px;
`
const ButtonStyle = styled.button`
    margin-left: 10px;
`

const InputStyle = styled.input`
    margin-right: 15px;
    margin-left: 5px;
`

class FormPage extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    }

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
        //this.getAllUsers();
        alert("Usuário Criado com Sucesso")
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

    render () {
        return (
            <FormPageContainer>
                <InputContainer>
                    <p>Nome: </p>
                    <InputStyle
                        value={this.state.nameValue}
                        onChange={this.onChangeNameValue}
                    />
                    <p>Email: </p> 
                    <InputStyle
                        value={this.state.emailValue}
                        onChange={this.onChangeEmailValue}
                    />
                    <ButtonStyle onClick={this.createUser}> Criar Usuário </ButtonStyle> 
                </InputContainer>
                 
            </FormPageContainer>
        )
    }
}

export default FormPage