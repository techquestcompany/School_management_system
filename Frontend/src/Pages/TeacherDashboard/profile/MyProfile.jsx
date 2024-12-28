import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import "./MyProfile.css";

const profileInfo = [
  {
    title: "Full Name",
    value: "Gregory Asamoah",
  },
  {
    title: "Date Of Birth",
    value: "01/01/1990",
  },
  {
    title: "Sex",
    value: "Male",
  },
  {
    title: "Marital Status",
    value: "Single",
  },
  {
    title: "Address",
    value: "123 Street, Accra",
  },
  {
    title: "Phone Number",
    value: "024 123 4567",
  },
  {
    title: "Email",
    value: "greg@email.com",
  },
  {
    title: "Nationality",
    value: "Ghanaian",
  },
  {
    title: "Qualification",
    value: "Degree",
  },
  {
    title: "SSNIT Number",
    value: "None",
  },
  {
    title: "Ghana Card Number",
    value: "GHA102369",
  },
  {
    title: "Next of Kin",
    value: "Solomon Adjei",
  },
  {
    title: "Next of Kin Address",
    value: "None",
  },
  {
    title: "Next of Kin Phone",
    value: "2024157896",
  },
  {
    title: "Incase of Emergency",
    value: "Solomon Adjei",
  },
  {
    title: "Incase of Emergency Address",
    value: "None",
  },
  {
    title: "Incase of Emergency Phone",
    value: "2024157896",
  },
];

const subjectsList = [
  "Mathematics",
  "Science",
  "English",
  "Social Studies",
  "ICT",
  "Geography",
  "History",
  "Religious Studies",
  "Physical Education",
  "Agriculture",
  "Home Economics",
  "French",
];
const MyProfile = () => {
  return (
    <>
      <h2 className="title">My Profile</h2>
      <div className="profile-view">
        {/* Profile Summary */}
        <div className="profile-summary">
          <div className="profile-picture">
            <img
              src={"https://picsum.photos/seed/picsum/200/300"}
              alt="Profile"
              className="profile-picture"
            />
          </div>
          <h1>Gregory Asamoah</h1>
          <div className="class-students">
            <h3 style={{ alignSelf: "center" }}>Grade Seven</h3>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FaPeopleGroup color="blue" size="32px" /> <h3>140 students</h3>
            </div>
          </div>
          <h4 style={{ width: "100%" }}>Subjects</h4>
          <hr style={{ width: "100%" }} />

          {/* Subject list */}
          <ul className="subjects-list">
            {subjectsList.map((subject, index) => {
              return (
                <li key={index}>
                  <IoIosCheckmarkCircle color="blue" /> {subject}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <h2>About Me</h2>
          <p style={{ textAlign: "center" }}>
            The details below are personal details about you and can only be
            seen by you and management
          </p>

          <table className="profile-details-table">
            <tbody>
              {profileInfo.map((info, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <h4>{info.title}</h4>
                    </td>
                    <td>{info.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
