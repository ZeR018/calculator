import React from 'react';
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<h3 className={styles.title}>Lobachevsky calculator</h3>
		</header>
	);
};

export default Header;
