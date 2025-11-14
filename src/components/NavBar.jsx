import React, {useEffect, useRef, useState, useContext} from "react";
import { FaBell } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci"
import "./NavBar.css";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext.jsx";
import {notifications} from "../data/Notfications.js";
import defaultImage from "../assets/man.png"

const flex = { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "10px"};
const NavBar = () => {
    const { user } = useContext(UserContext);
    const [showNotifications, setShowNotifications] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
        <div className="nav-bar">
            <div style={flex}>
                <button className="menu-btn" onClick={toggleSidebar}>
                    <CiMenuBurger size={24} />
                </button>
                <h2>Freelance Dashboard</h2>
            </div>
            <nav>
                <Link to="/">Overview</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/profile" className="profile-link">
                    <div className="profile-info">
                        <img
                            src={user.profilePic || defaultImage}
                            alt="User"
                            className="nav-profile-pic"
                        />
                        <span>{user.username}</span>
                    </div>
                </Link>

                <div className="notification-wrapper" ref={dropdownRef}>
                    <button
                        className={`notification-btn ${showNotifications ? "active" : ""}`}
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <FaBell size={18} />
                    </button>

                    {showNotifications && (
                        <div className="notification-dropdown">
                            {notifications.map((n) => (
                                <div key={n.id} className="notification-item">
                                    <p>{n.text}</p>
                                    <span className="time">{n.time}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </div>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
            </>
    );
};

export default NavBar;
