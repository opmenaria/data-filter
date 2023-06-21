import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {


    return (
        <div className=' z-10 w-full bg-gray-700 fixed flex items-center justify-between py-2 bg-gray-90 font-semibold text-lg border-b'>
            <div className='flex mx-auto space-x-10'>

                <Link to='/'>
                    <div className=' text-yellow-300 hover:text-white border-y   px-2 rounded-md'>Home</div>
                </Link>
                <Link to='/users'>
                    <div className=' text-yellow-300 hover:text-white border-y  px-2 rounded-md'>Users</div>
                </Link>
            </div>

        </div>
    )
}
