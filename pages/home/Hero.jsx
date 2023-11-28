import React from 'react';
import Image from 'next/image';
import Hero1 from '@/public/peeps01.png';

const Hero = () => {
    return (
        <section className='relative bg-white overflow-hidden'>
            <div className='grid max-w-7xl lg:grid-cols-12 mx-auto lg:gap-8'>
                <div className='px-6 pt-36 col-span-7 md:pt-40 lg:px-0 lg:pt-48 xl:col-span-7'>
                    <div className='mx-auto max-w-2xl lg:mx-6'>
                        <h1 className='text-6xl font-semibold'>
                            <span className='gradient-full'>Helping businesses</span> turn their ideas into reality
                        </h1>
                        <p className='mt-6 text-lg text-gray-600 font-light'>
                            I&apos;m a passionate developer, your to-go developer for creating stunning websites. Over the years, I&apos;ve had the privilege of collaborating with a diverse range of startups, assisting them in transforming their concepts into thriving businesses.
                        </p>
                        <div className="mt-10 flex gap-x-6">
                            <a href="#" className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book a call with me</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                View my works <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
                <div className='hidden relative lg:col-span-4 lg:block lg:pt-32'>
                    <Image
                        src={Hero1}
                        alt='hero image 1'
                        priority={true}
                        className='my-auto mx-auto'
                    />
                    <div className='hidden lg:block absolute top-[9rem] -rotate-12'>
                        <span className='text-2xl text-slate-600 font-bard'>Hi, I&apos;m Deepak!</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero