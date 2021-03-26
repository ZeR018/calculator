import React from 'react';
import styles from './Determinant.module.css'
import MatrixForm from "../../../components/MatrixForm";
import { aboutMethod } from '../../../data/aboutMethod'
import CalculateButton from "../../../components/CalculateButton";
import { useSelector } from "react-redux";

const Determinant = () => {

	const {complex, maxSize, startCalculation, matrix, isMatrixEmpty} = useSelector(({matrix}) => {
		return {
			complex: matrix.isComplex,
			maxSize: matrix.maxSize,
			startCalculation: matrix.startCalculation,
			matrix: matrix.matrix,
			isMatrixEmpty: matrix.isEmpty,
		}
	});

	const onStartCalculation = () => {
		console.log('Comand: calculate determinant')
		console.log('Matrix:')
		console.log(matrix)
	}
	return (
		<div className={styles.Determinant}>
			<MatrixForm
				binary={false}
				complex={complex}
				maxSize={maxSize}
				startCalculation={startCalculation}
				matrix={matrix}
				square
			/>
			<div className={styles.about}>
				<h5 className={styles.aboutTitle}>О методе</h5>
				{aboutMethod.determinant}
			</div>
			<CalculateButton start={onStartCalculation} matrix={matrix} isEmpty={isMatrixEmpty}/>
		</div>
	);
};

export default Determinant;
