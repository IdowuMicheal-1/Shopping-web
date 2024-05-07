import React from 'react'

const Testimonial = () => {
  return (
    <div>
        <div className="container py-6">
        <h2 className="font-bold text-[20px] py-4">Testimonial</h2>
            <div className="grid lg:grid-cols-[300px,1fr] gap-4">
              <div className="border border-gray-200 rounded-xl grid place-items-center">
                
               
                <div className="text-center">
                    <div >
                      <img className="rounded-full inline-block" src="./user.jpg" height={100} width={100} alt="profile"/>
                      <h2 className="text-gray-500 font-black text-[18px]">Ella Doe</h2>
                      <p className="font-medium text-[14px] ">CEO & Founder</p>
                    </div>
                    <div>
                      <img className="py-4 text-[16px] inline-block" src="./quotes.svg" height={50} width={50} alt="quotes" />
                      <p className="font-medium pt-2 text-gray-600 max-w-[200px]">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </div>
                </div>
              </div>
            
            
              <div className="bg-red-200 bg-[url(/cta-banner.jpg)] bg-cover rounded-2xl grid place-items-center h-[500px] gap-0">
                <div className="bg-[#fff9f9] min-w-[270px] sm:min-w-[300px] md:min-w-[400px] rounded-md p-4 grid place-items-center">
                <h2 className="bg-black text-white p-2 rounded-md"> 25% DISCOUNT</h2>
                <p className="font-bold"> Summer Collection</p>
                <h2 className="text-gray-500">starting at $20 <strong>Shop Now</strong></h2>
                </div>
              </div>
              </div>
        </div>
    </div>
  );
};

export default Testimonial
