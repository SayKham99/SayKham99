import React from 'react'
import './card.scss'
import { Text } from '../../../utils/context/lang'

function Card({ data }) {
	const { id, icon, title, descr } = data
	return (
		<div key={id} className='card'>
			<div className='card__icon'>{icon}</div>
			<div className='card__text'>
				<p className='card__text-title'>
					<Text tid={title} />
				</p>
				<p className='card__text-descr f15'>
					<Text tid={descr} />
				</p>
			</div>
		</div>
	)
}

export default Card
