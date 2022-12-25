import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from './utils/container/Container'
import Sidebar from './components/usable/sidebar/sidebar'
import Nav from './components/usable/nav/nav'
import AboutMain from './pages/aboutMain'
import ContactMain from './pages/contactMain'
import PortfolioMain from './pages/portfolio'

function App() {
	return (
		<Container>
			<Sidebar />
			<Routes>
				<Route path={'/'} element={<Nav />}>
					<Route index element={<AboutMain />} />
					<Route path={'/about'} element={<AboutMain />} />
					<Route path={'/contact'} element={<ContactMain />} />
					<Route path={'/portfolio'} element={<PortfolioMain />} />
				</Route>
			</Routes>
		</Container>
	)
}

export default App
