import axios from "axios";

const API_BASE = "https://api.tvmaze.com";

 export async function fetchdata(fetchURL){
    const resultdata = await axios.get(`${API_BASE}${fetchURL}`);
    
    return resultdata;
}