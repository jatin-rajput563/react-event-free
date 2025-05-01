import React from 'react'
import line from '../../assets/images/svg/blue-line.svg'
import CustomHeading from '../common/CustomHeading'
import CustomDescription from '../common/CustomDescription'
import { LOREM_DATA } from '../../utils/helper'
const LatestEvent = () => {
    return (
        <>
            <div className="py-10 sm:py-20 md:py-[120px] lg:pt-[122px] lg:pb-[163px]">
                <div className="max-w-[1320px] px-4 mx-auto">
                    <div className="flex flex-wrap flex-row -mx-3">
                        <div className="px-4 w-full lg:w-[41.66%] mb-6 lg:mb-0">
                            <img className='pb-2' src={line} alt="line-img" />
                            <CustomHeading HeadingClass="!leading-[137%] lg:max-w-[388px] pb-3" heading="Explore our latest events" />
                            <CustomDescription discriptionClass="font-family-primary !leading-[140%] lg:max-w-[477px] pb-4 !text-[#000000B2]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu." />
                            <a className='font-family-primary font-bold text-base leading-[100%] text-black ' href="#">LEARN MORE</a>
                        </div>
                        <div className="px-4 w-full lg:w-[58.33%] flex max-lg:flex-wrap justify-center gap-8">
                            {LOREM_DATA.map((item, index) => (
                                <div key={index} className='max-w-[709px]'>
                                    <div className="max-w-[339px] pt-2.5 pr-[11px] pb-6 pl-[13px] hover:bg-white hover:shadow-[2px_9px_32px_0px_#0000000F] transition-all duration-200 ease-linear rounded-[5px]">
                                        <img className='w-full pb-[13px]' src={item.img} alt="card-img" />
                                        <h3 className='font-family-primary font-normal text-sm leading-[100%] mb-2 text-[#000000B2]'>{item.date}</h3>
                                        <h4 className='font-family-primary font-medium text-2xl leading-[100%] mb-1.5'>{item.text}</h4>
                                        <p className='font-family-primary font-normal text-base max-w-[270px] leading-[130%] text-[#000000B2]'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestEvent
