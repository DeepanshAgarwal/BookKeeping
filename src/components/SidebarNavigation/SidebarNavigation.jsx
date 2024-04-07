import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./SidebarNavigation.css";

import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { PiBooksBold } from "react-icons/pi";
import { FaCode, FaBars, FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const routes = [
    {
        path: "/BookKeeping/",
        name: "Dashboard",
        icon: <MdSpaceDashboard />,
    },
    {
        path: "/BookKeeping/catalog",
        name: "Catalog",
        icon: <IoBookSharp />,
    },
    {
        path: "/BookKeeping/favourites",
        name: "Favorites",
        icon: <MdFavorite />,
    },
    {
        path: "/BookKeeping/recents",
        name: "Recents",
        icon: <PiBooksBold />,
    },
    { path: "/BookKeeping/developers", name: "Developers", icon: <FaCode /> },
];

export default function SidebarNavigation({ children, handleSearch }) {
    const [isOpen, setIsOpen] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    const recognition = useRef(null);

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

    useEffect(() => {
        window.SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition.current = new window.SpeechRecognition();
        recognition.current.interimResults = false; // Set to false

        recognition.current.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map((result) => result[0])
                .map((result) => result.transcript)
                .join("");

            if (event.results[0].isFinal) {
                setInputValue(transcript); // Update input value when speech is final
                handleSearch(transcript);
                navigate("/BookKeeping/search");
            }
        };
    }, []);

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
                        {/* <button onClick={() => recognition.current.start()}>
                            Speak
                        </button> */}
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
                                value={inputValue}
                                onChange={(event) =>
                                    setInputValue(event.target.value)
                                } // Update state when input changes
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        handleSearch(event.target.value);
                                        navigate("/BookKeeping/search");
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
