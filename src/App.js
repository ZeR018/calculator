import React from 'react';
import Header from "./Header";
import styles from './App.module.css'
import Sidebar from "./components/Sidebar/Sidebar";
import Matrix from "./components/Matrix";

function App() {
  const [rovs, setRovs] = React.useState(1);
  const [cols, setCols] = React.useState(1);
  const setUserRovs = () => setRovs(rovs+1);
  const setUserCols = () => setCols(cols+1);
  return (
    <div>
      <Header />
      <div className={styles.App}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.second}>
            Вычислить
            <button onClick={setUserCols}>+Колонка</button>
            <button onClick={setUserRovs}>+Строка</button>
            <Matrix cols={cols} rovs={rovs}/>
          </div>
          <div className={styles.third}>Решение</div>
        </div>
      </div>
    </div>
  );
}

export default App;
