import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/roamnclick_logo.png'

const Header = () => {
  return (
    <>
    <header className='flex items-center justify-between bg-black shadow-md m-0 px-2'>
        <Link to='/'><img src={logo} alt='logo' className='h-18 w-auto' /></Link>
        <ul className="flex items-center gap-6 md:gap-8">
            <li>
              <Link to='/gallery' className='text-lg text-white hover:text-purple-400 font-medium transition-colors duration-300'>Gallery </Link>
            </li>
            <li>
              <Link to='/destinations' className='text-lg text-white hover:text-purple-400 font-medium transition-colors duration-300'>Destinations </Link>
            </li>
            <li>
              <Link to='/aboutme' className='text-lg text-white hover:text-purple-400 font-medium transition-colors duration-300'>About Me </Link>
            </li>
        </ul>
    </header>
    <div id="mobile-menu" class="hidden fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center space-y-8">
        <a href="#gallery" class="text-2xl tracking-widest uppercase text-white">Gallery</a>
        <a href="#about" class="text-2xl tracking-widest uppercase text-white">About</a>
        <a href="#contact" class="text-2xl tracking-widest uppercase text-white">Contact</a>
    </div>
    </>
  )
}

export default Header