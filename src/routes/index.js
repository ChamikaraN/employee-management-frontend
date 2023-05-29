import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "../components/pages/Home";
import EmployeesComponent from "../components/pages/Employee/HomePage";
import EmployeesListComponent from "../components/pages/Employee/ListPage";
import AppErrorComponent from "../components/AppErrorComponent";
import AddEditEmployeeComponent from "../components/pages/Employee/AddEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
    errorElement: <AppErrorComponent />,
  },
  {
    path: "employee",
    element: <EmployeesComponent />,
    errorElement: <AppErrorComponent />,
  },
  {
    path: "employee/list",
    element: <EmployeesListComponent />,
    errorElement: <AppErrorComponent />,
  },
  {
    path: "employee/add",
    element: <AddEditEmployeeComponent />,
    errorElement: <AppErrorComponent />,
  },
  {
    path: "employee/edit/:id",
    element: <AddEditEmployeeComponent />,
    errorElement: <AppErrorComponent />,
  },
]);

export default router;
