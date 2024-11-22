import React, { useState, useEffect } from 'react';
import "./getAllTeachers.css"

const GetAllTeachers = () => {
  // State to store the list of teachers
  const [teachers, setTeachers] = useState([]);

  // State to manage loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all teachers when the component is mounted
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('/api/teachers');  // Replace with your actual API endpoint
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
    // In a real-world application, you would display a form for updating the teacher's info.
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
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.subject}</td>
              <td>
                <button onClick={() => updateTeacher(teacher.id)}>Update</button>
                <button onClick={() => deleteTeacher(teacher.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllTeachers;
