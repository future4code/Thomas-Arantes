import Axios from "axios";
import React from "react";
import axios from 'axios';
import styled from 'styled-components'

const PokedexContainer = styled.div`
  display: flex;
`
const PokemonSprite = styled.img`
  height: 200px;
  width: 200px;
  margin: 20px;
`

const PokemonInput = styled.select`
  width: 350px;
  margin: 10px;
`


class App extends React.Component {
  state = {
    pokemonList: [],
    selectedPokemonUrl: "",
    selectedPokemonName: "",
    selectedPokemonId: "",
    selectedPokemonHeight: "",
    selectedPokemonWeight: "",
    selectedPokemonType: "",
  };

  componentDidMount(){
    this.getPokemons();
  }

  getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => {
      this.setState({pokemonList: response.data.results })
      console.log(this.state.pokemonList)
    })
  }

  onChangePokemon = (event) =>{
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`
    axios.get(apiUrl)
    .then((response) => {
      this.setState({
        selectedPokemonUrl : response.data.sprites.front_default,
        selectedPokemonName : response.data.name,
        selectedPokemonId : response.data.id,
        selectedPokemonHeight : response.data.height,
        selectedPokemonWeight : response.data.weight,
      })
    })
  }

  render() {
    const pokemonSelect = this.state.pokemonList.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name}</option>
    })

    return (
      <div className="App">
        
          <PokemonInput onChange={this.onChangePokemon}>
            {pokemonSelect}
          </PokemonInput>
          
        <PokedexContainer>
          <PokemonSprite src={this.state.selectedPokemonUrl} />
          <div>
            <p>Nome: {this.state.selectedPokemonName}</p>
            <p>N°: {this.state.selectedPokemonId} </p>
            <p>Altura: {this.state.selectedPokemonHeight} m</p>
            <p>Peso: {this.state.selectedPokemonWeight} kg</p>
          </div>
        </PokedexContainer>

      </div>
    );
  }
}

export default App;