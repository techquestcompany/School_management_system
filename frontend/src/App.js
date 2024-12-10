import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import TeacherSignup from './Components/Signup/TeacherSignup';
import ParentSignup from './Components/Signup/Parents';
import HomePage from './Pages/Homepage';
import AdminPortal from "./Pages/Admin/AdminPortal.jsx"

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
