const initialState = {
	isComplex: false,
	isEmpty: true,
	maxSize: 9,
	matrix:  [['','' ,''],
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
		default:
			return state;
	}
};

export default matrix;