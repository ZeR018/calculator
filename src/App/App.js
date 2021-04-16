import React from 'react';
import Header from "../Header";
import styles from './App.module.css'
import Sidebar from "../components/Sidebar/Sidebar";
import {Route} from 'react-router-dom';
import Determinant from '../pages/matrix/Determinant'
import MatrixSun from '../pages/matrix/Sum'


function App() {
	return (
		<div>
			<Header/>
			<div className={styles.App}>
				<div className={styles.sidebar}>
					<Sidebar/>
				</div>
				<div className={styles.contentWrapper}>
					<Route path='/matrix/determinant' component={Determinant}/>
					<Route path='/matrix/sum' component={MatrixSun}/>
					<div className={styles.third}>Решение</div>
				</div>
			</div>
		</div>
	);
}

export default App;
