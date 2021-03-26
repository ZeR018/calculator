import React from 'react';
import styles from './Matrix.module.css'
import {useDispatch} from "react-redux";
import {setMatrixElement} from "../../store/actions/matrix";



const Matrix = ({matrix}) => {
	//let matrix = new Array(rows).fill(Array(cols).fill(0));
	

	const dispatch = useDispatch();

	return (
		<div className={styles.Matrix}>
			<div className={styles.matrixWrapper}>
			{matrix.map((row, index1) => {
				return (
					<div key={`matrix_${index1}`} className={styles.col}>
						{row.map((col, index2) => {
							return(
								<input
									value={matrix[index1][index2]}
									onChange={(e) => {
										dispatch(setMatrixElement(index1, index2, e.target.value))
									}}
									key={`matrix_${index1}_${index2}`}
									/>
							)})}
					</div>
				)})}
			</div>
		</div>
	);
};

export default Matrix;
