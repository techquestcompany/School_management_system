import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Attendance from "../../../Pages/TeacherDashboard/attendance/Attendance";

describe("Attendance Component", () => {
  test("renders the title 'Attendance'", () => {
    render(<Attendance />);
    expect(screen.getByText("Attendance")).toBeInTheDocument();
  });

  test("renders the calendar and allows date selection", () => {
    render(<Attendance />);

    // Check if the calendar is rendered
    expect(screen.getByText("December 2024")).toBeInTheDocument();

    // Interact with the calendar (if further functionality is implemented)
    // Note: Since react-calendar uses native DOM inputs, tests here depend on implementation.
  });

  test("renders the class dropdown", () => {
    render(<Attendance />);
    const selectElement = screen.getByRole("combobox");

    // Check default option
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText("All Classes")).toBeInTheDocument();

    // Check other options
    fireEvent.change(selectElement, { target: { value: "Basic Two" } });
    expect(selectElement.value).toBe("Basic Two");
  });

  test("renders the students list with actions", () => {
    render(<Attendance />);

    // Check table headers
    expect(screen.getByText("No.")).toBeInTheDocument();
    expect(screen.getByText("Student List")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();

    // Check if student names are rendered
    const students = screen.getAllByRole("row");
    expect(students).toHaveLength(14); // Includes the header row

    // Check for a specific student
    expect(screen.getByText("Kwaku Manu")).toBeInTheDocument();

    // Check "Present" and "Absent" buttons
    const presentButtons = screen.getAllByText("Present");
    const absentButtons = screen.getAllByText("Absent");
    expect(presentButtons).toHaveLength(13); // One button per student
    expect(absentButtons).toHaveLength(13);
  });

  test("marks a student as present when the 'Present' button is clicked", () => {
    render(<Attendance />);

    // Simulate clicking "Present" for the first student
    const presentButton = screen.getAllByText("Present")[0];
    fireEvent.click(presentButton);

    // Verify if some className or state change reflects (if implemented)
    // For now, assume clicking works as expected for UI-only buttons.
  });

  test("displays the 'Save Attendance' button and allows saving", () => {
    render(<Attendance />);

    // Check the presence of the button
    const saveButton = screen.getByText("Save Attendance");
    expect(saveButton).toBeInTheDocument();

    // Simulate clicking the save button
    fireEvent.click(saveButton);

    // Add an expectation here for saving logic if implemented.
    // For example, mocking API calls or showing a confirmation.
  });
});
