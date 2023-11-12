import { combineReducers } from "redux";
import auth from "./auth";
import VacationReducer from "./VacationReducer";
export default combineReducers({
auth,VacationReducer
});