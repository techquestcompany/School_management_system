import React from "react";
import "./Overview.css";
import styled from "styled-components";
import { tableContainerStyle } from "../styles/teacherDashboardStyles";

const Overview = () => {
  const metrics = [
    {
      title: "Classes",
      count: 6,
      description: "Number of assigned classes",
      icon: "📚",
      link: "/dashboardTeacher/classes",
    },
    {
      title: "Students",
      count: 120,
      description: "Total students taught",
      icon: "👩‍🎓",
      link: "/dashboardTeacher/students",
    },
    {
      title: "Subjects",
      count: 12,
      description: "Total students taught",
      icon: "👩‍🎓",
      link: "/dashboardTeacher/students",
    },
  ];

  const students = [
    {
      id: 1,
      name: "John Doe",
      age: 12,
      sex: "Male",
      class: "Basic One",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 11,
      sex: "Female",
      class: "Basic One",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 13,
      sex: "Male",
      class: "Basic Two",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 12,
      sex: "Female",
      class: "Basic Two",
    },
    {
      id: 5,
      name: "Daniel Brown",
      age: 14,
      sex: "Male",
      class: "Basic Three",
    },
  ];

  return (
    <>
      <h2 className="title">Overview</h2>

      <div>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div className="metric-card" key={index}>
              <span className="metric-icon">{metric.icon}</span>
              <h3>
                {metric.count} {metric.title}
              </h3>
            </div>
          ))}
        </div>

        <h2 className="title">Students List</h2>
        <div className="overview-students">
          <div>
            <div style={tableContainerStyle}>
              <table style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <TableHeaderStyle>Number</TableHeaderStyle>
                    <TableHeaderStyle>Name</TableHeaderStyle>
                    <TableHeaderStyle>Age</TableHeaderStyle>
                    <TableHeaderStyle>Sex</TableHeaderStyle>
                    <TableHeaderStyle>Class</TableHeaderStyle>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id}>
                      <TableCellStyle>{index + 1}</TableCellStyle>
                      <TableCellStyle>{student.name}</TableCellStyle>
                      <TableCellStyle>{student.age}</TableCellStyle>
                      <TableCellStyle>{student.sex}</TableCellStyle>
                      <TableCellStyle>{student.class}</TableCellStyle>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <hr style={{ width: "100%", margin: "12px 0px" }} />
            <div>
              <p>Showing 1 to 9 entries</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TableHeaderStyle = styled.th`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: 1px solid #fff;
`;

const TableCellStyle = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

export default Overview;
