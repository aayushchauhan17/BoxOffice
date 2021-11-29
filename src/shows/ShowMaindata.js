import React from 'react';
import IMAGE_NOT_FOUND from '../image/image-not-found.png';
import './card.css';


const ShowMaindata = ({image, name, rating, summary, tags}) => {
    // console.log(image, name, rating, summary, tags)
    return (
        <div className="show-main-data">
            <img src={image? image.medium : IMAGE_NOT_FOUND } alt="show-imag"/>
            <div className="text-side">
                <div className="headline">
                    <h1>{name}</h1>
                    <div>
                        <div className="rating-star"></div>
                        <span>{rating.average || 'N/A'}</span>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: summary}} className="summary"/>

                <div className="taglist">
                    Tags:{' '}
                    <div>
                        {tags.map((tag,i)=>{
                            return(<span key={i}>{tag}</span>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowMaindata
