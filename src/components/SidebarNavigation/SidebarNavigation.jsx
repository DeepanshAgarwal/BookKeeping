import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./SidebarNavigation.css";

import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { PiBooksBold } from "react-icons/pi";
import { FaCode, FaBars, FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <MdSpaceDashboard />,
    },
    {
        path: "/catalog",
        name: "Catalog",
        icon: <IoBookSharp />,
    },
    {
        path: "/favourites",
        name: "Favorites",
        icon: <MdFavorite />,
    },
    {
        path: "/recents",
        name: "Recents",
        icon: <PiBooksBold />,
    },
    { path: "/developers", name: "Developers", icon: <FaCode /> },
];

export default function SidebarNavigation({ children, handleSearch }) {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: { duration: 0.2 },
        },
        visible: {
            width: "9rem",
            padding: "10px",
            opacity: 1,
            transition: { duration: 0.2 },
        },
    };
    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: { duration: 0.5 },
        },
        visible: {
            width: "auto",
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="SidebarNavigation">
            <motion.div
                className="sidebar"
                animate={{
                    width: isOpen ? "225px" : "60px",
                    opacity: 1,
                    transition: { duration: 0.5, type: "spring", damping: 12 },
                }}
            >
                <div className="sidebar-top">
                    {isOpen && (
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={showAnimation}
                            className="sidebar-top-logo"
                        >
                            BookKeeping
                        </motion.h1>
                    )}

                    <div className="sidebar-top-icon">
                        <FaBars onClick={toggleSidebar} />
                    </div>
                </div>
                <div className="sidebar-search">
                    <div className="sidebar-search-icon">
                        <FaSearch onClick={toggleSidebar} />
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.input
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={inputAnimation}
                                className="sidebar-search-search"
                                placeholder="Search..."
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        handleSearch(event.target.value);
                                        navigate("/search");
                                    }
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>
                <section className="routes">
                    {routes.map((route) => {
                        return (
                            <NavLink to={route.path} key={route.name}>
                                <div className="sidebar-link">
                                    <div className="sidebar-link-icon">
                                        {route.icon}
                                    </div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={showAnimation}
                                                className="sidebar-link-text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </NavLink>
                        );
                    })}
                </section>
            </motion.div>
            <main>{children}</main>
        </div>
    );
}
