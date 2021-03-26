import React from 'react';
import styles from './MatrixSizeInput.module.css'

const MatrixSizeInput = ({square, rows, cols, changeCols, changeRows, changeSize, maxSize}) => {

	// Делает из maxSize массив со значениями 1,...,maxSize
	const sizesArr = Array(maxSize).fill(0).map((e, i) => i+ 1);

	// Функции для обработки клика
	const cRows = (e) => {
		changeRows(+e.target.value)
	}
	const cCols = (e) => {
		changeCols(+e.target.value)
	}
	const cSize = (e) => {
		changeSize(+e.target.value)
	}
	return (
		<div className={styles.MatrixSizeInput}>
			<span className={styles.componentTitle}>Размер матрицы:</span>
			{square
				? <div>
						<select onChange={cSize} value={rows}>
							{/* Для создания options от 1 до maxSize */}
							{sizesArr.map((number, index) => {
								return <option value={number} key={`option_${index}`}>{number}</option>
							})}
						</select>
				</div>
				: <div>
					<select onChange={cRows} value={rows} >
						{/* Для создания options от 1 до maxSize */}
						{sizesArr.map((number, index) => {
								return <option value={number} key={`option_${index}`}>{number}</option>
							})}
						</select>
					<span> x </span>
					<select onChange={cCols} value={cols} >
						{/* Для создания options от 1 до maxSize */}
						{sizesArr.map((number, index) => {
								return <option value={number} key={`option_${index}`}>{number}</option>
							})}
					</select>
				</div>
			}
		</div>
	);
};

export default MatrixSizeInput;
