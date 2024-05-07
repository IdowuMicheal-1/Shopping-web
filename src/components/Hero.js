"use client";
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import dynamic from 'next/dynamic';

const Hero = () => {
    let settings={
        dots: true,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
    };
    const slideData= [
        {
            id:0,
            img:"/banner-1.jpg",
            title:"Trending Item",
            maintitle:"WOMEN'S LATEST FASHION SALE",
            price:"$20",
        },
        {
            id:1,
            img:"/banner-2.jpg",
            title:"Trending Accessories",
            maintitle:"MODERN SUNGLASS",
            price:"$50",
        },
        {
            id:2,
            img:"/banner-3.jpg",
            title:"Sales Offer",
            maintitle:"NEW FASHION SUMMER SALE",
            price:"$30",
        },
        
    ];
  return (
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {
                    slideData.map((items) => {
                        return (
                        <Slide 
                            key={items.id}
                            img={items.img}
                            title={items.title}
                            maintitle={items.maintitle}
                            price={items.price}
                        />
                    );
                })
                }

            </Slider>
        </div>
    </div>
  );
};

export default Hero
// export default dynamic (() => Promise.resolve(Hero),{str:false})