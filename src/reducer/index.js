import { combineReducers } from "redux";
import customerReducer from "../components/customer/modules/customerReducer";

const rootReducer = combineReducers({
  customers: customerReducer
});

export default rootReducer;