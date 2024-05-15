import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbox = () => {
    const[details, setDetails] = useState({checkin:"",checkout:"",rooms:"",adults:""})
    const Navigate = useNavigate()
    const getBookingDetails= async(e)=>{
        e.preventDefault();
        Navigate('/hotels')
    }
  return (
    <>
    <form className="flex items-center space-x-4" onSubmit={getBookingDetails}>

<div className="flex flex-col">
  <label htmlFor="checkin" className="text-sm">Check-in Date</label>
  <input type="date" id="checkin" name="checkin" className="border px-2 py-1 rounded-md text-slate-500" 
  onChange={(e)=>{setDetails({...details,checkin:e.target.value})}} />
</div>


<div className="flex flex-col">
  <label htmlFor="checkout" className="text-sm">Check-out Date</label>
  <input type="date" id="checkout" name="checkout" className="border px-2 py-1 rounded-md text-slate-500"
  onChange={(e)=>{setDetails({...details,checkout:e.target.value})}} />
</div>


<div className="flex flex-col">
  <label htmlFor="rooms" className="text-sm">Number of Rooms</label>
  <input type="number" id="rooms" name="rooms" min="1" placeholder='rooms' className="border px-2 py-1 rounded-md text-slate-500" 
  onChange={(e)=>{setDetails({...details,rooms:Number(e.target.value)})}}/>
</div>


<div className="flex flex-col">
  <label htmlFor="adults" className="text-sm ">Number of Adults</label>
  <input type="number" id="adults" name="adults" placeholder='number of adults' min="1" className="border px-2 py-1 rounded-md text-slate-500"
  onChange={(e)=>{setDetails({...details,asults:Number(e.target.value)})}} />
</div>
<button className="bg-white text-gray-800 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 mt-2">Search</button>
</form>
    
    </>
  )
}

export default Searchbox