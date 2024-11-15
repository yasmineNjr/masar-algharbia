'use client'

import { useState } from 'react';
import { close, logo, menu } from '../public/assets'
import { navLinks } from '../constants';
import Image from 'next/image';

function NavBar() {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Image src={logo} alt='algharbia' className='w-[80px] h=[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} 
          className={`font-normal cursor-pointer text-[16px] text-dimWhite ${index === navLinks.length-1 ?' ml-0' : 'ml-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image 
          src={toggle ? close : menu} 
          alt='menu' 
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 left-0 mx-4 my-2 min-width-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ?' mr-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
