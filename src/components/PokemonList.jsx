import React from 'react';

const PokemonList = ({ pokemon}) => {
    return (
        <div>
            <h1>PokemonList</h1>
            <img src={pokemon.sprites.front_default} alt="Pokemon Sprite" />
            {pokemon.map(poke => (
                <div key={poke}>{poke}</div>
            ))}
        </div>
    );
}

export default PokemonList;