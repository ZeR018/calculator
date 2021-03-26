import React from 'react';
import styles from './ComplexCheckbox.module.css'

const ComplexCheckbox = ({complex, handleComplex}) => {

	return (
		<div className={styles.matrixComplex}>
					<h5>Комплексные числа:</h5>
					{complex
						? <span className={styles.complexCheckbox} onClick={handleComplex}>Да</span>
						: <span className={styles.complexCheckbox} onClick={handleComplex}>Нет</span>}
				</div>
	);
};

export default ComplexCheckbox;
