import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex mt-2 flex-col md:flex-row w-4/5 mx-auto justify-between'>
        <h1 className='text-3xl text-green-600 font-semibold'>MixMaster</h1>
        <section className=' flex gap-4 md:flex-row md:gap-8 md:items-center items-start  flex-col md:flex'>
            <NavLink to='/' className='font-semibold' >Home</NavLink>
            <NavLink to='/newsletter' className='font-semibold'>Newsletter</NavLink>
            <NavLink to='/about' className='font-semibold'>About</NavLink>
        </section>
    </div>
  )
}

export default Navbar