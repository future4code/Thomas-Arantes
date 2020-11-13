import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Buttons = styled.button`
    margin-left: 5px;
    background-color: #45525B;
    color: white;
    border: 0;
    border-radius: 20px;
    height: 25px;
`
const InputContainer = styled.div`
    background-color: #F2A950;
    width: 660px;
    padding: 20px;
    margin-top: 10px;
`

const SongsContainer = styled.div`
    background-color: #A8BBC6;
    width: 700px;
    padding-top: 20px;
    padding-bottom: 20px;
`


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
                    <Buttons onClick={() => this.getPlaylistDetail(playlist.id)}> Abrir Playlist </Buttons>
                    <Buttons onClick={() => this.addSongs(playlist.id)}> Adicionar Musica </Buttons>
                    <Buttons onClick={() => this.deletePlaylist(playlist.id)}> Deletar Playlist </Buttons>                   
                </p>
            )
        });

        const renderSongs = this.state.tracksList.map((track) => {
            return(
                <SongsContainer key={track.id}>
                    {track.name} - {track.artist}
                    <div>
                    <audio controls>
                        <source src={track.url} type="audio/mp3" />
                    </audio>
                    </div>
                </SongsContainer>
            )
        })

        return(
            <div>
                <InputContainer>
                    <h4>Playlists: </h4>        
                    {renderPlaylists}
                    <h4>Adicionar Musica á uma Playlist: </h4>
                    <input placeholder="Nome" value={this.state.songName} onChange={this.onChangeName} />
                    <input placeholder="Artista" value={this.state.artist} onChange={this.onChangeArtist} />
                    <input placeholder="URL" value={this.state.url} onChange={this.onChangeUrl} />
                    <p>Insira os dados da música que quer adicionar e entõa clique no botão "adicionar musica" em frente a playlist desejada</p>
                    </InputContainer>
                <div>
                    {renderSongs}
                </div>
            </div>
        )
    }
}

export default AllPlaylists