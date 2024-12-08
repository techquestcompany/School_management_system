import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import TeacherSignup from './Components/Signup/TeacherSignup';
import ParentSignup from './Components/Signup/Parents';
import HomePage from './Pages/Homepage';
import AdminPortal from "./Pages/Admin/AdminPortal.jsx"
import GetAllTeachers from './Pages/Teachers/getAllTeachers.jsx';
import Sidebar from './Pages/Sidebar/TeachersSidebar.jsx';
import Header from './Components/Header.jsx';
import AdminDashboard from './Pages/Dashboard/AdminDashboard.jsx';
import Parents from './Pages/Parents/Parents.jsx';
import Teachers from './Pages/Teachers/Teachers.jsx';
import Finance from './Pages/Finance/Finance.jsx';

const App=()=>{
  
  
  const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/teacherSignup",
    element:<TeacherSignup/>
  },
  {
    path:"/parentSignup",
    element:<ParentSignup/>
  }
,
  {
  path:"/admin/",
  element:<AdminPortal/>
  },
  {
    path:"/admin/parents",
    element: <Parents/>
  },
  {
    path:"/admin/finance",
    element:<Finance/>
  },
  {
   path:"/getAllTeachers",
    element:<GetAllTeachers/>
  },
  {
    path:"/sideBar",
    element:<Sidebar/>
  }
])

return(
  <div>
    {
      <RouterProvider router={router} />
    }

  </div>
)
}
export default App;
