import { combineReducers } from "redux";
import employeeReducer from "../modules/employee/reducer";
import homeReducer from "../modules/home/reducer";

const rootReducer = combineReducers({
  employee: employeeReducer,
  home: homeReducer,
});

export default rootReducer;
