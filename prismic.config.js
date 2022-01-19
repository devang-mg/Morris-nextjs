import { getEndpoint, createClient } from '@prismicio/client'

export const API_REF_URL = 'https://example.prismic.io/api/v2'

const endpoint = getEndpoint('example')
const prismicClient = createClient(endpoint)

export default prismicClient
