import { Nav } from '@/components/layout';
import { useRouter } from 'next/router'
import prismicClient from 'prismic.config'
import ReactHtmlParser from 'react-html-parser';


const Post = ({ document }) => {
    return (
        <>
            <Nav whiteBg />
            <div className="pb-20 service">
                <div className="">
                    <div
                        className="cover-img"
                        style={{ backgroundImage: `url(${document.data.photo_gallery[0].photo.url})` }} />

                    <div className="service-details" style={{ boxShadow: '0 0 80px rgba(0,0,0,.2)' }} data-aos="fade-up">
                        <div className="">
                            <div className=" font-sans font-semibold text-xdark w-fit">
                                <span className="block h-[2px] w-full bg-xdark" />
                                <span className="pt-2 block">
                                    {ReactHtmlParser(document.data.name[0].text)}
                                </span>
                            </div>

                            <h1>{ReactHtmlParser(document.data.heading)}</h1>
                            <p className="mt-6 w-11/12 text-[21px] leading-8 text-[#b1b1b1]">
                                {ReactHtmlParser(document.data.description[0].text)}
                            </p>

                            <button className="mt-10 text-[#3fa552] group">
                                <span className="block h-[1.5px] w-full bg-[#3fa552]" />
                                <span
                                    className="mt-[-1.5px] block h-[1.5px] w-0 bg-[#000] group-hover:w-full duration-[0.7s] group-hover:ease-in-out" />

                                <span className="cta group-hover:!text-black duration-[0.7s] ease-in-out">
                                    Let&apos;s get started
                                </span>
                            </button>
                        </div>

                        <div className="body">

                            {document.data.body.map((item, index) => (
                                <p key={index} className="leading-8 text-[#4a4a4a] pb-4 font-light" >
                                    {ReactHtmlParser(item.text)}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {document.data.photo_gallery ? (
                    <div className="photo-gallery" data-aos="fade-up">
                        <div className="service-details">
                            <div className="">
                                <div className=" font-sans font-semibold text-white w-fit">
                                    <span className="block h-[2px] w-full bg-white" />
                                    <span className="pt-2 block">
                                        {ReactHtmlParser(document.data.name[0].text)}
                                    </span>
                                </div>

                                <h1>Our work <br /> speaks for <br /> itself.</h1>

                                <p className="mt-6 w-10/12 text-[21px] leading-8 font-light text-opacity-50 text-white">
                                    A picture is worth a thousand words, but a Morris Landscape is worth a thousand
                                    pictures.
                                </p>

                                <button className="mt-10 text-[#719bba] group">
                                    <span className="block h-[1.5px] w-full bg-[#719bba]" />

                                    <span
                                        className="mt-[-1.5px] block h-[1.5px] w-0 bg-white group-hover:w-full duration-[0.7s] group-hover:ease-in-out" />

                                    <span className="cta group-hover:!text-white duration-[0.7s] group-hover:ease-in-out">
                                        Get an estimate
                                    </span>
                                </button>
                            </div>
                            <div className="gallery-photos">
                                {document.data.photo_gallery.map((item, index) => (
                                    <a key={index} href={item.photo.url} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={item.photo.url}
                                            className={`aspect-${item.photo.dimensions.width / item.photo.dimensions.height}`}
                                            alt="" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                ) : ''}


            </div >
        </>

    )

}

export async function getServerSideProps(context) {
    const { services } = context.params
    const prismicQuery = await prismicClient.getByUID('service', services)

    return {
        props: { document: prismicQuery }
    }
}

export default Post