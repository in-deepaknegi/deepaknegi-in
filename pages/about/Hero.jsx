import React from 'react'
import Image from 'next/image'
import Code1 from '@/public/code1.jpg'

const Hero = () => {
    return (
        <section className='relative bg-white overflow-hidden'>
            <div className='grid max-w-7xl grid-cols-12 mx-auto lg:gap-8 lg:ml-0'>
                <div className='relative col-span-12 xl:col-span-6 xl:inset-0 xl:left-0 xl:mr-0'>
                    <Image
                        src={Code1}
                        alt='hero image 1'
                        priority={true}
                        className='aspect-[3/2] w-full object-cover object-bottom xl:rounded-tr-2xl xl:rounded-br-2xl lg:absolutelg:object-center lg:inset-0 lg:aspect-auto lg:h-full'
                    />
                </div>
                <div className='px-6 pb-16 pt-16 sm:pb-24 col-span-12 xl:px-0 lg:pb-[5.5rem] lg:pt-36 xl:col-span-6'>
                    <div className='mx-auto max-w-2xl xl:mx-0'>
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>
                        <h1 className='text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl'>
                            Hi I&apos;m
                            <span className='text-transparent bg-clip-text  bg-gradient-to-r from-[#f6550c] via-[#d01147] to-[#5c4fdc]'> Deepak </span>
                            and <br />
                            I&apos;m a developer
                        </h1>
                        <p className='mt-6 text-left text-[1.055rem] text-gray-900 font-light'>
                            Hello, I&apos;m Deepak Negi, a passionate web developer dedicated to crafting exceptional digital experiences. With a love for clean and efficient code, I specialize in creating websites that are not just functional, but also visually stunning. My toolkit includes JavaScript, Next.js, and Tailwind CSS, which I use to bring your web projects to life.
                        </p>
                        <p className='mt-6 text-left text-[1.055rem] text-gray-900 font-light'>
                            I thrive on the challenges that web development presents and am committed to delivering results that exceed your expectations. Whether you have a specific project in mind or want to explore the possibilities of the digital world, I&apos;m here to help you transform your ideas into reality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero