import React from 'react'
import Image from 'next/image'
import Code1 from '@/public/code1.jpg'

const Hero = () => {
    return (
        <section className='relative bg-white'>
            <div className='grid max-w-8xl grid-cols-12 mx-auto lg:gap-8'>
                <div className='px-6 pb-24 pt-10 sm:pb-32 col-span-7 lg:px-8 lg:pb-30 lg:pt-44 xl:col-span-7'>
                    <div className='mx-auto max-w-2xl lg:mx-0'>
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>
                        <h1 className='text-6xl font-semibold'>
                            Hi I&apos;m Deepak and <br />
                            I&apos;m a developer
                        </h1>
                        <p className='mt-6 text-base text-gray-800 font-normal'>
                            Hello, I&apos;m Deepak Negi, a passionate web developer dedicated to crafting exceptional digital experiences. With a love for clean and efficient code, I specialize in creating websites that are not just functional, but also visually stunning. My toolkit includes JavaScript, Next.js, and Tailwind CSS, which I use to bring your web projects to life.
                        </p>
                        <p className='mt-6 text-base text-gray-800 font-normal'>
                            I thrive on the challenges that web development presents and am committed to delivering results that exceed your expectations. Whether you have a specific project in mind or want to explore the possibilities of the digital world, I&apos;m here to help you transform your ideas into reality.
                        </p>
                    </div>
                </div>
                <div className='relative mt-20 lg:col-span-5 xl:inset-0 '>
                    <Image
                        src={Code1}
                        alt='hero image 1'
                        priority={true}
                        className='aspect-[3/2] w-full object-cover object-right lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero