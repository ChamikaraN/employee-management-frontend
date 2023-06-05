import { combineReducers, Reducer } from "redux";
import employeeReducer, { EmployeeState } from "./Employee/reducer";
interface RootState {
  employee: EmployeeState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  employee: employeeReducer as Reducer<EmployeeState>,
});

export default rootReducer;
