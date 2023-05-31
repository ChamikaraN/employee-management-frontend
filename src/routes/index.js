import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "../components/pages/Home";
import EmployeesComponent from "../components/pages/Employee/HomePage";
import EmployeesListComponent from "../components/pages/Employee/ListPage";
import AddEditEmployeeComponent from "../components/pages/Employee/AddEditPage";
import ErrorComponent from "../components/pages/ErrorComponent";

const routes = [
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    path: "employee",
    element: <EmployeesComponent />,
  },
  {
    path: "employee/list",
    element: <EmployeesListComponent />,
  },
  {
    path: "employee/add",
    element: <AddEditEmployeeComponent />,
  },
  {
    path: "employee/edit/:id",
    element: <AddEditEmployeeComponent />,
  },
];

const errorElement = <ErrorComponent />;

const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    errorElement,
  }))
);

export default router;
