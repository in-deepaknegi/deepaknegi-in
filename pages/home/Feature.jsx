import React from 'react'
import Image from 'next/image';
import Setting from '@/public/info/setting.svg'
import Hourglass from '@/public/info/hourglass.svg'
import Responsive from '@/public/info/responsive.svg'

const Feature = () => {
    return (
        <>
            {/* <section className='bg-white py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h2 className='text-base font-semibold leading-7 text-blue-700'>
                            Deploy faster
                        </h2>
                        <p className='mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-900 sm:text-5xl'>
                            I&apos;m your <span className='gradient-cool'>all-in-one </span>
                            project solution
                        </p>
                        <p className='mt-6 text-lg leading-6 text-gray-500'>
                            Experience the advantage of an all-inclusive project solution, where excellence, speed, and responsiveness converge to ensure the highest quality outcome.
                        </p>
                    </div>
                    <div className='mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-5xl'>
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
                                <dd className='mt-4 mx-4 flex flex-auto flex-col text-center text-base leading-7 text-gray-600'>
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
                                <dd className='mt-4 mx-4 flex flex-auto flex-col text-center text-base leading-7 text-gray-600'>
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
                                <dd className='mt-4 mx-4 flex flex-auto flex-col text-center text-base leading-7 text-gray-600'>
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
            </section> */}

            <section className='bg-white py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h2 className='text-base font-semibold leading-7 text-blue-700'>
                            Deploy faster
                        </h2>
                        <p className='mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-900 sm:text-5xl'>
                            I&apos;m your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#539cb4] via-[#7918dd] to-[#49c6a5]'>all-in-one </span>
                            project solution
                        </p>
                        <p className='mt-6 text-lg leading-8 text-gray-600'>
                            Experience the advantage of an all-inclusive project solution, where excellence, speed, and responsiveness converge to ensure the highest quality outcome.
                        </p>
                    </div>
                    <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
                        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                            <div className='flex flex-col'>
                                <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                                    Excellence
                                </dt>
                                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                    <p className='flex-auto'>
                                        We meticulously design each aspect of our service to embody excellence. From our top-notch customer service to the precision in our product&apos;s performance, every detail reflects our unwavering commitment to excellence.
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
                                <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14" /><path d="M5 2h14" /><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" /><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" /></svg>
                                    Speed
                                </dt>
                                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                    <p className='flex-auto'>
                                        Our streamlined processes and cutting-edge technology ensure that you experience unparalleled efficiency. With swift responses and rapid performance, we bring you results in record time.
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
                                <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                                    Responsiveness
                                </dt>
                                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                    <p className='flex-auto'>
                                        Experience a service that listens, adapts, and acts swiftly to your needs. With a team always ready to address your queries, we prioritize your concerns with immediate attention
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
        </>
    )
}

export default Feature