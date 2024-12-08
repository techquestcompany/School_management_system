import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const [showThirdContainer, setShowThirdContainer] = useState(false); // State to toggle the third container

  const toggleProfileMenu = () => {
    setShowProfileMenu(prevState => !prevState);
  };

  const toggleHamburgerMenu = () => {
    setShowThirdContainer(prevState => !prevState); // Toggle third container visibility
  };

  return (
    <div className="header-container">
      {/* Logo */}
      <div className="logo"> {/* First Flex Item */}
        <img
          src="https://via.placeholder.com/40" // Placeholder logo
          alt="Logo"
          className="logo-img"
        />
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
        <FaBars className="hamburger-icon" /> {/* Second Flex Item */}
      </div>

      {/* Third Flex Container (Notifications, Messages, Profile) */}
      <div className={`third-flex-container ${showThirdContainer ? 'show' : ''}`}>
        <div className="notification-and-messages-container">
          <div className="icon-container">
            <FaBell className="icon" />
            <span className="badge">3</span> {/* Notification badge */}
          </div>
          <div className="icon-container">
            <FaEnvelope className="icon" />
            <span className="badge">5</span> {/* Messages badge */}
          </div>
        </div>

        {/* Profile Picture and Dropdown on the Right */}
        <div className="profile-container" onClick={toggleProfileMenu}>
          <img
            src="https://via.placeholder.com/40" // Placeholder image for profile
            alt="Profile"
            className="profile-pic"
          />
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
    </div>
  );
};

export default Header;
