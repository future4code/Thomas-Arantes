import React from 'react';
import axios from 'axios';

const axiosConfig = {
    headers: {
        Authorization: "thomas-arantes-dumont"
    }
};

const apiUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

class AllPlaylists extends React.Component{
    state = {
        playlistsArray: [],
        tracksList: [],
        songName: "",
        artist: "",
        url: "",
    };

    componentDidMount = () => {
        this.getAllPlaylists();
    }

    getAllPlaylists = () => {
        axios
        .get(apiUrl, axiosConfig)
        .then((response) => {
            this.setState({playlistsArray : response.data.result.list})
        })
        .catch((error) => {
            console.log(error.message)
        });
    };

    getPlaylistDetail = (playlistId) => {
        axios
        .get(`${apiUrl}/${playlistId}/tracks`, axiosConfig)
        .then((response) => {
            this.setState({tracksList: response.data.result.tracks})
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.message);
        })

    }

    addSongs = (playlistId) => {
        const body = {
            "name": this.state.songName,
            "artist": this.state.artist,
            "url": this.state.url
        }

        axios
        .post(`${apiUrl}/${playlistId}/tracks`, body, axiosConfig)
        .then((response) => {
            this.setState({songName: "", artist: "", url: ""})
        })
        .catch((error) => {
            console.log(error.message)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    deletePlaylist = (playlistId) => {
        axios
        .delete(`${apiUrl}/${playlistId}`, axiosConfig)
        .then((response) => {
            this.getAllPlaylists();
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    onChangeName = (event) => {
        this.setState({songName : event.target.value})
    }

    onChangeArtist = (event) => {
        this.setState({artist : event.target.value})
    }

    onChangeUrl = (event) => {
        this.setState({url : event.target.value})
    }

    render(){
        const renderPlaylists = this.state.playlistsArray.map((playlist) => {
            return(
                <p key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => this.getPlaylistDetail(playlist.id)}> Abrir Playlist </button>
                    <button onClick={() => this.addSongs(playlist.id)}> Adicionar Musica </button>
                    <button onClick={() => this.deletePlaylist(playlist.id)}> Deletar Playlist </button>                   
                </p>
            )
        });

        const renderSongs = this.state.tracksList.map((track) => {
            return(
                <div key={track.id}>
                    {track.name} - {track.artist}
                    <div>
                    <audio controls>
                        <source src={track.url} type="audio/mp3" />
                    </audio>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <h4>Playlists: </h4>        
                {renderPlaylists}
                <div>
                    <h4>Adicionar Musica á uma Playlist: </h4>
                    <input placeholder="Nome" value={this.state.songName} onChange={this.onChangeName} />
                    <input placeholder="Artista" value={this.state.artist} onChange={this.onChangeArtist} />
                    <input placeholder="URL" value={this.state.url} onChange={this.onChangeUrl} />
                </div>
                {renderSongs}
            </div>
        )
    }
}

export default AllPlaylists