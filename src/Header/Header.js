import React from 'react';
import styles from './Header.module.css'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {changeSidebarOpen} from '../store/actions/sidebar'

const Header = () => {
	const dispatch = useDispatch();
	const handleShowSidebar = () => {
		dispatch(changeSidebarOpen())
	}
	const {isSidebarOpen} = useSelector(sidebar => {
		return {
			isSidebarOpen: sidebar.isSidebarOpen,
		};
	});

	return (
		<header className={styles.header}>
				<Link to='#' className={styles.navIcon}>
					{
						isSidebarOpen
							? <AiOutlineClose onClick={handleShowSidebar} />
							: <FaBars onClick={handleShowSidebar} />

					}
				</Link>
			<h3 className={styles.title}>Lobachevsky calculator</h3>
		</header>
	);
};

export default Header;
