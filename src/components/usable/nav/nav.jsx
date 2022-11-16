import React from 'react'
import './nav.scss'
import { NavLink, Outlet } from 'react-router-dom'
import LanguageSelector from '../lngSelect/lngSelect'
import { Text } from '../../../utils/context/lang'

function Nav() {
	return (
		<section className='main'>
			<nav className='main__nav beetwen'>
				<NavLink to={'/about'}>
					<Text tid='about' />
				</NavLink>
				<NavLink to={'/portfolio'}>
					<Text tid='portfolio' />
				</NavLink>
				<NavLink to={'/contact'}>
					<Text tid='contact' />
				</NavLink>
				<LanguageSelector />
			</nav>
			<main className='main__content'>
				<Outlet />
			</main>
		</section>
	)
}

export default Nav
