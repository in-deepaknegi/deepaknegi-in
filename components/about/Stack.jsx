import Image from 'next/image'
import React from 'react'
import Html from '@/public/tools/html-5.svg'
import Css from '@/public/tools/css.svg'
import Tailwind from '@/public/tools/tailwindcss.svg'

const Stack = () => {
    return (
        <section className='relative max-w-7xl mx-auto px-3 md:px-6 lg:px-10 mt-20 mb-10'>
            <div className='mx-3 md:mx-6 lg:mx-10 '>
                <div className='grid lg:grid-cols-2 grid-col-1 gap-8 lg:gap-16 items-center lg:mx-0'>
                    <h2 className='md:max-w-md text-4xl md:text-5xl font-medium'>
                        A simple Stack that you can
                        <span className='gradient-cool'> Trust</span>
                    </h2>
                    <p>
                        I&apos;ve been a software developer for over 4 years, and while my stack has shifted over the years, I kept coming back to the same technologies. The following is the stack that I&aspo;ve developed & honed over the years as a software developer.
                    </p>
                </div>

                <div className='max-w-4xl mx-auto grid grid-cols-3 gap-10 mt-20'>
                    <div className='flex gap-4 border p-2 rounded-xl'>
                        <div className='my-auto'>
                            <Image
                                src={Html}
                                alt='tailwindcss'
                                className='w-10 h-10'
                            />
                        </div>
                        <div className='overflow-hidden'>
                            <div className='text-xl font-medium'>HTML</div>
                            <div className='text-gray-600'>3 + year of experience</div>
                        </div>
                    </div>
                    <div className='flex gap-4 border p-2 rounded-xl'>
                        <div className='my-auto'>
                            <Image
                                src={Css}
                                alt='tailwindcss'
                                className='w-10 h-10'
                            />
                        </div>
                        <div className='overflow-hidden'>
                            <div className='text-xl font-medium'>CSS</div>
                            <div className='text-gray-600'>3 + year of experience</div>
                        </div>
                    </div>
                    <div className='flex gap-4 border p-2 rounded-xl'>
                        <div className='my-auto'>
                            <Image
                                src={Tailwind}
                                alt='tailwindcss'
                                className='w-10 h-10'
                            />
                        </div>
                        <div className='overflow-hidden'>
                            <div className='text-xl font-medium'>Tailwindcss</div>
                            <div className='text-gray-600'>3 + year of experience</div>
                        </div>
                    </div>
                    <div className='flex gap-4 border p-2 rounded-xl'>
                        <div className='my-auto'>
                            <Image
                                src={Tailwind}
                                alt='tailwindcss'
                                className='w-10 h-10'
                            />
                        </div>
                        <div className='overflow-hidden'>
                            <div className='text-xl font-medium'>React</div>
                            <div className='text-gray-600'>3 + year of experience</div>
                        </div>
                    </div>
                    <div className='flex gap-4 border p-2 rounded-xl'>
                        <div className='my-auto'>
                            <Image
                                src={Tailwind}
                                alt='tailwindcss'
                                className='w-10 h-10'
                            />
                        </div>
                        <div className='overflow-hidden'>
                            <div className='text-xl font-medium'>Tailwindcss</div>
                            <div className='text-gray-600'>3 + year of experience</div>
                        </div>
                    </div>
                    <div className='flex gap-4 border p-2 rounded-xl'>
                        <div className='my-auto'>
                            <Image
                                src={Tailwind}
                                alt='tailwindcss'
                                className='w-10 h-10'
                            />
                        </div>
                        <div className='overflow-hidden'>
                            <div className='text-xl font-medium'>Tailwindcss</div>
                            <div className='text-gray-600'>3 + year of experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack