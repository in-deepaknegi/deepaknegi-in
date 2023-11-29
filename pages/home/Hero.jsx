import React from 'react';
import Image from 'next/image';
import Hero1 from '@/public/peeps01.png';
import Hero2 from '@/public/Hero2.jpg'

const Hero = () => {
    return (
        <section className='relative bg-white overflow-hidden'>
            <div className='grid max-w-8xl grid-cols-12 mx-auto lg:gap-8'>
                <div className='relative col-span-12 xl:col-span-6 lg:mr-8 xl:inset-0 xl:left-0 xl:mr-0'>
                    <Image
                        src={Hero2}
                        alt='hero image 1'
                        priority={true}
                        className='aspect-[3/2] w-full object-cover object-center lg:rounded-tr-2xl lg:rounded-br-2xl lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
                    />
                </div>
                <div className='px-6 pb-24 pt-10 sm:pb-32 col-span-12 lg:px-0 lg:pb-20 lg:pt-36 xl:col-span-6'>
                    <div className='mx-auto max-w-2xl lg:mx-6'>
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>
                        <h1 className='text-6xl font-semibold'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#f6550c] via-[#d01147] to-[#5c4fdc]'>Helping businesses</span> turn their ideas into reality
                        </h1>
                        <p className='mt-6 text-lg text-gray-700 font-light'>
                            I&apos;m a passionate developer, your to-go developer for creating stunning websites. Over the years, I&apos;ve had the privilege of collaborating with a diverse range of startups, assisting them in transforming their concepts into thriving businesses.
                        </p>
                        <div className="mt-10 flex gap-x-6">
                            <a href="/contact" className="rounded-md bg-black px-3.5 py-2.5 text-base text-white shadow-sm">Book a call</a>
                            <a href="/works" className="text-base font-medium leading-6 text-gray-800 hover:text-gray-900 my-auto">
                                View my works <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero