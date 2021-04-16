import React from 'react';
import styles from './Determinant.module.css'
import MatrixForm from "../../../components/MatrixForm";
import { aboutMethod } from '../../../data/aboutMethod'
import CalculateButton from "../../../components/CalculateButton";
import { useSelector, useDispatch } from "react-redux";
import {setMatrixRows, setMatrixCols, setMatrixSize,
	clearTheMatrix, fillInWithZeroValues, setMatrixElement} from "../../../store/actions/matrix";
import AboutMethod from "../../../components/AboutMethod";

const Determinant = () => {
	const dispatch = useDispatch()

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

	// Matrix Size
	const changeMatrixRows = (value) => {
		dispatch(setMatrixRows(value))
	}
	const changeMatrixCols = (value) => {
		dispatch(setMatrixCols(value))
	}
	const changeMatrixSize = (size) => {
		dispatch(setMatrixSize(size))
	}
	const setElement = (index1, index2, value) => {
		dispatch(setMatrixElement(index1, index2, value))
	}


	//Clear
	const clearMatrix = () => {
		dispatch(clearTheMatrix());
	}

	// Fill in with zero values
	const fillZero = () => {
		dispatch(fillInWithZeroValues())
	}
	return (
		<div className={styles.Determinant}>
			<MatrixForm
				complex={complex}
				maxSize={maxSize}
				startCalculation={startCalculation}
				matrix={matrix}
				changeRows={changeMatrixRows}
				changeCols={changeMatrixCols}
				changeSize={changeMatrixSize}
				setElement={setElement}
				clearMatrix={clearMatrix}
				fillZero={fillZero}
				square
			/>
			<AboutMethod>
				{aboutMethod.matrix.determinant}
			</AboutMethod>
			<CalculateButton start={onStartCalculation} matrix={matrix} isEmpty={isMatrixEmpty}/>
		</div>
	);
};

export default Determinant;