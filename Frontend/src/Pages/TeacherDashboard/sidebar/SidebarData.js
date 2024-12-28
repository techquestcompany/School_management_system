import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { FaListCheck } from "react-icons/fa6";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdOutlineTopic } from "react-icons/md";
import { CgNotes, CgProfile } from "react-icons/cg";
import { PiExamBold } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";

export const SidebarData = [
  {
    title: "Overview",
    icon: <AiIcons.AiFillHome />,
    path: "/dashboardTeacher",
  },
  {
    title: "My Profile",
    icon: <CgProfile />,
    path: "/dashboardTeacher/profile",
  },
  {
    title: "Classes",
    icon: <IoPeople />,
    path: "/dashboardTeacher/classes",
  },
  {
    title: "Students",
    icon: <IoPeople />,
    path: "/dashboardTeacher/students",
  },
  {
    title: "Attendance",
    icon: <FaListCheck />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    path: "/dashboardTeacher/attendance",
  },
  {
    title: "Assignment",
    icon: <MdAssignmentTurnedIn />,
    path: "",
  },
  {
    title: "Subjects",
    icon: <MdOutlineTopic />,
    path: "",
  },
  {
    title: "Lesson Notes",
    icon: <CgNotes />,
    path: "/dashboardTeacher/lessonsNotes",
  },
  {
    title: "Examination",
    icon: <PiExamBold />,
    path: "/dashboardTeacher/examination",
  },
  {
    title: "Logout",
    icon: <LuLogOut />,
    path: "",
  },
];
