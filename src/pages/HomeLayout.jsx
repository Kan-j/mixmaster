import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isPageLoading = navigation.state === 'loading'
  return (
    <div className='w-full'>
        <Navbar />
        {isPageLoading? (<section className='flex justify-center items-center'>
      <h1>Loading.....</h1>
    </section>): (<Outlet />) }
        
    </div>
  )
}

export default HomeLayout