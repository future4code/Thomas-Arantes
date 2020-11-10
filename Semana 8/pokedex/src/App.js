import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import styled from "styled-components"

const PokedexContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin-top: 25px;
`

export default function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() =>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(respose => setPokeList(respose.data.results))
  }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }


    return (
      <PokedexContainer>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>  
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </PokedexContainer>
    );
}

