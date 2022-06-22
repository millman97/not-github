import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className='btnDiv backBtn'>
                <a onClick={() => navigate(-1)}><span className="material-symbols-outlined">arrow_back</span></a>
            </div>
            <div className='btnDiv homeBtn'>
                <NavLink className="home-link" to="/"><span className="material-symbols-outlined">Home</span></NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
