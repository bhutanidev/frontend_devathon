import React, { useEffect, useState } from 'react'
import HotelCard from '../components/HotelCard'

const Hotel = () => {
        //     //taking sample inputs
    //     setHotels(['a','b','c'])
    const[hotels , setHotels ] = useState(['a','b','c'])
    // useEffect(()=>{
    //     //set hotels using fetch from backend

    // },[hotels])
  return (
    <>
    <div className=' flex flex-wrap justify-between w-3/4'>
        {hotels.map((hotel)=>{
            return(<HotelCard/>)
        })}
    </div>
    </>
  )
}

export default Hotel