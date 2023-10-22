import React from 'react'

const Navbar = () => {
    return (
        <header className='border-b border-gray-300 h-20'>
            <div className='flex h-full max-w-7xl mx-auto items-center px-3 md:px-6 lg:px-10'>
                <nav className='flex relative mx-3 md:mx-6 lg:mx-10 w-full z-50 justify-between items-center'>
                    <div className='flex items-center shrink-0'>
                        <a href="/" className='text-2xl font-sf font-medium'>
                            Deepak Negi
                        </a>
                    </div>
                    <div className='lg:flex text-gray-600 font items-center gap-8 hidden font-sf'>
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