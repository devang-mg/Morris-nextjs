import { createClient, getRepositoryEndpoint } from '@prismicio/client'

const endpoint = getRepositoryEndpoint('morris-landscapes')
const prismicClient = createClient(endpoint)

export default prismicClient
