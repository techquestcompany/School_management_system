import React from "react";
import "./SidebarHeader.css";

const SidebarHeader = ({ name, email, profilePicture }) => {
  return (
    <div className="sidebar-header">
      <div className="profile-section">
        <img
          src={profilePicture || "https://picsum.photos/seed/picsum/200/300"}
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-details">
          <h3>{name}</h3>
          <p className="email">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
