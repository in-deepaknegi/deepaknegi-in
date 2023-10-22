import Image from 'next/image'
import React from 'react'
import Html from '@/public/tools/html-5.svg'
import Css from '@/public/tools/css.svg'
import Tailwind from '@/public/tools/tailwindcss.svg'
import Reactt from '@/public/tools/react.svg'
import Next from '@/public/tools/nextjs.svg'
import Postgre from '@/public/tools/postgresql.svg'
import Mongo from '@/public/tools/mongodb.svg'
import Firebase from '@/public/tools/firebase.svg'
import Figma from '@/public/tools/figma.svg'

const Tools = () => {
    return (
        <section className='relative overflow-hidden pt-16 font-sf'>
            <div className='max-w-7xl mx-auto px-3 md:px-6 lg:px-10'>
                <div className='mx-3 md:px-6 lg:px-10'>
                    <h2 className='sm:max-w-xl text-4xl md:text-5xl font-medium'>
                        The tools I use on my
                        <span className='gradient-fire'> day-to-day</span>
                    </h2>
                    
                    <div className='flex relative mb-10 justify-between overflow-x-clip gap-x-8'>
                        <div className='flex w-[4.5rem] h-[4.5rem] mt-16 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Html}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                        <div className='flex w-[4.5rem] h-[4.5rem] mt-24 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Css}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                        <div className='flex w-[4.5rem] h-[4.5rem] mt-16 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Tailwind}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                        <div className='hidden sm:flex w-[4.5rem] h-[4.5rem] mt-8 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Reactt}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                        <div className='hidden sm:flex w-[4.5rem] h-[4.5rem] mt-0 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Next}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                        <div className='hidden md:flex w-[4.5rem] h-[4.5rem] mt-8 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Postgre}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                        <div className='hidden md:flex w-[4.5rem] h-[4.5rem] mt-16 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Mongo}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                        <div className='hidden lg:flex w-[4.5rem] h-[4.5rem] mt-24 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Firebase}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                        <div className='hidden lg:flex w-[4.5rem] h-[4.5rem] mt-16 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                            <Image
                                src={Figma}
                                alt='html-5'
                                className='w-[2.8rem]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools