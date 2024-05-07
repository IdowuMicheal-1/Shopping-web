import React from 'react'
import {BsStar,BsStarFill} from "react-icons/bs"

const ProductCard = ({img,title,desc,rating,prices}) => {
  const generateRating = (rating) => {
    switch(rating) {
      case 1:
        return (
          <div className="flex gap-2 text-[20px] text-[#edf466]">
            
            <BsStarFill />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-2 text-[20px] text-[#edf466]">
           
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-2 text-[20px] text-[#ff9529]">
            
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-2 text-[20px] text-[#ff9529]">
            
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-2 text-[20px] text-[#ff9529]">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        );
    }
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div className="w-full h-auto">
        <img src={img} width={200} height={200} alt={title}/>
      </div>
      <div className=" space-y-2 py-2">
        <h2 className="uppercase text-[#e8a746] font-medium">{title}</h2>
        <p className="max-w-[150px] font-medium text-[16px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="flex gap-2 pt-4">
          <h2 className=" font-bold text-blackish">${prices}</h2>
          <h2 className=" font-normal text-blackish"><del>${parseInt(prices)}.00 </del>
          </h2>
        </div>
        
      </div>
    </div>
  )
}

export default ProductCard