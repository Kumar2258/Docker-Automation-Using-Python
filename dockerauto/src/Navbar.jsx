import React from 'react'
import { Link } from "react-router-dom"

const Navbar=() => {
  return (
    <div className='fixed top-8 right-0 h-12 w-42 md:w-1/4 bg-white'>
      <ul className='flex text-gray-700  '>
          
          <Link className='p-4' to='/'>Home</Link>
          <Link className='p-4' to='/dashboard'>Dashboard</Link>
          <Link className='p-4' to ='/running'>Running</Link>
          <Link className='p-4' to ='/pulled'>Pulled</Link>
          
          

      </ul>
        
    </div>
  )
}

export default Navbar