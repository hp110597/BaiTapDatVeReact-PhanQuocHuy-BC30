import { combineReducers, createStore } from "redux";
import {formReducer} from "./reducers/formReducer";
import {ticketBookingReducer} from "./reducers/ticketBookingReducer";


//rootReducer: state tổng của ứng dụng
const rootReducer = combineReducers({
  formReducer:formReducer,
  ticketBookingReducer:ticketBookingReducer
   
  });
  
  export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
