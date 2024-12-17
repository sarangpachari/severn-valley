import React from 'react'
import pnfImage from '../assets/pageNotFound.gif'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{paddingTop:'100px'}} className='flex flex-col justify-center items-center h-screen p-2'>
        <Link to={'/'}><button className='border-2 px-3 py-2 rounded-full bg-gray-900 text-white'>Go to Home</button></Link>
        <img src={pnfImage} alt="Page Not Found"/>
    </div>
  )
}

export default Pnf