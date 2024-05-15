import React, { Children, useState } from 'react'
import Searchbox from '../components/Searchbox'

const Home = () => {
  return (
    <>
    {/* <div>Home</div> */}
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Image" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-white">
          <div className='flex relative flex-col justify-around items-center gap-14'>
            <h2 className=' font-bold font-Montserrat text-xl'>Hotels and Resort</h2>
            <h1 className=' font-extrabold font-Montserrat text-4xl'>Welcome to travelo</h1>
            <button className="px-4 py-2 text-white bg-cyan-500 border border-cyan-500 rounded-md hover:bg-cyan-600 hover:border-cyan-600 focus:outline-none focus:border-cyan-700 focus:ring focus:ring-cyan-200 focus:ring-opacity-50">Discover Now</button>
            <Searchbox/>

          </div>
        </div>
      </div>
    </div>
    {/* search box */}


    </>
  )
}

export default Home
//https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
