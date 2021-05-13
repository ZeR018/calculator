import React from 'react';
import styles from './Lim.module.css'
import Input from "../../components/Input";
import {AiOutlineArrowRight} from 'react-icons/ai'
import CalculateButton from "../../components/CalculateButton";
import {aboutMethod} from "../../data/aboutMethod";
import AboutMethod from "../../components/AboutMethod";
import {useDispatch, useSelector} from "react-redux";
import {setSymbolToLimExpression, setVariableToLimExpression,
	setStrivesForToLimExpression, clearLim} from '../../store/actions/lim'
import axios from "axios";
import {URL} from '../../data/constants'
import {changeResult} from '../../store/actions/result'

function Lim() {
	const dispatch = useDispatch()

	const {limExpression, variable, strivesFor} = useSelector(({lim}) => {
			return {
				limExpression: lim.limExpression,
				variable: lim.var,
				strivesFor: lim.strivesFor,
			}})

	const onStartLim = () => {
		console.log('limit')
		axios.post(URL, {
			'type':'limit',
			'data': {
				'expression': limExpression,
				'point': strivesFor,
				'var': variable,
			}})
			.then(response => {
				dispatch(changeResult(response.data.response))
			})
	}

	const setSymbolToExpression = (value) => {
		dispatch(setSymbolToLimExpression(value))
	}

	const setVariable = (value) => {
		dispatch(setVariableToLimExpression(value))
	}

	const setStrivesFor = (value) => {
		dispatch(setStrivesForToLimExpression(value))
	}

	const clear = () => {
		dispatch(clearLim())
	}
	return (
		<div className={styles.Lim}>
			<div className={styles.wrapper}>
				<h3>Предел:</h3>

				<div className={styles.limInput}>
					<span>lim</span>
					<Input setSymbol={setSymbolToExpression} expression={limExpression} />
				</div>
				<div className={styles.underLim}>
					<input className={styles.lims} value={variable}
								 onChange={(e) => setVariable(e.target.value)}/>
					<AiOutlineArrowRight value={limExpression} />
					<input className={styles.lims} value={strivesFor}
					onChange={(e) => setStrivesFor(e.target.value)}/>
				</div>
				<div className={styles.LimButtons}>
					<button>Восстановить выражение</button>
					<button onClick={clear}>Очистить</button>
				</div>
				<AboutMethod>
					{aboutMethod.expression}
				</AboutMethod>
				<div className={styles.calcButton}>
					<CalculateButton start={onStartLim}>
						Вычислить
					</CalculateButton>
				</div>
			</div>
		</div>
	);
}

export default Lim;