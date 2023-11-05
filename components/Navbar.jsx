"use client"
import React, { useRef, useState, useEffect } from 'react'
import Logo from '@/public/Logo.png'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const { status, data: session } = useSession();
    const [isExpanded, setisExpanded] = useState(false);
    const userSectionRef = useRef(null);

    const handleExpand = () => {
        setisExpanded(!isExpanded);
    }

    const handleClickOutside = (event) => {
        if (
            userSectionRef.current &&
            !userSectionRef.current.contains(event.target)
        ) {
            setisExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

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
                            <>
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
                                        onClick={handleExpand}
                                        ref={userSectionRef}>
                                        <svg
                                            className={`ml-2 w-4 h-4 transition-transform 
                        ${isExpanded ? 'transform rotate-180' : ''}`}

                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {/* <button
                                        onClick={() => signOut()}
                                        className='px-6 py-1 border border-gray-300 rounded-full hover:bg-gray-200'>
                                        Sign Out
                                    </button> */}
                                </div>
                                {isExpanded && (
                                    <div className="absolute w-[16rem] top-4 right-0 mt-10 bg-gray-50 border border-gray-200 rounded-xl shadow-lg">
                                        <ul className='flex flex-col justify-center items-center'>
                                            <li className='mt-10'>
                                                <Image src={session?.user?.image}
                                                    width={40}
                                                    height={40}
                                                    alt='profile-picture'
                                                    className='rounded-full'
                                                />
                                            </li>
                                            <li className='mt-2 text-gray-700'>
                                                {session?.user?.name}
                                            </li>
                                            <li className='text-xs mt-1 text-gray-700'>
                                                {session?.user?.email}
                                            </li>
                                        </ul>

                                        <ul className="py-2">
                                            <li className="px-4 py-2 cursor-pointer flex gap-5 text-gray-700">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg></span>
                                                Profile
                                            </li>
                                            <li className="px-4 py-2 cursor-pointer flex gap-5 text-gray-700">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                                                </span>
                                                Settings
                                            </li>
                                            <li className='px-4 py-2 cursor-pointer flex gap-5 text-gray-700'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                                                </span>
                                                <div onClick={() => signOut()}
                                                >Sign Out</div>
                                            </li>
                                        </ul>
                                    </div>
                                )
                                }
                            </>
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