import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './utils/context/lang'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<LanguageProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</LanguageProvider>
)
