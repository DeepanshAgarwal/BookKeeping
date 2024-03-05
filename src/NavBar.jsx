import React from "react";
import "./NavBar.css";

export default function NavBar() {
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
            <button className="bookmarks button">Bookmarks</button>
            <button className="profile button">Profile</button>
            <button className="profile-icon button">
                <i class="fa-solid fa-user"></i>
            </button>
        </nav>
    );
}
