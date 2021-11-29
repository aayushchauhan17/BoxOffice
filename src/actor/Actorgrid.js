import React from 'react'
import Actorcard from './Actorcard';
import IMAGE_NOT_FOUND from '../image/image-not-found.png';
import '../shows/card.css';
import FadeIn from 'react-fade-in/lib/FadeIn';



const Actorgrid = ({data}) => {
    return (
        <div className="grid">
            {
                data.map((item)=>{
                    return(
                        <FadeIn>
                        <Actorcard 
                        key={item.person.id} 
                        id={item.person.id} 
                        name={item.person.name} 
                        image={item.person.image? item.person.image.medium : IMAGE_NOT_FOUND}
                        country={item.person.country? item.person.country.name: null}
                        birthday={item.person.birthday}
                        deathday={item.person.deathday} 
                        gender={item.person.gender}/>
                        </FadeIn>
                    )
                })
            }
            
        </div>
    )
}

export default Actorgrid
