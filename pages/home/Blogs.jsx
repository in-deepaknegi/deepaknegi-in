"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Blog1 from '@/public/Blog1.jpg';
import Blog2 from '@/public/Blog2.jpg';
import Blog3 from '@/public/Blog3.jpg';

const Blogs = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className='bg-white py-24 md:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl items-center text-center'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl'>
                        Read our <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#539cb4] via-[#7918dd] to-[#49c6a5]'>latest blogs</span>
                    </h2>
                    <p className='mt-2 text-lg leading-8 text-gray-600'>
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    <article
                        className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image
                            src={Blog1}
                            alt='blog-1'
                            className='absolute inset-0 z-[-10] h-full w-full object-cover transition-opacity duration-300'
                        />
                        <div className='absolute inset-0 z-[-10] bg-gradient-to-t from-[#111827] to-gray-50/10'></div>
                        <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-100">
                            Boost your conversion rate
                        </h3>
                        <a
                            href="#pricing"
                            className={`inline-flex rounded-lg text-sm font-semibold py-3 bg-white/0 text-slate-100 opacity-100 transform transition-all ease-in duration-1000   
                            ${isHovered ? 'block' : 'hidden '
                                }`}
                        >
                            <span>
                                Read more
                                <span aria-hidden="true" className="text-white"> →</span>
                            </span>
                        </a>
                    </article>
                    <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
                        <Image
                            src={Blog2}
                            alt='blog-1'
                            className='absolute inset-0 z-[-10] h-full w-full object-cover'
                        />
                        <div className='absolute inset-0 z-[-10] bg-gradient-to-t from-[#111827] to-gray-50/10'></div>
                        <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-600">
                            Boost your conversion rate
                        </h3>
                        <a href="#pricing" className="inline-flex rounded-lg text-sm font-semibold py-3 bg-white/0 text-slate-100 ">
                            <span>Read more
                                <span aria-hidden="true" className="text-white"> →</span>
                            </span>
                        </a>
                    </article>
                    <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
                        <Image
                            src={Blog3}
                            alt='blog-1'
                            className='absolute inset-0 z-[-10] h-full w-full object-cover'
                        />
                        <div className='absolute inset-0 z-[-10] bg-gradient-to-t from-[#111827] to-gray-50/10'></div>
                        <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-600">
                            Boost your conversion rate
                        </h3>
                        <a href="#pricing" className="inline-flex rounded-lg text-sm font-semibold py-3 bg-white/0 text-slate-100 ">
                            <span>Read more
                                <span aria-hidden="true" className="text-white"> →</span>
                            </span>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Blogs