import { Employee } from "../../types";

export const FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS";
export const FILTER_EMPLOYEE = "FILTER_EMPLOYEE";
export const TOGGLE_VIEW = "TOGGLE_VIEW";

interface FetchEmployeesSuccessAction {
  type: typeof FETCH_EMPLOYEES_SUCCESS;
  payload: Employee[];
}

interface FilterEmployeeAction {
  type: typeof FILTER_EMPLOYEE;
  payload: {
    search: string,
    order: "asc" | "desc",
    orderBy: string,
  };
}

interface ToggleViewAction {
  type: typeof TOGGLE_VIEW;
  payload: boolean;
}

export type EmployeeAction =
  | FetchEmployeesSuccessAction
  | FilterEmployeeAction
  | ToggleViewAction;
