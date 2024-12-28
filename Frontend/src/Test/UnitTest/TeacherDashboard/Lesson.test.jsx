import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Lesson from "../../../Pages/TeacherDashboard/lessonNotes/Lesson";

describe("Lesson Component", () => {
  test("renders the title 'Lesson notes for Basic One'", () => {
    render(
      <MemoryRouter>
        <Lesson />
      </MemoryRouter>
    );

    // Check if the title is rendered
    expect(screen.getByText("Lesson notes for Basic One")).toBeInTheDocument();
  });

  test("renders 'Edit Lesson' and 'Go back to Lessons' buttons with correct links", () => {
    render(
      <MemoryRouter>
        <Lesson />
      </MemoryRouter>
    );

    // Check 'Edit Lesson' button
    const editButton = screen.getByText("Edit Lesson");
    expect(editButton).toBeInTheDocument();
    expect(editButton.closest("a")).toHaveAttribute(
      "href",
      "/dashboardTeacher/lessonsNotes"
    );

    // Check 'Go back to Lessons' button
    const backButton = screen.getByText("Go back to Lessons");
    expect(backButton).toBeInTheDocument();
    expect(backButton.closest("a")).toHaveAttribute(
      "href",
      "/dashboardTeacher/lessonsNotes"
    );
  });

  test("renders the lesson details table with correct data", () => {
    render(
      <MemoryRouter>
        <Lesson />
      </MemoryRouter>
    );

    // Verify each lesson detail is rendered
    expect(screen.getByText("1. Topic")).toBeInTheDocument();
    expect(screen.getByText("Introduction to Algebra")).toBeInTheDocument();

    expect(screen.getByText("2. Subject")).toBeInTheDocument();
    expect(screen.getByText("Mathematics")).toBeInTheDocument();

    expect(screen.getByText("3. Lesson Number")).toBeInTheDocument();
    expect(screen.getByText("Lesson 5")).toBeInTheDocument();

    expect(screen.getByText("4. Date")).toBeInTheDocument();
    expect(screen.getByText("Monday, 27th November 2023")).toBeInTheDocument();

    expect(screen.getByText("5. Duration")).toBeInTheDocument();
    expect(
      screen.getByText("Understand basic algebraic principles.")
    ).toBeInTheDocument();
    expect(screen.getByText("Apply algebra in solving equations.")).toBeInTheDocument();
    expect(screen.getByText("Develop problem-solving skills.")).toBeInTheDocument();

    expect(screen.getByText("6. Materials/Resources")).toBeInTheDocument();
    expect(screen.getByText("Whiteboard and markers")).toBeInTheDocument();
    expect(screen.getByText("Graph paper")).toBeInTheDocument();
    expect(screen.getByText("Algebra textbook")).toBeInTheDocument();

    expect(screen.getByText("7. Activities")).toBeInTheDocument();
    expect(
      screen.getByText(/Warm-up: Solve a simple algebraic equation./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Lecture: Explain the concepts of variables and constants./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Practice: Solve sample problems in groups./i)
    ).toBeInTheDocument();

    expect(screen.getByText("8. Assessment")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Evaluate students' understanding through a quick quiz on solving algebraic equations./i
      )
    ).toBeInTheDocument();

    expect(screen.getByText("9. Notes for the Next Lesson")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Prepare for "Solving Quadratic Equations" with more real-world examples./i
      )
    ).toBeInTheDocument();
  });
});
