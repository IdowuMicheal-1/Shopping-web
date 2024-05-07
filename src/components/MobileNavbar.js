import React from 'react'
import {BsHeart} from "react-icons/bs"
import {BiShoppingBag} from "react-icons/bi"
import {IoMenuOutline} from "react-icons/io5"
import {AiOutlineHome,AiOutlineAppstore } from "react-icons/ai"

const MobileNavbar = () => {
  return (
    <div>
        <div className="lg:hidden fixed bottom-0 px-2 w-full bg-gray-50 max-w-[600px] text-[20px] left-[50%] -translate-x-[50%]">
            <div className="container py-4 text-[#e8a746] flex justify-between items-center">
                <IoMenuOutline className="relative"/>
                <div className="relative">
                    <BiShoppingBag />
                    <div className="absolute bg-red-600 rounded-full text-center text-white text-[8px] w-[10px] h-[12px] grid place-items-center right-0 top-0 translate-x-1 translate-y-0">0</div>
                </div>
                <AiOutlineHome />
                <div className="relative">
                    <BsHeart />
                <div className="absolute bg-red-500 rounded-full text-center text-white text-[8px] w-[10px] h-[12px] grid place-items-center right-0 top-0 translate-x-1 translate-y-0">0</div>
                </div>
                <AiOutlineAppstore />
            </div>
        </div>
    </div>
  )
}

export default MobileNavbar