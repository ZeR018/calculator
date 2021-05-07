export const setDerivative = (exp) => ({
	type: 'SET_DERIVATIVE',
	payload: exp,
});

export const clearDerivative = () => ({
	type: 'CLEAR_DERIVATIVE',
});

export const setDerivativeVariable = (exp) => ({
	type: 'SET_DERIVATIVE_VARIABLE',
	payload: exp,
});

export const setDerivativeIndex = (val) => ({
		type: 'SET_DERIVATIVE_INDEX',
	payload: val,
});

