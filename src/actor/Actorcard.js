import React from 'react';
import '../shows/card.css';

const Actorcard = ({id, name, image, country, birthday, deathday, gender}) => {
    return (
        <div className="Card">
            <div>
                <img src={image} alt="person" />
            </div>

            <h1>{name} {gender? `(${gender})`: null}</h1>
            <p>{country ? `Comes from ${country}` : 'No Country Known'}</p>
            {birthday? <p>Born {birthday}</p> : null}
            <p style={{fontWeight: "bold"}}>{deathday? `Died ${deathday}` : 'Alive' }</p>


        </div>
    )
}

export default Actorcard
