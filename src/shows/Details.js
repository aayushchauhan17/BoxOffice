import React from 'react';
import './card.css';

const Details = ({status, premiered, network}) => {
    return (
        <div className="details-warper">
            <p>
                Status: <span>{status}</span>
            </p>
            <p>
                Premiered {premiered} {network ? `on${network.name}`: null}
            </p>
        </div>
    )
}

export default Details
