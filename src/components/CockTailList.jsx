import React from 'react'
import CockTailCard from './CockTailCard'
import {useNavigation} from 'react-router-dom'
const CockTailList = ({drinks}) => {
   
    if(!drinks){
        return <h2>No drinks found...</h2>
    }

    // console.log(drinks);
    const formattedDrink = drinks.map((item)=> {
        const {
            idDrink,
            strAlcoholic,
            strDrink,
            strDrinkThumb,
            strGlass
        } = item
        return {id:idDrink, info:strAlcoholic, name:strDrink, image:strDrinkThumb, glass:strGlass}
    })
  
  return (
    <section>
        <section className='w-4/5 gap-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {formattedDrink.map((item) => <CockTailCard key={item.id}  {...item}/>)}
        </section>
    </section>
    
  )
}

export default CockTailList