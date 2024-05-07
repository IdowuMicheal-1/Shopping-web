import React from 'react'

const Slide = ({img,title,maintitle,price}) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[50px] md:left-[70px] top-[50%] max-w-[250px] sm:max-w-[350px] bg-[#fafaf7] sm:bg-transparent -translate-y-[50%] space-y-2 p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="lg:text-[28px] text-[24px] text-[#e8a746]">{title}</h3>
        <h2 className="text-blackish text-[22px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">{maintitle}</h2>
        <h3 className="text-[22px] text-gray-500">
          starting at {" "}<strong className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</strong>.00
        </h3>
        <div className="bg-accent text-white text-[14px] md:text-[16px] inline-block p-2 py-2 rounded-lg hover:bg-black">Shop Now</div>
      </div>
      <img className="w-full h-[300px] md:h-[auto] rounded-xl object-cover object-right md:object-left-bottom" src={img} alt="banner" width={1500} height={1500} />
    </div>
  );
};

export default Slide
