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
        <section className='max-w-7xl mx-auto px-8 pt-16'>
            <div className='mx-12'>
                <h2 className='text-5xl font-medium tracking-wider font-sf max-w-md mb-5'>
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
                    <div className='flex w-[4.5rem] h-[4.5rem] mt-8 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                        <Image
                            src={Reactt}
                            alt='html-5'
                            className='w-[2.8rem]'
                        />
                    </div>
                    <div className='flex w-[4.5rem] h-[4.5rem] mt-0 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                        <Image
                            src={Next}
                            alt='html-5'
                            className='w-[2.8rem]'
                        />
                    </div>
                    <div className='flex w-[4.5rem] h-[4.5rem] mt-8 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                        <Image
                            src={Postgre}
                            alt='html-5'
                            className='w-[2.8rem]'
                        />
                    </div>
                    <div className='flex w-[4.5rem] h-[4.5rem] mt-16 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                        <Image
                            src={Mongo}
                            alt='html-5'
                            className='w-[2.8rem]'
                        />
                    </div>
                    <div className='flex w-[4.5rem] h-[4.5rem] mt-24 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                        <Image
                            src={Firebase}
                            alt='html-5'
                            className='w-[2.8rem]'
                        />
                    </div>
                    <div className='flex w-[4.5rem] h-[4.5rem] mt-16 bg-gray-50 border items-center justify-evenly rounded-full flex-shrink-0'>
                        <Image
                            src={Figma}
                            alt='html-5'
                            className='w-[2.8rem]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools