import ReactDOM from "react-dom";
import React from 'react';
import SimpleCarousel from "./slider";
import "./main.scss"


const Main = () => {
    return (
        <div className="main">
            <div className="main__title">
                <div className="container">
                    <SimpleCarousel/>
                    </div>
            </div>
        </div>
    )
}

export default Main