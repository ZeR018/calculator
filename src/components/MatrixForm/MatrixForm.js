import React from 'react';
import styles from './MatrixForm.module.css'
import Matrix from "../Matrix";
import MatrixSizeInput from "../MatrixSizeInput";
import ComplexCheckbox from "../ComplexCheckbox";


const MatrixForm = ({maxSize, startCalculation, matrix, square,
											setElement, changeRows, changeCols, complex,
											changeSize, clearMatrix, fillZero }) => {

	// Find cols and rows
	const cols = matrix.length;
	const rows = matrix[0].length;

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
				<ComplexCheckbox complex={complex}/>
			</div>
			<div className={styles.matrix}>
				<Matrix
					startCalculation={startCalculation}
					matrix={matrix}
					setElement={setElement}
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
