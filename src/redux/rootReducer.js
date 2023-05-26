import { combineReducers } from "redux";
import employeeReducer from "./Employee/reducer";
import homeReducer from "./Home/reducer";

const rootReducer = combineReducers({
  employee: employeeReducer,
  home: homeReducer,
});

export default rootReducer;
