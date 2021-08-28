import React from 'react'
import './pokeCard.css'

export default function Navigation({ id, setId, displayID  }) {
    function gotoNextPage() {
        setId(id + 1);
    }

    function gotoPrevPage() {
        setId(id - 1);
    }
    return (
        <div className="button">
            <button onClick={id < 1 ? setId(898) : gotoPrevPage}>Anterior</button>
            <span className="pokeID">{displayID}</span>
            <button onClick={id > 898 ? setId(1) : gotoNextPage}>Próximo</button>
        </div>
    )
}