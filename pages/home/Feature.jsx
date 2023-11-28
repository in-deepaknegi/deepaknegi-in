import React from 'react'
import Image from 'next/image';
import Setting from '@/public/info/setting.svg'
import Hourglass from '@/public/info/hourglass.svg'
import Responsive from '@/public/info/responsive.svg'

const Feature = () => {
    return (
        <section className='bg-white py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='text-base font-semibold leading-7 text-blue-700'>
                        Deploy faster
                    </h2>
                    <p className='mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-900 sm:text-4xl'>
                        I&apos;m your <span className='gradient-cool'>all-in-one </span>
                        project solution
                    </p>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Experience the advantage of an all-inclusive project solution, where excellence, speed, and responsiveness converge to ensure the highest quality outcome.
                    </p>
                </div>
                <div className='mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none'>
                    <dl className='mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                        <div className='flex flex-col'>
                            <dt className='mx-auto flex flex-col space-y-2 text-center text-base font-semibold leading-7'>
                                <Image
                                    src={Setting}
                                    alt='info'
                                    className='w-10 h-10 mx-auto'
                                />
                                <span>Excellence</span>
                            </dt>
                            <dd className='mt-4 mx-12 flex flex-auto flex-col text-center text-base leading-7 text-gray-600'>
                                <p className='flex-auto'>
                                    I take pride in doing things well. All client work is done with the best quality possible.
                                </p>
                                <p className='mt-6'>
                                    <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                        Learn more
                                        <span> →</span>
                                    </a>
                                </p>
                            </dd>
                        </div>
                        <div className='flex flex-col'>
                            <dt className='mx-auto flex flex-col space-y-2 text-center text-base font-semibold leading-7'>
                                <Image
                                    src={Hourglass}
                                    alt='info'
                                    className='w-10 h-10 mx-auto'
                                />
                                <span>Speed</span>
                            </dt>
                            <dd className='mt-4 mx-12 flex flex-auto flex-col text-center text-base leading-7 text-gray-600'>
                                <p className='flex-auto'>
                                    I like to work hard and fast. I know how important deadlines are to my clients.
                                </p>
                                <p className='mt-6'>
                                    <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                        Learn more
                                        <span> →</span>
                                    </a>
                                </p>
                            </dd>
                        </div>
                        <div className='flex flex-col'>
                            <dt className='mx-auto flex flex-col space-y-2 text-center text-base font-semibold leading-7'>
                                <Image
                                    src={Responsive}
                                    alt='info'
                                    className='w-10 h-10 mx-auto'
                                />
                                <span>Responsiveness</span>
                            </dt>
                            <dd className='mt-4 mx-12 flex flex-auto flex-col text-center text-base leading-7 text-gray-600'>
                                <p className='flex-auto'>
                                You can rely on me to be responsive and clear whenever we work together.
                                </p>
                                <p className='mt-6'>
                                    <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                        Learn more
                                        <span> →</span>
                                    </a>
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Feature