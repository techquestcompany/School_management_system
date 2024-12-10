// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header';
import Dashboard from "../Dashboard/Dashboard"
import Parents from '../Parents/Parents';
import Finance from '../Finance/Finance';
import Teachers from '../Teachers/Teachers';
import Settings from '../Settings/Settings';
import Logout from '../Logout';

const AdminPortal = () => {
  return (
    <Router>
      <div>
        {/* Header Component */}
        <Header />

        <div style={{ display: 'flex' }}>
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/parents" element={<Parents />} />
              <Route path="/admin/finance" element={<Finance />} />
              <Route path="/admin/teachers" element={<Teachers />} />
              <Route path="/admin/settings" element={<Settings />} />
              <Route path="/admin/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AdminPortal;
