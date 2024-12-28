import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TeacherSignup from "./Components/Signup/TeacherSignup";
import ParentSignup from "./Components/Signup/Parents";
import HomePage from "./Pages/Homepage";
import TeacherDashboard from "./Pages/TeacherDashboard/TeacherDashboard.jsx";
import { Suspense } from "react";
import Attendance from "./Pages/TeacherDashboard/attendance/Attendance.jsx";
import MyProfile from "./Pages/TeacherDashboard/profile/MyProfile.jsx";
import LessonNotes from "./Pages/TeacherDashboard/lessonNotes/LessonNotes.jsx";
import Lesson from "./Pages/TeacherDashboard/lessonNotes/Lesson.jsx";
import NewLesson from "./Pages/TeacherDashboard/lessonNotes/NewLesson.jsx";
import Overview from "./Pages/TeacherDashboard/overview/Overview.jsx";
import Classes from "./Pages/TeacherDashboard/classes/Classes.jsx";
import Students from "./Pages/TeacherDashboard/students/Students.jsx";
import ClassDetails from "./Pages/TeacherDashboard/classes/ClassDetails.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/teacherSignup",
      element: <TeacherSignup />,
    },
    {
      path: "/parentSignup",
      element: <ParentSignup />,
    },
    {
      path: "/dashboardTeacher",
      element: (
        <TeacherDashboard>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </TeacherDashboard>
      ),
      children: [
        {
          path: "/dashboardTeacher",
          element: <Overview />,
        },
        {
          path: "/dashboardTeacher/profile",
          element: <MyProfile />,
        },
        {
          path: "/dashboardTeacher/classes",
          element: <Classes />,
        },
        {
          path: "/dashboardTeacher/class-details",
          element: <ClassDetails />,
        },
        {
          path: "/dashboardTeacher/students",
          element: <Students />,
        },
        {
          path: "/dashboardTeacher/attendance",
          element: <Attendance />,
        },
        {
          path: "/dashboardTeacher/lessonsNotes",
          element: <LessonNotes />,
        },
        {
          path: "/dashboardTeacher/lessonsNotes/single",
          element: <Lesson />,
        },
        {
          path: "/dashboardTeacher/lessonsNotes/new",
          element: <NewLesson />,
        },
        {
          path: "/dashboardTeacher/examination",
          element: <div>examination</div>,
        },
      ],
    },
  ]);

  return <div>{<RouterProvider router={router} />}</div>;
};
export default App;
