import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "./modules/home";
import EmployeesComponent from "./modules/employee/EmployeesComponent";
import AppErrorComponent from "./common/components/AppErrorComponent";
import AddEditEmployeeComponent from "./modules/employee/AddEditEmployeeComponent";
import EmployeeListComponent from "./modules/employee/EmployeeListComponent";

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
    element: <EmployeeListComponent />,
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
