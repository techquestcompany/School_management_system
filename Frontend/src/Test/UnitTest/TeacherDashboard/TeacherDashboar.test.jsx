import React from "react";
import { render, screen } from "@testing-library/react";
import TeacherDashboard from "../../../Pages/TeacherDashboard/TeacherDashboard";

jest.mock("../../../Pages/TeacherDashboard/sidebar/Sidebar", () => () => <div>Mock Sidebar</div>);
jest.mock("../../../Pages/TeacherDashboard/Navbar", () => () => <div>Mock Navbar</div>);

describe("TeacherDashboard Component", () => {
  test("renders the sidebar", () => {
    render(
      <TeacherDashboard>
        <div>Mock Children</div>
      </TeacherDashboard>
    );

    // Check if the sidebar is rendered
    expect(screen.getByText("Mock Sidebar")).toBeInTheDocument();
  });

  test("renders the navbar", () => {
    render(
      <TeacherDashboard>
        <div>Mock Children</div>
      </TeacherDashboard>
    );

    // Check if the navbar is rendered
    expect(screen.getByText("Mock Navbar")).toBeInTheDocument();
  });

  test("renders children passed to the component", () => {
    render(
      <TeacherDashboard>
        <div>Mock Children</div>
      </TeacherDashboard>
    );

    // Check if the children are rendered
    expect(screen.getByText("Mock Children")).toBeInTheDocument();
  });

  test("has correct container styles", () => {
    render(
      <TeacherDashboard>
        <div>Mock Children</div>
      </TeacherDashboard>
    );

    // Check if the container has the correct background style
    const dashboardContainer = screen.getByText("Mock Sidebar").closest("div");
    expect(dashboardContainer).toHaveStyle("display: flex");
    expect(dashboardContainer).toHaveStyle("background: #E2EBE8");
  });
});
