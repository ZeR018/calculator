const initialState = {
	result: '',
}

const result = (state = initialState, action) => {
	switch (action.type){

		case 'SET_RESULT':
			return {
				...state,
				result: action.payload,
			}

		default:
			return state
	}
}

export default result;