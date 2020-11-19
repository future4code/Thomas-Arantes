import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {MatchesContainer, MatchesProfiles, MatchesPhotos} from './styles.js'
import DeleteIcon from '@material-ui/icons/Delete';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


function Matches() {
    const [matchesList, setMatchesList] = useState([])
    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thomas-souza/matches"

    useEffect(() =>{
      getMatches()
    }, [])

    const buttonTheme =createMuiTheme({
      palette: {
          type: "dark",
          primary: {
              main: "#6F2B8C"
          },
          secondary: {
              main: "#6F2B8C"
          }
      }
    });

    const getMatches = () =>{
      axios
        .get(baseUrl)
        .then(response => setMatchesList(response.data.matches))
        .catch(err => console.log(err))   
    }

    const cleanMatches = () => {
      axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thomas-souza/clear")
      .then ((response) => {
        console.log(response)
        getMatches()
        alert("Matches limpos com sucesso!")

      })
      .catch((err) => {
        console.log(err)
      })
    }

  return (
    <MatchesContainer key = {matchesList.id}>
      
      {matchesList.map(match => {
        return (
          <MatchesProfiles>
            <MatchesPhotos src={match.photo} />
            <p>{match.name}</p>
          </MatchesProfiles>)
          })}

      <MuiThemeProvider theme = {buttonTheme}>
        <DeleteIcon fontSize = "large" color = "primary" onClick={cleanMatches} />
      </MuiThemeProvider>

    </MatchesContainer>
  );
}

export default Matches;
