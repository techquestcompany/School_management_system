import React from "react";
import { render, screen } from "@testing-library/react";
import MyProfile from "../../../Pages/TeacherDashboard/profile/MyProfile";

describe("MyProfile Component", () => {
  test("renders the title 'My Profile'", () => {
    render(<MyProfile />);
    expect(screen.getByText("My Profile")).toBeInTheDocument();
  });

  test("renders profile picture with correct alt text", () => {
    render(<MyProfile />);
    const profileImage = screen.getByAltText("Profile");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute(
      "src",
      "https://picsum.photos/seed/picsum/200/300"
    );
  });

  test("renders the teacher's name", () => {
    render(<MyProfile />);
    expect(screen.getByText("Gregory Asamoah")).toBeInTheDocument();
  });

  test("renders class and student count", () => {
    render(<MyProfile />);
    expect(screen.getByText("Grade Seven")).toBeInTheDocument();
    expect(screen.getByText("140 students")).toBeInTheDocument();
  });

  test("renders the subjects list", () => {
    render(<MyProfile />);
    const subjects = [
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

    // Ensure each subject is rendered
    subjects.forEach((subject) => {
      expect(screen.getByText(subject)).toBeInTheDocument();
    });
  });

  test("renders 'About Me' section and description", () => {
    render(<MyProfile />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(
      screen.getByText(
        "The details below are personal details about you and can only be seen by you and management"
      )
    ).toBeInTheDocument();
  });

  test("renders profile details table with correct data", () => {
    render(<MyProfile />);
    const profileDetails = [
      { title: "Full Name", value: "Gregory Asamoah" },
      { title: "Date Of Birth", value: "01/01/1990" },
      { title: "Sex", value: "Male" },
      { title: "Marital Status", value: "Single" },
      { title: "Address", value: "123 Street, Accra" },
      { title: "Phone Number", value: "024 123 4567" },
      { title: "Email", value: "greg@email.com" },
      { title: "Nationality", value: "Ghanaian" },
      { title: "Qualification", value: "Degree" },
      { title: "SSNIT Number", value: "None" },
      { title: "Ghana Card Number", value: "GHA102369" },
      { title: "Next of Kin", value: "Solomon Adjei" },
      { title: "Next of Kin Address", value: "None" },
      { title: "Next of Kin Phone", value: "2024157896" },
      { title: "Incase of Emergency", value: "Solomon Adjei" },
      { title: "Incase of Emergency Address", value: "None" },
      { title: "Incase of Emergency Phone", value: "2024157896" },
    ];

    // Check if all profile info is rendered correctly
    profileDetails.forEach((info) => {
      expect(screen.getByText(info.title)).toBeInTheDocument();
      expect(screen.getByText(info.value)).toBeInTheDocument();
    });
  });
});
