import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ClassDetails from "../../../Pages/TeacherDashboard/classes/ClassDetails";

describe("ClassDetails Component", () => {
  test("renders the header 'Classes Details'", () => {
    render(
      <MemoryRouter>
        <ClassDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Classes Details")).toBeInTheDocument();
  });

  test("renders class details table with correct data", () => {
    render(
      <MemoryRouter>
        <ClassDetails />
      </MemoryRouter>
    );

    // Check if class details are rendered correctly
    expect(screen.getByText("Class Name:")).toBeInTheDocument();
    expect(screen.getByText("Basic One")).toBeInTheDocument();

    expect(screen.getByText("Grade:")).toBeInTheDocument();
    expect(screen.getByText("Grade 1")).toBeInTheDocument();

    expect(screen.getByText("Student Count:")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();

    expect(screen.getByText("Teacher:")).toBeInTheDocument();
    expect(screen.getByText("Mr. John Doe")).toBeInTheDocument();

    expect(screen.getByText("Subjects Count:")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();

    expect(screen.getByText("Subjects:")).toBeInTheDocument();
    expect(
      screen.getByText("Mathematics, English, Science, Social Studies")
    ).toBeInTheDocument();
  });

  test("renders the students list with correct columns", () => {
    render(
      <MemoryRouter>
        <ClassDetails />
      </MemoryRouter>
    );

    // Check table headers
    expect(screen.getByText("Number")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Sex")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();

    // Check if a student row is rendered
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
  });

  test("renders the 'Back to classes' button", () => {
    render(
      <MemoryRouter>
        <ClassDetails />
      </MemoryRouter>
    );

    const backButton = screen.getByText("Back to classes");
    expect(backButton).toBeInTheDocument();
    expect(backButton.closest("a")).toHaveAttribute(
      "href",
      "/dashboardTeacher/classes"
    );
  });

  test("renders a 'View Details' link for each student", () => {
    render(
      <MemoryRouter>
        <ClassDetails />
      </MemoryRouter>
    );

    const viewDetailsLinks = screen.getAllByText("View Details");
    expect(viewDetailsLinks).toHaveLength(10); // There are 10 students in the list
  });
});
