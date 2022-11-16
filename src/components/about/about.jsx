import React from 'react'
import './about.scss'

import { Text } from '../../utils/context/lang'
import Resume from '../resume/resume'

function About() {
	return (
		<main className='about'>
			<div className='about__wrapper'>
				<h1>
					<Text tid='aboutme' />
				</h1>
				<hr className='about__wrapper-divider' />
				<p className='about__wrapper-text f15'>
					<Text tid='abouttitle' />
					<br />
					<br />
					<Text tid='aboutdescr' />
				</p>
			</div>
			<Resume />
		</main>
	)
}

export default About
