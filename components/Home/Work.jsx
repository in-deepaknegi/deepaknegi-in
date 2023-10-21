import Image from 'next/image'
import React from 'react'
import Mridakriti from '@/public/mridakriti.png'

const Work = () => {
    return (
        <section className='mt-20 font-sf'>
            <div className='text-center'>
                <h2 className='my-4 text-5xl font-medium'>Check out my
                    <span className='gradient-full'> latest work</span></h2>
                <p className='mx-auto max-w-3xl text-lg text-gray-600'>
                    My goal is to create effective digital experiences that make people’s lives easier and better. I hope my work is a reflection of this.
                </p>
            </div>
            <div className='mt-20 relative mx-[8rem] max-w-none'>
                <div className='flex gap-4 bg-gray-100 rounded-xl shadow-xl pb-10 mb-4'>
                    <div className='relative w-[25%] mt-10 ml-10'>
                        <h3 className='text-3xl my-5 tracking-wider'>Mridakriti</h3>
                        <p className='tracking-wide text-gray-700'>
                            I helped Horizons in Perspective develop a new branding and website experience, as well as an engaging product design for their bi-annual journal publication.
                        </p>
                        <button className='mt-10 text-base text-blue-500'>
                            View case study
                        </button>
                    </div>
                    <a href="#" className='w-[75%]'>
                        <Image
                            src={Mridakriti}
                            alt='mridakriti'
                            className='mt-8 rounded-xl ml-10 shadow-lg'
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Work