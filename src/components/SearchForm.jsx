import React from 'react'
import { Form, useNavigation } from 'react-router-dom';

const SearchForm = ({searchTerm}) => {
    const navigation = useNavigation()
    const isSubmittting = navigation.state === 'submitting'
    console.log(searchTerm);
  return (
    <section className='w-full flex justify-center mb-6 mt-4'>
        <Form  className='bg-white flex shadow-md px-4 py-4 w-2/5'>
            <input 
            type="text"
            name='search'
            className='bg-gray-100 px-2 py-2 rounded-md flex-1 outline-none'
            defaultValue={searchTerm}
             />
             <button type='submit' className='bg-green-600 text-white px-2 py-2 '>{isSubmittting? 'Searching': 'Search'}</button>
        </Form>
    </section>
  )
}

export default SearchForm