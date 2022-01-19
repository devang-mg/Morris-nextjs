import { createElement } from 'react'
import { Elements, Link } from 'prismic-reactjs'
import sanitize from '@/lib/sanitize'
import linkResolver from '@/lib/prismic/link-resolver'

// Function to add unique key to props
const propsWithUniqueKey = (props, key) => Object.assign(props || {}, { key })

const htmlSerializer = (type, element, _, children, key) => {
	let props = {}
	let parsedChildren = children

	switch (type) {
		//  Images
		case Elements.image:
			const linkUrl = element.linkTo ? Link.url(element.linkTo, linkResolver) : null
			const linkTarget =
				element.linkTo && element.linkTo.target
					? { target: element.linkTo.target, rel: 'noopener' }
					: {}
			const wrapperClassList = [element.label || '', 'block-img']
			const img = (
				// eslint-disable-next-line
				<img
					src={element?.url || ''}
					alt={element?.alt || ''}
					copyright={element?.copyright || ''}
				/>
			)

			props = { className: wrapperClassList.join(' ') }
			parsedChildren = linkUrl ? (
				<a href={linkUrl} {...linkTarget}>
					{img}
				</a>
			) : (
				img
			)

			return createElement('p', propsWithUniqueKey(props, key), parsedChildren)

		case Elements.embed:
			props = {
				'data-oembed': element.oembed.embed_url,
				'data-oembed-type': element.oembed.type,
				'data-oembed-provider': element.oembed.provider_name,
				dangerouslySetInnerHTML: { __html: sanitize(element.oembed.html) }
			}

			return createElement('div', propsWithUniqueKey(props, key))

		case Elements.hyperlink:
			const target = element.data.target ? { target: element.data.target, rel: 'noopener' } : {}
			const hyperLinkUrl = Link.url(element.data, linkResolver)
			props = { target, href: hyperLinkUrl }

			return createElement('a', propsWithUniqueKey(props, key), parsedChildren)

		case Elements.label:
			if (element?.data?.label === 'blockquote') {
				return createElement('blockquote', propsWithUniqueKey(props, key), parsedChildren)
			} else {
				props = element.data.label ? { className: element.data.label } : {}

				return createElement('span', propsWithUniqueKey(props, key), parsedChildren)
			}

		default:
			return null
	}
}

export default htmlSerializer
