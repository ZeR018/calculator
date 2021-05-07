const initialState = {
	limExpression: '',
	var: '',
	strivesFor: '',
}

const lim = (state = initialState, action) => {
	switch (action.type){
		case 'SET_SYMBOL_TO_LIM_EXPRESSION':
			return {
				...state,
				limExpression: action.payload
			}

		case 'SET_VARIABLE_TO_LIM_EXPRESSION':
			return {
				...state,
				var: action.payload
			}
		case 'SET_STRIVES_FOR_TO_LIM_EXPRESSION':
			return {
				...state,
				strivesFor: action.payload
			}

		case 'CLEAR_LIM':
			return {
				...state,
				limExpression: '',
				var: '',
				strivesFor: '',
			}

		default:
			return state
	}
}

export default lim