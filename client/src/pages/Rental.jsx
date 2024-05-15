import React, { useState } from 'react'
import Card from '../components/Card'
const Rental = () => {
    const [cars,setCars] = useState([{
      "owner_name": "John Doe",
      "owner_email": "johndoe@example.com",
      "rental_cost": 50,
      "car_name": "Toyota Camry",
      "rental_location": "New York"
    },{
      "owner_name": "John Doe",
      "owner_email": "johndoe@example.com",
      "rental_cost": 50,
      "car_name": "Toyota Camry",
      "rental_location": "New York"
    },{
      "owner_name": "John Doe",
      "owner_email": "johndoe@example.com",
      "rental_cost": 50,
      "car_name": "Toyota Camry",
      "rental_location": "New York"
    },{
      "owner_name": "John Doe",
      "owner_email": "johndoe@example.com",
      "rental_cost": 50,
      "car_name": "Toyota Camry",
      "rental_location": "New York"
    }])

  return (
    <>
    <div className=' mt-4 flex flex-wrap items-center justify-around gap-3 '>
    {cars.map((car)=>{
        return(<Card oname={car.owner_name} cost={car.rental_cost} cname={car.car_name} loc={car.rental_location}/>)
    })}
    </div>
    </>
  )
}

export default Rental