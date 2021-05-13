import {useSelector} from "react-redux";
import styles from './Decision.module.css'
import Matrix from "../components/Matrix";


const Decision = () => {
	const {res} = useSelector(({result}) => {
		return {
			res: result.result
		}
	})
	console.log(res)

	return(
		<div className={styles.Decision}>
			<span>Ответ:</span>
			<div className={styles.res}>
				{Array.isArray(res)
					? <Matrix res matrix={res}/>
					: <div>{res}</div>
				}
			</div>
		</div>
	)
}

export default Decision