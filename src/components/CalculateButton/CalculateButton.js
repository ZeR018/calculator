import React from 'react';
import styles from './CalculateButton.module.css'

const CalculateButton = ({start, children}) => {

	return (
		<div className={styles.CalculateButton}>
			<button onClick={start}>{children}</button>
		</div>
	);
};

export default CalculateButton;
