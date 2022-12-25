import Card from './projectCard/card'
import './portfolio.scss'

import { Text } from '../../utils/context/lang'
import { useEffect, useState } from 'react'

import sanityClient from '../../lake'

function Portfolio() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		sanityClient
			.fetch(
				`
			*[_type == 'post']{
				"image":mainImage{asset->{url}},
				title,
				"slug": slug.current,
				url,
				type,
				_createdAt
			} | order(_createdAt desc)`
			)
			.then(data => setProjects(data))
	}, [])

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
							key={project.slug}
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
