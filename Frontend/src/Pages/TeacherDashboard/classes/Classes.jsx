import { Link } from "react-router-dom";
import {
  tableContainerStyle,
} from "../styles/teacherDashboardStyles";
import styled from "styled-components";

const Classes = () => {
  const classes = [
    { id: 1, name: "Basic One", grade: "Grade 1", studentCount: 25 },
    { id: 2, name: "Basic Two", grade: "Grade 2", studentCount: 30 },
    { id: 3, name: "Basic Three", grade: "Grade 3", studentCount: 28 },
    { id: 4, name: "Basic Four", grade: "Grade 4", studentCount: 32 },
  ];

  return (
    <>
      <h2 className="title">Classes List</h2>
      <div>
        <div style={tableContainerStyle}>
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <TableHeaderStyle>Class Name</TableHeaderStyle>
                <TableHeaderStyle>Grade</TableHeaderStyle>
                <TableHeaderStyle>Student Count</TableHeaderStyle>
                <TableHeaderStyle>Actions</TableHeaderStyle>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls) => (
                <tr key={cls.id}>
                  <TableCellStyle>{cls.name}</TableCellStyle>
                  <TableCellStyle>{cls.grade}</TableCellStyle>
                  <TableCellStyle>{cls.studentCount}</TableCellStyle>
                  <TableCellStyle>
                    <Link to="/dashboardTeacher/class-details">View Details</Link>
                  </TableCellStyle>
                </tr>
              ))}
            </tbody>
          </table>
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

export default Classes;
