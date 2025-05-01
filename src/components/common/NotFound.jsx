import React from 'react'
import { Link } from 'react-router'
const NotFound = () => {
    return (
        <>
            <div className="min-h-screen bg-[url(../src/assets/images/png/Not-bg.png)] max-[800px]:bg-bottom bg-no-repeat bg-cover bg-center justify-center flex items-center relative">
                <div className="max-w-[1320px] mx-auto ">
                    <div>
                        <img className='absolute right-0 top-0 max-[800px]:hidden' src="./src/assets/images/png/not-img.png" alt="img" />
                        <h1 className='font-normal text-[128px] max-[460px]:text-[80px] leading-[100%] text-white Concert text-center'>404</h1>
                        <p className='font-normal text-[64px] max-[460px]:text-[40px] leading-[100%] text-white pb-[200px] max-[460px]:pb-[50px]'>Page not found!</p>
                        <Link className='font-normal text-[24px] leading-[100%] text-white py-4 px-6 rounded-[30px] justify-center flex items-center mx-auto bg-[#19162A] hover:bg-[#BEBEBE] hover:text-[#19162A] transition-all duration-200 ease-linear' to="/">Go to homePage</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound
