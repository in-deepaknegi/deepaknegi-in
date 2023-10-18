import React from 'react'
import Image from 'next/image'
import Author from '@/public/creator.png'
import Insta from '@/public/social/insta.svg'
import Facebook from '@/public/social/facebook.svg'
import Twitter from '@/public/social/twitter.svg'

const Hero = () => {
    return (
        <section className='relative overflow-hidden lg:py-20 py-16'>
            <div className='max-w-7xl mx-auto px-8 flex  gap-8 items-center'>
                <div className='flex flex-col space-y-8 mx-12 lg:items-start items-center max-w-4xl'>
                    <h1 className='font-sf font-semibold text-left text-6xl tracking-wider leading-[4rem]'>
                        <span className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="249" height="22" viewBox="0 0 249 22" fill="currentColor" className="absolute h-[1.25rem] text-blue-200 top-[3.5rem] -z-10">
                                <path d="M247.564 18.5807C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97395 208.996 8.57031 200.846 7.46093C186.542 5.51302 172.169 4.08854 157.79 3.01562C126.033 0.645827 94.0929 0.0338481 62.3387 2.36979C42.1785 3.85416 22.008 5.90885 2.32917 10.8463C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7083C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0807 99.2274 10.6719 118.484 10.9557C142.604 11.3125 166.719 12.8333 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0807 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5807Z"></path></svg>
                            <span>Helping </span>
                            businesses turn their ideas into reality
                        </span>
                    </h1>
                    <p className='text-gray-600'>
                        I&apos;m a passionate developer, entrepreneur, and general technology enthusiast living in San Francisco.
                        I&apos;ve worked with hundreds of startups to help them develop their ideas into profitable businesses.
                    </p>
                    <div className='flex w-full'>
                        <div>
                            <button className='bg-black rounded-full px-3 py-2 text-white'>
                                Book a call with me
                            </button>
                        </div>
                        <div className='ml-20'>
                            <ul className='flex gap-4'>
                                <li>
                                    <a href="#">
                                        <Image
                                            src={Insta}
                                            alt='instagram-logo'
                                            className='w-8 h-10'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image
                                            src={Facebook}
                                            alt='facebook-logo'
                                            className='w-10 h-10'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image
                                            src={Twitter}
                                            alt='facebook-logo'
                                            className='w-10 h-10'
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full hidden lg:block max-w-md lg:mr-0 mx-auto'>
                    <div>
                        <Image
                            src={Author}
                            alt='author-image'
                            className='w-[65%] brightness-90'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero