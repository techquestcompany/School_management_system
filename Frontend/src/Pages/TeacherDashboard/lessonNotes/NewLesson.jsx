import styled from "styled-components";
import { Link } from "react-router-dom";

// Add new lesson to add new lesson or even edit lessons
const NewLesson = () => {
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
          <h2 className="title">New Lesson</h2>
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
              Back to Lessons
            </button>
          </Link>
        </div>

        <div style={formContainer}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 2,
              background: "#FFF",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={inputContainer}>
              <InputLabel htmlFor="text">Topic: </InputLabel>
              <InputStyle type="text" />
            </div>

            <div style={inputContainer}>
              <InputLabel htmlFor="text">Subject: </InputLabel>
              <InputStyle type="text" />
            </div>

            <div style={inputContainer}>
              <InputLabel htmlFor="text">Lesson Number: </InputLabel>
              <InputStyle type="text" />
            </div>

            <div style={inputContainer}>
              <InputLabel htmlFor="text">Date: </InputLabel>
              <InputStyle type="date" />
            </div>

            <div style={inputContainer}>
              <InputLabel htmlFor="text">Aims and Objectives: </InputLabel>
              <textarea rows={8} />
              {/* <InputStyle type="text" /> */}
            </div>
          </div>

          <textarea
            rows={15}
            style={{
              width: "600px",
              padding: "8px",
              flex: 3,
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
            placeholder="Notes"
          />
        </div>
        <SaveButton>Save</SaveButton>
      </div>
    </>
  );
};

const inputContainer = {
  display: "flex",
  flexDirection: "column",
  padding: "12px",
};

const formContainer = {
  display: "flex",
  borderRadius: "8px",
  padding: "12px",
  gap: "40px",
  minHeight: "70vh",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const InputStyle = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  border-radius: 5px;
`;

const InputLabel = styled.label`
  margin-bottom: 12px;
`;

const SaveButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
  width: 200px;
`;

export default NewLesson;
