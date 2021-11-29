import React from 'react';
import Showscard from './Showscard';
import IMAGE_NOT_FOUND from '../image/image-not-found.png';
import './card.css';
import { useShows } from '../custom-hook';


const Showstared = ({data}) => {
    const [showstared, dispachstared] = useShows();
    return (
        <div className="grid">
            {data.map(({show})=>{
                const isStared = showstared.includes(show.data.id);
                // console.log(isStared, show.data.id);

                const onClickStared =()=>{
                    if(isStared){
                        dispachstared({type: 'REMOVE', showId: show.data.id})
                    }
                    else{
                        dispachstared({type: 'ADD', showId: show.data.id})
                    }

                }

                return( 
                <Showscard 
                key={show.data.id} 
                id={show.data.id} 
                name={show.data.name} 
                image={show.data.image ? show.data.image.medium : IMAGE_NOT_FOUND}
                summary={show.data.summary}
                onClickStared = {onClickStared}
                isStared={isStared}
                />
                
            )})}   
        </div>
        
    )
}

export default Showstared
