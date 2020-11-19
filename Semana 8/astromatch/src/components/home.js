import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ImgContainer, HomeContainer, NameContainer, ButtonContainer, BioContainer} from './styles.js'
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ClearIcon from '@material-ui/icons/Clear';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

    function Home() {
        const [profileToChose, setProfileToChose] = useState({})
        const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thomas-souza/"

    useEffect(() =>{
        getProfile()
    }, [])

    const buttonsTheme =createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#16DF4F"
            },
            secondary: {
                main: "#DB3433"
            }
        }
    });

    const getProfile = () =>{
        axios
            .get(`${baseUrl}person`)
            .then(response => setProfileToChose(response.data.profile))
            .catch(err => console.log(err))
    } 

    const getAMatch = () => {
        const body = {
            id: profileToChose.id,
            choice: true
        }
        console.log(body)
        axios
            .post(`${baseUrl}choose-person`, body)
            .then(response => {
                console.log(response)
                getProfile()
            })
            .catch(err => console.log(err))
    }

    const notALike = () => {
        const body = {
            id: profileToChose.id,
            choice: false
        }
        axios
        .post(`${baseUrl}choose-person`, body)
        .then(response => {
            console.log(response)
            getProfile()
        })
    }



    return (
        <HomeContainer>
            <div key ={profileToChose.id}>
                
                <ImgContainer src ={profileToChose.photo} />

                <NameContainer >
                    <h3>{profileToChose.name},</h3>
                    <h3>{profileToChose.age}</h3>
                </NameContainer>

                <BioContainer>
                    <p>{profileToChose.bio}</p>
                </BioContainer>
                
            </div>
            <MuiThemeProvider theme ={buttonsTheme}>
                <ButtonContainer>
                    <ClearIcon fontSize="large" color = "secondary" onClick = {notALike} /> 
                    <FavoriteIcon fontSize="large" color = "primary" onClick = {getAMatch} />
                </ButtonContainer>
            </MuiThemeProvider>
        </HomeContainer>
    );
    }

export default Home;
