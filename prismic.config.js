import { getEndpoint, createClient } from '@prismicio/client'

export const API_REF_URL = 'https://real-thread.prismic.io/api/v2'

const endpoint = getEndpoint('real-thread')
const prismicClient = createClient(endpoint)

export default prismicClient
