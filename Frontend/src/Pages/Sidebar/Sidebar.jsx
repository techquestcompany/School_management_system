// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaDollarSign, FaChalkboardTeacher, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h2 style={{ textAlign: 'center', color: '#fff' }}>Admin Portal</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={linkStyle}>
          <Link to="/" style={linkTextStyle}>
            <FaHome style={iconStyle} /> Dashboard
          </Link>
        </li>
        <li style={linkStyle}>
          <Link to="/parents" style={linkTextStyle}>
            <FaUsers style={iconStyle} /> Parents
          </Link>
        </li>
        <li style={linkStyle}>
          <Link to="/finance" style={linkTextStyle}>
            <FaDollarSign style={iconStyle} /> Finance
          </Link>
        </li>
        <li style={linkStyle}>
          <Link to="/teachers" style={linkTextStyle}>
            <FaChalkboardTeacher style={iconStyle} /> Teachers
          </Link>
        </li>
        <li style={linkStyle}>
          <Link to="/settings" style={linkTextStyle}>
            <FaCog style={iconStyle} /> Settings
          </Link>
        </li>
        <li style={linkStyle}>
          <Link to="/logout" style={linkTextStyle}>
            <FaSignOutAlt style={iconStyle} /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

const sidebarStyle = {
  width: '200px',
  backgroundColor: '#2c3e50',
  color: '#fff',
  height: '100vh',
  paddingTop: '20px',
};

const linkStyle = {
  margin: '20px 0',
};

const linkTextStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  marginRight: '10px',
};

export default Sidebar;
