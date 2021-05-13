import React from 'react';
import styles from './Binary.module.css'
import MatrixForm from "../../../components/MatrixForm";
import { aboutMethod } from '../../../data/aboutMethod'
import CalculateButton from "../../../components/CalculateButton";
import { useSelector, useDispatch } from "react-redux";
import { changeMatrixComplexType,
	setMatrixRows, setMatrixCols, setMatrixSize, clearTheMatrix,
	fillInWithZeroValues, setMatrixElement,
	setSecondMatrixRows, setSecondMatrixCols, setSecondMatrixSize,
	fillInWithZeroValuesSecondMatrix, clearTheSecondMatrix, setSecondMatrixElement
		} from "../../../store/actions/matrix";
import AboutMethod from "../../../components/AboutMethod";
import axios from "axios";
import {URL} from '../../../data/constants'
import {changeResult} from '../../../store/actions/result'

const Binary = () => {
	const dispatch = useDispatch();

	const {complex, maxSize, firstMatrix,
		secondMatrix} = useSelector(({matrix}) => {
		return {
			complex: matrix.isComplex,
			maxSize: matrix.maxSize,
			firstMatrix: matrix.matrix,
			secondMatrix: matrix.secondMatrix,
		}
	});

	const onStartSum = () => {
		console.log('sum')
		axios.post(URL, {
			'type':'twomatrix',
			'data':{'operation':'+', 'values': {'matrix1': firstMatrix, 'matrix2': secondMatrix}}
		})
			.then(response => {
				dispatch(changeResult(response.data.response))
			})
	}

	const onStartSub = () => {
		console.log('sub')
		axios.post(URL, {
			'type':'twomatrix',
			'data':{'operation':'-', 'values': {'matrix1': firstMatrix, 'matrix2': secondMatrix}}
		})
			.then(response => {
				dispatch(changeResult(response.data.response))
			})
	}

	const onStartMulty = () => {
		console.log('multy')
		axios.post(URL, {
			'type':'twomatrix',
			'data':{'operation':'*', 'values': {'matrix1': firstMatrix, 'matrix2': secondMatrix}}
		})
			.then(response => {
				dispatch(changeResult(response.data.response))
			})
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
		dispatch(setSecondMatrixElement(index1, index2, value))
	}
	//Clear
	const clearSecondMatrix = () => {
		dispatch(clearTheSecondMatrix());
	}
	// Fill in with zero values
	const fillSecondMatrixZero = () => {
		dispatch(fillInWithZeroValuesSecondMatrix())
	}

	// Complex

	const handleComplex = () => {
		dispatch(changeMatrixComplexType())
	}

	return (
		<div className={styles.Binary}>
			<h3>Матрица А</h3>
			<MatrixForm
				complex={complex}
				maxSize={maxSize}
				matrix={firstMatrix}
				changeRows={changeFirstMatrixRows}
				changeCols={changeFirstMatrixCols}
				changeSize={changeFirstMatrixSize}
				setElement={setElementFirstMatrix}
				clearMatrix={clearFirstMatrix}
				fillZero={fillFirstMatrixZero}
				handleComplex={handleComplex}
			/>
			<h3>Матрица B</h3>
			<MatrixForm
				complex={complex}
				maxSize={maxSize}
				matrix={secondMatrix}
				changeRows={changeSecondMatrixRows}
				changeCols={changeSecondMatrixCols}
				changeSize={changeSecondMatrixSize}
				setElement={setElementSecondMatrix}
				clearMatrix={clearSecondMatrix}
				fillZero={fillSecondMatrixZero}
				handleComplex={handleComplex}
			/>
				<div className={styles.buttons}>
					<CalculateButton start={onStartSum}>
						A + B
					</CalculateButton>

					<CalculateButton start={onStartSub}>
						A - B
					</CalculateButton>

					<CalculateButton start={onStartMulty}>
						A * B
					</CalculateButton>

				</div>
			<AboutMethod>
				{aboutMethod.matrix.binary}
			</AboutMethod>

		</div>
	);
};
export default Binary;
