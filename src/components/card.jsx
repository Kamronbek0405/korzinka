import React from 'react'
import {  useDispatch } from 'react-redux'
import { productAdd } from '../redux/products/products'

export const Card = ({name, price, count, img , id}) => {
    const dispatch = useDispatch()
    const productBtn = () =>{
        dispatch(productAdd({name, price, count, img , id}))
    }
  return (
    <div className='w-[350px] h-[430px] shadow-lg shadow-gray-400 hover:shadow-md hover:shadow-gray-400 flex items-center justify-center flex-col'>
        <img className='w-[250px] h-[250px]' src={img} alt="" />
        <h1 className='text-xl font-bold'>{name}</h1>
        <strong>{price}$</strong>
        <p className='text-red-500 font-bold'>count {count}</p>
        <button  className='w-[150px] rounded-lg h-[50px] bg-green-400' onClick={productBtn}>buy</button>
    </div>
  )
}
