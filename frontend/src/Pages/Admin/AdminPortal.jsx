import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Sidebar from '../Sidebar/TeachersSidebar';
import Header from '../../Components/Header';
import Dashboard from "../Dashboard/AdminDashboard";
import Parents from '../Parents/Parents';
import Finance from '../Finance/Finance';
import Teachers from '../Teachers/Teachers';
import Settings from '../Settings/Settings';
import Logout from '../Logout';

const AdminPortal = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: '20px' }}>
          
           <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;                         
