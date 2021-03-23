import React from 'react';
import styles from './Matrix.module.css'



const Matrix = ({rows, cols}) => {
	//let matrix = new Array(rows).fill(Array(cols).fill(0));
	
	// Создает двумерный массив размера cols*rows заполненный нулями для map'a 
	let matrix = new Array(cols);
	for (var i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(rows).fill(0);
	}


	return (
		<div className={styles.Matrix}>
			<div className={styles.matrixWrapper}>
			{matrix.map((row, index1) => {
				return (
					<div key={`matrix_${index1}`} className={styles.col}>
						{row.map((col, index2) => {
							return(
								<input
									onChange={(e) => {
										matrix[index1][index2] = +e.target.value;
										console.log(matrix);
									}}
									key={`matrix_${index1}_${index2}`}
									type='number'/>
							)})}
					</div>
				)})}
			</div>
		</div>
	);
};

export default Matrix;
