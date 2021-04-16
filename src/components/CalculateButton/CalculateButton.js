import React from 'react';
import styles from './CalculateButton.module.css'

const CalculateButton = ({start}) => {

	return (
		<div className={styles.CalculateButton}>
			<button onClick={start}>Вычислить</button>
		</div>
	);
};

export default CalculateButton;
