const initialState = {
	derivativeExpression: '',
	variable: '',
	index: 1,
}

const derivative = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DERIVATIVE':
			return {
				...state,
				derivativeExpression: action.payload,
			}
		case 'CLEAR_DERIVATIVE':
			return {
				...state,
				derivativeExpression: '',
				variable: '',
				index: 1,
			}

		case 'SET_DERIVATIVE_VARIABLE':
			return {
				...state,
				variable: action.payload,
			}

		case 'SET_DERIVATIVE_INDEX':
			return {
				...state,
				index: action.payload,
			}
		default:
			return state

	}
}
export default derivative