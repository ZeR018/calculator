import React from 'react';
import styles from './MatrixForm.module.css'
import Matrix from "../Matrix";
import ComplexCheckbox from "../ComplexCheckbox";
import MatrixSizeInput from "../MatrixSizeInput";
import {useSelector, useDispatch} from "react-redux";
import {changeMatrixComplexType, setMatrixRows, setMatrixCols, setMatrixSize} from "../../store/actions/matrix";

const MatrixForm = () => {
	const {rows, cols, complex} = useSelector(({matrix}) => {
		return {
			rows: matrix.rows,
			cols: matrix.cols,
			complex: matrix.isComplex,
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
				/>
				<ComplexCheckbox complex={complex} handleComplex={handleComplex} />
			</div>
			<Matrix cols={cols} rows={rows}/>
		</div>
	);
};

export default MatrixForm;
