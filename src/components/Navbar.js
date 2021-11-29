import React,{memo} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './navstyle.css';


const Navbar = () => {
    const LINK = [
        {to: '/', text: 'Home'},
        {to: '/starred', text: 'Starred'}
    ]

    const location = useLocation();

    

    return (
        <div className="nav-list">
            
            {LINK.map((prev)=>{
                const islocation = prev.to === location.pathname;
                return(<li key={prev.to}>
                    <Link style={{color: islocation? 'blue' : ''}}  className='link-style' to={prev.to}>{prev.text}</Link>
                </li>)
            })}
        </div>
    )
}

export default memo(Navbar);
