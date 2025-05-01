import React from 'react'

const CustomHeading = ({ heading, HeadingClass }) => {
    return (
        <>
            <h2 className={`font-family-primary font-bold text-[28px] sm:text-5xl leading-[100%] text-black  ${HeadingClass}`}>{heading}</h2>
        </>
    )
}

export default CustomHeading