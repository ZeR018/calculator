import React from 'react';
import styles from './Matrix.module.css'



const Matrix = ({rovs, cols}) => {
	const matrix = Array(rovs).fill(Array(cols).fill(0));
	return (
		<div className={styles.Matrix}>
			<div className={styles.matrixWrapper}>
			{matrix.map((rov, index1) => {
				return (
					<div key={`matrix_${index1}`} className={styles.col}>
						{rov.map((col, index2) => {
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
