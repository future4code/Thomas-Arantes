import React from 'react'; 
import axios from 'axios';
import styled from 'styled-components';

const CreateButton = styled.button`
    margin-left: 5px;
    background-color: #45525B;
    color: white;
    border: 0;
    border-radius: 20px;
    width: 150px;
    margin-top: 10px;
`

const InputContainer = styled.div`
    background-color: #F27405;
    width: 700px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 20px;
`


const axiosConfig = {
    headers: {
        Authorization: "thomas-arantes-dumont"
    }
}

class AddPlaylistInput extends React.Component{
    state = {
        playlistName: ""
    }

    createPlaylist = () => {
        const body = {
            "name": this.state.playlistName
        }

        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, axiosConfig)
        .then((response) => {
            this.setState({playlistName: ""})
        })
        .catch((error) => {
            console.log(error.meessage)
        })
    }


    onChangePlaylist = (event) => {
        this.setState({playlistName : event.target.value})
    }

    render () {
        return(
            <InputContainer>
                <h3>Crie uma Nova Playlist: </h3>
                <input placeholder="Nome" value={this.state.playlistName} onChange={this.onChangePlaylist}/>
                <CreateButton onClick={this.createPlaylist}> Criar Playlist </CreateButton>
                
            </InputContainer>
        )
    }
}

export default AddPlaylistInput