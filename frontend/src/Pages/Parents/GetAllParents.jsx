import React, { useState, useEffect } from 'react';
import "./getAllParents.css"

const GetAllParents = () => {
  // State to store the list of teachers
  const [teachers, setTeachers] = useState([]);

  // State to manage loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('/api/teachers');  
      const data = await response.json();
      setTeachers(data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching teachers');
      setLoading(false);
    }
  };                    

  // Function to delete a teacher
  const deleteTeacher = async (id) => {
    try {
      await fetch(`/api/teachers/${id}`, {
        method: 'DELETE',
      });
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    } catch (err) {
      setError('Error deleting teacher');
    }
  };

  // Function to update a teacher's information (this can be enhanced with a modal or form)
  const updateTeacher = (id) => {
    
    alert(`Update teacher with ID: ${id}`);
  };

  // Display loading or error message
  if (loading) return <div>Loading teachers...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Teachers List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Telephone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((parent) => (
            <tr key={parent.id}>
              <td>{parent.id}</td>
              <td>{parent.name}</td>
              <td>{parent.email}</td>
              <td>{parent.location}</td>
              <td>{parent.Telephone}</td>
              <td>{parent.subject}</td>
              <td>
                <button onClick={() => updateTeacher(parent.id)}>Update</button>
                <button onClick={() => deleteTeacher(parent.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllParents;
