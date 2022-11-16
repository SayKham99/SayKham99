import { useEffect, useState } from 'react'

function UseWindowSize() {
	const [size, setSize] = useState([window.innerHeight, window.innerWidth])
	useEffect(() => {
		const handleResize = () => {
			setSize([window.innerHeight, window.innerWidth])
		}
		window.addEventListener('resize', handleResize)
	}, [])
	return size
}

export default UseWindowSize

// const [height, width] = useWindowSize()
