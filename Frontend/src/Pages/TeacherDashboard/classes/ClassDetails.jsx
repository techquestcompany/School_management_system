import styled from "styled-components";
import { Link } from "react-router-dom";
import { tableContainerStyle } from "../styles/teacherDashboardStyles";

const classStudents = [
  {
    id: 1,
    name: "John Doe",
    age: 12,
    sex: "Male",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 11,
    sex: "Female",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 13,
    sex: "Male",
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 15,
    sex: "Female",
  },
  {
    id: 5,
    name: "Daniel Brown",
    age: 14,
    sex: "Male",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    age: 13,
    sex: "Female",
  },
  {
    id: 7,
    name: "Liam Martinez",
    age: 17,
    sex: "Male",
  },
  {
    id: 8,
    name: "Olivia Garcia",
    age: 11,
    sex: "Female",
  },
  {
    id: 9,
    name: "Noah Rodriguez",
    age: 14,
    sex: "Male",
  },
  {
    id: 10,
    name: "Ava Lee",
    age: 9,
    sex: "Female",
  },
];

const ClassDetails = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="title">Class Details</h2>
        <Link to="/dashboardTeacher/classes">
          <button
            style={{
              padding: "12px",
              backgroundColor: "#007bff",
              color: "#ffffff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Back to classes
          </button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
        }}
      >
        <div style={{ width: "600px" }}>
          <table
            style={{
              background: "#fff",
              borderRadius: "8px",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <TableCellLeftStyle>Class Name:</TableCellLeftStyle>
                <TableCellPlainStyle>Basic One</TableCellPlainStyle>
              </tr>
              <tr>
                <TableCellLeftStyle>Grade:</TableCellLeftStyle>
                <TableCellPlainStyle>Grade 1</TableCellPlainStyle>
              </tr>
              <tr>
                <TableCellLeftStyle>Student Count:</TableCellLeftStyle>
                <TableCellPlainStyle>25</TableCellPlainStyle>
              </tr>
              <tr>
                <TableCellLeftStyle>Teacher:</TableCellLeftStyle>
                <TableCellPlainStyle>Mr. John Doe</TableCellPlainStyle>
              </tr>
              <tr>
                <TableCellLeftStyle>Subjects Count: </TableCellLeftStyle>
                <TableCellPlainStyle>4</TableCellPlainStyle>
              </tr>
              <tr>
                <TableCellLeftStyle>Subjects:</TableCellLeftStyle>
                <TableCellPlainStyle>
                  Mathematics, English, Science, Social Studies
                </TableCellPlainStyle>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={tableContainerStyle}>
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <TableHeaderStyle>Number</TableHeaderStyle>
                <TableHeaderStyle>Name</TableHeaderStyle>
                <TableHeaderStyle>Age</TableHeaderStyle>
                <TableHeaderStyle>Sex</TableHeaderStyle>
                <TableHeaderStyle>Actions</TableHeaderStyle>
              </tr>
            </thead>
            <tbody>
              {classStudents.map((student) => (
                <tr key={student.id}>
                  <TableCellStyle>{student.id}</TableCellStyle>
                  <TableCellStyle>{student.name}</TableCellStyle>
                  <TableCellStyle>{student.age}</TableCellStyle>
                  <TableCellStyle>{student.sex}</TableCellStyle>
                  <TableCellStyle>
                    <Link to="">View Details</Link>
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

const TableCellLeftStyle = styled.td`
  padding: 12px;
  text-align: start;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  width: 160px;
  border-bottom: 1px solid #ddd;
`;

const TableCellPlainStyle = styled.td`
  padding: 12px;
  text-align: start;
  border-bottom: 1px solid #ddd;
`;

const TableCellStyle = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: start;
`;

export default ClassDetails;
