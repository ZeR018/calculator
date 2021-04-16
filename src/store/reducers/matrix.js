const initialState = {
	isComplex: false,
	isFirstEmpty: true,
	maxSize: 9,
	matrix:  [['','' ,''],
						['','' ,''],
						['','' ,'']],
	isSecondEmpty: true,
	secondMatrix: [['','' ,''],
								 ['','' ,''],
								 ['','' ,'']],
};

const matrix = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_MATRIX_COMPLEX_TYPE':
			const newValue = { ...state };
			return {
				...state,
				isComplex: !newValue.isComplex,
			};

		case 'SET_ROWS':
			const cols = {...state}.matrix.length;
			let newMatrix = new Array(cols);
				for (let i = 0; i < newMatrix.length; i++) {
  				newMatrix[i] = new Array(action.payload).fill('');
				}
			return {
				...state,
				matrix: newMatrix,
				isEmpty: true,
			}
		case 'SET_COLS':
			const rows = {...state}.matrix[0].length;
			let newMatrix2 = new Array(action.payload);
				for (let i = 0; i < newMatrix2.length; i++) {
  				newMatrix2[i] = new Array(rows).fill('');
				}
			return {
				...state,
				matrix: newMatrix2,
				isEmpty: true,
		}
		case 'SET_SIZE':
			let newMatrix3 = new Array(action.payload);
				for (let i = 0; i < newMatrix3.length; i++) {
  				newMatrix3[i] = new Array(action.payload).fill('');
				}
			return {
				...state,
				matrix: newMatrix3,
				isEmpty: true,
		}
		case 'SET_MATRIX_ELEMENT':
			const newValue2 = { ...state }.matrix.slice();
			newValue2[action.payload.i][action.payload.j] = action.payload.value
			return {
				...state,
				matrix: newValue2,
				isEmpty: false,
		}
		case 'CLEAR_THE_MATRIX' :
			const newValue3 = { ...state }.matrix.slice();
			for(let i = 0; i < newValue3.length; i++){
				for(let j = 0; j < newValue3[0].length; j++){
					newValue3[i][j] = '';
    		}
			}
			return {
				...state,
				matrix: newValue3,
				isEmpty: true,
		}
			case 'FILL_ZERO' :
			const newValue4 = { ...state }.matrix.slice();
			for(let i = 0; i < newValue4.length; i++){
				for(let j = 0; j < newValue4[0].length; j++){
					if (newValue4[i][j] === '') {
						newValue4[i][j] = 0;
					}
    		}
			}
			return {
				...state,
				matrix: newValue4,
				isEmpty: false,
		}


			// Для второй матрицы

		case 'SET_ROWS_FOR_SECOND':
			const cols3 = {...state}.secondMatrix.length;
			let newMatrix5 = new Array(cols3);
				for (let i = 0; i < newMatrix5.length; i++) {
  				newMatrix5[i] = new Array(action.payload).fill('');
				}
			return {
				...state,
				secondMatrix: newMatrix5,
				isSecondEmpty: true,
			}

		case 'SET_COLS_FOR_SECOND':
			const rows3 = {...state}.secondMatrix[0].length;
			let newMatrix6 = new Array(action.payload);
				for (let i = 0; i < newMatrix6.length; i++) {
  				newMatrix6[i] = new Array(rows3).fill('');
				}
			return {
				...state,
				secondMatrix: newMatrix6,
				isSecondEmpty: true,
		}
		case 'SET_SIZE_FOR_SECOND':
			let newMatrix7 = new Array(action.payload);
				for (let i = 0; i < newMatrix7.length; i++) {
  				newMatrix7[i] = new Array(action.payload).fill('');
				}
			return {
				...state,
				secondMatrix: newMatrix7,
				isSecondEmpty: true,
		}

		case 'SET_SECOND_MATRIX_ELEMENT':
			const newValue8 = { ...state }.matrix.slice();
			newValue8[action.payload.i][action.payload.j] = action.payload.value
			return {
				...state,
				secondMatrix: newValue8,
				isSecondEmpty: false,
		}

		case 'CLEAR_THE_SECOND_MATRIX' :
			const newValue9 = { ...state }.secondMatrix.slice();
			for(let i = 0; i < newValue9.length; i++){
				for(let j = 0; j < newValue9[0].length; j++){
					newValue9[i][j] = '';
    		}
			}
			return {
				...state,
				secondMatrix: newValue9,
				isSecondEmpty: true,
		}

		case 'FILL_ZERO_SECOND_MATRIX' :
			const newValue10 = { ...state }.secondMatrix.slice();
			for(let i = 0; i < newValue10.length; i++){
				for(let j = 0; j < newValue10[0].length; j++){
					if (newValue10[i][j] === '') {
						newValue10[i][j] = 0;
					}
    		}
			}
			return {
				...state,
				secondMatrix: newValue10,
				isSecondEmpty: false,
		}


		default:
			return state;
	}
};

export default matrix;