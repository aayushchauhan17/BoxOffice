import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Showscard = ({id, name, image, summary, onClickStared, isStared}) => {
    const show_summary = summary?.length > 100? `${summary.substr(3, 100).replace(/<.+?>/g,'')}...`  : 'No Discription';
    return (
        <div className="Card">
            <div className="card-img">
                <img src={image} alt="show" />
            </div>
            <h1>{name}</h1>
            <p>{show_summary}</p>
            <div className="btns">
            <Link to={`/show/${id}`}>Read more</Link>
            <button type="button" onClick={onClickStared}><div 
            style={{backgroundColor: isStared? '#ffc806': '#ddd'}}  
            className="rating-star"></div></button>
            </div>
        </div>
    )
}

export default Showscard
