import React from 'react';
import Header from "../Header";
import styles from './App.module.css'
import Sidebar from "../components/Sidebar/Sidebar";
import {Route} from 'react-router-dom';
import MatrixBinary from '../pages/matrix/Binary'
import MatrixUnary from '../pages/matrix/Unary'
import Lim from "../pages/Lim";
import Expression from "../pages/Expression";
import Derivative from "../pages/Derivative";


function App() {

	return (
		<div>
			<Header/>
			<div className={styles.App}>
				<div className={styles.sidebar}>
					<Sidebar/>
				</div>
				<div className={styles.contentWrapper}>
					<Route path='/matrix/binary' component={MatrixBinary}/>
					<Route path='/matrix/unary' component={MatrixUnary}/>
					<Route path='/lim' component={Lim}/>
					<Route path='/expressions' component={Expression}/>
					<Route path='/derivative' component={Derivative}/>
					<div className={styles.third}>Решение</div>
				</div>
			</div>
		</div>
	);
}

export default App;
