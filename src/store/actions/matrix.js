export const changeMatrixComplexType = () => ({
	type: 'CHANGE_MATRIX_COMPLEX_TYPE',
});

export const setMatrixRows = (value) => ({
	type: 'SET_ROWS',
	payload: value,
});

export const setMatrixCols = (value) => ({
	type: 'SET_COLS',
	payload: value,
});

export const setMatrixSize = (size) => ({
	type: 'SET_SIZE',
	payload: size,
});

export const startCalculationMatrix = () => ({
	type: 'START_CALCULATION',
});

export const endCalculationMatrix = () => ({
	type: 'END_CALCULATION',
});

export const setMatrixElement = (i, j, value) => ({
	type: 'SET_MATRIX_ELEMENT',
	payload: {i, j, value}
});

export const clearTheMatrix = () => ({
	type: 'CLEAR_THE_MATRIX',
});

export const fillInWithZeroValues = () => ({
	type: 'FILL_ZERO',
});

//Second matrix

export const setSecondMatrixRows = (value) => ({
	type: 'SET_ROWS_FOR_SECOND',
	payload: value,
});

export const setSecondMatrixCols = (value) => ({
	type: 'SET_COLS_FOR_SECOND',
	payload: value,
});

export const setSecondMatrixSize = (size) => ({
	type: 'SET_SIZE_FOR_SECOND',
	payload: size,
});

export const setSecondMatrixElement = (i, j, value) => ({
	type: 'SET_SECOND_MATRIX_ELEMENT',
	payload: {i, j, value}
});

export const clearTheSecondMatrix = () => ({
	type: 'CLEAR_THE_SECOND_MATRIX',
});

export const fillInWithZeroValuesSecondMatrix = () => ({
	type: 'FILL_ZERO_SECOND_MATRIX',
});
