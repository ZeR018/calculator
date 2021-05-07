const initialState = {
	expression: '',
}

const expression = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_EXPRESSION':
			return {
				...state,
				expression: action.payload,
			}
		case 'CLEAR_EXPRESSION':
			return {
				...state,
				expression: ''
			}
		default:
			return state

	}
}
export default expression