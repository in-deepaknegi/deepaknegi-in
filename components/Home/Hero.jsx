import React from 'react'
import Image from 'next/image'
import Auth from '@/public/peeps01.png'
import Insta from '@/public/social/insta.svg'
import Facebook from '@/public/social/facebook.svg'
import Twitter from '@/public/social/twitter.svg'

const Hero = () => {
    return (
        <section className='relative overflow-hidden py-5 md:py-10 lg:py-20'>
            <div className='max-w-7xl flex lg:flex-row flex-col-reverse mx-auto px-3 md:px-6 lg:px-10 gap-3 md:gap-8 items-center'>
                <div className='flex flex-col space-y-8 mx-3 md:mx-6 lg:mx-10 mt-2 lg:mt-14 lg:items-start items-center max-w-4xl'>
                    <h1 className='font-sf font-semibold text-left text-5xl md:text-6xl tracking-wider leading-[4rem]'>
                        <span className='relative'>
                            <span className='gradient-full'>Helping businesses </span>
                            turn their ideas into reality
                        </span>
                    </h1>
                    <p>
                        I&apos;m a passionate developer, your to-go developer for creating stunning websites. Over the years, I&apos;ve
                        had the privilege of collaborating with a diverse range of startups, assisting them in transforming their concepts into thriving businesses.
                    </p>
                    <div className='flex sm:flex-row flex-col w-full'>
                        <div>
                            <button className='bg-black rounded-full px-3 py-2 text-white'>
                                Book a call with me
                            </button>
                        </div>
                        <div className='sm:ml-20 sm:mt-0 mt-4 sm:mx-0 mx-3'>
                            <ul className='flex gap-4'>
                                <li>
                                    <a href="#">
                                        <Image
                                            src={Insta}
                                            alt='instagram-logo'
                                            className='w-8 h-10'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image
                                            src={Facebook}
                                            alt='facebook-logo'
                                            className='w-10 h-10'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image
                                            src={Twitter}
                                            alt='facebook-logo'
                                            className='w-10 h-10'
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-md lg:mr-0 mx-auto'>
                    <Image
                        src={Auth}
                        alt='author-image'
                        className='w-[70%] md:w-[85%] mx-auto'
                    />
                    <div className='hidden lg:block absolute top-[9rem] -rotate-12'>
                        <span className='text-2xl text-slate-600 font-bard'>Hi, I&apos;m Deepak!</span>
                    </div>
                    {/* <div className='flex gap-3 absolute bg-gray-100 border px-2 py-1 rounded-3xl top-[8rem] right-8'>
                        <Image
                            src={ReactIcon}
                            alt='react-icon'
                            className='w-7'
                        />
                        <span className='my-auto text-gray-500'>4 years of experience</span>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero