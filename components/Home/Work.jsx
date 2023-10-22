import Image from 'next/image'
import React from 'react'
import Mridakriti from '@/public/mridakriti.png'
import Seahawk from '@/public/seahawk.png'

const Work = () => {
    return (
        <section className='relative overflow-hidden mt-20 pb-20 font-sf'>
            <div className='max-w-7xl mx-auto px-3 md:px-6 lg:px-10'>
                <div className='mx-3 md:mx-0 text-center'>
                    <h2 className='my-4 text-5xl md:text-6xl font-medium'>Check out my
                        <span className='gradient-full'> latest work</span></h2>
                    <p>
                        My goal is to create effective digital experiences that make people&apos;s lives easier and better. I hope my work is a reflection of this.
                    </p>
                </div>

                <div className='mt-16 relative mx-3 md:mx-12 max-w-none'>
                    <div className='flex lg:flex-row flex-col bg-slate-50 rounded-xl lg:shadow-xl lg:pb-10 mb-4'>
                        <div className='lg:w-[29%] mt-10 lg:ml-10 mx-3 md:mx-8'>
                            <h3 className='text-3xl my-1 md:my-5 font-medium tracking-wider gradient-full'>Mridakriti</h3>
                            <p className='hidden md:block text-gray-500'>
                            I developed Mridakriti&apos;s website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.
                            </p>
                            <button className='hidden md:block mt-10 text-base text-blue-500'>
                                View case study
                            </button>
                        </div>
                        <a href="https://www.mridakriti.com/" target='_blank' className='lg:absolute lg:w-[70%] right-0 top-[3rem] lg:mb-0 mt-7 lg:mt-0 lg:mx-0 mx-4 mb-4'>
                            <Image
                                src={Mridakriti}
                                alt='mridakriti'
                                className='rounded-xl lg:ml-10 shadow-lg'
                            />
                        </a>
                    </div>
                </div>

                <div className='mt-28 relative mx-3 md:mx-12 max-w-none'>
                    <div className='flex lg:flex-row flex-col bg-slate-50 rounded-xl lg:shadow-xl lg:pb-10 mb-4'>
                        <div className='lg:w-[28%] mt-10 lg:ml-10 mx-3 md:mx-8'>
                            <h3 className='text-3xl my-1 md:my-5 font-medium tracking-wider gradient-cool'>Sea Hawk Adventures</h3>
                            <p className='hidden md:block text-gray-500'>
                            At Sea Hawk Adventures, I developed their website with a focus on crafting a dynamic online platform that mirrors their adventurous spirit. Collaborating closely with the Sea Hawk Adventures team, I ensured the website showcased their thrilling excursions and services.
                            </p>
                            <button className='hidden md:block mt-10 text-base text-blue-500'>
                                View case study
                            </button>
                        </div>
                        <a href="https://www.mridakriti.com/" target='_blank' className='lg:absolute lg:w-[70%] right-0 top-[3rem] lg:mb-0 mt-7 lg:mt-0 lg:mx-0 mx-4 mb-4'>
                            <Image
                                src={Seahawk}
                                alt='mridakriti'
                                className='rounded-xl lg:ml-10 shadow-lg'
                            />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Work