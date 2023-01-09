import React from 'react'
import './about.scss'
import Resume from '../resume/resume'
import { Text } from '../../utils/context/lang'

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
