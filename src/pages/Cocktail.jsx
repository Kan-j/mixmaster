import React from 'react'
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
import {Link, Navigate, useLoaderData} from 'react-router-dom'

const singleCocktailQuery =(id)=> {
  return {
    queryKey: ['cocktail', id],
    queryFn: async()=> {
      const apiKey = '1'; // Replace this with your actual API key
      const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/${apiKey}/lookup.php?i=${id}`;
    
      try {
        const response = await axios.get(cocktailSearchUrl);
        // console.log(response.data);
        return { drinks : response.data.drinks, id };
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  }
}

export const loader =(queyClient)=> async({params})=> {
  // www.thecocktaildb.com/api/json/v1/1
  const {Id} = params;
  await queyClient.ensureQueryData(singleCocktailQuery(Id))
  return {Id}
}

const Cocktail = () => {
  const {Id} = useLoaderData()
  
  const {data} = useQuery(singleCocktailQuery(Id))
 const drink = data.drinks[0];
//  console.log(drink);

  
if(!drink){
  return <Navigate to='/'/>
}

  const {
    strAlcoholic:info, 
    strCategory:category,
    strDrink:name,
    strDrinkThumb:image,
    strGlass:glass,
    strInstructions:instructions
  } = drink

  const validIngredients = Object.keys(drink).filter((key) => key.startsWith('strIngredient') && drink[key] !== null).map((key)=> drink[key])
  // console.log(validIngredients);

  return (
    <section className='w-4/5 mt-3 mx-auto flex flex-col items-center'>
    <section className=' gap-4 flex justify-center items-center flex-col md:flex-row'>
      <article >
        <img src={image} alt="" className='rounded-xl' />
      </article>
      <article>
        <h1 className='mt-4'><span className='bg-green-600 px-2 py-1 rounded-md text-white'>Name:</span>  {name}</h1>
        <h1 className='mt-4'><span className='bg-green-600 px-2 py-1 rounded-md text-white'>Category:</span>  {category}</h1>
        <h1 className='mt-4'><span className='bg-green-600 px-2 py-1 rounded-md text-white'>Info:</span> {info}</h1>
        <h1 className='mt-4'><span className='bg-green-600 px-2 py-1 rounded-md text-white'>Glass:</span> {glass}</h1>
        <h1 className='mt-4'><span className='bg-green-600 px-2 py-1 rounded-md text-white'>Instructions:</span> {instructions}</h1>
        <h1 className='mt-4'><span className='bg-green-600 px-2 py-1 rounded-md text-white'>Ingredients:</span> {validIngredients.map((item, index)=>{
          return <span key={index}>
            {item}{index < validIngredients.length -1? ',': ''}
          </span>
          })}</h1>
        
      </article>
    </section>
        <section className='bg-green-600 px-2 py-1 rounded-md mt-6 mb-8 flex justify-center w-fit text-center text-white '>
          <Link to='/'>Back Home</Link>
        </section>
    </section>
  )
}

export default Cocktail