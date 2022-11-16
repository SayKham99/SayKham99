import './card.scss'

function Card({ data }) {
	const { id, type, title, descr, date, image } = data
	return (
		<div key={id} className='bCard'>
			<div className='bCard__header'>
				<img src={image} alt={title} className='bCard__header-image' />
			</div>
			<div className='bCard__body'>
				<p className='bCard__body-suptitle f15'>
					{type} <span></span> {date}
				</p>
				<h2 className=' bCard__body-title'>{title}</h2>
				<p className=' bCard__body-descr'>{descr}</p>
			</div>
		</div>
	)
}

export default Card
