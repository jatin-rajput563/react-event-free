import React from 'react'
import Nav from '../common/Nav'
import CustomDescription from '../common/CustomDescription'
import CustomButton from '../common/CustomButton'
import line from '../../assets/images/svg/header-line.svg'

const HomeHeader = () => {
    return (
        <div className="relative bg-[url(/src/assets/images/png/header-bg-img.png)] bg-no-repeat bg-center bg-cover pb-10 sm:pb-20 md:pb-[104px]">
            <div className="absolute inset-0 bg-black opacity-57"></div>
            <div className="relative z-10">
                <Nav />
                <div className="max-w-[1320px] px-4 mx-auto">
                    <div className="relative">
                        <h1 className='font-family-primary text-white font-bold text-3xl sm:text-5xl md:text-[64px] leading-[150%] max-w-[1044px] pb-[18px]'>
                            Sed tortor in quisque morbi scelerisque etiam eu.
                        </h1>
                        <img className='absolute hidden lg:block left-[27.5%] top-[50%] max-w-[472px]' src={line} alt="" />
                    </div>
                    <CustomDescription discriptionClass="font-family-second text-xl max-w-[800px] mb-[33px] text-white" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,' />
                    <div className="flex items-center gap-6 flex-wrap pb-[145px]">
                        <CustomButton btnClass="text-xl" btnText="Get Started" />
                        <a className='font-family-primary font-normal text-xl leading-[150%] text-white' href="">Learn more</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeHeader
