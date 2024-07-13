import AddDoctors from "../admin/addDoctors/AddDoctors";
import Appoinments from "../admin/appoinments/Appoinments";
import Dashboard from "../admin/dashboard/Dashboard";
import AdminLayout from "../admin/layout/AdminLayout";
import AdminLogin from "../admin/login/AdminLogin";
import Appoinment from "../client/appoinment/Appoinment";
import Login from "../client/auth/login/Login";
import SignUp from "../client/auth/registration/SignUp";
import DoctorCatagory from "../client/doctorCatagory/DoctorCatagory";
import DoctorProfile from "../client/doctors/DoctorProfile";
import Doctors from "../client/doctors/Doctors";
import Payment from "../client/payment/Payment";
import Services from "../client/services/Services";
import Home from "../home/Home";
import Contact from "../home/component/contact/Contact";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/adminlayout",
    element: <AdminLayout />,
  },
  {
    path: "/doctor/:name",
    element: <DoctorProfile />,
  },
  {
    path: "/addDoctors",
    element: <AddDoctors />,
  },
  {
    path: "/doctorCatagory/:name",
    element: <DoctorCatagory />,
  },
  {
    path: "/appoinment/:name",
    element: <Appoinment />,
  },
  {
    path: "/admin/appoinment",
    element: <Appoinments />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
];
