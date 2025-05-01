import React from 'react'
import joinUs from '../../assets/images/png/join-us-img.png'
import line from '../../assets/images/svg/blue-line.svg'
import CustomHeading from '../common/CustomHeading'
import CustomDescription from '../common/CustomDescription'
const JoinUs = () => {
    return (
        <>
            <div className="pb-10 sm:pb-[80px] md:pb-[90px]">
                <div className="max-w-[1284px] px-4 mx-auto">
                    <div className="flex flex-row flex-wrap -mx-3 items-center">
                        <div className="w-full lg:w-1/2 px-4 flex justify-center max-lg:mb-5">
                            <img src={joinUs} alt="join-us" />
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="">
                                <img className='mb-2.5' src={line} alt="line-img" />
                                <CustomHeading HeadingClass="mb-4" heading="Join Us !" />
                                <CustomDescription discriptionClass="font-family-primary mb-[15px] text-base !leading-[150%] lg:max-w-[480px] text-[#000000B2]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue " />
                                <CustomHeading HeadingClass="mb-3.5 !text-[35px]" heading="Sign Up" />
                                <div className="sm:flex gap-4 sm:mb-4">
                                    <input className='font-family-primary fw-normal text-base leading-[100%] text-[#000000B2] lg:max-w-[279px] max-sm:mb-4 w-full border border-[#00000066] rounded-[5px] h-[42px] px-[17px]' type="text" placeholder='First Name' />
                                    <input className='font-family-primary fw-normal text-base leading-[100%] text-[#000000B2] lg:max-w-[279px] max-sm:mb-4 w-full border border-[#00000066] rounded-[5px] h-[42px] px-[17px]' type="text" placeholder='Last Name' />
                                </div>
                                <input className='font-family-primary fw-normal text-base leading-[100%] text-[#000000B2] w-full mb-4 lg:max-w-[574px]  border border-[#00000066] rounded-[5px] h-[42px] px-[17px]' type="email" placeholder='Email Address' />
                                <div className="sm:flex gap-4 sm:mb-4">
                                    <input className='font-family-primary fw-normal text-base leading-[100%] text-[#000000B2] max-sm:mb-4 lg:max-w-[279px] w-full border border-[#00000066] rounded-[5px] h-[42px] px-[17px]' type="password" placeholder='Password' />
                                    <input className='font-family-primary fw-normal text-base leading-[100%] text-[#000000B2] max-sm:mb-4 lg:max-w-[279px] w-full border border-[#00000066] rounded-[5px] h-[42px] px-[17px]' type="password" placeholder='Confirm Password' />
                                </div>
                                <textarea className='font-family-primary fw-normal text-base leading-[100%] mb-[37px] text-[#000000B2] w-full lg:max-w-[574px] pt-2.5 border border-[#00000066] rounded-[5px] min-h-[124px] px-[17px]' placeholder='About Me'></textarea>
                                <div className="max-lg:flex justify-center">
                                    <button className='font-family-primary font-semibold cursor-pointer hover:bg-white hover:text-[#2C49FE] transition-all duration-200 ease-linear text-base leading-[150%] text-white py-[10px] border border-[#2C49FE] w-full bg-[#2C49FE] rounded-[23px] max-w-[574px]'>Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinUs
