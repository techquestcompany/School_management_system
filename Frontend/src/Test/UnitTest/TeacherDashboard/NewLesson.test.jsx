import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewLesson from "../../../Pages/TeacherDashboard/lessonNotes/NewLesson";

describe("NewLesson Component", () => {
  test("renders the title 'New Lesson'", () => {
    render(
      <MemoryRouter>
        <NewLesson />
      </MemoryRouter>
    );

    // Verify the title is displayed
    expect(screen.getByText("New Lesson")).toBeInTheDocument();
  });

  test("renders the 'Back to Lessons' button with correct link", () => {
    render(
      <MemoryRouter>
        <NewLesson />
      </MemoryRouter>
    );

    const backButton = screen.getByText("Back to Lessons");
    expect(backButton).toBeInTheDocument();
    expect(backButton.closest("a")).toHaveAttribute(
      "href",
      "/dashboardTeacher/lessonsNotes"
    );
  });

  test("renders all input fields with labels", () => {
    render(
      <MemoryRouter>
        <NewLesson />
      </MemoryRouter>
    );

    // Check input labels
    expect(screen.getByText("Topic:")).toBeInTheDocument();
    expect(screen.getByText("Subject:")).toBeInTheDocument();
    expect(screen.getByText("Lesson Number:")).toBeInTheDocument();
    expect(screen.getByText("Date:")).toBeInTheDocument();
    expect(screen.getByText("Aims and Objectives:")).toBeInTheDocument();

    // Check input fields
    expect(screen.getByPlaceholderText("Notes")).toBeInTheDocument();
    const textInputs = screen.getAllByRole("textbox");
    expect(textInputs).toHaveLength(2); // Text area for "Aims and Objectives" and "Notes"

    // Check specific input types
    const dateInput = screen.getByLabelText("Date:");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("renders the 'Save' button", () => {
    render(
      <MemoryRouter>
        <NewLesson />
      </MemoryRouter>
    );

    const saveButton = screen.getByText("Save");
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).toHaveAttribute("type", "button");
  });
});
