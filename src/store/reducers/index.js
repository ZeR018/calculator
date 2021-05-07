import { combineReducers } from 'redux';
import sidebar from "./sidebar";
import matrix from "./matrix";
import lim from "./lim";
import expression from "./expression";


const reducer = combineReducers({
	sidebar,
	matrix,
	lim,
	expression,
});

export default reducer;