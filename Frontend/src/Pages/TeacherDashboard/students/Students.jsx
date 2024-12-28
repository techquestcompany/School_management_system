import React, { useState } from "react";
import "./Students.css";
import { tableContainerStyle } from "../styles/teacherDashboardStyles";
import styled from "styled-components";
import { IoIosPerson } from "react-icons/io";

const Students = () => {
  const [students, setStudents] = useState([
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
    {
      id: 6,
      name: "John Doe",
      age: 12,
      sex: "Male",
      class: "Basic One",
    },
    {
      id: 15,
      name: "Jane Smith",
      age: 11,
      sex: "Female",
      class: "Basic One",
    },
    {
      id: 8,
      name: "John Doe",
      age: 12,
      sex: "Male",
      class: "Basic One",
    },
    {
      id: 9,
      name: "Jane Smith",
      age: 11,
      sex: "Female",
      class: "Basic One",
    },
    {
      id: 10,
      name: "John Doe",
      age: 12,
      sex: "Male",
      class: "Basic One",
    },
    {
      id: 11,
      name: "Jane Smith",
      age: 11,
      sex: "Female",
      class: "Basic One",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClassFilter = (e) => {
    setFilterClass(e.target.value);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterClass === "" || student.class === filterClass)
  );

  return (
    <>
      <h2 className="title">Students List</h2>

      <div className="student-information">
        <div>
          <div className="filters">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={handleSearchChange}
            />
            <select value={filterClass} onChange={handleClassFilter}>
              <option value="">All Classes</option>
              <option value="Basic One">Basic One</option>
              <option value="Basic Two">Basic Two</option>
              <option value="Basic Three">Basic Three</option>
            </select>
          </div>
          <hr style={{margin: "12px 0", width: "100%"}}/>

          <div style={tableContainerStyle}>
            <table className="student-table" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <TableHeaderStyle></TableHeaderStyle>
                  <TableHeaderStyle>Number</TableHeaderStyle>
                  <TableHeaderStyle>Name</TableHeaderStyle>
                  <TableHeaderStyle>Age</TableHeaderStyle>
                  <TableHeaderStyle>Sex</TableHeaderStyle>
                  <TableHeaderStyle>Class</TableHeaderStyle>
                  <TableHeaderStyle>Actions</TableHeaderStyle>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student.id}>
                    <TableCellImageStyle>
                      <IoIosPerson size="52px" />
                    </TableCellImageStyle>
                    <TableCellSmallStyle>{index + 1}</TableCellSmallStyle>
                    <TableCellStyle>{student.name}</TableCellStyle>
                    <TableCellSmallStyle>{student.age}</TableCellSmallStyle>
                    <TableCellSmallStyle>{student.sex}</TableCellSmallStyle>
                    <TableCellStyle>{student.class}</TableCellStyle>
                    <TableCellStyle>
                      <button style={{ width: "100%" }}>View</button>
                    </TableCellStyle>
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
  text-align: start;
`;

const TableCellSmallStyle = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: start;
  width: 50px;
`;
const TableCellImageStyle = styled.td`
  text-align: center;
  padding: 0px;
  border: 1px solid #ddd;
  width: 80px;
`;

export default Students;
