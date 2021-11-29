import React, { useEffect, useReducer } from 'react';
import { useParams} from 'react-router-dom';
import { fetchdata } from '../components/Fetchurl';
import Cast from '../shows/Cast';
import Details from '../shows/Details';
import Season from '../shows/Season';
import ShowMaindata from '../shows/ShowMaindata';
import './show.css';

const reducer = (prevstate, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS' : {
            return {...prevstate, isLoading: false, show: action.show}
        }

        case 'FETCH_FAILED' : {
            return {...prevstate, isLoading: false, error: action.error}
        }

        default : {
            return prevstate;
        }
    }
}

const initialState ={
    show : null,
    isLoading : true,
    error : null,
};

const Show = () => {
    const {id} = useParams();

    const [{show, isLoading, error}, dispatch] = useReducer(reducer, initialState)

    // const [show, setshow]=  useState(null);
    // const [isLoading, setisLoading] = useState(true);
    // const [error, seterror] = useState(null);

    useEffect(() => {
        let isMounted = true;


        fetchdata(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result)=>{
            if(isMounted){
                dispatch({type: 'FETCH_SUCCESS', show: result})

                // setshow(result);
                // setisLoading(false);
            }
        }).catch((err)=>{
            if(isMounted){
                dispatch({type: 'FETCH_FAILED', error: err.message})

                // seterror(err.message);
                // setisLoading(false);
            }
        })   

        return ()=>{
            isMounted = false;
        }
    }, [id])
    // console.log(state);
    console.log(show);

    if(isLoading){
        return(<div>Data is loading</div>)
    }

    if(error){
        return( <div>Error Occupied: {error}</div>)
    }


    return (
        <div className="show-page">
            <ShowMaindata 
                image={show.data.image}
                name={show.data.name}
                rating={show.data.rating}
                summary={show.data.summary}
                tags={show.data.genres} 
            />

            <div className="show-info">
                <h1>Details</h1>
                <Details
                status={show.data.status}
                network={show.data.network}
                premiered={show.data.premiered}
                 />
            </div>

            <div className="show-info">
                <h1>Seasons</h1>
                <Season 
                seasons={show.data._embedded.seasons} />

            </div>

            <div className="show-info">
                <h1>Cast</h1>
                <Cast cast={show.data._embedded.cast} />
            </div>
        </div>
    )
}

export default Show
