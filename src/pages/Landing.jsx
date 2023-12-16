import React from 'react'
import {useLoaderData} from 'react-router-dom'
import axios from 'axios'
import CockTailList from '../components/CockTailList';
import SearchForm from '../components/SearchForm';
import {useQuery} from '@tanstack/react-query'


const searchCocktailsQuery = (searchTerm)=> {
  const apiKey = '1';
  const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${searchTerm}`;

  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async ()=> {
      const response = await axios.get(`${cocktailSearchUrl}`)
      return response.data.drinks;
    }
  }
}


export const loader =(queryClient)=> async ({request}) => {
  const url = new URL(request.url)
  // const apiKey = '1'; // Replace this with your actual API key
  const searchTerm = url.searchParams.get('search') || '';
  // const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${searchTerm}`;

  try {
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
    // const response = await axios.get(cocktailSearchUrl);
    return {  searchTerm };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const Landing = () => {
  const {searchTerm} = useLoaderData()
  const {data:drinks} = useQuery(searchCocktailsQuery(searchTerm))
  return (
    <section className='flex-col justify-center'>
      <SearchForm searchTerm={searchTerm} />
      <CockTailList drinks={drinks} />
    </section>
  )
}

export default Landing

