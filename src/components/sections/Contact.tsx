import prismicClient from 'prismic.config'
import React from 'react'
import Mic from '../icons/Mic'
import Settings from '../icons/Settings'
import StarIcon from '../icons/StarIcon'
import SubmitIcon from '../icons/SubmitIcon'
import ReactHtmlParser from 'react-html-parser';


function Contact({ document }) {
    return (
        <div className="mt-24 w-full relative" id="contact">
            <section className="contact-us-section bg-gradient" data-aos="fade-up">
                <div className="flex items-center gap-4 font-sans text-sm text-body-light">
                    <span> Contact us </span>
                    <span className="block h-[1px] w-24 bg-[#E7E7E7]" />
                </div>

                <div className="flex flex-col gap-10 md:grid grid-cols-2 md:gap-5">
                    <div className="">
                        <h2>
                            {ReactHtmlParser(document.data.contact_us_heading[0].text)}
                        </h2>

                        <p>
                            {ReactHtmlParser(document.data.contact_us_para_1[0].text)}
                        </p>

                        <p className="font-semibold flex gap-4 mt-9">
                            <span className="whitespace-nowrap"> Google Reviews </span>
                            <span className="flex items-center gap-1">
                                <StarIcon className="w-[14px] h-[14px]" />
                                <StarIcon className="w-[14px] h-[14px]" />
                                <StarIcon className="w-[14px] h-[14px]" />
                                <StarIcon className="w-[14px] h-[14px]" />
                                <StarIcon className="w-[14px] h-[14px]" />
                            </span>
                        </p>

                        <p>
                            {ReactHtmlParser(document.data.contact_us_para_2[0].text)}
                        </p>
                    </div>

                    <form className="" method="post" action="https://usebasin.com/f/45ea65ef65b9">


                        {document.data.contact_us_fields.map((item, index) => (
                            <div className="input-field input-field-text" key={index}>
                                <img className="input-icon" src={item.field_icon.url} alt="" />
                                <input required type="text" placeholder={item.contact_us_field} />
                            </div>
                        ))}

                        {document.data.what_can_we_do_for_you ?
                            (
                                <div className="input-field input-field-dropdown">
                                    <Settings className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
                                    <select name="service" data-basin="" required>
                                        <option disabled>What can we do for you?</option>

                                        {document.data.what_can_we_do_for_you.map((item, index) => (
                                            <option key={index}>{item.referral_type}</option>
                                        ))}
                                    </select>
                                </div>

                            ) : ''}


                        {document.data.how_did_you_find_us ? (
                            <div className="input-field input-field-dropdown">
                                <Mic className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
                                <select name="acquisition" data-basin="" required>
                                    <option disabled selected>How did you find us?</option>

                                    {document.data.how_did_you_find_us.map((item, index) => (
                                        <option key={index}>{ReactHtmlParser(item.select_option)}</option>
                                    ))}
                                </select>
                            </div>

                        ) : ''}

                        {document.data.textarea_input ? (
                            <div className="">
                                {document.data.textarea_input.map((item, index) => (
                                    <textarea key={index} name="" id="" cols={30} rows={5} placeholder={item.textarea_1} />
                                ))}
                            </div>

                        ) : ''}
                        <div className="flex justify-end">
                            <button type="submit" aria-label="submit-btn" name="submit-btn" className="submit-btn">
                                <SubmitIcon />
                                <span> Submit </span>
                            </button>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    )
}

export default Contact