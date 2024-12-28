import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LessonNotes from "../../../Pages/TeacherDashboard/lessonNotes/LessonNotes";

jest.mock("../../../Pages/TeacherDashboard/lessonNotes/lessonsArray", () => [
  { topic: "Fractions", subject: "Mathematics", lessonNumber: 1, date: "2024-12-01" },
  { topic: "Photosynthesis", subject: "Science", lessonNumber: 2, date: "2024-12-02" },
  { topic: "Grammar", subject: "English", lessonNumber: 3, date: "2024-12-03" },
]);

describe("LessonNotes Component", () => {
  test("renders the title 'Lesson notes for Basic One'", () => {
    render(
      <MemoryRouter>
        <LessonNotes />
      </MemoryRouter>
    );

    // Verify the title is displayed
    expect(screen.getByText("Lesson notes for Basic One")).toBeInTheDocument();
  });

  test("renders the 'Add New Lesson' button with correct link", () => {
    render(
      <MemoryRouter>
        <LessonNotes />
      </MemoryRouter>
    );

    const addButton = screen.getByText("Add New Lesson");
    expect(addButton).toBeInTheDocument();
    expect(addButton.closest("a")).toHaveAttribute(
      "href",
      "/dashboardTeacher/lessonsNotes/new"
    );
  });

  test("renders the lesson table headers correctly", () => {
    render(
      <MemoryRouter>
        <LessonNotes />
      </MemoryRouter>
    );

    // Verify the table headers
    expect(screen.getByText("Topic")).toBeInTheDocument();
    expect(screen.getByText("Subject")).toBeInTheDocument();
    expect(screen.getByText("Lesson Number")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  test("renders all lessons from the lessons array", () => {
    render(
      <MemoryRouter>
        <LessonNotes />
      </MemoryRouter>
    );

    // Verify the lessons are displayed
    expect(screen.getByText("Fractions")).toBeInTheDocument();
    expect(screen.getByText("Photosynthesis")).toBeInTheDocument();
    expect(screen.getByText("Grammar")).toBeInTheDocument();

    // Verify the corresponding details
    expect(screen.getByText("Mathematics")).toBeInTheDocument();
    expect(screen.getByText("Science")).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument(); // Lesson Number 1
    expect(screen.getByText("2024-12-01")).toBeInTheDocument(); // Date
  });

  test("renders 'View Notes' link for each lesson", () => {
    render(
      <MemoryRouter>
        <LessonNotes />
      </MemoryRouter>
    );

    // Verify each lesson has a "View Notes" link
    const viewNotesLinks = screen.getAllByText("View Notes");
    expect(viewNotesLinks).toHaveLength(3); // Based on mocked lessons
    viewNotesLinks.forEach((link) => {
      expect(link.closest("a")).toHaveAttribute(
        "href",
        "/dashboardTeacher/lessonsNotes/single"
      );
    });
  });
});
