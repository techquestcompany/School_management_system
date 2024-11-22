import React, { useState } from 'react';
import './ParentsSignup.css'; // Importing styles
import axios from 'axios';

const ParentSignupForm = () => {
  const [formData, setFormData] = useState({
    
    firstName: '',
    lastName: '',
    relationship: '',
    contactInfo: {
      phoneNumber: '',
      email: '',
      location:"",
    occupation: ''},  
    communicationPreferences: {
      preferredMethod: 'Phone',
      receiveUpdates: true,
    }
  
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('contactInfo') || name.startsWith('address')) {
      const [parentKey, key] = name.split('.');
      setFormData((prevState) => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [key]: type === 'checkbox' ? checked : value,
        },
      }));
    } else if (name.startsWith('communicationPreferences')) {
      const [parentKey, key] = name.split('.');
      setFormData((prevState) => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [key]: type === 'checkbox' ? checked : value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Firstname is required.";
    if (!formData.lastName) newErrors.lastName = "Lastname is required.";
    if (!formData.relationship) newErrors.relationship = "Relationship is required.";
    if (!formData.contactInfo.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    if (!formData.contactInfo.email) newErrors.email = "Email is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form Submitted');
      // Handle form submission logic, like sending it to the backend
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="parent-signup-container">
      <h2>Parent/Guardian Sign-Up</h2>
      <form onSubmit={handleSubmit} className="parent-signup-form">
       <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="relationship">Relationship</label>
          <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Guardian">Guardian</option>
            <option value="Other">Other</option>
          </select>
          {errors.relationship && <span className="error">{errors.relationship}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="contactInfo.phoneNumber"
            value={formData.contactInfo.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="contactInfo.email"
            value={formData.contactInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.contactInfo.location}
            onChange={handleChange}
            placeholder="City"
          />
        </div>


        <div className="input-group">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation (optional)"
          />
        </div>

       

  
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ParentSignupForm;
