import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from './components/pokeCard';
import Navigation from './components/Navigation'
function App() {

  const [pokemonID, setPokemonID] = useState(1)
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonText, setPokemonText] = useState([])
  const [pokemonImg, setPokemonImg] = useState([])
  const [pokemonType, setPokemonType] = useState([])
  const [pokemonMoves, setPokemonMoves] = useState([])

  const pokeInfoUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
  const pokeTextUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`

  useEffect(() => {
    const getPokemonInfo = axios.get(pokeInfoUrl);
    const getPokemonText = axios.get(pokeTextUrl);

    axios.all([getPokemonInfo, getPokemonText]).then(
      axios.spread((...allData) => {
        setPokemonData(allData[0].data);
        setPokemonImg(allData[0].data.sprites.other["official-artwork"].front_default);
        setPokemonType(allData[0].data.types);
        setPokemonMoves(allData[0].data.moves);
        setPokemonText(allData[1].data.flavor_text_entries);
      })
    );
  }, [pokeInfoUrl, pokeTextUrl])

  return (
    <div className="flex-parent">
      <PokeCard
        name={pokemonData.name}
        img={pokemonImg}
        types={pokemonType}
        text={pokemonText}
        moves={pokemonMoves}
      />
      {/* Botões */}
      <Navigation
        id={pokemonID}
        setId={setPokemonID}
        displayID={pokemonData.id}
      />
    </div>
  );
}
export default App;