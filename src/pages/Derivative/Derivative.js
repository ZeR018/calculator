import React from 'react';
import styles from './Derivative.module.css'
import Input from "../../components/Input";
import CalculateButton from "../../components/CalculateButton";
import {aboutMethod} from "../../data/aboutMethod";
import AboutMethod from "../../components/AboutMethod";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {clearDerivative, setDerivative,
setDerivativeVariable, setDerivativeIndex} from "../../store/actions/derivative";
import {URL} from '../../data/constants'
import {changeResult} from '../../store/actions/result'

function Derivative() {
	const dispatch = useDispatch()

	const {derivative, variable, index} = useSelector(({derivative}) => {
			return {
				derivative: derivative.derivativeExpression,
				variable: derivative.variable,
				index: derivative.index,
			}})

	const onStartCalcExp = () => {
		console.log('derivative')
		axios.post(URL, {
			'type':'derivative',
			'data': {'expression':derivative,'var':variable, 'n': index}
		})
			.then(response => {
				dispatch(changeResult(response.data.response))
			})
	}

	const setExp = (value) => {
		dispatch(setDerivative(value))
	}

	const clear = () => {
		dispatch(clearDerivative())
	}

	const setVar = (val) => {
		dispatch(setDerivativeVariable(val))
	}

	const setIndex = (val) => {
		dispatch(setDerivativeIndex(val))
	}
	return (
		<div className={styles.Derivative}>
			<div className={styles.wrapper}>
				<h3>Производная:</h3>

				<div className={styles.DerivativeInput}>
					<Input setSymbol={setExp} expression={derivative} />
				</div>

				<div className={styles.derSettings}>
						<span>Функция f(</span>
						<input value={variable} onChange={(e) => {setVar(e.target.value)}}/>
						<span>) производная</span>
						<input value={index} onChange={(e) => {setIndex(e.target.value)}}/>
						<span>-го порядка.</span>
				</div>
				<div className={styles.DerivativeButtons}>
					<button>Восстановить выражение</button>
					<button onClick={clear}>Очистить</button>
				</div>
				<AboutMethod>
					{aboutMethod.derivative}
				</AboutMethod>
				<div className={styles.calcButton}>
					<CalculateButton start={onStartCalcExp}>
						Вычислить
					</CalculateButton>
				</div>
			</div>
		</div>
	);
}

export default Derivative;