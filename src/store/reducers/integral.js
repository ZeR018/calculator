const initialState = {
	undefined: '',
	undefinedVar: 'x',
	defined: '',
	definedVar: 'x',
}

const integral = (state = initialState, action) => {
	switch (action.type){

			case 'SET_VALUE_TO_UNDEFINED_INTEGRAL_EXPRESSION':
			return {
				...state,
				undefined: action.payload,
			}

			case 'SET_VALUE_TO_DEFINED_INTEGRAL_EXPRESSION':
			return {
				...state,
				defined: action.payload,
			}

		case 'SET_VAR_TO_UNDEFINED_INTEGRAL':
			return {
				...state,
				undefinedVar: action.payload,
			}

				case 'SET_VAR_TO_DEFINED_INTEGRAL':
			return {
				...state,
				definedVar: action.payload,
			}

		case 'CLEAR_UNDEFINED':
			return {
				...state,
				undefined: '',
				undefinedVar: initialState.undefinedVar,
			}

			case 'CLEAR_DEFINED':
			return {
				...state,
				defined: '',
				definedVar: initialState.definedVar,
			}

		default: return state
	}
}

export default integral;