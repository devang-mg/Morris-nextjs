import { RichText as RichTextRenderer } from 'prismic-reactjs'

import htmlSerializer from '@/lib/prismic/serializer'
import linkResolver from '@/lib/prismic/link-resolver'

type RichTextProps = { content: any; className?: string }
const RichText = ({ content, className }: RichTextProps) => {
	return content ? (
		<div className={`rich-text ${className ? className : ''}`}>
			<RichTextRenderer
				render={content}
				linkResolver={linkResolver}
				htmlSerializer={htmlSerializer}
			/>
		</div>
	) : null
}

export default RichText
