import React, { useState } from "react";
import "./NavBar.css";

import Favourites from "./Favourites";

export default function NavBar() {
    const [showFavourites, setShowFavourites] = useState(false);

    function openFavourites() {
        setShowFavourites(true);
    }

    function closeFavourites() {
        setShowFavourites(false);
    }

    return (
        <nav>
            <div className="menu-icon">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className="logo">
                <i>BookKeeping</i>
            </div>
            <div className="search">
                <div className="search-inner">
                    <input type="text" placeholder="Search..." />
                    <button className="search-button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <button className="favourites button" onClick={openFavourites}>
                Favourites
            </button>
            <button className="profile button">Profile</button>
            <button className="profile-icon button">
                <i class="fa-solid fa-user"></i>
            </button>
            {showFavourites && <Favourites onClose={closeFavourites} />}
        </nav>
    );
}
