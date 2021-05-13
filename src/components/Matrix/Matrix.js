import React from 'react';
import styles from './Matrix.module.css'



const Matrix = ({matrix, setElement, res}) => {
	console.log(matrix)
	return (
		<div className={styles.Matrix}>
			<div className={styles.matrixWrapper}>
			{matrix.map((row, index1) => {
				return (
					<div key={`matrix_${index1}`} className={styles.col}>
						{row.map((col, index2) => {
							if(!res) {
								return(
								<input
									value={matrix[index1][index2]}
									onChange={(e) => {
										setElement(index1, index2, +e.target.value)
									}}
									key={`matrix_${index1}_${index2}`}
									/>
							)
							}
							else {
								return(
								<input
									value={matrix[index1][index2]}
									key={`matrix_${index1}_${index2}`}
									disabled
									/>
							)
							}

							})}
					</div>
				)})}

			</div>
		</div>
	);
};

export default Matrix;
