import React from 'react'
import Nav from '../common/Nav'
import Arrow from '../../assets/images/svg/text-svg.svg'

const Header = () => {
    return (
        <>
            <div className="min-h-[372px] max-md:min-h-[270px] bg-[url(../src/assets/images/png/event-bg.png)] bg-center bg-cover bg-no-repeat">
                <Nav />
                <div className="max-w-[1320px] mx-auto px-4">
                    <p className='flex items-center text-white font-normal text-[16px] leading-[150%] gap-2 poppins m-0'>Home <span><img src={Arrow} alt="arrow" /></span> Events</p>
                    <h1 className='poppins font-semibold text-[64px] leading-[150%] text-white'>Events</h1>
                </div>
            </div>
        </>
    )
}

export default Header
