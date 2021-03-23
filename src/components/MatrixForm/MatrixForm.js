import React from 'react';
import styles from './MatrixForm.module.css'
import Matrix from "../Matrix";
import ComplexCheckbox from "../ComplexCheckbox";
import MatrixSizeInput from "../MatrixSizeInput";
import {useSelector, useDispatch} from "react-redux";
import {changeMatrixComplexType, setMatrixRows,
	setMatrixCols, setMatrixSize} from "../../store/actions/matrix";

// Забить селект с размерами в рендер через map и забить в память

const MatrixForm = ({binary}) => {
	const {rows, cols, complex, maxSize} = useSelector(({matrix}) => {
		return {
			rows: matrix.rows,
			cols: matrix.cols,
			complex: matrix.isComplex,
			maxSize: matrix.maxSize,
		}
	});
	const dispatch = useDispatch();

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
	const changeSize = (rows, cols) => {
		dispatch(setMatrixSize(rows, cols))
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
				/>
				{!binary &&
					<ComplexCheckbox complex={complex} handleComplex={handleComplex} />}
			</div>
			<div className={styles.matrix}>
				<Matrix cols={cols} rows={rows}/>
			</div>

			<div className={styles.matrixButtons}>
				<button>Восстановить матрицу</button>
				<button>Очистить</button>
			</div>
		</div>
	);
};

export default MatrixForm;