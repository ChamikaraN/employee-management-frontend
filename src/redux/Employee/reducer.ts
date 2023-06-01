import { Reducer } from "redux";
import { Employee } from "../../types";
import {
  EmployeeAction,
  FETCH_EMPLOYEES_SUCCESS,
  TOGGLE_VIEW,
} from "./actionTypes";

export type EmployeeState = {
  employees: Employee[];
  employeesOriginal: Employee[];
  filter: {
    search: string;
    order: "asc" | "desc";
    orderBy: string;
  };
  showGridView: boolean;
};

const initialState: EmployeeState = {
  employees: [],
  employeesOriginal: [],
  filter: { search: "", order: "asc", orderBy: "_id" },
  showGridView: true,
};

const employeeReducer: Reducer<EmployeeState, EmployeeAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: [...action.payload],
        employeesOriginal: [...action.payload],
        filter: { search: "", order: "asc", orderBy: "_id" },
      };
    case TOGGLE_VIEW:
      return {
        ...state,
        showGridView: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
