import { combineReducers } from 'redux';
import sidebar from "./sidebar";
import matrix from "./matrix";


const reducer = combineReducers({
	sidebar,
	matrix,
});

export default reducer;