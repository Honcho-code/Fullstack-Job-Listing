import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
        <h1 className='text-4xl font-bold mb-4'>404 Not Found</h1>
        <p className='text-xl mb-5'>This page does not exist</p>
        <Link to="/" className='text-white bg-blue-600 hover:bg-blue-500 rounded px-3 py-2 mt-4'>
            Go Back
        </Link>
    </section>
  )
}

export default NotFound