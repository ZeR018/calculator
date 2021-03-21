import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Sidebar.module.css'


const SubMenu = ({item}) => {
	const [subnav, setSubnav] = React.useState(false);
	const handleShowSubnav = () => setSubnav(!subnav);
	return (
		<div>
			<Link
				onClick={item.subNav && handleShowSubnav}
				to={item.path}
				className={styles.sidebarLink}
			>
				<div className={styles.sidebarButton}>
					<span className={styles.sidebarButtonIcon}>{item.icon}</span>
					<span className={styles.sidebarButtonLabel}>{item.title}</span>
				</div>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</Link>
			{subnav && item.subNav.map((item, index) => {
				return (
					<Link
						className={styles.dropdownLink}
						to={item.path}
						key={`subnav_${index}`}
					>
						<div className={styles.sidebarButton}>
							<span className={styles.sidebarButtonIcon}>{item.icon}</span>
							<span className={styles.sidebarButtonLabel}>{item.title}</span>
						</div>
					</Link>
				)})}
		</div>
	);
};

export default SubMenu;
