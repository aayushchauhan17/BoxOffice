import React from 'react';
import IMAGE_NOT_FOUND from '../image/image-not-found.png';


const Cast = ({cast}) => {
    return (
        <div className="cast-list">
            {cast.map(({person, character, voice}, key)=>(
                <div key={key} className="cast-items">
                    <div className="cast-pic-wrap">
                        <img
                            src={person.image? person.image.medium : IMAGE_NOT_FOUND}
                            alt="cast-person" 
                        />
                    </div>
                    <div className="actor">
                        <span>
                            <span className="bold">{person.name}</span> | {character.name} {voice? '| Voice' : ''}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cast
