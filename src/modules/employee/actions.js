import {
  FETCH_EMPLOYEES_SUCCESS,
  FILTER_EMPLOYEE,
  TOGGLE_VIEW,
} from "./actionTypes";

// Action creators for filter employees
export const filterEmployees = (filter) => {
  return {
    type: FILTER_EMPLOYEE,
    payload: filter,
  };
};

// Action creators for toggle grid view and table view
export const toggleView = (showGrid) => {
  return {
    type: TOGGLE_VIEW,
    payload: showGrid,
  };
};

// Action creators for fetching employees
export const fetchEmployeesSuccess = (employees) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});
