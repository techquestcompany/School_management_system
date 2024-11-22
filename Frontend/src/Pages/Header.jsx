// src/components/Header.js
import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(prevState => !prevState);
  };

  return (
    <div className="header">
      {/* Profile Picture and Dropdown */}
      <div className="header-left">
        <div className="profile-container" onClick={toggleProfileMenu}>
          <img
            src="https://via.placeholder.com/40" // Placeholder image for profile
            alt="Profile"
            className="profile-pic"
          />
          <FaUserCircle className="profile-icon" />
          {showProfileMenu && (
            <div className="profile-menu">
              <ul>
                <li>My Profile</li>
                <li>Settings</li>
                <li><FaSignOutAlt /> Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Notification and Messages */}
      <div className="header-right">
        <div className="icon-container">
          <FaBell className="icon" />
          <span className="badge">3</span> {/* Notification badge */}
        </div>
        <div className="icon-container">
          <FaEnvelope className="icon" />
          <span className="badge">5</span> {/* Messages badge */}
        </div>
      </div>

      {/* Announcement */}
      <div className="announcement">
        <p>New updates available! Check out the latest announcements.</p>
      </div>
    </div>
  );
};

export default Header;
