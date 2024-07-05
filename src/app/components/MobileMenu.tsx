"use client"
import Link from 'next/link';
import React, { useState } from 'react'

function MobileMenu() {
    const [isOpen , setIsopen] = useState(false);

  return (
    <div className='md:hidden'>
        <div onClick={()=> setIsopen((prev)=> !prev)} className='flex flex-col  gap-[4.5px] cursor-pointer'>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${ isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500` }  /> 
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${ isOpen ? "opacity-0" : ""}` }  /> 
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${ isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500` }  /> 
        </div>
        {isOpen && (
            <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center font-medium text-xl z-10'>
                <Link  href="/">HOme</Link>
                <Link href="/">HOme</Link>
                <Link href="/">HOme</Link>
                <Link href="/">HOme</Link>
                <Link href="/">HOme</Link>
                <Link href="/">HOme</Link>
            </div>
        )}
    </div>
  )
}

export default MobileMenu;