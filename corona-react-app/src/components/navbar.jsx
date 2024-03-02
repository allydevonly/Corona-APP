import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='bg-navbar bg-cover bg-no-repeat font-poppins'>
        <div className='flex items-center justify-end py-2 pl-5 pr-7'>
            <div className='mr-auto'>
                <img src="images\logo__sante-28.png" alt="" className='w-[85px] h-[90px]' />
            </div>
            <nav className='flex items-center gap-x-4'>
                <Link to = "/" className='text-blue text-base font-semibold tracking-wide cursor-pointer'>Accueil</Link>
                <Link to = "/conseil" className='text-black text-base font-semibold tracking-wide cursor-pointer'>Conseil</Link>
            </nav>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar