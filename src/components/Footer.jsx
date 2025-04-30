import React from 'react'
import logo from '../assets/images/svg/logo.svg'
import { InstaLogo, FacebookLogo, TwitterLogo } from '../utils/Icon'
import img1 from '../assets/images/png/FooterImg1.png'
import img2 from '../assets/images/png/FooterImg2.png'
import img3 from '../assets/images/png/FooterImg3.png'
import img4 from '../assets/images/png/FooterImg4.png'
import img5 from '../assets/images/png/FooterImg5.png'

const Footer = () => {
    return (
        <>
            <div className="bg-black pt-[81px]">
                <div className="max-w-[1320px] px-4 mx-auto pb-24">
                    <div className="flex flex-wrap flex-row -mx-3">
                        <div className="w-full xl:w-6/12 px-3 mb-6">
                            <div className="flex items-center gap-3.5 pb-9">
                                <a href="#"><img src={logo} alt="nav-logo" className='max-w-[50px] sm:max-w-[98px]' /></a>
                                <a className='font-family-primary font-bold text-2xl sm:text-4xl leading-[135%] text-[#2C49FE] mb-0' href='#'>Events<span className='text-[#01C8FF]'>Free</span></a>
                            </div>
                            <p className='font-normal text-[14px] leading-[100%] max-w-[346px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c </p>
                            <div className="flex items-center gap-4 mt-6">
                                <a className='transform hover:scale-110 transition-all duration-200 ease-linear' href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'><InstaLogo /></a>
                                <a className='transform hover:scale-110 transition-all duration-200 ease-linear' href="https://www.facebook.com/?_rdr" target='_blank'><FacebookLogo /></a>
                                <a className='transform hover:scale-110 transition-all duration-200 ease-linear' href="https://x.com/" target='_blank'><TwitterLogo /></a>
                            </div>
                        </div>
                        <div className="w-full xl:w-6/12 px-4">
                            <div className="flex flex-wrap flex-row -mx-3 w-full">
                                <div className="xl:w-3/12 sm:w-3/12 w-6/12 px-3 max-sm:mb-5 flex justify-start">
                                    <ul className=''>
                                        <li className='text-white font-family-primary font-bold text-sm leading-[100%] mb-3'>SERVICES</li>
                                        <li className='mb-3'><a className='font-family-primary hover:text-[#2C49FE] transition-all duration-200 ease-in text-white font-normal text-xs leading-[100%]' href="#">About</a> </li>
                                        <li className='mb-3'><a className='font-family-primary hover:text-[#2C49FE] transition-all duration-200 ease-in text-white font-normal text-xs leading-[100%]' href="#">News</a> </li>
                                        <li className='mb-3'><a className='font-family-primary hover:text-[#2C49FE] transition-all duration-200 ease-in text-white font-normal text-xs leading-[100%]' href="#">ullamcorper</a> </li>
                                        <li><a className='font-family-primary text-white font-normal hover:text-[#2C49FE] transition-all duration-200 ease-in text-xs leading-[100%]' href="#">Contact</a> </li>
                                    </ul>
                                </div>
                                <div className="xl:w-3/12 sm:w-3/12 w-6/12 max-sm:mb-5 px-3 justify-start flex">
                                    <ul className=''>
                                        <li className='text-white font-family-primary font-bold text-sm leading-[100%] mb-3'>EVENTS</li>
                                        <li className='mb-3'><a className='font-family-primary text-white hover:text-[#2C49FE] transition-all duration-200 ease-in font-normal text-xs leading-[100%]' href="#">ullamcorper</a></li>
                                        <li className='mb-3'><a className='font-family-primary text-white hover:text-[#2C49FE] transition-all duration-200 ease-in font-normal text-xs leading-[100%]' href="#">ullamcorper</a></li>
                                        <li className='mb-3'><a className='font-family-primary text-white hover:text-[#2C49FE] transition-all duration-200 ease-in font-normal text-xs leading-[100%]' href="#">ullamcorper</a></li>
                                        <li><a className='font-family-primary text-white font-normal hover:text-[#2C49FE] transition-all duration-200 ease-in text-xs leading-[100%]' href="#">ullamcorper</a></li>
                                    </ul>
                                </div>
                                <div className="w-full sm:w-6/12 px-3">
                                    <p className='text-white font-family-primary font-bold text-sm leading-[100%] mb-3'>GALLERY</p>
                                    <div className='flex max-sm:gap-2.5 gap-[18px]'>
                                        <img src={img1} alt="img-1" />
                                        <img src={img2} alt="img-2" />
                                        <img src={img3} alt="img-3" />
                                    </div>
                                    <div className='flex mt-[10px] max-sm:gap-2.5 gap-[18px]'>
                                        <img src={img4} alt="img-4" />
                                        <img src={img5} alt="img-5" />
                                        <div className="max-w-[90px] w-full bg-[#2D3CAE87] py-[13px] px-[29px]">
                                            <p className='font-family-primary font-bold text-xs leading-[150%] text-center text-white'>Show More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-family-primary font-normal text-sm leading-[100%] text-white mb-0 py-6 text-center">© Credits of companyName belong to companyName.</div>
            </div>
        </>
    )
}

export default Footer
