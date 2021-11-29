import React,{memo} from 'react';
import './navstyle.css';

const Title = ({title, subtitle}) => {
    return (
        <div className="title-wrap">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default memo(Title)
