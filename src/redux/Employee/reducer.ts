import { Reducer } from "redux";
import {
  FETCH_EMPLOYEES_SUCCESS,
  FILTER_EMPLOYEE,
  TOGGLE_VIEW,
} from "./actionTypes";
import { Employee } from "../../types";
import { EmployeeAction } from "./types";

interface EmployeeState {
  employees: Employee[];
  employeesOriginal: Employee[];
  filter: {
    search: string;
    order: "asc" | "desc";
    orderBy: string;
  };
  showGridView: boolean;
}

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
    case FILTER_EMPLOYEE:
      const newFilter = action.payload;
      const updatedFilter = {
        ...state.filter,
        ...newFilter,
      };

      const filteredEmployees = state.employeesOriginal
        .filter((employee) =>
          `${employee.first_name} ${employee.last_name} ${employee.email} ${employee.number}`
            .toLowerCase()
            .includes(updatedFilter.search.toLowerCase())
        )
        .sort((a, b) => {
          const isAsc = updatedFilter.order === "asc";
          const order = isAsc ? 1 : -1;
          return (
            order *
            a[updatedFilter.orderBy].localeCompare(b[updatedFilter.orderBy])
          );
        });

      return {
        ...state,
        filter: updatedFilter,
        employees: filteredEmployees,
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
