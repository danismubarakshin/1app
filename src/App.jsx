import { useState } from 'react'
import styles from './app.module.css'

export const App = () => {
	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState('')

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение')
		setValue('')
		if (String(promptValue).length < 3) {
			setError(!'')
		} else if (promptValue === '') {
			setError(!'')
		} else {
			setValue(promptValue)
			setError('')
		}
	}

	let isValueVaild = Boolean

	if (value.length < 3) {
		isValueVaild = false
	} else if (value.length >= 3) {
		isValueVaild = true
	}

	const onAddButtonClick = () => {
		if (value) {
			setList((updatedList) => [...updatedList, { id: Date.now(), value }])
			setValue('')
			setError('')
		}
	}

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>
					Текущее значение <code>value</code>:
					<output className={styles['current-value']}>{value}</output>
				</p>
				{error !== '' && (
					<div className={styles.error}>
						Введенное значение должно содержать минимум 3 символа
					</div>
				)}
				<div className={styles['buttons-container']}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className={styles.button}
						onClick={onAddButtonClick}
						disabled={!isValueVaild}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles['list-container']}>
					<h2 className={styles['list-heading']}>Список:</h2>

					{list.length > 0 ? (
						<ul className={styles.list}>
							{list.map(({ id, value }) => (
								<li className={styles['list-item']} key={id}>
									{value}
								</li>
							))}
						</ul>
					) : (
						<p className={styles['no-margin-text']}>
							Нет добавленных элементов
						</p>
					)}
				</div>
			</div>
		</>
	)
}
