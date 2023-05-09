import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "./modules/home";
import EmployeesComponent from "./modules/employee/EmployeesComponent";
import PageNotFound from "./common/components/PageNotFoundComponent";
import AddEditEmployeeComponent from "./modules/employee/AddEditEmployeeComponent";
import EmployeeListComponent from "./modules/employee/EmployeeListComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
    errorElement: <PageNotFound />,
  },
  {
    path: "employee",
    element: <EmployeesComponent />,
  },
  {
    path: "employee/list",
    element: <EmployeeListComponent />,
  },
  {
    path: "employee/add",
    element: <AddEditEmployeeComponent />,
  },
  {
    path: "employee/edit/:id",
    element: <AddEditEmployeeComponent />,
  },
]);

export default router;
