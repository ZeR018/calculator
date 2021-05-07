import React from 'react';
import Header from "../Header";
import styles from './App.module.css'
import Sidebar from "../components/Sidebar/Sidebar";
import {Route} from 'react-router-dom';
import MatrixBinary from '../pages/matrix/Binary'
import MatrixUnary from '../pages/matrix/Unary'
import Lim from "../pages/Lim";


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
					<div className={styles.third}>Решение</div>
				</div>
			</div>
		</div>
	);
}

export default App;
