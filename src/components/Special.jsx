import React from 'react'
import special from '../assets/images/png/special-img.png'
import line from '../assets/images/svg/blue-line.svg'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import { CARD_DATA } from '../utils/helper'
const Special = () => {
  return (
    <>
    <div className="pt-10 sm:pt-20 lg:pt-[137px] pb-10 sm:pb-[73px]">
        <div className="max-w-[1332px] mx-auto px-4">
            <div className="flex-wrap flex-row -mx-3 flex items-center">
                <div className="w-full xl:w-[50%] px-4 flex justify-center mb-4">
                    <img className='w-full max-w-[630px]' src={special} alt="special-img" />
                </div>
                <div className="w-full xl:w-[50%] px-4 flex justify-center">
                    <div className="mx-auto">
                        <img className='mb-5' src={line} alt="line-img" />
                        <CustomHeading HeadingClass="mb-4" heading="What make us special ?" />
                        <CustomDescription discriptionClass="font-family-primary pb-[46px] text-base lg:max-w-[558px] text-[#000000B2] lh-[130%]" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,' />
                        <div className="flex gap-[30px] flex-wrap justify-center xl:max-w-[550px]">
                            {CARD_DATA.map((item, index) => (
                                <div key={index} className='max-w-[500px] sm:max-w-[260px] max-sm:px-7 w-full hover:bg-[#2C49FE] border rounded-[5px] group relative border-[#2C49FE] mb-5'>
                                    <div className="absolute left-[50%] translate-x-[-50%] top-[-40px] w-[79px] h-[79px] border-[2px] rounded-full flex justify-center items-center z-1 bg-white border-[#2C49FE]">
                                        <img src={item.imgBox} alt="image" />
                                    </div>
                                    <h3 className='font-family-primary font-medium text-center text-[25px] leading-[100%] group-hover:text-white text-[#2C49FE] pt-[45px] pb-2.5'>{item.text}</h3>
                                    <p className='font-family-primary font-normal text-base leading-[150%] text-center text-[#2D3CAE] pb-[17px] group-hover:text-white mx-auto sm:max-w-[185px]'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Special
