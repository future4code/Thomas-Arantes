import React from 'react';
import axios from 'axios';

const axiosConfig = {
    headers: {
        Authorization: "thomas-arantes-dumont"
    }
};

const apiUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

class AddSongs extends React.Component{
    
    state = {
        songName: "",
        artist: "",
        url: "",
    }

    addSongs = (playlistId) => {
        const body = {
            "name": this.state.songName,
            "artist": this.state.artist,
            "url": this.state.url
        }

        axios
        .post(`${apiUrl}/${playlistId}/tracks`, axiosConfig)
        .then((response) => {
            this.setState({songName: "", artist: "", url: ""})
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

        onChangeName = (event) => {
            this.setState = ({songName : event.target.value})
        }

        onChangeArtist = (event) => {
            this.setState = ({artist : event.target.value})
        }

        onChangeUrl = (event) => {
            this.setState = ({url : event.target.value})
        }

        render (){
            return(
                <div>
                    <h4>Adicionar Musica á uma Playlist: </h4>
                    <input placeholder="Nome" value={this.state.songName} onchange={this.onChangeName} />
                    <input placeholder="Artista" value={this.state.artist} onchange={this.onChangeArtist} />
                    <input placeholder="URL" value={this.state.url} onchange={this.onChangeUrl} />
                </div>
            )
        }
}

export default AddSongs 
