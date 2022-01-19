// -- Link resolution rules
// Manages the url links to internal Prismic documents
const linkResolver = (doc: {
	link_type: string
	type: string
	tags: string[]
	uid: string
	url?: string
}) => {
	if (doc?.uid) {
		return `/${doc.uid}`
	}

	return '/'
}

export default linkResolver
