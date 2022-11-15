import './form.scss'
import { useState } from 'react'
import { Text } from '../../../utils/context/lang'

function Form() {
	const token = '5715823415:AAHTTBY9JGgwPt-scALDv9MJuFZNe1r0d2A'
	const userID = '5235430145'

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	let request = `Name: ${name} %0ANumber: ${email} %0AMessage: ${message}`
	let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userID}&text=${request}`
	let api = new XMLHttpRequest()
	const Send = e => {
		e.preventDefault()
		if (name !== '' && email !== '' && message !== '') {
			api.open('GET', url, true)
			api.send()
		}
		setName('')
		setEmail('')
		setMessage('')
	}

	return (
		<form className='form'>
			<h2 className='form__title'>
				<Text tid='form' />
			</h2>
			<div className='form__inputs'>
				<div className='form__inputs-name'>
					<label htmlFor='name'>
						<Text tid='inputname' />
					</label>
					<input
						id='name'
						type='text'
						className='form__inputs-name input'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className='form__inputs-phone'>
					<label htmlFor='phone'>
						<Text tid='inputnumber' />
					</label>
					<input
						id='phone'
						type='tel'
						className='form__inputs-phone input'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
			</div>
			<div className='form__message'>
				<label htmlFor='msg'>
					<Text tid='inputmsg' />
				</label>
				<textarea
					id='msg'
					className='form__message-area'
					maxLength='500'
					cols='20'
					rows='5'
					value={message}
					onChange={e => setMessage(e.target.value)}
				></textarea>
			</div>
			<button className='form__btn' type='submit' onClick={e => Send(e)}>
				<Text tid='btn' />
			</button>
		</form>
	)
}

export default Form
