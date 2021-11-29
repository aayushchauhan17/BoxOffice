import { useEffect, useReducer } from "react";

function showReducer(precState, action){
    switch (action.type){
        case 'ADD': {
            return [...precState, action.showId];
        }
        case 'REMOVE':{
            return precState.filter(showId => showId !== action.showId);
        }
        default: 
        return precState;
    }
}

function usePersistedReducer(reducer, initialState, key){
    const [state, dispatch] = useReducer(reducer, initialState, initial =>{
        const persisted = localStorage.getItem(key);

        return persisted? JSON.parse(persisted) : initial;
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state));

    }, [state, key]);

    return [state, dispatch]
} 

export function useShows(key = 'shows'){
    return usePersistedReducer(showReducer, [], key);
}