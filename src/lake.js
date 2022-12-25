import SanityClient from '@sanity/client'

export default SanityClient({
	projectId: 'nqpn5wmy',
	dataset: 'production',
	apiVersion: 'v2021-03-25',
	useCdn: true
})
