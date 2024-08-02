import React from 'react'
import { Header } from './header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
        <header className='w-[100%] h-[90px] bg-white shadow-lg shadow-gray-300 flex items-center justify-between'>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
