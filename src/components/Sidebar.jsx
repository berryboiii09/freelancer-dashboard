import React, { useContext } from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext.jsx";
import defaultImage from "../assets/man.png"

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const { user } = useContext(UserContext);
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={toggleSidebar}>
                ✕
            </button>
            <ul>
                <li><Link to="/">Overview</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/profile" className="profile-link">
                    <div className="profile-info">
                        <img
                            src={user.profilePic || defaultImage}
                            alt="User"
                            className="nav-profile-pic"
                        />
                        <span>{user.username}</span>
                    </div>
                </Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
