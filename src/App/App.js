import React from 'react';
import Header from "../Header";
import styles from './App.module.css'
import Sidebar from "../components/Sidebar/Sidebar";
import {Route} from 'react-router-dom';
import Determinant from '../pages/matrix/Determinant'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.App}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.contentWrapper}>
          <Route path='/matrix/determinant' component={Determinant} />
          <div className={styles.third}>Решение</div>
        </div>
      </div>
    </div>
  );
}

export default App;
