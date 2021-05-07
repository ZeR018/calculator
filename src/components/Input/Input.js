import React from 'react';
import styles from './Input.module.css'

function Input({expression, setSymbol}) {
	return (
		<div className={styles.Input}>
			<input value={expression} onChange={(e) =>
			{setSymbol(e.target.value)
									}} />
		</div>
	);
}

export default Input;