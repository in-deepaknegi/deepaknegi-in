import React from 'react'
import Image from 'next/image'
import Auth from '@/public/peeps02.png'

const Hero = () => {
    return (
        <section className='relative overflow-hidden py-5 md:py-10 lg:py-20'>
            <div className='max-w-7xl flex lg:flex-row flex-col-reverse mx-auto px-3 md:px-6 lg:px-10 gap-3 md:gap-8 items-center'>
                <div className='flex flex-col space-y-8 mx-3 md:mx-6 lg:mx-10 mt-2 lg:mt-6 lg:items-start items-center max-w-2xl'>
                    <h1 className='font-sf max-w-xl font-semibold text-left text-5xl md:text-6xl tracking-wider leading-[4rem]'>
                        <span className='relative'>Hi,
                            <span className='gradient-full'> I&apos;m Deepak </span>
                            and I&apos;m a developer
                        </span>
                    </h1>
                    <p>
                        Hello, I&apos;m Deepak Negi, a passionate web developer dedicated to crafting exceptional digital experiences. With a love for clean and efficient code, I specialize in creating websites that are not just functional, but also visually stunning. My toolkit includes JavaScript, Next.js, and Tailwind CSS, which I use to bring your web projects to life.
                    </p>
                    <p>
                        I thrive on the challenges that web development presents and am committed to delivering results that exceed your expectations. Whether you have a specific project in mind or want to explore the possibilities of the digital world, I&apos;m here to help you transform your ideas into reality.
                    </p>
                    <div className='flex sm:flex-row flex-col w-full'>
                        <div>
                            <button className='bg-black rounded-full px-3 py-2 text-white'>
                                <a href="/contact">
                                    Book a call with me
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-md lg:mr-0 mx-auto'>
                    <Image
                        src={Auth}
                        alt='author-image'
                        className='w-[70%] md:w-[85%] mx-auto'
                    />
                    <div className='hidden lg:block absolute bottom-[6rem]'>
                        <span className='text-4xl text-slate-600 font-wedd'>Deepak Negi</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero