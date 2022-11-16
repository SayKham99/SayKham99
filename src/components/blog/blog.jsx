import './blog.scss'
import Card from './blogCard/card'

import pic from '../../assets/pic.jpg'

const posts = [
	{
		id: 1,
		type: 'Design',
		date: 'Feb 23,2021',
		title: 'Best Fonts Every Designer',
		descr: 'Look up lore in Wiktionary, the free dictionary. Lore may refer to: Folklore, acquired knowledge or traditional beliefs. Oral lore or oral tradition, orally conveyed cultural knowledge and traditions',
		image: pic
	},
	{
		id: 1,
		type: 'Design',
		date: 'Feb 23,2021',
		title: 'Best Fonts Every Designer',
		descr: 'Look up lore in Wiktionary, the free dictionary. Lore may refer to: Folklore, acquired knowledge or traditional beliefs. Oral lore or oral tradition, orally conveyed cultural knowledge and traditions',
		image: pic
	},
	{
		id: 1,
		type: 'Design',
		date: 'Feb 23,2021',
		title: 'Best Fonts Every Designer',
		descr: 'Look up lore in Wiktionary, the free dictionary. Lore may refer to: Folklore, acquired knowledge or traditional beliefs. Oral lore or oral tradition, orally conveyed cultural knowledge and traditions',
		image: pic
	}
]

function Blog() {
	return (
		<div className='blog'>
			<h1 className='blog__title'>Blog</h1>
			<hr />
			<div className='blog__projects'>
				<div className='blog__projects-items'>
					{posts.map(project => (
						<div className='blog__projects-items--item'>
							<Card data={project} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog
