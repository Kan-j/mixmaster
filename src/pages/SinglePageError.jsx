import React from 'react'
import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <section className='flex justify-center items-center'>
        <h1>Error on the landing page</h1>
    </section>
  )
}

export default SinglePageError