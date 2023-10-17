import React from 'react'

const Navbar = () => {
    return (
        <header className='border-b border-gray-300 h-16'>
            <div className='flex h-full max-w-7xl items-center lg:px-12 md:px-6 px-5'>
                <nav className='flex relative w-full z-50 justify-between items-center'>
                    <div className='flex items-center shrink-0'>
                        <a href="/" className='text-2xl font-bard tracking-wider'>
                            Deepak Negi
                        </a>
                    </div>
                    <div className='md:flex text-sm items-center gap-8 hidden'>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/work">Work</a>
                        <a href="/Blog">Blog</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className='flex items-center'>
                        <button className='bg-gray-200 px-6 py-1 border rounded-full'>
                            Book a call
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar