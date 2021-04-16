import React from 'react';
import styles from './Sum.module.css'
import MatrixForm from "../../../components/MatrixForm";
import { aboutMethod } from '../../../data/aboutMethod'
import CalculateButton from "../../../components/CalculateButton";
import { useSelector, useDispatch } from "react-redux";
import {
	setMatrixRows, setMatrixCols, setMatrixSize, clearTheMatrix,
	fillInWithZeroValues, setMatrixElement, setSecondMatrixRows, setSecondMatrixCols, setSecondMatrixSize
} from "../../../store/actions/matrix";
import AboutMethod from "../../../components/AboutMethod";

const Sum = () => {
	const dispatch = useDispatch();

	const {complex, maxSize, startCalculation, firstMatrix,
		secondMatrix} = useSelector(({matrix}) => {
		return {
			complex: matrix.isComplex,
			maxSize: matrix.maxSize,
			startCalculation: matrix.startCalculation,
			firstMatrix: matrix.matrix,
			secondMatrix: matrix.secondMatrix,
		}
	});

	const onStartCalculation = () => {
		console.log('Comand: calculate sum')
		console.log('Frist Matrix:')
		console.log(firstMatrix)
		console.log(secondMatrix)
	}

	//first matrix
	const changeFirstMatrixRows = (value) => {
		dispatch(setMatrixRows(value))
	}
	const changeFirstMatrixCols = (value) => {
		dispatch(setMatrixCols(value))
	}
	const changeFirstMatrixSize = (size) => {
		dispatch(setMatrixSize(size))
	}
	const setElementFirstMatrix = (index1, index2, value) => {
		dispatch(setMatrixElement(index1, index2, value))
	}
	//Clear
	const clearFirstMatrix = () => {
		dispatch(clearTheMatrix());
	}
	// Fill in with zero values
	const fillFirstMatrixZero = () => {
		dispatch(fillInWithZeroValues())
	}

	//second matrix
	const changeSecondMatrixRows = (value) => {
		dispatch(setSecondMatrixRows(value))
	}
	const changeSecondMatrixCols = (value) => {
		dispatch(setSecondMatrixCols(value))
	}
	const changeSecondMatrixSize = (size) => {
		dispatch(setSecondMatrixSize(size))
	}
	const setElementSecondMatrix = (index1, index2, value) => {
		dispatch(setElementSecondMatrix(index1, index2, value))
	}
	//Clear
	const clearSecondMatrix = () => {
		dispatch(clearSecondMatrix());
	}
	// Fill in with zero values
	const fillSecondMatrixZero = () => {
		dispatch(fillSecondMatrixZero())
	}

	return (
		<div className={styles.Sum}>
			<h3>Матрица А</h3>
			<MatrixForm
				complex={complex}
				maxSize={maxSize}
				startCalculation={startCalculation}
				matrix={firstMatrix}
				changeRows={changeFirstMatrixRows}
				changeCols={changeFirstMatrixCols}
				changeSize={changeFirstMatrixSize}
				setElement={setElementFirstMatrix}
				clearMatrix={clearFirstMatrix}
				fillZero={fillFirstMatrixZero}
			/>
			<h3>Матрица B</h3>
			<MatrixForm
				complex={complex}
				maxSize={maxSize}
				startCalculation={startCalculation}
				matrix={secondMatrix}
				changeRows={changeSecondMatrixRows}
				changeCols={changeSecondMatrixCols}
				changeSize={changeSecondMatrixSize}
				setElement={setElementSecondMatrix}
				clearMatrix={clearSecondMatrix}
				fillZero={fillSecondMatrixZero}
			/>
			<AboutMethod>
				{aboutMethod.matrix.sum}
			</AboutMethod>
			<CalculateButton start={onStartCalculation}/>
		</div>
	);
};

export default Sum;