import Image from 'next/image'
import ArrowTop from '../icons/ArrowTop'
import LogoVertical from '../icons/LogoVertical'

const Footer = () => {
	return (
		<footer>
			<div className="footer-content">
				<span data-aos="fade-up">
					<LogoVertical />
				</span>

				<p data-aos="fade-up">
					2022 Morris Landscape Management, LLC.
					<br className="hidden md:block" /> All rights reserved.
				</p>

				<a href="#top" data-aos="fade-up">
					<button className="bg-gradient">
						Back to top <ArrowTop />
					</button>
				</a>
			</div>

			<div className="w-full">
				<img
					className="w-full mt-2 !aspect-auto"
					height="auto"
					width="auto"
					src="https://cdn.raster.app/u3ejzY27C1ggww68oof0hmezbSg2/idpUh9dRL4?ixlib=js-3.6.0&s=ad758086baa924e21ccc768ace1c068c"
					alt=""
				/>
			</div>
		</footer>
	)
}

export default Footer
