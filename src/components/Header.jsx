import React from 'react'
import Nav from '../components/Nav'
import Arrow from '../assets/images/svg/text-svg.svg'

const Header = () => {
    return (
        <>
            <div className="min-h-[372px] bg-[url(../src/assets/images/png/event-bg.png)]">
                <Nav />
                <div className="max-w-[1320px] mx-auto px-4">
                    <p className='flex items-center text-white font-normal text-[16px] leading-[150%] gap-2 poppins'>Home <span><img src={Arrow} alt="arrow" /></span> Events</p>
                </div>
            </div>
        </>
    )
}

export default Header
