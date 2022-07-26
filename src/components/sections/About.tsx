import React from 'react'
import ReactHtmlParser from 'react-html-parser';


function About({ data }) {
	return (
		<section className="about" id="about" data-aos="fade-up">
			<div className="display-image">
				<div className="image-border" />
				<div className="green-box bg-gradient" />
				<img width="auto" height="auto" src={data.about_us_wrapper[0].about_us_img.url} alt="" />
			</div>

			<div className="py-4 md:py-6 px-3 md:px-8">
				<div className="flex items-center gap-4 font-sans text-sm text-body-dark">
					<span> About us </span>
					<span className="block h-[1px] w-24 bg-gray-1" />
				</div>

				<h2>{ReactHtmlParser(data.about_us_wrapper[0].about_us_heading[0].text)}</h2>

				<div className="font-sans text-body-dark leading-[22.4px] mt-7">
					<p>
						{ReactHtmlParser(data.about_us_wrapper[0].about_us_para_1[0].text)}
					</p>
					<p className="mt-6">
						{ReactHtmlParser(data.about_us_wrapper[0].about_us_para_2[0].text)}
					</p>
					<p className="mt-6">
						{ReactHtmlParser(data.about_us_wrapper[0].about_us_para_3[0].text)}
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
