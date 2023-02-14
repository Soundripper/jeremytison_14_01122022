import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import EmployeeList from "../pages/EmployeeList/EmployeeList";
import { Navigate } from "react-router-dom";

interface RouteI {
    path: string,
    component: any
}

export const routesArray:RouteI[] = [
    {
        path: "/",
        component: <CreateEmployee />
    },
    {
        path: "/employee-list",
        component: <EmployeeList />
    },
    {
        path: "*",
        component: <Navigate replace to='/'/>
    }
]