import { Link } from "react-router-dom";
import lessons from "./lessonsArray";
import { tableContainerStyle, tableHeaderStyle } from "../styles/teacherDashboardStyles";

const LessonNotes = () => {
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
          <Link to="/dashboardTeacher/lessonsNotes/new">
            <button
              style={{
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Add New Lesson
            </button>
          </Link>
        </div>

        <div style={tableContainerStyle}>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              background: "white",
            }}
          >
            <thead style={tableHeaderStyle}>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Topic
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Subject
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Lesson Number
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Date
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {lesson.topic}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {lesson.subject}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {lesson.lessonNumber}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {lesson.date}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <Link to="/dashboardTeacher/lessonsNotes/single">
                      View Notes
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LessonNotes;
