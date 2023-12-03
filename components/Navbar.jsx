'use client'

import React, { useState } from 'react'

const Navbar = () => {

    const [mobilemenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    }

    return (
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav className='flex items-center justify-between p-7 lg:justify-end lg:px-8' aria-label='Global'>
                <div className='flex lg:hidden'>
                    <a href='/' className='-m-1.5 p-1.5 text-lg rounded-xl font-bard text-white tracking-widest lg:text-2xl'>
                        Deepak Negi
                    </a>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        onClick={toggleMobileMenu}
                        type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100'>
                        <span className='sr-only'>Open main menu</span>
                        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                        </svg>
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-12'>
                    <a href='/' className='text-sm font-semibold leading-6 text-gray-800'>Home</a>
                    <a href='/about' className='text-sm font-semibold leading-6 text-gray-800'>About</a>
                    <a href='/works' className='text-sm font-semibold leading-6 text-gray-800'>Works</a>
                    <a href='/blogs' className='text-sm font-semibold leading-6 text-gray-800'>Blogs</a>
                    <a href='/contacts' className='text-sm font-semibold leading-6 text-gray-800'>Contact</a>
                </div>
                <div className='hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-black'>
                    <a className='inline-flex justify-center rounded-lg text-base font-semibold py-2 px-4 bg-primary text-white -my-2.5 ml-8' href='/login'>
                        Log in <span aria-hidden='true'> →</span>
                    </a>
                </div>
            </nav>

            {mobilemenu && (
                <div className='lg:hidden' role='dialog' aria-modal='true'>
                    <div className='fixed inset-0 z-50'></div>
                    <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                        <div className='flex items-center justify-between'>
                            <a href='#' className='-m-1.5 p-1.5'>
                                <span className='sr-only'>Your Company</span>
                            </a>
                            <button
                                onClick={toggleMobileMenu}
                                type='button' className='-m-2.5 rounded-md p-4 text-gray-700'>
                                <span className='sr-only'>Close menu</span>
                                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>
                        <div className='mt-6 flow-root'>
                            <div className='-my-6 divide-y divide-gray-500/10'>
                                <div className='space-y-2 py-6'>
                                    <a href='/about' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>About</a>
                                    <a href='/works' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Works</a>
                                    <a href='/blogs' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Blogs</a>
                                    <a href='/contacts' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Contact</a>
                                </div>
                                <div className='py-6'>
                                    <a href='/login' className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Log in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Navbar