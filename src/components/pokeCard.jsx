import React from 'react'
import './pokeCard.css'
import ptBr from '../Settings/pt-br'

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
                        switch (tipo.type.name) {
                            case "grass":
                                tipo.type.name = ptBr.Grass;
                                break;
                            case "fire":
                                tipo.type.name = ptBr.Fire;
                                break;
                            case "water":
                                tipo.type.name = ptBr.Water;
                                break;
                            case "bug":
                                tipo.type.name = ptBr.Bug;
                                break;
                            case "normal":
                                tipo.type.name = ptBr.Normal;
                                break;
                            case "poison":
                                tipo.type.name = ptBr.Poison;
                                break;
                            case "electric":
                                tipo.type.name = ptBr.Electric;
                                break;
                            case "ground":
                                tipo.type.name = ptBr.Ground;
                                break;
                            case "fighting":
                                tipo.type.name = ptBr.Fighting;
                                break;
                            case "psychic":
                                tipo.type.name = ptBr.Psychic;
                                break;
                            case "rock":
                                tipo.type.name = ptBr.Rock;
                                break;
                            case "flying":
                                tipo.type.name = ptBr.Flying;
                                break;
                            case "ghost":
                                tipo.type.name = ptBr.Ghost;
                                break;
                            case "ice":
                                tipo.type.name = ptBr.Ice;
                                break;
                            case "dragon":
                                tipo.type.name = ptBr.Dragon;
                                break;
                            case "steel":
                                tipo.type.name = ptBr.Steel;
                                break;
                            case "dark":
                                tipo.type.name = ptBr.Dark;
                                break;
                            case "fairy":
                                tipo.type.name = ptBr.Fairy;
                                break;
                            default:
                                break;
                        }
                        return (

                            <span key={`tipo-${index}`}>{tipo.type.name} </span>

                        )
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