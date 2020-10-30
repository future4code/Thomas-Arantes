import React from 'react'; 
import axios from 'axios';


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
            <div>
                <h3>Crie uma Nova Playlist: </h3>
                <input placeholder="Name" value={this.state.playlistName} onChange={this.onChangePlaylist}/>
                <button onClick={this.createPlaylist}> Criar Playlist </button>
                
            </div>
        )
    }
}

export default AddPlaylistInput