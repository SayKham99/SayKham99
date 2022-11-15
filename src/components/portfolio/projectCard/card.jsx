import './card.scss'

function Card({ data }) {
	const { img, name, type, url } = data
	return (
		<a href={url} target={'_blank'}>
			<div className='pCard'>
				<div className='pCard__image'>
					<img src={img} alt='' className='pCard__image-img' />
				</div>
				<p className='pCard__title'>{name}</p>
				<p className='pCard__descr f15'>{type}</p>
			</div>
		</a>
	)
}

export default Card
