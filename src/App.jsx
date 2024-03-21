import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Dashboard from "./pages/Dashboard/Dashboard";
import Catalog from "./pages/Catalog/Catalog";
import Favourites from "./pages/Favourites/Favourites";
import Recents from "./pages/Recents/Recents";
import Developers from "./pages/Developers/Developers";
import SidebarNavigation from "./components/SidebarNavigation/SidebarNavigation";

export default function App() {
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearch(searchQuery) {
        console.log(searchQuery);
        setSearchQuery(searchQuery);
    }

    return (
        <>
            <Router>
                <SidebarNavigation handleSearch={handleSearch}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/recents" element={<Recents />} />
                        <Route path="/developers" element={<Developers />} />
                        <Route
                            path="/search"
                            element={<Search searchQuery={searchQuery} />}
                        />
                        <Route path="/*" element={<h1>Page not found</h1>} />
                    </Routes>
                </SidebarNavigation>
            </Router>
        </>
    );
}
