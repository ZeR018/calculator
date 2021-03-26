import React from 'react';
import styles from './MatrixForm.module.css'
import Matrix from "../Matrix";
import ComplexCheckbox from "../ComplexCheckbox";
import MatrixSizeInput from "../MatrixSizeInput";
import {useDispatch} from "react-redux";
import {
	changeMatrixComplexType, setMatrixRows,
	setMatrixCols, setMatrixSize, clearTheMatrix, fillInWithZeroValues
} from "../../store/actions/matrix";


const MatrixForm = ({binary, complex, maxSize, startCalculation, matrix, square}) => {

	const dispatch = useDispatch();

	// Find cols and rows

	const cols = matrix.length;
	const rows = matrix[0].length;

	// Complex
	const handleComplex = () => {
		dispatch(changeMatrixComplexType());
	};

	// Matrix Size
	const changeRows = (value) => {
		dispatch(setMatrixRows(value))
	}
	const changeCols = (value) => {
		dispatch(setMatrixCols(value))
	}
	const changeSize = (size) => {
		dispatch(setMatrixSize(size))
	}

	// Clear matrix

	const clearMatrix = () => {
		dispatch(clearTheMatrix());
	}

	// Fill in with zero values

	const fillZero = () => {
		dispatch(fillInWithZeroValues())
	}
	return (
		<div className={styles.MatrixForm}>
			<div className={styles.params}>
				<MatrixSizeInput
					rows={rows}
					cols={cols}
					changeRows={changeRows}
					changeCols={changeCols}
					changeSize={changeSize}
					maxSize={maxSize}
					square={square}
				/>
				{!binary &&
					<ComplexCheckbox complex={complex} handleComplex={handleComplex} />}
			</div>
			<div className={styles.matrix}>
				<Matrix
					startCalculation={startCalculation}
					matrix={matrix}
				/>
			</div>

			<div className={styles.matrixButtons}>
				<button onClick={fillZero}>Заполнить пустые ячейки нулями</button>
				<button onClick={clearMatrix}>Очистить</button>
			</div>
		</div>
	);
};

export default MatrixForm;
