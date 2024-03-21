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
                        <Route path="/BookKeeping/" element={<Dashboard />} />
                        <Route
                            path="/BookKeeping/catalog"
                            element={<Catalog />}
                        />
                        <Route
                            path="/BookKeeping/favourites"
                            element={<Favourites />}
                        />
                        <Route
                            path="/BookKeeping/recents"
                            element={<Recents />}
                        />
                        <Route
                            path="/BookKeeping/developers"
                            element={<Developers />}
                        />
                        <Route
                            path="/BookKeeping/search"
                            element={<Search searchQuery={searchQuery} />}
                        />
                        <Route
                            path="/BookKeeping/*"
                            element={<h1>Page not found</h1>}
                        />
                    </Routes>
                </SidebarNavigation>
            </Router>
        </>
    );
}
