import React from 'react'
import logo from '../assets/logo ecomme.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
    <img src={logo} className='w-36' alt="" />
    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
     <NavLink to='/' className='flex flex-col items-center gap-1'>
      <p>HOME</p>
      <hr className='w-0 h-[1.5px] bg-red-900  border-none transition-all duration-300 ease-in-out group-hover:w-1/2' />
     </NavLink>
    <NavLink to='collection' className='flex flex-col items-center gap-1'>
      <p>SHOP</p>
      <hr className='w-0 h-[1.5px] bg-red-900  border-none transition-all duration-300 ease-in-out group-hover:w-1/2 ' />
     </NavLink>
    <NavLink to='/about' className='flex flex-col items-center gap-1'>
      <p>BLOG</p>
      <hr className='w-0 h-[1.5px] bg-red-900  border-none transition-all duration-300 ease-in-out group-hover:w-1/2' />
     </NavLink>
     <NavLink to='/contact' className='flex flex-col items-center gap-1'>
      <p>CONTACTS</p>
      <hr className='w-0 h-[1.5px] bg-red-900  border-none transition-all duration-300 ease-in-out group-hover:w-1/2' />
     </NavLink>
    </ul>
    </div>
  )
}

export default Navbar