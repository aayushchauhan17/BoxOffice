import React from 'react';
import Showscard from './Showscard';
import IMAGE_NOT_FOUND from '../image/image-not-found.png';
import './card.css';
import { useShows } from '../custom-hook';
import FadeIn from 'react-fade-in/lib/FadeIn';


const Showsgrid = ({data}) => {
    const [showstared, dispachstared] = useShows();
    return (
        <div className="grid">
            {data.map(({show})=>{
                const isStared = showstared.includes(show.id);
                console.log(isStared, show.id);

                const onClickStared =()=>{
                    if(isStared){
                        dispachstared({type: 'REMOVE', showId: show.id})
                    }
                    else{
                        dispachstared({type: 'ADD', showId: show.id})
                    }

                }

                return( 
                <FadeIn >   
                <Showscard 
                key={show.id} 
                id={show.id} 
                name={show.name} 
                image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                summary={show.summary}
                onClickStared = {onClickStared}
                isStared={isStared}
                />
                </FadeIn> 
                
            )})}   
        </div>
        
    )
}

export default Showsgrid
