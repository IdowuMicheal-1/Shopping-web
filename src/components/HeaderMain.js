import React from 'react'
import {BsSearch,BsHeart} from "react-icons/bs"
import {BiUser,BiShoppingBag} from "react-icons/bi"

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200">
        <div className="container py-4 sm:flex justify-between items-center">
            <div className=" font-bold text-4xl text-center text-blackish">Sick</div>
            <div className=" relative w-full sm:w-[400px] lg:w-[70%] p-4 items-center">
                <input type="text" placeholder="Enter your product name..." className="border w-full rounded-lg p-2 text-[12px] items-center "/>
                <BsSearch className="absolute right-0 top-0 mr-8 mt-6" size="20px"/>
            </div>
            <div className="hidden lg:flex gap-3 items-center">
                <BiUser />
                <div className="relative">
                    <BsHeart />
                    <div className="absolute bg-red-600 rounded-full text-center text-white text-[8px] w-[10px] h-[12px] grid place-items-center right-0 top-0 translate-x-1 translate-y-0">0</div>
                </div>
                <div className="relative">
                    <BiShoppingBag />
                    <div className="absolute bg-red-600 rounded-full text-center text-white text-[8px] w-[10px] h-[12px] grid place-items-center right-0 top-0 translate-x-1 translate-y-0">0</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain