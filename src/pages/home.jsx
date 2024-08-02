import React from 'react'
import { Card } from '../components/card'
import { products } from '../data/data'
import { useSelector } from 'react-redux'
import { ProductCard } from '../components/product-card'
import { Link } from 'react-router-dom'

export const Home = () => {
    const {productList} = useSelector((state) => state.product)
  return (
    <div className=' mt-10 '>

        <div className='flex justify-between px-5 '>
   <div className='w-[1000px] flex items-center justify-center  gap-5 flex-wrap'>
      {products.map((item) => <Card key={item.id} {...item}/>)}
    </div>
    <div className='w-[500px]  border-2 border-gray-200 flex items-center justify-center flex-col mt-5 shadow-lg shadow-gray-300  overflow-y-scroll h-[870px]'>
        
      {productList.map((item) => <ProductCard key={item.id} {...item}/>)}
    </div>
   </div>

   <div className='flex items-center mt-36  justify-center w-[100%] h-[600px] bg-white flex-wrap gap-10'>
    {products.map((item) =>(
        <div className='w-[350px] h-[400px] shadow-lg shadow-gray-400 hover:scale-105 rounded-2xl flex items-center justify-center flex-col '>
        <img src={item.img} alt="" />
        <h1>{item.name}</h1>
        <strong>{item.price}$</strong>
        <p>count{item.count}</p>
        <Link>sotib olish</Link>
        </div>
    ))}
   </div>
    </div>

   
  )
}
