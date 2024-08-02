import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleItem, productDelete} from '../redux/products/products';

export const ProductCard = ({userPrice, img, count, name, id, userCount, }) => {
    console.log(userPrice);
    const dispatch = useDispatch()

    const productChange = (type) =>{
        dispatch(toggleItem({id, type}))
    }
  return (
    <div>
       
          <img src={img} alt="" />
        <h1 className='font-bold text-xl'>{name}</h1>
        <strong>{userPrice}$</strong>
        <p className='text-red-500 font-bold'>count {count}</p>
        <div className='flex gap-3'>
        <button  className='w-[25px] h-[25px] flex itc justify-center rounded-full text-white bg-green-500' onClick={()=> productChange("inc")}>+</button>
        <p className='font-bold'>{userCount}</p>
        {userCount > 1 ? <button className='w-[25px] h-[25px] flex itc justify-center rounded-full bg-blue-500 text-white' onClick={()=> productChange("delete")}>-</button> : <button className='w-[25px] h-[25px] flex itc justify-center rounded-full bg-red-500 text-white' onClick={()=> dispatch(productDelete(id))}>X</button>}
        </div>
    </div>
  )
}
