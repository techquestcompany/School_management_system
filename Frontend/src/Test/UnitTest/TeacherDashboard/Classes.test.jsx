import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Classes from "../../../Pages/TeacherDashboard/classes/Classes";

describe("Classes Component", () => {
  test("renders the title 'Classes List'", () => {
    render(
      <MemoryRouter>
        <Classes />
      </MemoryRouter>
    );

    // Verify the title is displayed
    expect(screen.getByText("Classes List")).toBeInTheDocument();
  });

  test("renders the table headers correctly", () => {
    render(
      <MemoryRouter>
        <Classes />
      </MemoryRouter>
    );

    // Verify each table header is displayed
    expect(screen.getByText("Class Name")).toBeInTheDocument();
    expect(screen.getByText("Grade")).toBeInTheDocument();
    expect(screen.getByText("Student Count")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  test("renders the list of classes correctly", () => {
    render(
      <MemoryRouter>
        <Classes />
      </MemoryRouter>
    );

    // Verify each class name, grade, and student count is displayed
    expect(screen.getByText("Basic One")).toBeInTheDocument();
    expect(screen.getByText("Grade 1")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();

    expect(screen.getByText("Basic Two")).toBeInTheDocument();
    expect(screen.getByText("Grade 2")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();

    expect(screen.getByText("Basic Three")).toBeInTheDocument();
    expect(screen.getByText("Grade 3")).toBeInTheDocument();
    expect(screen.getByText("28")).toBeInTheDocument();

    expect(screen.getByText("Basic Four")).toBeInTheDocument();
    expect(screen.getByText("Grade 4")).toBeInTheDocument();
    expect(screen.getByText("32")).toBeInTheDocument();
  });

  test("renders 'View Details' links for each class", () => {
    render(
      <MemoryRouter>
        <Classes />
      </MemoryRouter>
    );

    // Verify there are 4 "View Details" links
    const viewDetailsLinks = screen.getAllByText("View Details");
    expect(viewDetailsLinks).toHaveLength(4);

    // Verify the links point to the correct URL
    viewDetailsLinks.forEach((link) => {
      expect(link.closest("a")).toHaveAttribute(
        "href",
        "/dashboardTeacher/class-details"
      );
    });
  });
});
