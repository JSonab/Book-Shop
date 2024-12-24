import ReactDOM from "react-dom";
import React from 'react';
import './header.scss'
import Navigation from "./nav";
import UserAction from "./user-action";


const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <p>Bookshop</p>
                </div>
                <Navigation/>
                <UserAction/>
            </div>

        </div>
    )
}

export default Header
