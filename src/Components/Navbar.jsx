import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const ActiveLinke = ({isActive})=> isActive ? "text-white bg-blue-700 hover:bg-blue-500 hover:text-white rounded px-3 py-2" : "text-white hover:bg-blue-500 hover:text-white rounded px-3 py-2"
  return (
    <nav className='bg-blue-900 border-b border-indigo-500'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-20 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                    <NavLink to="/" className='flex flex-shrink-0 items-center mr-4'>
                        <img src="./public/images/favicon.svg" alt="React logo" className='h-10 w-auto'/>
                        <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                            React Jobs
                        </span>
                    </NavLink>
                    <div className='md:ml-auto flex md:gap-2 gap-0'>
                        <NavLink to="/" className={ ActiveLinke }>
                            Home
                        </NavLink>
                        <NavLink to="/jobs" className={ ActiveLinke }>
                            Jobs
                        </NavLink>
                        <NavLink to="/add-job" className={ ActiveLinke }>
                            Add Job
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar