import React from "react";
import { render, screen } from "@testing-library/react";
import Overview from "../../../Pages/TeacherDashboard/overview/Overview";

describe("Overview Component", () => {
  test("renders the title 'Overview'", () => {
    render(<Overview />);
    expect(screen.getByText("Overview")).toBeInTheDocument();
  });

  test("renders all metrics cards with correct data", () => {
    render(<Overview />);

    // Check for metric titles and counts
    expect(screen.getByText("6 Classes")).toBeInTheDocument();
    expect(screen.getByText("120 Students")).toBeInTheDocument();
    expect(screen.getByText("12 Subjects")).toBeInTheDocument();

    // Check for icons
    expect(screen.getByText("📚")).toBeInTheDocument();
    expect(screen.getByText("👩‍🎓")).toBeInTheDocument();
  });

  test("renders the 'Students List' section", () => {
    render(<Overview />);

    // Check for the table headers
    expect(screen.getByText("Number")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Sex")).toBeInTheDocument();
    expect(screen.getByText("Class")).toBeInTheDocument();
  });

  test("renders all students in the table with correct data", () => {
    render(<Overview />);

    // Check student rows
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Michael Johnson")).toBeInTheDocument();
    expect(screen.getByText("Emily Davis")).toBeInTheDocument();
    expect(screen.getByText("Daniel Brown")).toBeInTheDocument();

    // Check student-specific data
    expect(screen.getByText("12")).toBeInTheDocument(); // Age of John Doe
    expect(screen.getByText("Basic One")).toBeInTheDocument(); // Class for Jane Smith
    expect(screen.getByText("Male")).toBeInTheDocument(); // Gender for Michael Johnson
  });

  test("renders the entries information below the table", () => {
    render(<Overview />);

    // Check for the footer text
    expect(screen.getByText("Showing 1 to 9 entries")).toBeInTheDocument();
  });
});
