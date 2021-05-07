import React from 'react';
import styles from './Expression.module.css'
import Input from "../../components/Input";
import CalculateButton from "../../components/CalculateButton";
import {aboutMethod} from "../../data/aboutMethod";
import AboutMethod from "../../components/AboutMethod";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {clearExprassion, setExprassion} from "../../store/actions/expression";

function Expression() {
	const dispatch = useDispatch()

	const {expression} = useSelector(({expression}) => {
			return {
				expression: expression.expression,
			}})

	const onStartCalcExp = () => {
		console.log('expression')
		axios.post(URL, {
			'type':'expression',
			'data': expression,
		})
			.then(response => {
				console.log(response)
			})
		//Сохранять response
		//Создать state с результатом
	}

	const setExp = (value) => {
		dispatch(setExprassion(value))
	}

	const clear = () => {
		dispatch(clearExprassion())
	}
	return (
		<div className={styles.Lim}>
			<div className={styles.wrapper}>
				<h3>Выражение:</h3>

				<div className={styles.limInput}>
					<Input setSymbol={setExp} expression={expression} />
				</div>
				<div className={styles.LimButtons}>
					<button>Восстановить выражение</button>
					<button onClick={clear}>Очистить</button>
				</div>
				<AboutMethod>
					{aboutMethod.expression}
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

export default Expression;