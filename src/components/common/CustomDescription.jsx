import React from 'react'

const CustomDescription = ({text,discriptionClass}) => {
  return (
    <div>
       <p className={`font-normal leading-[130%] ${discriptionClass}`}>{text}</p>
    </div>
  )
}

export default CustomDescription
