import React from 'react'
import { LuCircleArrowRight } from 'react-icons/lu'

const Button = ({ text }) => {
    return (
        <button style={{fontFamily:"Poppins"}} className="bg-lime-600 text-white w-fit cursor-pointer tracking-wide rounded-lg transition duration-200 hover:bg-lime-500 px-10 py-3.5 sm:py-4 uppercase font-semibold sm:text-sm text-[13px] flex items-center gap-1.5">
            {text}
        </button>
    )
}

export default Button