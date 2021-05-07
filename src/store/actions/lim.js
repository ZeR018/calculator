export const setSymbolToLimExpression = (symbol) => ({
	type: 'SET_SYMBOL_TO_LIM_EXPRESSION',
	payload: symbol,
});

export const setVariableToLimExpression = (symbol) => ({
	type: 'SET_VARIABLE_TO_LIM_EXPRESSION',
	payload: symbol,
});

export const setStrivesForToLimExpression = (symbol) => ({
	type: 'SET_STRIVES_FOR_TO_LIM_EXPRESSION',
	payload: symbol,
});

export const clearLim = () => ({
	type: 'CLEAR_LIM',
});
