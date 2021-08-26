import PokemonList from "./components/PokemonList";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from "./components/Navigation";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState("");
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);


  


  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(response => {
      setLoading(false)
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous) 
      setPokemon(response.data.sprites.map(poke => poke.name))

      
    })

    return () => { cancel(); }
    //cancelToken serve para garantir que a aplicação não vai carregar dados de requests antigos e sobrepor novos requests.

  }, [currentPageUrl])
  //Toda vez que [currentPageUrl] for modificado, faça o código axios.get acima.

  if (loading) return "Loading..."

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Navigation
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
