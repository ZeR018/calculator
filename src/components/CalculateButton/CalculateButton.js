import React from 'react';
import styles from './CalculateButton.module.css'

const CalculateButton = ({start, matrix, isEmpty}) => {
	const checkTheCorrectInput = () => {
		if(isEmpty) {
			alert('matrix empty!')
		} else {
			console.log('idk if this is correct', matrix)
			start()
		}
	}
	return (
		<div className={styles.CalculateButton}>
			<button onClick={checkTheCorrectInput}>Вычислить</button>
		</div>
	);
};

export default CalculateButton;
