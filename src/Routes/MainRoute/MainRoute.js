import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllAppointments from "../../Pages/Dashboard/AllAppointments/AllAppointments";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppointments from "../../Pages/Dashboard/MyAppointments/MyAppointments";
import Users from "../../Pages/Dashboard/Users/Users";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><Users></Users></AdminRoute>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manage-doctor',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
            {
                path: '/dashboard/my-appointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/dashboard/all-appointments',
                element: <AllAppointments></AllAppointments>
            }
        ]
    }
])

export default router;