import React from 'react';
import styles from './Undefined.module.css'
import CalculateButton from "../../../components/CalculateButton";
import {aboutMethod} from "../../../data/aboutMethod";
import AboutMethod from "../../../components/AboutMethod";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../components/Input";
import {setValueToUndefinedIntegral, setVarToUndefinedIntegral, clearUndefinedIntegral} from '../../../store/actions/integral'
import axios from "axios";
import {URL} from '../../../data/constants'
import {changeResult} from '../../../store/actions/result'

const Undefined = () => {

	const dispatch = useDispatch()

	const {integral, integralVar} = useSelector(({integral}) => {
			return {
				integral: integral.undefined,
				integralVar: integral.undefinedVar
			}})

		const onStart = () => {
		console.log('undefined integral')
		axios.post(URL, {
			'type':'indef_integral',
			'data': {
				'expression': integral,
				'var': integralVar,
			}})
			.then(response => {
				dispatch(changeResult(response.data.response))
			})
	}

	const setIntegralExpression = (value) => {
		dispatch(setValueToUndefinedIntegral(value));
	}

	const setIntegralVar = (value) => {
		dispatch(setVarToUndefinedIntegral(value))
	}

	const clearIntegral = () => {
		dispatch(clearUndefinedIntegral())
	}
	return (
		<div className={styles.Undefined}>
						<div className={styles.wrapper}>
				<h3>Неопределённый интеграл:</h3>

				<div className={styles.intInput}>
					<span>∫</span>
					<Input expression={integral} setSymbol={setIntegralExpression}/>
					<i>d</i>
					<input className={styles.d} value={integralVar} onChange={(e) => setIntegralVar(e.target.value)}/>
				</div>
				<div className={styles.intButtons}>
					<button>Восстановить выражение</button>
					<button onClick={clearIntegral}>Очистить</button>
				</div>
				<AboutMethod>
					{aboutMethod.expression}
				</AboutMethod>
				<div className={styles.calcButton}>
					<CalculateButton start={onStart}>
						Вычислить
					</CalculateButton>
				</div>
			</div>
		</div>
	);
};

export default Undefined;
