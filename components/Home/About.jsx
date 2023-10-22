import React from 'react'
import Image from 'next/image'
import Setting from '@/public/info/setting.svg'
import Hourglass from '@/public/info/hourglass.svg'
import Responsive from '@/public/info/responsive.svg'

const About = () => {
    return (
        <section className='relative overflow-hidden pt-24 pb-20 font-sf'>
            <div className='max-w-7xl mx-auto px-3 md:px-6 lg:px-10'>
                <div className='mx-3 md:mx-6 lg:mx-10'>
                    <div className='grid lg:grid-cols-2 grid-col-1 gap-8 lg:gap-16 items-center lg:mx-0'>
                        <h2 className='md:max-w-md text-4xl md:text-5xl font-medium'>
                            I&apos;m your <span className='gradient-cool'>all-in-one </span>
                            project solution
                        </h2>
                        <p>
                            Experience the advantage of an all-inclusive project solution, where excellence, speed, and responsiveness converge to ensure the highest quality outcome.
                        </p>
                    </div>
                    <div className='mt-16 grid lg:grid-cols-3 space-y-10 lg:space-y-0 mx-0 lg:mx-8'>
                        <div className='flex flex-col space-y-3 text-center mx-0 lg:mx-8'>
                            <Image
                                src={Setting}
                                alt='info'
                                className='w-12 h-12 mx-auto'
                            />
                            <h2 className='text-xl font-semibold'>Excellence</h2>
                            <p className='max-w-md mx-auto md:w-full'>I take pride in doing things well. All client work is done with the best quality possible.</p>
                        </div>
                        <div className='flex flex-col space-y-3 text-center mx-0 lg:mx-8'>
                            <Image
                                src={Hourglass}
                                alt='info'
                                className='w-12 h-12 mx-auto'
                            />
                            <h2 className='text-xl font-semibold'>Speed</h2>
                            <p className='max-w-md mx-auto md:w-full'>I like to work hard and fast. I know how important deadlines are to my clients.</p>
                        </div>
                        <div className='flex flex-col space-y-3 text-center mx-0 lg:mx-8'>
                            <Image
                                src={Responsive}
                                alt='info'
                                className='w-12 h-12 mx-auto'
                            />
                            <h2 className='text-xl font-semibold'>Responsiveness</h2>
                            <p className='max-w-md mx-auto md:w-full'>You can rely on me to be responsive and clear whenever we work together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About