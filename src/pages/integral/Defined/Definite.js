import React from 'react';
import styles from './Definite.module.css'
import CalculateButton from "../../../components/CalculateButton";
import {aboutMethod} from "../../../data/aboutMethod";
import AboutMethod from "../../../components/AboutMethod";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../components/Input";
import {setValueToDefinedIntegral, setVarToDefinedIntegral, clearDefinedIntegral,
	setUpperIntegrationLimit, setLoverIntegrationLimit} from '../../../store/actions/integral'
import axios from "axios";

const Definite = () => {

	const dispatch = useDispatch()

	const {integral, integralVar, upperLimit, loverLimit} = useSelector(({integral}) => {
			return {
				integral: integral.defined,
				integralVar: integral.definedVar,
				upperLimit: integral.upperIntegrationLimit,
				loverLimit: integral.loverIntegrationLimit,
			}})

		const onStart = () => {
		console.log('defined integral')
		axios.post(URL, {
			'type':'indef_integral',
			'data': {
				'expression': integral,
				'var': integralVar,
				'limits': [loverLimit, upperLimit],
			}})
			.then(response => {
				console.log(response)
			})
		//Сохранять response
		//Создать state с результатом
	}

	const setIntegralExpression = (value) => {
		dispatch(setValueToDefinedIntegral(value));
	}

	const setIntegralVar = (value) => {
		dispatch(setVarToDefinedIntegral(value))
	}

	const clearIntegral = () => {
		dispatch(clearDefinedIntegral())
	}

	const setUpperLim = (value) => {
		dispatch(setUpperIntegrationLimit(value))
	}

	const setLoverLim = (value) => {
		dispatch(setLoverIntegrationLimit(value))
	}
	return (
		<div className={styles.Undefined}>
						<div className={styles.wrapper}>
				<h3>Определённый интеграл:</h3>

					<div className={styles.integralWithLimits}>
						<div className={styles.integrationLims}>
							<input value={upperLimit} onChange={(e) => {setUpperLim(e.target.value)}} />
						</div>
						<div className={styles.intInput}>
							<span>∫</span>
							<Input expression={integral} setSymbol={setIntegralExpression}/>
							<i>d</i>
							<input className={styles.d} value={integralVar} onChange={(e) => setIntegralVar(e.target.value)}/>
						</div>
						<div className={styles.integrationLims}>
							<input value={loverLimit} onChange={(e) => {setLoverLim(e.target.value)}} />
						</div>
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

export default Definite;
