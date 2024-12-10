// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import Image from "../Assets/vecteezy_students-are-learning-how-to-manage-a-business_7885602-1.jpg"
import './Homepage.css';  
import TeacherSignup from '../Components/Signup/TeacherSignup';
import ParentSignup from '../Components/Signup/Parents';
const HomePage = () => {
  return (
    <div className="home-container">
      {/* Image at the top */}
      <img
        src={Image} 
        alt="Welcome"
        className="home-image"
      />

      <div>
        <h1>Choose Who you are and start your adventure</h1>
      </div>

      <div className="buttons-container">
        {/* Buttons for Parent and Teacher Sign Up */}
        <Link to="/parentSignup">
          <button className="signup-button parent-btn">Parent</button>
        </Link>
        <Link to="/teacherSignup">
          <button className="signup-button teacher-btn">Teacher</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
