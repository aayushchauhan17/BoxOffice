import React, { useState, useEffect } from 'react'
import { fetchdata } from '../components/Fetchurl';
import Mainpage from '../components/Mainpage'
import { useShows } from '../custom-hook';
import Showstared from '../shows/Showstarred';

const Starred = () => {

    const [starred] = useShows();

    const [shows, setshows] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(()=>{

        if(starred && starred.length > 0){
            const promises =  starred.map((showId) =>{return fetchdata(`/shows/${showId}`)});

            Promise.all(promises)
            .then(apidata => apidata.map(show => ({show})))
            .then(result => {
                // console.log(result);
                setshows(result);
                setisLoading(false);
            }).catch(err =>{
                seterror(err.message);
                setisLoading(false);
            })

            
        }
        else{
            setisLoading(false);
        }

    },[starred] )
    // console.log(shows)

    return (
        <Mainpage>
            {isLoading && <div> Shows are Still loading</div>}
            {error && <div>Error Occupied: {error}</div>}
            {!isLoading && !shows && <div>No Shows were added</div>}
            {!isLoading && !error && shows && <Showstared  data={shows}/>}
        </Mainpage>
    )
}

export default Starred
