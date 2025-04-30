import React from 'react'
import blueLine from '../assets/images/svg/blue-line.svg'
import { CARD_DATA } from '../utils/helper'
import CommonButton from './common/CommonButton'
const Event = () => {
    return (
        <>
            <div className="pt-[68px] max-sm:pt-[20px] pb-[155px] max-sm:pb-[50px]">
                <div className="max-w-[1320px] mx-auto max-sm:px-5">
                    <div>
                        <img className='flex justify-center mx-auto max-sm:pb-[10px]' src={blueLine} alt="blue-line" />
                        <p className='font-bold text-[48px] max-sm:text-[33px] leading-[100%] m-0 text-center'>Choose your next event</p>
                    </div>
                    <div className="flex flex-wrap -mx-3 flex-row items-center justify-center gap-6 mt-[33px] ">
                        {CARD_DATA.map((item, index) => (
                            <div className='max-w-[424px] pl-[42px] max-sm:pl-[20px] max-sm:pr-[20px] max-sm:pt-[20px] max-sm:pb-[20px] pr-[37px] pt-[35px] pb-[30px] w-full border rounded-[30px] border-[#00000033] hover:shadow-lg hover:border-0 group transition-all duration-50 ease-in-out'>
                                <img className='w-full max-w-[344px] rounded-[20px] transition-all duration-300 group-hover:rounded-[0px]' src={item.CardImg} alt={item.text} />
                                <p className='font-semibold text-[24px] max-sm:text-[20px] leading-[150%] m-0 pt-[21px]'>{item.CardText}</p>
                                <div className='flex pt-[12px] gap-[8px]'>
                                    <img src={item.CalenderImg} alt="celender-svg" />
                                    <p className='font-normal text-[16px] leading-[150%] opacity-75'>{item.DateText}</p>
                                </div>
                                <div className='flex pt-[17px] gap-[8px]'>
                                    <img src={item.location} alt="location-svg" />
                                    <p className='font-normal text-[16px] leading-[150%] opacity-75'>{item.LocationText}</p>
                                </div>
                                <div className='flex pt-[14px] gap-[8px]'>
                                    <img src={item.People} alt="people-svg" />
                                    <p className='font-normal text-[16px] leading-[150%] opacity-75'>{item.PeopleText}</p>
                                </div>
                                <CommonButton btnClass='mt-[32px] border-1 border-[#2C49FE]' btnText="Go Check" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event
