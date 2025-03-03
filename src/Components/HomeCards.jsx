import React from 'react'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded'>
                <div className='bg-gray-100 p-6 rounded shadow-md'>
                    <h2 className='text-2xl font-bold'>For Developer</h2>
                    <p className='mt-2 mb-4'>
                        Browse for react jobs and find the perfect career today!
                    </p>
                    <Link to="/jobs" className='inline-block bg-black text-white rounded px-4 py-2 hover:bg-gray-700'>
                        Browse Jobs
                    </Link>
                </div>

                <div className='bg-indigo-100 p-6 rounded shadow-md'>
                    <h2 className='text-2xl font-bold'>For Employers</h2>
                    <p className='mt-2 mb-4'>
                        List your job to find the perfect developer for the role
                    </p>
                    <Link to="/add-job" className='inline-block bg-blue-900 text-white rounded px-4 py-2 hover:bg-blue-500'>
                        Add Job
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeCards