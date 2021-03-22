import React from 'react';
import Header from "./Header";
import styles from './App.module.css'
import Sidebar from "./components/Sidebar/Sidebar";
import MatrixForm from "./components/MatrixForm";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.App}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.second}>
            <MatrixForm />
          </div>
          <div className={styles.third}>Решение</div>
        </div>
      </div>
    </div>
  );
}

export default App;
