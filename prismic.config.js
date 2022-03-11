import { createClient, getRepositoryEndpoint } from '@prismicio/client'

const endpoint = getRepositoryEndpoint('example')
const prismicClient = createClient(endpoint)

export default prismicClient
