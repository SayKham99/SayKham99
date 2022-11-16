import React, { useContext } from 'react'
import { ReactComponent as Lang } from '../../../assets/icons/lng.svg'
import { LanguageContext } from '../../../utils/context/lang'
import { languageOptions } from '../../../languages'
import './lngSelect.scss'

export default function LanguageSelector() {
	const { userLanguage, userLanguageChange } = useContext(LanguageContext)

	const handleLanguageChange = e => userLanguageChange(e.target.value)

	return (
		<div className='lng'>
			<label htmlFor='lng'>
				<Lang />
			</label>
			<select
				id='lng'
				onChange={handleLanguageChange}
				value={userLanguage}
			>
				{Object.entries(languageOptions).map(([id, name]) => (
					<option key={id} value={id}>
						{name}
					</option>
				))}
			</select>
		</div>
	)
}
