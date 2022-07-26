import React, { useState } from 'react'
import ArrowUpHalf from '../icons/ArrowUpHalf'
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link'


function Services({ data }) {

    let [seeMoreOpen, setSeeMoreOpen] = useState(false)

    return (
        <div className="mt-24 w-full relative" id="service">
            <section data-aos="fade-up">
                <div className="flex items-center gap-4 font-sans text-sm text-body-dark">
                    <span> Services </span>
                    <span className="block h-[1px] w-24 bg-gray-1" />
                </div>

                <div className="">
                    <h2>
                        {ReactHtmlParser(data.services_heading[0].text)}
                    </h2>

                    <p className="font-sans text-sm md:text-base text-body-dark leading-[22.4px] mt-7 w-[200px]">
                        {ReactHtmlParser(data.services_para[0].text)}
                    </p>

                    <div className="services-grid-1">
                        <div className="services-item services-item-1">
                            <Link className="w-full h-full" href="/service/design-planning">
                                <div className="services-item-gradient">
                                    <span> Design & Planning</span>
                                </div>
                            </Link>
                        </div>

                        <div className="services-item services-item-2">
                            <Link className="w-full h-full" href="/service/pools-waterfalls">
                                <div className="services-item-gradient">
                                    <span> Pools & Waterfalls</span>
                                </div>
                            </Link>
                        </div>

                        <div className="services-item services-item-3">
                            <Link className="w-full h-full" href="/service/outdoor-lighting/">
                                <div className="services-item-gradient">
                                    <span> Outdoor Lighting</span>
                                </div>
                            </Link>
                        </div>

                        <div className="services-item services-item-4">
                            <Link className="w-full h-full" href="/service/outdoor-retreats">
                                <div className="services-item-gradient">
                                    <span> Outdoor Retreats</span>
                                </div>
                            </Link>
                        </div>

                        <div className="services-item services-item-5">
                            <Link className="w-full h-full" href="/service/hardscapes-stone">
                                <div className="services-item-gradient">
                                    <span> Hardscapes & Stone</span>
                                </div>
                            </Link>
                        </div>
                        <div className="services-item services-item-6">
                            <Link className="w-full h-full" href="/service/fire-pits-outdoor-kitchens">
                                <div className="services-item-gradient">
                                    <span> Fire Pits & Outdoor Kitchens </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {seeMoreOpen ?
                        (

                            <div className="services-grid-2">
                                <div className="services-item services-item-7">
                                    <Link className="w-full h-full" href="/service/tree-care-plants">
                                        <div className="services-item-gradient">
                                            <span> Tree Care & Plants</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="services-item services-item-8">
                                    <Link className="w-full h-full" href="/service/paths-driveways">
                                        <div className="services-item-gradient">
                                            <span> Paths & Driveways</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="services-item services-item-9">
                                    <Link className="w-full h-full" href="/service/drainage-erosion">
                                        <div className="services-item-gradient">
                                            <span> Drainage & Erosion </span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="services-item services-item-10">
                                    <Link className="w-full h-full" href="/service/speciality-construction">
                                        <div className="services-item-gradient">
                                            <span> Speciality Construction</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ) : ''
                    }

                    <div className="w-fit mx-auto pt-4">
                        <button
                            onClick={() => setSeeMoreOpen(!seeMoreOpen)}
                            aria-label="see less"
                            name="see less"
                            className="see-less-btn bg-gradient">
                            {seeMoreOpen ?
                                "See less"
                                : 'See more'}
                            <ArrowUpHalf up={!seeMoreOpen} />
                        </button>
                    </div>
                </div>
            </section>

            <div className="absolute right-[5%] top-0" data-aos="fade-up">
                <img
                    width="auto"
                    height="auto"
                    className="h-16 md:h-[100px] lg:h-[160px]"
                    src="https://cdn.raster.app/u3ejzY27C1ggww68oof0hmezbSg2/L8TPWeUuwO?ixlib=js-3.6.0&s=d96669080611e42972ee674f26e3a454"
                    alt="" />
            </div>
        </div >
    )
}

export default Services