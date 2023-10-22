import Image from 'next/image'
import React from 'react'
import Mridakriti from '@/public/mridakriti.png'

const Work = () => {
    return (
        <section className='relative overflow-hidden mt-20 font-sf'>
            <div className='max-w-7xl mx-auto px-3 md:px-6 lg:px-10'>
                <div className='mx-3 md:mx-0 text-center'>
                    <h2 className='my-4 text-5xl md:text-6xl font-medium'>Check out my
                        <span className='gradient-full'> latest work</span></h2>
                    <p className='mx-auto max-w-3xl text-lg text-gray-600'>
                        My goal is to create effective digital experiences that make people&apos;s lives easier and better. I hope my work is a reflection of this.
                    </p>
                </div>
                <div className='mt-16 relative mx-12 max-w-none'>
                    <div className='flex lg:flex-row flex-col gap-4 bg-gray-100 rounded-xl lg:shadow-xl lg:pb-10 mb-4'>
                        <div className='lg:w-[25%] mt-10 lg:ml-10 mx-3 md:mx-8'>
                            <h3 className='text-3xl my-1 md:my-5 tracking-wider'>Mridakriti</h3>
                            <p className='hidden md:block tracking-wide text-gray-700'>
                                I helped Horizons in Perspective develop a new branding and website experience, as well as an engaging product design for their bi-annual journal publication.
                            </p>
                            <button className='hidden md:block mt-10 text-base text-blue-500'>
                                View case study
                            </button>
                        </div>
                        <a href="#" className='lg:w-[75%] mx-3 mb-3 lg:mb-0'>
                            <Image
                                src={Mridakriti}
                                alt='mridakriti'
                                className='md:mt-8 rounded-xl  lg:ml-10 shadow-lg'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work