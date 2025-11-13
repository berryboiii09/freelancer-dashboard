import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./ProfileSettings.css";

const ProfileSettings = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [profilePic, setProfilePic] = useState(user.profilePic);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setProfilePic(imageURL);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            username,
            email,
            profilePic,
        });
        alert("Profile updated successfully!");
    };

    return (
        <div className="profile-settings-container">
            <h2>Profile Settings</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="profile-pic-section">
                    <img
                        src={profilePic || "https://via.placeholder.com/100"}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <label className="upload-btn">
                        Change Picture
                        <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                    </label>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="save-btn">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default ProfileSettings;
