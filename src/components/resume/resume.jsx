import React from 'react'
import { ReactComponent as Book } from '../../assets/icons/books.svg'
import { ReactComponent as Books } from '../../assets/icons/book-open.svg'
import Icon from '../usable/icon/icon'
import './resume.scss'
import Skills from './skills/skills'
import { Text } from '../../utils/context/lang'

const education = [
	{
		id: 1,
		date: '2021-2022',
		title: 'icode',
		descr: 'icoderoute'
	},
	{
		id: 2,
		date: '2021-2022',
		title: 'udemy',
		descr: 'udemyroute'
	},
	{
		id: 3,
		date: '2015-2018',
		title: 'college',
		descr: 'collegeroute'
	}
]
const experience = [
	{
		id: 1,
		date: '2022-2022',
		title: 'uil',
		descr: 'uildescr'
	},
	{
		id: 3,
		date: '2022-2022',
		title: 'dc',
		descr: 'dcdescr'
	}
]

function Resume() {
	return (
		<main className='resume'>
			<h2 className='resume__title'>
				<Text tid='resume' />
			</h2>
			<hr />
			<div className='resume__content'>
				<div className='resume__content-item'>
					<span className='resume__education'>
						<Icon icon={<Books />} />
						<p>
							<Text tid='education' />
						</p>
					</span>
					<ol className='resume__list'>
						{education.map(({ id, title, descr, date }) => (
							<li key={id} className='resume__list-item'>
								<h3 className='resume__list-item--title f15'>
									<Text tid={title} />
								</h3>
								<p className='resume__list-item--date f15'>
									{date}
								</p>
								<p className='resume__list-item--descr f15'>
									<Text tid={descr} />
								</p>
							</li>
						))}
					</ol>
				</div>
				<div className='resume__content-item'>
					<span className='resume__education'>
						<Icon icon={<Book />} />
						<p>
							<Text tid='experience' />
						</p>
					</span>
					<ol className='resume__list'>
						{experience.map(({ id, title, descr, date }) => (
							<li key={id} className='resume__list-item'>
								<h3 className='resume__list-item--title f15'>
									<Text tid={title} />
								</h3>
								<p className='resume__list-item--date f15'>
									{date} <Text tid={title + 'date'} />
								</p>
								<p className='resume__list-item--descr f15'>
									<Text tid={descr} />
								</p>
							</li>
						))}
					</ol>
				</div>
			</div>
			<Skills />
		</main>
	)
}

export default Resume
