"use client"
import React from 'react'
import Logo from '@/public/Logo.png'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const { status, data: session } = useSession();

    return (
        <header className='border-b border-gray-300 h-20'>
            <div className='flex h-full max-w-7xl mx-auto items-center px-3 md:px-6 lg:px-10'>
                <nav className='flex relative mx-3 md:mx-6 lg:mx-10 w-full z-50 justify-between items-center'>
                    <div className='flex flex-row gap-2 items-center shrink-0'>
                        <a href="/">
                            <Image
                                src={Logo}
                                alt='site-logo'
                                width={50}
                                height={50}
                            />
                        </a>
                        <h1 className='text-2xl font-sf font-medium'>Deepak Negi</h1>
                    </div>
                    <div className='lg:flex text-gray-600 font items-center gap-8 hidden font-sf'>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/work">Work</a>
                        <a href="/Blog">Blog</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button className='bg-gray-200 px-6 py-1 border rounded-full hover:bg-gray-300'>
                            <a href="/contact">
                                Book a call
                            </a>
                        </button>

                        {status === 'authenticated' ? (
                            <div className='flex gap-2'>
                                <Image
                                    src={session?.user?.image}
                                    alt='user-profile'
                                    width={40}
                                    height={40}
                                    priority={false}
                                    className='rounded-full'
                                />
                                <button
                                    onClick={() => signOut()}
                                    className='px-6 py-1 border border-gray-300 rounded-full hover:bg-gray-200'>
                                        Sign Out
                                </button>
                            </div>
                        ) : (
                            <button className='px-6 py-1 border border-gray-300 rounded-full hover:bg-gray-200'>
                                <a href="/login">
                                    Sign In
                                </a>
                            </button>
                        )

                        }
                    </div>
                </nav>
            </div >
        </header >
    )
}

export default Navbar