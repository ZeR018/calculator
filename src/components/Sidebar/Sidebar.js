import React from 'react';
import styles from './Sidebar.module.css'
import {useSelector} from "react-redux";
import {sidebarData} from '../../data/SidebarData'
import SubMenu from "./SubMenu";


const Sidebar = () => {
	const {isSidebarOpen} = useSelector(({sidebar}) => {
		return {
			isSidebarOpen: sidebar.isSidebarOpen,
		};
	});

	return (
		<div className={styles.sidebar}>
			{
				isSidebarOpen &&
				<div className={styles.sidebarNav}>
					<div className={styles.sidebarWrap}>
						{sidebarData.map((item, index) => {
							return <SubMenu item={item} key={`SubMenu_${index}`} />})}
					</div>
				</div>
			}
		</div>
	);
};

export default Sidebar;
