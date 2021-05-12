export const setValueToUndefinedIntegral = (val) => ({
	type: 'SET_VALUE_TO_UNDEFINED_INTEGRAL_EXPRESSION',
	payload: val,
});

export const setValueToDefinedIntegral = (val) => ({
	type: 'SET_VALUE_TO_DEFINED_INTEGRAL_EXPRESSION',
	payload: val,
});

export const setVarToUndefinedIntegral = (val) => ({
	type: 'SET_VAR_TO_UNDEFINED_INTEGRAL',
	payload: val,
});

export const setVarToDefinedIntegral = (val) => ({
	type: 'SET_VAR_TO_DEFINED_INTEGRAL',
	payload: val,
});

export const clearUndefinedIntegral = () => ({
	type: 'CLEAR_UNDEFINED',
});

export const clearDefinedIntegral = () => ({
	type: 'CLEAR_DEFINED',
});
