import styled from "styled-components";
import { Link } from "react-router-dom";
import { tableContainerStyle } from "../styles/teacherDashboardStyles";

const Lesson = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="title">Lesson notes for Basic One</h2>
          <div>
            <Link to="/dashboardTeacher/lessonsNotes">
              <button
                style={{
                  padding: "12px",
                  backgroundColor: "green",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              >
                Edit Lesson
              </button>
            </Link>

            <Link to="/dashboardTeacher/lessonsNotes">
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Go back to Lessons
              </button>
            </Link>
          </div>
        </div>
        <div style={tableContainerStyle}>
          <TableStyle>
            <tbody>
              <TableRowStyle>
                <TableCellItemStyle>1. Topic</TableCellItemStyle>
                <TableCellStyle>Introduction to Algebra</TableCellStyle>
              </TableRowStyle>

              <TableRowStyle>
                <TableCellItemStyle>2. Subject</TableCellItemStyle>
                <TableCellStyle>Mathematics</TableCellStyle>
              </TableRowStyle>

              <TableRowStyle>
                <TableCellItemStyle>3. Lesson Number</TableCellItemStyle>
                <TableCellStyle>Lesson 5</TableCellStyle>
              </TableRowStyle>

              <TableRowStyle>
                <TableCellItemStyle>4. Date</TableCellItemStyle>
                <TableCellStyle>Monday, 27th November 2023</TableCellStyle>
              </TableRowStyle>

              <TableRowStyle>
                <TableCellItemStyle>5. Duration</TableCellItemStyle>
                <TableCellStyle>
                  <li>Understand basic algebraic principles.</li>
                  <li>Apply algebra in solving equations.</li>
                  <li>Develop problem-solving skills.</li>
                </TableCellStyle>
              </TableRowStyle>

              <TableRowStyle>
                <TableCellItemStyle>6. Materials/Resources</TableCellItemStyle>
                <TableCellStyle>
                  <li>Whiteboard and markers</li>
                  <li>Graph paper</li>
                  <li>Algebra textbook</li>
                </TableCellStyle>
              </TableRowStyle>

              <TableRowStyle>
                <TableCellItemStyle>7. Activities</TableCellItemStyle>
                <TableCellStyle>
                  <p>
                    - Warm-up: Solve a simple algebraic equation.
                    <br />
                    - Lecture: Explain the concepts of variables and constants.
                    <br />- Practice: Solve sample problems in groups.
                  </p>
                </TableCellStyle>
              </TableRowStyle>

              <TableRowStyle>
                <TableCellItemStyle>8. Assessment</TableCellItemStyle>
                <TableCellStyle>
                  Evaluate students' understanding through a quick quiz on
                  solving algebraic equations.
                </TableCellStyle>
              </TableRowStyle>

              <TableRowStyle>
                <TableCellItemStyle>
                  9. Notes for the Next Lesson
                </TableCellItemStyle>
                <TableCellStyle>
                  Prepare for "Solving Quadratic Equations" with more real-world
                  examples.
                </TableCellStyle>
              </TableRowStyle>
            </tbody>
          </TableStyle>
        </div>
      </div>
    </>
  );
};

const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const TableRowStyle = styled.tr`
  padding: 12px;
`;

const TableCellItemStyle = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  width: 300px;
  font-weight: bold;
  text-align: start;
  justify-content: start;
  vertical-align: top;
`;

const TableCellStyle = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

export default Lesson;
