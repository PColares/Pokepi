import React from 'react'
import './pokeCard.css'

const PokeCard = ({ name, img, types, text, moves }) => {

    return (
        <div className="pokeBorder">
            <div className="flex-row">
                {/* Name */}
                <div className="name">

                    <h2 >{name}</h2>
                </div>
                {/* Type */}
                <div className="type">

                    <p>{types.map((tipo, index) => {
                        return (<span key={`tipo-${index}`}>{tipo.type.name} </span>)
                    })}
                    </p>
                </div>
            </div>
            {/* Sprites */}
            <img className="sprite" src={img} alt="pokemon sprite"></img>

            {/* Description */}
            <div className="description">
                {text.map((description, index) => {
                    return description.language.name === "en" && index === 2 && (
                        <span key={`desc-${index}`}>{description.flavor_text}</span>
                    )
                })}
            </div>

            {/* Moves */}
            <div className="moves">
                {moves.map((golpe, index) => {
                    return index < 4 && (
                        <p key={`move-${index}`}>{golpe.move.name} </p>)
                })}
            </div>
        </div>
    );
}
export default PokeCard;
//<p>Length:{pokemonData.height} dm</p>
//<p>Experience:{pokemonData.base_experience} points</p>
//<p>Weight:{pokemonData.weight} hm</p>