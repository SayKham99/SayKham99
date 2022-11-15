import Card from './projectCard/card'
import './portfolio.scss'

import afeme from '../../assets/images/afeme.jpg'
import an from '../../assets/images/an.jpg'
import california from '../../assets/images/californiya.jpg'
import launch from '../../assets/images/launch.jpg'
import miami from '../../assets/images/miami.jpg'
import medart from '../../assets/images/medart.jpg'
import runsmart from '../../assets/images/runsmart.jpg'
import { Text } from '../../utils/context/lang'

const projects = [
	{
		id: 1,
		img: afeme,
		name: 'Afeme',
		type: 'e-Commerce',
		descr: 'Bu proyekt Digital City bolib otkan Internship vazifasi bolgan va hozirda tamomlangan',
		url: 'https://afeme.uz/'
	},
	{
		id: 2,
		img: medart,
		name: 'MedArt Group',
		type: 'Corporative Landing Page',
		descr: 'UIL Agency tomonidan olingan birinchi buyurtma, 0 dan 100 men ozim tamomlaganman',
		url: 'http://medartgroup.uz'
	},
	{
		id: 3,
		img: california,
		name: 'California',
		type: 'e-Commerce',
		descr: 'Pet Proyekt',
		url: 'https://saykham99.github.io/California/'
	},
	{
		id: 4,
		img: launch,
		name: 'Launch',
		type: 'Landing Page',
		descr: 'Landing Page',
		url: 'https://saykham99.github.io/Launch/'
	},
	{
		id: 5,
		img: runsmart,
		name: 'Pulse',
		type: 'Landing Page',
		descr: 'Landing Page',
		url: 'https://runsmartsaykham.netlify.app/'
	},
	{
		id: 6,
		img: an,
		name: 'an.',
		type: 'Portfolio Page',
		descr: 'Landing Page',
		url: 'https://qwertydesigner.netlify.app/'
	},
	{
		id: 7,
		img: miami,
		name: 'Parallax',
		type: 'Landing Page',
		descr: 'Landing Page',
		url: 'https://parallaxkhamidullo.netlify.app/'
	}
]

function Portfolio() {
	return (
		<div className='portfolio'>
			<h1 className='portfolio__title'>
				<Text tid='portfolio' />
			</h1>
			<hr />
			<div className='portfolio__projects'>
				<div className='portfolio__projects-filter'></div>
				<div className='portfolio__projects-items'>
					{projects.map(project => (
						<div
							key={project.id}
							className='portfolio__projects-items--item'
						>
							<Card data={project} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Portfolio
