import React from 'react'
import { Link } from 'react-router-dom'


const CockTailCard = ({id, info, name,image, glass}) => {

  return (
    <section className='w-full rounded-md shadow-lg'>
        <img src={image} alt="" className='rounded-t-lg' />
        <article className='mt-4 mb-4 pl-4'>
            <h1 className='font-bold'>{name}</h1>
            <h1 className='font-semibold'>{info}</h1>
            <h1 className='text-gray-900'>{glass}</h1>
            <div className='bg-green-500 px-2 py-1 w-fit rounded-md mt-2 text-white'>
                <Link  to={`/cocktail/${id}`}>Details</Link>
            </div>
        </article>
    </section>
  )
}

export default CockTailCard