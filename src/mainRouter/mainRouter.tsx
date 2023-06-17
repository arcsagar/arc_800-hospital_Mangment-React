import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import DoctorList from "../components/Admin/DoctorsList/DoctorsList";
import PatientList from "../components/Admin/PatientsList/PatinetsList";
import Login from "../components/Auth/Login";
import Profile from "../components/Patient/Profile/Profile";
import MyAppointment from "../components/Patient/MyAppointment/MyAppointment";
import BookAppointment from "../components/Patient/BookAppointment/BookAppointment";
import DoctorProfile from "../components/Doctor/Profile/DoctorProfile";
import DoctorAppointment from "../components/Doctor/MyAppointment/DoctorAppointment";
import SetAppointment from "../components/Doctor/SetAppointment/SetAppointment";

import { Suspense, lazy } from "react";

const UserComponentMethod = lazy(() =>  import('../MainComponent/UserComponent'))
const DoctorComponentMethod = lazy(() => import('../MainComponent/DoctorComponent'));
const AdminComponentMethod = lazy(() => import('../MainComponent/AdminComponent'));
 const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: '/admin',
      element: <Suspense><AdminComponentMethod /></Suspense>,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
        {
          path: "/admin/doctor",
          element: <DoctorList />,
        },
        {
          path: "/admin/patient",
          element: <PatientList />,
        },
      ],
    },
    {
      path: '/user',
      element: <Suspense><UserComponentMethod /></Suspense>,
      children: [
        {
          path: "/user",
          element: <Profile />,
        },
        {
          path: "/user/myappointment",
          element: <MyAppointment />,
        },
        {
          path: "/user/bookAppointment",
          element: <BookAppointment />,
        },
      ],
    },
    {
      path: '/doctor',
      element: <Suspense><DoctorComponentMethod /></Suspense>,
      children: [
        {
          path: "/doctor",
          element: <DoctorProfile />,
        },
        {
          path: "/doctor/myappointment",
          element: <DoctorAppointment />,
        },
        {
          path: "/doctor/setappointment",
          element: <SetAppointment />,
        },
      ],
    }
  ]);

  export default mainRouter;