import React from 'react'
import logo from '../Utils/Netflix_Logo_PMS.png'
function Header() {
    return (
        <div>
            <div className=' absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img 
            className='w-[200px]'
            src={logo}
            alt='logo'
            />
            </div>
        </div>
    )
}

export default Header
