"use client"
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'


function Navbar() {
  return (
    <div className='h-24 flex items-center justify-between'>
        {/* left */}
        <div className='md:hidden  lg:block w-[20%]' > 
            <Link className='font-bold text-blue-500 text-xl' href="/">ABI-SOCIAL</Link>
        </div>
        {/* center */}
        <div className='hidden md:flex gap-4 items-center justify-between  w-[50%] text-sm'>
            {/* links */}
            <div className=' flex gap-6 text-gray-600 '>
                <Link href="" className='flex items-center gap-2'>
                        <Image src="/home.png" alt="" className='w-4 h-4 ' width={16} height={16}></Image>
                        <span>Homepage!</span>
                </Link>
                <Link href="" className='flex gap-2 items-center'>
                        <Image src="/home.png" alt=""  className='w-4 h-4 ' width={16} height={16}></Image>
                        <span>Friends!</span>
                </Link>
                <Link href="" className='flex gap-2 items-center'>
                        <Image src="/home.png" alt=""  className='w-4 h-4 ' width={16} height={16}></Image>
                        <span>Stories!</span>
                </Link>
            </div>
            <div className='flex '>
                <input type="text"placeholder='search...' className='bg-transparent outline-none w-16' />
                <Image src="/search.png" alt="" width={14} height={14}></Image>
            </div>
        </div>
        {/* Right */}
        <div>
        {/* menu */}
        <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
            <ClerkLoading>
            <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className='cursor-pointer'><Image src="/gift.png" alt=""width={20} height={20} ></Image></div>
                    <div className='cursor-pointer'><Image src="/gift.png" alt=""width={20} height={20} ></Image></div>
                    <div className='cursor-pointer'><Image src="/gift.png" alt=""width={20} height={20} ></Image></div>
                    <UserButton></UserButton>
                </SignedIn>
            </ClerkLoaded>
            <ClerkLoaded >
                <SignedOut>
                    <div className='flex items-center gap-2 text-sm '> <Image src="/gift.png" alt="" width={20} height={20}></Image> <Link href="/sign-in">Login/Register</Link></div>
                </SignedOut>
            </ClerkLoaded>
            <div className='gap-2 px-4'>
            <MobileMenu></MobileMenu>
            </div>
        </div>
        </div>
    </div>
  )
}


export default Navbar