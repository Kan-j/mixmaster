import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async({request})=> {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
  
}

const Newsletter = () => {
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'
  return (
    <section className='flex justify-center items-center h-screen'> 
    <Form method='POST' className='flex flex-col bg-gray-200 px-8 py-6 rounded-md w-2/5 shadow-md'>
      <h4 className='text-xl font-semibold'>Our Newsletter</h4>
      <label htmlFor="name" className='font-semibold mt-4'>Name</label>
      <input 
      type="text"
      required
      className='px-2 py-1 outline-none'
      name='name'
      id='name'
      defaultValue='john' />

      <label htmlFor="lastName" className='font-semibold mt-4'>Last Name</label>
      <input 
      type="text"
      required
      className='px-2 py-1 outline-none'
      name='lastName'
      id='lastName'
      defaultValue='smith' />

      <label htmlFor="email" className='font-semibold mt-4'>Email</label>
      <input 
      type="text"
      className='px-2 py-1 outline-none'
      name='email'
      id='email'
      defaultValue='test@test.com' />
      <button type='submit' disabled={isSubmitting} className='bg-green-600 mt-4 py-1 rounded-md text-white'>{isSubmitting? 'Submitting': 'Submit'}</button>
    </Form>
  </section>
  )
}

export default Newsletter