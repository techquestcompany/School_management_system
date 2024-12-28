import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Students from "../../../Pages/TeacherDashboard/students/Students";

describe("Students Component", () => {
  test("renders the title 'Students List'", () => {
    render(<Students />);
    expect(screen.getByText("Students List")).toBeInTheDocument();
  });

  test("renders the search input and class filter dropdown", () => {
    render(<Students />);

    // Check for search input
    const searchInput = screen.getByPlaceholderText("Search by name...");
    expect(searchInput).toBeInTheDocument();

    // Check for class filter dropdown
    const filterDropdown = screen.getByRole("combobox");
    expect(filterDropdown).toBeInTheDocument();

    // Check dropdown options
    expect(screen.getByText("All Classes")).toBeInTheDocument();
    expect(screen.getByText("Basic One")).toBeInTheDocument();
    expect(screen.getByText("Basic Two")).toBeInTheDocument();
    expect(screen.getByText("Basic Three")).toBeInTheDocument();
  });

  test("renders the table headers correctly", () => {
    render(<Students />);

    // Check for table headers
    expect(screen.getByText("Number")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Sex")).toBeInTheDocument();
    expect(screen.getByText("Class")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  test("renders all students in the table", () => {
    render(<Students />);

    // Check that each student's name is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Michael Johnson")).toBeInTheDocument();
    expect(screen.getByText("Emily Davis")).toBeInTheDocument();
    expect(screen.getByText("Daniel Brown")).toBeInTheDocument();

    // Check student-specific data
    expect(screen.getByText("12")).toBeInTheDocument(); // Age of John Doe
    expect(screen.getByText("Basic One")).toBeInTheDocument(); // Class of Jane Smith
    expect(screen.getByText("Male")).toBeInTheDocument(); // Gender of Michael Johnson
  });

  test("filters students by name using the search input", () => {
    render(<Students />);

    // Get the search input
    const searchInput = screen.getByPlaceholderText("Search by name...");

    // Simulate typing in the search input
    fireEvent.change(searchInput, { target: { value: "Jane" } });

    // Check filtered result
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  });

  test("filters students by class using the dropdown", () => {
    render(<Students />);

    // Get the class filter dropdown
    const filterDropdown = screen.getByRole("combobox");

    // Simulate selecting a class
    fireEvent.change(filterDropdown, { target: { value: "Basic One" } });

    // Check filtered result
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.queryByText("Michael Johnson")).not.toBeInTheDocument();
  });

  test("renders a 'View' button for each student", () => {
    render(<Students />);

    // Check that each student row contains a "View" button
    const viewButtons = screen.getAllByText("View");
    expect(viewButtons).toHaveLength(11); // Based on the provided data
  });

  test("renders the footer with entries information", () => {
    render(<Students />);
    expect(screen.getByText("Showing 1 to 9 entries")).toBeInTheDocument();
  });
});
