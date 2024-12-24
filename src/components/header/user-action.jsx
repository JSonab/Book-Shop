import ReactDOM from "react-dom";
import React from 'react';
import './user-action.scss'
import img1 from "../../../assets/icons/user.svg"
import img2 from "../../../assets/icons/search.svg"
import img3 from "../../../assets/icons/shop bag.svg"

const UserAction = () => {
    return (
        <div class="user-action">
                <button className="user-action__btn">
                    <img src={img1} alt="user" id="user"/>
                </button>
                <button className="user-action__btn">
                    <img src={img2} alt="search" id="search"/>
                </button>
                <button className="user-action__btn">
                    <img src={img3} alt="shop bag" id="shopBag"/>
                </button>
            </div>
    )
}

export default UserAction