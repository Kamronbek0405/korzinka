import React from 'react'
import { useSelector } from 'react-redux'
import { Logo } from '../assets/logo'
import { Telefon } from '../assets/telefon'
import { Korzinka } from '../assets/korzinka'
import { User } from '../assets/user'
import { Link } from 'react-router-dom'

export const Header = () => {
    const {totoCount} = useSelector((state) => state.product)
  return (
    <div className='flex items-center justify-between w-[100%] px-6 '> 
        <Logo/>
        <div >
        <Link className='px-5 w-[100px] border-2 border-gray-200 py-3 ml-5 shadow-lg hover:shadow-md hover:shadow-gray-300 shadow-gray-300' to={"/"}>Home</Link>
        <Link className='px-5 w-[100px] border-2 border-gray-200 py-3 ml-5 shadow-lg hover:shadow-md hover:shadow-gray-300 shadow-gray-300' to={"/about"}>About</Link>
        <Link className='px-5 w-[100px] border-2 border-gray-200 py-3 ml-5 shadow-lg hover:shadow-md hover:shadow-gray-300 shadow-gray-300' to={"/contact"}>Contact</Link>
        </div>
        <div className='flex gap-5 '>
            <span className='w-[55px] h-[55px] border-2 border-gray-300 rounded-full flex items-center justify-center'><Telefon/> </span>
            <span className='w-[55px] h-[55px] border-2 border-gray-300 rounded-full flex items-center justify-center relative'><Korzinka/>
        <div className='absolute text-white top-[-11px] left-[25px]   w-[25px] h-[25px] rounded-full font-medium  bg-slate-700 flex itc justify-center'>
            <span >{totoCount}</span>
        </div>
            
            </span>
            <span className='w-[55px] h-[55px] border-2 border-gray-300 rounded-full flex items-center justify-center'><User/></span>
           
        </div>
    </div>
  )
}
