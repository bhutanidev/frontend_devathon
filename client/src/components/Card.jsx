import React from 'react'

const Card = (props) => {
  const {cname , oname , cost , loc}= props
  return (
    <>
    <a href="#" className="flex flex-col items-center bg-cyan-500 border-cyan-500 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-cyan-500">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="Car image"/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cname}</h5>
        <p className="mb-3 font-normal text-gray-700">{oname}</p>
        <p className="mb-3 font-normal text-gray-700">{cost}</p>
        <p className="mb-3 font-normal text-gray-700">{loc}</p>
        <button class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">Contact Owner</button>
    </div>
    </a>

    </>
  )
}

export default Card