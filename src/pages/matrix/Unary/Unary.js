import React from 'react';
import styles from './Unary.module.css'
import MatrixForm from "../../../components/MatrixForm";
import { aboutMethod } from '../../../data/aboutMethod'
import CalculateButton from "../../../components/CalculateButton";
import { useSelector, useDispatch } from "react-redux";
import {setMatrixRows, setMatrixCols, setMatrixSize,
	clearTheMatrix, fillInWithZeroValues, setMatrixElement} from "../../../store/actions/matrix";
import AboutMethod from "../../../components/AboutMethod";
import axios from "axios";
import {URL} from '../../../data/constants'

const Unary = () => {
	const dispatch = useDispatch()

	const {complex, maxSize, startCalculation, matrix} = useSelector(({matrix}) => {
		return {
			complex: matrix.isComplex,
			maxSize: matrix.maxSize,
			startCalculation: matrix.startCalculation,
			matrix: matrix.matrix,
		}
	});

	const onStartDeterminant = () => {
		console.log('det')
		axios.post(URL, {
			'type':'matrix',
			'data':{'operation':'det', 'values':matrix}
		})
			.then(response => {
				console.log(response)
			})
		//Сохранять response
		//Создать state с результатом
	}

	const onStartReverse = () => {
		console.log('reverse')
		axios.post(URL, {
			'type':'matrix',
			'data':{'operation':'reverse', 'values':matrix}
		})
			.then(response => {
				console.log(response)
			})
		//Сохранять response
		//Создать state с результатом
	}

		const onStartStepped = () => {
		console.log('stepped')
		axios.post(URL, {
			'type':'matrix',
			'data':{'operation':'stepped', 'values':matrix}
		})
			.then(response => {
				console.log(response)
			})
		//Сохранять response
		//Создать state с результатом
	}

		const onStartRank = () => {
		console.log('rank')
		axios.post(URL, {
			'type':'matrix',
			'data':{'operation':'rank', 'values':matrix}
		})
			.then(response => {
				console.log(response)
			})
		//Сохранять response
		//Создать state с результатом
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
		<div className={styles.Unary}>
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
				{aboutMethod.matrix.unary}
			</AboutMethod>
			<div className={styles.buttons}>
				<CalculateButton start={onStartDeterminant}>
					det
				</CalculateButton>

				<CalculateButton start={onStartReverse}>
					A^-1
				</CalculateButton>

				<CalculateButton start={onStartRank}>
					Rank
				</CalculateButton>

				<CalculateButton start={onStartStepped}>
					Ступенчатый вид
				</CalculateButton>
			</div>
		</div>
	);
};

export default Unary;
