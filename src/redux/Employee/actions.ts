import {
  FETCH_EMPLOYEES_SUCCESS,
  FILTER_EMPLOYEE,
  TOGGLE_VIEW,
} from "./actionTypes";
import { Employee } from "../../types";

interface FilterEmployeeAction {
  type: typeof FILTER_EMPLOYEE;
  payload: {
    search: string;
    order: "asc" | "desc";
    orderBy: string;
  };
}

interface ToggleViewAction {
  type: typeof TOGGLE_VIEW;
  payload: boolean;
}

interface FetchEmployeesSuccessAction {
  type: typeof FETCH_EMPLOYEES_SUCCESS;
  payload: Employee[];
}

export const filterEmployees = (filter: {
  search: string;
  order: "asc" | "desc";
  orderBy: string;
}): FilterEmployeeAction => {
  return {
    type: FILTER_EMPLOYEE,
    payload: filter,
  };
};

export const toggleView = (showGrid: boolean): ToggleViewAction => {
  return {
    type: TOGGLE_VIEW,
    payload: showGrid,
  };
};

export const fetchEmployeesSuccess = (
  employees: Employee[]
): FetchEmployeesSuccessAction => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});
