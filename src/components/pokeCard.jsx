import React from 'react'
import './pokeCard.css'

const PokeCard = ({ name, img, types, text, abilities, moves }) => {

    return (
        <div className="flex-parent">
            <div className="flex-row">
                <div className="name">
                    {/* Name */}
                    <h2 >{name}</h2>
                </div>

                <div className="type">
                    {/* Type */}
                    <p>{types.map((tipo, index) => {
                        return (<span key={`tipo-${index}`}>{tipo.type.name} </span>)
                    })}
                    </p>
                </div>
            </div>

            <img src={img} alt="pokemon sprite"></img>

            {/* Description */}
            <div className="description">
                {text.map((description, index) => {
                    return description.language.name === "en" && index < 1 && (
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