import { combineReducers } from 'redux';
import sidebar from "./sidebar";
import matrix from "./matrix";
import lim from "./lim";


const reducer = combineReducers({
	sidebar,
	matrix,
	lim
});

export default reducer;