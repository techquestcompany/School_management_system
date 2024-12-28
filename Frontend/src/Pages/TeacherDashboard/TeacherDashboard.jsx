import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";
import "./TeacherDashboard.css";

function TeacherDashboard({ children }) {
  return (
    <div style={{ display: "flex", background: "#E2EBE8" }}>
      <Sidebar />
      <div className="main-container">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default TeacherDashboard;
