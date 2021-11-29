import React, { useState } from 'react';
import Mainpage from '../components/Mainpage';
import { fetchdata } from '../components/Fetchurl';
import Showsgrid from '../shows/Showsgrid';
import Actorgrid from '../actor/Actorgrid';

import './home.css';

const Home = () => {
    const [input, setinput] = useState('');
    const [result, setresult ] = useState([]);
    const [radiosearch, setradiosearch] = useState('shows');
    const isradiochecked = radiosearch === 'shows';
    const onInputChange =(event)=>{
        // console.log(event.target.value);
        setinput(event.target.value);
    }
    
    const onsearch =()=>{
        fetchdata(`/search/${radiosearch}?q=${input}`).then((r)=>{setresult(r.data); console.log(r.data)});
    }

    const onentersearch =(val)=>{
        if(val.keyCode === 13){
            onsearch();
        }
    }

    const showresult=()=>{
        if(result && result.length === 0){
            return <div>NO RESULT</div>
        }

        if(result && result.length>0){
            return result[0].show? <Showsgrid data={result} /> : <Actorgrid data={result} />
        }

        return null;
    }

    const onradiochange =(event)=>{
        setradiosearch(event.target.value);
    }
    // console.log(radiosearch)

    return (
        <Mainpage>
            <input className="search-input" type="text" onChange={onInputChange} onKeyDown={onentersearch} placeholder="Search..."/>
             <div className="radio-input">
                 <div>
                 <label htmlFor="shows-search">
                     Shows
                     <input 
                     id="shows-search" 
                     type="radio" 
                     value='shows' 
                     onChange={onradiochange} 
                     checked={isradiochecked}/>

                 </label>
                 </div>

                 <div>
                 <lable htmlFor="actor-search">
                     Actor
                     <input 
                     id="actor-search" 
                     type="radio" 
                     value='people' 
                     onChange={onradiochange} 
                     checked={!isradiochecked}/>

                 </lable>
                 </div>
             </div>

             <div className="search-button">

            <button type="button" onClick={onsearch}>Search</button>
            </div>

            {showresult()}

        </Mainpage>
    )
}

export default Home
