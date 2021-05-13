import { combineReducers } from 'redux';
import sidebar from "./sidebar";
import matrix from "./matrix";
import lim from "./lim";
import expression from "./expression";
import derivative from "./derivative";
import integral from "./integral";
import result from "./result";


const reducer = combineReducers({
	sidebar,
	matrix,
	lim,
	expression,
	derivative,
	integral,
	result,
});

export default reducer;