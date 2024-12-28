import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import "./Attendance.css";

const Students = [
  { name: "Kwaku Manu", attendance: true },
  { name: "John Doe", attendance: false },
  { name: "Kofi Mensah", attendance: true },
  { name: "Kwame Nkrumah", attendance: false },
  { name: "Ama Serwaa", attendance: true },
  { name: "Abena Serwaa", attendance: false },
  { name: "Kwadwo Mensah", attendance: true },
  { name: "Kwaku Salifu", attendance: false },
  { name: "Kwame Addo", attendance: true },
  { name: "Kwadwo Nkansah", attendance: false },
  { name: "Kwame Nkrumah", attendance: false },
  { name: "Ama Serwaa", attendance: true },
  { name: "Abena Serwaa", attendance: false },
];

const Attendance = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <h2 className="title">Attendance</h2>

      <div className="attendance-container">
        <div className="calendar-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 20,
            }}
          >
            <h3>Select Class: </h3>
            <select>
              <option value="">All Classes</option>
              <option value="Basic One">Basic One</option>
              <option value="Basic Two">Basic Two</option>
              <option value="Basic Three">Basic Three</option>
            </select>
          </div>
          <Calendar onChange={onChange} value={value} />
        </div>

        <div className="attendance-list">
          <h2>Attendance On 20th December, 2024</h2>
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>Student List</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {Students.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>
                    <div
                      style={{ display: "flex", gap: 5, justifyContent: "end" }}
                    >
                      <button className="present-button">Present</button>
                      <button className="absent-button">Absent</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />

          <button className="save-attendance-btn">Save Attendance</button>
        </div>
      </div>
    </>
  );
};

export default Attendance;
