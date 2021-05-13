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

export const setUpperIntegrationLimit = (val) => ({
	type: 'SET_UPPER_INTEGRATION_LIMIT',
	payload: val,
});

export const setLoverIntegrationLimit = (val) => ({
	type: 'SET_LOVER_INTEGRATION_LIMIT',
	payload: val,
});

