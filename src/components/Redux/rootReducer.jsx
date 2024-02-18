 import {combineReducers} from "redux"
import songReducer from "./reducer"
 const rootReducer = combineReducers({
	data:songReducer,
 });
 export default rootReducer;
