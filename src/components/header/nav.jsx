import ReactDOM from "react-dom";
import React from 'react';
import './nav.scss'

const Navigation = () => {
    return(
        <div className="nav">
            <a href="#" className="nav__a">Books</a>
                <a href="#" className="nav__a">Audiobooks</a>
                <a href="#" className="nav__a">Stationery & gifts</a>
                <a href="#" className="nav__a">Blog</a>
        </div>
    )
}

export default Navigation