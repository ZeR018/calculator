import React from 'react';
import styles from './Matrix.module.css'



const Matrix = ({rows, cols}) => {
	let matrix = Array(rows).fill(Array(cols).fill(0));
	return (
		<div className={styles.Matrix}>
			<div className={styles.matrixWrapper}>
			{matrix.map((row, index1) => {
				return (
					<div key={`matrix_${index1}`} className={styles.col}>
						{row.map((col, index2) => {
							return(
								<input key={`matrix_${index1}_${index2}`}/>
							)})}
					</div>
				)})}
			</div>
		</div>
	);
};

export default Matrix;
