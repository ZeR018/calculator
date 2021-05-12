import { combineReducers } from 'redux';
import sidebar from "./sidebar";
import matrix from "./matrix";
import lim from "./lim";
import expression from "./expression";
import derivative from "./derivative";
import integral from "./integral";


const reducer = combineReducers({
	sidebar,
	matrix,
	lim,
	expression,
	derivative,
	integral,
});

export default reducer;