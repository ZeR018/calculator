import styles from './AboutMethod.module.css'
import React from 'react'

const AboutMethod = (props) => {
	return (
		<div className={styles.about}>
			<h5 className={styles.aboutTitle}>О методе</h5>
			{props.children}
		</div>
	)
}

export default AboutMethod;