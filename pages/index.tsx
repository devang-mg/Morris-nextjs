import ArrowRight from '@/components/icons/ArrowRight'
import Facebook from '@/components/icons/Facebook'
import Instagram from '@/components/icons/Instagram'
import Twitter from '@/components/icons/Twitter'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Services from '@/components/sections/Services'
import prismicClient from 'prismic.config'

import { Nav } from '@/components/layout'

import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link'

const Home = ({ document, contactDocument }) => {
	return (
		<>


			<Nav />
			<div className="pb-28">
				<div className="homepage-main-wrapper">
					<div className="homepage-container">
						<div className="">
							<h1>{ReactHtmlParser(document.data.intro_heading[0].text)}</h1>
							<h2>{ReactHtmlParser(document.data.intro_paragraph[0].text)}</h2>

							<button
								aria-label="get a estimate"
								name="get a estimate"
								className="homepage-get-a-estimate">
								Get an estimate <ArrowRight />
							</button>
						</div>
						<div className="homepage-social-icons">
							<Link href={document.data.facebook_link.url}>
								<button aria-label="social-media-link" name="social-media-link">
									<Facebook />
								</button>
							</Link>
							<Link href={document.data.twitter_link.url}>
								<button aria-label="social-media-link" name="social-media-link">
									<Twitter />
								</button>
							</Link>
							<Link href={document.data.instagram_link.url}>
								<button aria-label="social-media-link" name="social-media-link">
									<Instagram />
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="max-w-[1400px] mx-auto w-11/12 lg:w-10/12">
					<About data={document.data} />
					<Services data={document.data} />
					<Contact document={contactDocument} />
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps(context) {
	const prismicQuery1 = await prismicClient.getSingle('home')
	const prismicQuery2 = await prismicClient.getSingle('contact-us-form')


	return {
		props: { document: prismicQuery1, contactDocument: prismicQuery2 }
	}
}

export default Home
