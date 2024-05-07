import React from 'react'
import {BsFacebook,BsTwitterX,BsInstagram,BsLinkedin} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4 flex justify-between items-center">
            <div className="hidden lg:flex gap-2">
                <div className="header_top_icon"><BsFacebook /></div>
                <div className="header_top_icon"><BsTwitterX /></div>
                <div className="header_top_icon"><BsInstagram /></div>
                <div className="header_top_icon"><BsLinkedin /></div>
            </div>
            <div className="text-gray-500 text-[12px]"><strong>FREE SHIPPING </strong> THIS WEEK ORDER OVER $50</div>
            <div className="flex gap-4">
                <select name="currency" id="currency" className="text-gray-500 text-[12px] w-[70px]">
                    <option value="USD $">USD $</option>
                    <option value="NGN">NGN</option>
                    <option value="EUR">EUR </option>
                </select>

                <select name="language" id="language" className="text-gray-500 text-[12px] w-[70px]">
                    <option value="English">English</option>
                    <option value="French">French</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop