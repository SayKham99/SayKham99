import React from 'react'
import './testimonial.scss'
import avatar1 from '../../../assets/memojis/girl1.png'
import avatar2 from '../../../assets/memojis/girl2.png'
import avatar3 from '../../../assets/memojis/boy1.png'
import avatar4 from '../../../assets/memojis/boy2.png'
import Card from './testimonialCard/card'

const testimonial = [
	{
		id: 1,
		img: avatar1,
		name: 'Marina Sky',
		descr: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
		date: '14 June,2021'
	},
	{
		id: 2,
		img: avatar2,
		name: 'Abigale Morgan',
		descr: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
		date: '14 June,2021'
	},
	{
		id: 3,
		img: avatar3,
		name: 'John Doe',
		descr: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
		date: '14 June,2021'
	},
	{
		id: 4,
		img: avatar4,
		name: 'Richard Max',
		descr: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
		date: '14 June,2021'
	}
]

function Testimonial() {
	return (
		<div className='testimonial'>
			<h2 className='testimonial__title'>Fikr-Mulohazalar</h2>
			<ul className='testimonial__cards'>
				{testimonial.map(person => (
					<li key={person.id} className='testimonial__cards-card'>
						<Card data={person} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default Testimonial
