import logoImg from '../stockx.png'

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <img className='object-scale-down h-20 w-40 mr-4 py-2' src={logoImg} alt="/" />
          <ul className='hidden md:flex'>
          <li><Link to="stocks" smooth={true} offset={-200} duration={500}>Stocks</Link></li>
          <li><Link to="portfolio" smooth={true} offset={-50} duration={500}>Portfolio</Link></li>
          <li><Link to="transactions" smooth={true} offset={-100} duration={500}>Transactions</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="stocks" smooth={true} offset={-200} duration={500}>Stocks</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="portfolio" smooth={true} offset={-50} duration={500}>Portfolio</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="transactions" smooth={true} offset={-100} duration={500}>Transactions</Link></li>


        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-emerald-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;