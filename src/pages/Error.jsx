import React from 'react'
import img from '../assets/page-not-found.svg'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  
  if(error.status === 404){
        return <section className='flex flex-col items-center'>
            <img src={img} className='w-2/5 h-2/5 mx-auto' alt="" />
        <h1 className='text-xl mt-2'>Ohhh!!!</h1>
        <p className='mt-2 text-lg'>The page can't be found</p>
        <div className=' w-fit bg-green-600
         px-2 py-1 rounded-md text-white mt-2'>
          <Link to='/'>Back home</Link>
        </div>
        
        </section>
  }
     
  console.log(error);
  return (
    <section>
      <h2>Something went wrong</h2>        
    </section>
  )
}

export default Error