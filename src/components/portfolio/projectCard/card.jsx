import './card.scss'

function Card({ data }) {
	const { image, title, type, url } = data
	return (
		<a href={url} target='_blank' rel='noreferrer'>
			<div className='pCard'>
				<div className='pCard__image'>
					<img
						src={image.asset.url}
						alt=''
						className='pCard__image-img'
					/>
				</div>
				<p className='pCard__title'>{title}</p>
				<p className='pCard__descr f15'>{type}</p>
			</div>
		</a>
	)
}

export default Card
