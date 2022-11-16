import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import avatar from '../../../assets/memojis/me.png'
import { ReactComponent as Mail } from '../../../assets/icons/mail-outline.svg'
import { ReactComponent as Phone } from '../../../assets/icons/phone-portrait-outline.svg'
import { ReactComponent as Calendar } from '../../../assets/icons/calendar-outline.svg'
import { ReactComponent as Geo } from '../../../assets/icons/location-outline.svg'
import { ReactComponent as In } from '../../../assets/icons/in.svg'
import { ReactComponent as Tg } from '../../../assets/icons/tg.svg'
import { ReactComponent as Github } from '../../../assets/icons/github.svg'
import { ReactComponent as Down } from '../../../assets/icons/chevron-down.svg'
import Icon from '../icon/icon'
import useWindowSize from '../../../hooks/useWindowSize'
import { Text } from '../../../utils/context/lang'

const contact = [
	{
		id: 1,
		icon: <Mail />,
		url: 'mailto:x5292623@icloud.com',
		urlText: 'text',
		title: 'email'
	},
	{
		id: 2,
		icon: <Phone />,
		url: 'tel:998907636669',
		urlText: 'text',
		title: 'phone'
	},
	{
		id: 3,
		icon: <Calendar />,
		url: 'none',
		urlText: 'text',
		title: 'birthday'
	},
	{
		id: 4,
		icon: <Geo />,
		url: 'https://yandex.uz/maps/-/CCU6EJdp~A',
		urlText: 'text',
		title: 'location'
	}
]

const social = [
	{
		id: 1,
		icon: <Github fill={'red'} />,
		url: 'https://github.com/SayKham99/'
	},
	{
		id: 2,
		icon: <In />,
		url: 'https://www.linkedin.com/in/saykham99/'
	},
	{
		id: 3,
		icon: <Tg />,
		url: 'https://t.me/saykham99'
	}
]

function Sidebar() {
	const [height, width] = useWindowSize()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (width > 1285) {
			setOpen(false)
		} else {
			setOpen(true)
		}
	}, [width])

	return (
		<aside className={`sidebar ${!open ? 'active' : ''}`}>
			<div className='sidebar__more-btn'>
				<p className='f15' onClick={() => setOpen(!open)}>
					{width > 600 ? <Text tid='morebtn' /> : <Down />}
				</p>
			</div>
			<div className='sidebar__header'>
				<div className='sidebar__header-image'>
					<img
						src={avatar}
						alt='Avatar'
						className='sidebar__header-image--avatar'
					/>
				</div>
				<div className='sidebar__header-text'>
					<h1 className='title'>
						<Text tid='name' />
					</h1>
					<div>
						<p>
							<Text tid='job' />
						</p>
					</div>
				</div>
			</div>
			<div className='sidebar__body'>
				{contact.map(({ id, url, urlText, icon, title }) => (
					<div key={id} className='sidebar__body-item'>
						<div className='sidebar__body-item--icon center'>
							<Icon icon={icon} />
						</div>
						<div className='sidebar__body-item--text text'>
							<p className='text__title f15'>
								<Text tid={`${title}`} />
							</p>
							<a href={url} className='text__url' target='_blank'>
								<Text tid={`${title}${urlText}`} />
							</a>
						</div>
					</div>
				))}
			</div>
			<div className='sidebar__footer'>
				{social.map(({ id, icon, url }) => (
					<a key={id} href={url} target='_blank'>
						{icon}
					</a>
				))}
			</div>
		</aside>
	)
}

export default Sidebar
