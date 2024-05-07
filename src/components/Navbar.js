import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container py-4">
            <div className="flex w-fit mx-auto gap-10 font-medium text-[14px] text-blackish">
                <div className="navbar_link relative cursor-pointer">HOME</div>
                <div className="navbar_link relative cursor-pointer">CATEGORIES</div>
                <div className="navbar_link relative cursor-pointer">MEN'S</div>
                <div className="navbar_link relative cursor-pointer">WOMEN'S</div>
                <div className="navbar_link relative cursor-pointer">JEWELRY</div>
                <div className="navbar_link relative cursor-pointer">PERFUME</div>
                <div className="navbar_link relative cursor-pointer">BLOG</div>
                <div className="navbar_link relative cursor-pointer">HOT OFFERS</div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar