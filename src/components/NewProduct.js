import React from 'react'
import ProductCard from './ProductCard'

const NewProduct = () => {

  const Product=[
    {
      img:"/jacket-1.jpg",
      title:"Jacket",
      desc:"MEN Full-Zip Jacket",
      rating:4,
      prices:"45.00",
    },
    {
      img:"/skirt-1.jpg",
      title:"Skirt",
      desc:"Black Floral Wrap Skirt",
      rating:4,
      prices:"55.00",
    },
    {
      img:"/party-wear-1.jpg",
      title:"Party Wear",
      desc:"Women's Party Wear Shoe",
      rating:3,
      prices:"21.00",
    },
    {
      img:"/shirt-1.jpg",
      title:"Shirt",
      desc:"Pure garment Dyed Cotton Shirt",
      rating:4,
      prices:"45.00",
    },
    {
      img:"/sports-1.jpg",
      title:"Sport",
      desc:"Trekking and Running hoes - Black",
      rating:3,
      prices:"50.00",
    },
    {
      img:"/watch-1.jpg",
      title:"Watch",
      desc:"Smart watch plus",
      rating:4,
      prices:"100.00",
    },
    {
      img:"/watch-2.jpg",
      title:"Watch",
      desc:"Pocket Watch Leather",
      rating:4,
      prices:"120.00",
    },
  ]
  return (
    <div >
      <div className="container pt-16">
        <h2 className=" ps-4 text-[20px] font-bold">New product</h2>
        <div className="grid grid-cols-2 place-items-start gap-x-2 gap-y-4 lg:grid-cols-4 py-4 space-y-2 md:grid-cols-3 md:place-items-center">
          {Product.map((item,index) => {
            return (
              <ProductCard 
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              prices={item.prices}
              />
            );

          })}
        </div>
      </div>
    </div>
  )
}

export default NewProduct