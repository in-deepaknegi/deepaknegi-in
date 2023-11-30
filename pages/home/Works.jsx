import React from 'react';
import Image from 'next/image';
import Mrida from '@/public/mridakriti.png';
import Sea from '@/public/seahawk.png';
import Cnippet from '@/public/cnippet.png';

const Works = () => {
    return (
        <>
            <section className='relative isolate bg-white py-24 md:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='max-w-3xl text-left'>
                        <h2 className='mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-900 sm:text-5xl'>
                            Check out my <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#f6550c] via-[#d01147] to-[#5c4fdc]'>latest works</span>

                        </h2>
                        <p className='mt-6 text-lg leading-8  text-gray-500'>
                            Experience the advantage of an all-inclusive project solution, where excellence, speed, and responsiveness converge to ensure the highest quality outcome.
                        </p>
                    </div>
                    <div className='mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                        <div className='flex flex-col items-start'>
                            <div className='relative w-full'>
                                <Image
                                    src={Mrida}
                                    alt='mridakriti'
                                    className='w-full aspect-[16/8.4] rounded-2xl object-cover'
                                />
                            </div>
                            <div className='mt-4 max-w-xl'>
                                <a href="#" className="text-xs z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Ecommerce</a>
                                <h3 className="mt-5 text-4xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    Mridakriti
                                </h3>
                                <p className="mt-8 line-clamp-3 text-base leading-6 text-gray-600">
                                    I developed Mridakriti&apos;s website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <a href="https://www.mridakriti.com/" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" target="_blank">
                                    <span>
                                        <span className="inline-flex items-center">
                                            <span>Live preview</span>
                                            <svg viewBox="0 0 20 20" className="ml-1.5 h-5 w-5 fill-slate-100" fillRule="evenodd" clipRule="evenodd"><path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path></svg>
                                        </span>
                                    </span>
                                </a>
                                <a href="#pricing" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
                                    <span>View case study
                                        <span aria-hidden="true" className="text-black/25">→</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <div className='relative w-full'>
                                <Image
                                    src={Cnippet}
                                    alt='mridakriti'
                                    className='w-full aspect-[16/8.4] rounded-2xl object-cover'
                                />
                            </div>
                            <div className='mt-4 max-w-xl'>
                                <a href="#" className="text-xs z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Website Building</a>
                                <h3 className="mt-5 text-4xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    CnippetUI
                                </h3>
                                <p className="mt-8 line-clamp-3 text-base leading-6 text-gray-600">
                                    I developed Mridakriti&apos;s website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <a href="https://www.mridakriti.com/" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" target="_blank">
                                    <span>
                                        <span className="inline-flex items-center">
                                            <span>Live preview</span>
                                            <svg viewBox="0 0 20 20" className="ml-1.5 h-5 w-5 fill-slate-100" fillRule="evenodd" clipRule="evenodd"><path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path></svg>
                                        </span>
                                    </span>
                                </a>
                                <a href="#pricing" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
                                    <span>View case study
                                        <span aria-hidden="true" className="text-black/25">→</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='relative isolate'>
                <div className='relative mx-auto max-w-7xl  px-4 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10'>
                    <div className='max-w-3xl text-left mb-4'>
                        <h2 className='mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-900 sm:text-5xl'>
                            Check out my <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#f6550c] via-[#d01147] to-[#5c4fdc]'>latest works</span>

                        </h2>
                        <p className='mt-6 text-lg leading-8  text-gray-600'>
                            Experience the advantage of an all-inclusive project solution, where excellence, speed, and responsiveness converge to ensure the highest quality outcome.
                        </p>
                    </div>

                    <div className='bg-gray-100/50 rounded-xl'>
                        <div className='flex gap-6 px-4 pt-7'>
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                                Mridakriti
                            </h1>
                            <div className="my-auto hidden border rounded-xl px-3 py-[0.75] md:block">
                                <p className="text-base font-semibold text-slate-500">Ecommerce Website</p>
                            </div>
                        </div>

                        <div className='mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 xl:max-w-none lg:grid-cols-3'>
                            <div className="flex flex-col lg:pb-8 px-4 mt-4">
                                <p className="mt-6 text-base leading-7 text-slate-700">
                                    I developed Mridakriti&apos;s website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.
                                </p>
                                <div className="flex flex-wrap mt-10">
                                    <div className="flex items-center text-sm font-medium text-slate-500">
                                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex-none stroke-current text-slate-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs>
                                            <linearGradient id="next-icon-gradient-a" x1="15.125" y1="18.25" x2="24.25" y2="27.375" gradientUnits="userSpaceOnUse">
                                                <stop offset=".24" stopColor="currentColor"></stop>
                                                <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                                            </linearGradient>
                                            <linearGradient id="next-icon-gradient-b" x1="20.5" y1="11.25" x2="20.5" y2="18.25" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="currentColor">
                                                </stop>
                                                <stop offset="1" stopColor="currentColor" stopOpacity="0">
                                                </stop>
                                            </linearGradient>
                                        </defs>
                                            <path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path><path d="M12 21.5V12l12.25 14.25" stroke="url(#next-icon-gradient-a)"></path><path d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z" fill="url(#next-icon-gradient-b)" strokeWidth="0">
                                            </path>
                                        </svg>
                                        <span className="ml-2.5">Next.js</span>
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                                        <svg fill="#94a3b8" width="26" height="26" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mongodb</title> <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path> </g></svg>
                                        <span className="ml-2.5">MongoDB</span>
                                    </div>

                                </div>
                                <div className="mt-8 flex gap-4">
                                    <a href="https://www.mridakriti.com/" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" target="_blank">
                                        <span>
                                            <span className="inline-flex items-center">
                                                <span>Live preview</span>
                                                <svg viewBox="0 0 20 20" className="ml-1.5 h-5 w-5 fill-slate-400" fillRule="evenodd" clipRule="evenodd"><path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path></svg>
                                            </span>
                                        </span>
                                    </a>
                                    <a href="#pricing" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
                                        <span>Get this template
                                            <span aria-hidden="true" className="text-black/25">→</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className='block px-4 w-full mb-4 lg:absolute lg:w-[65%] lg:px-0 lg:right-[-1rem] lg:col-span-2'>
                                <Image
                                    src={Mrida}
                                    alt='mridakriti'
                                    className='relative z-20 rounded-xl bg-slate-200 shadow-xl shadow-black/20 ring-1 ring-slate-900/5'
                                />
                            </div>
                        </div>

                    </div>

                    <div className='bg-gray-100/50 rounded-xl mt-28'>
                        <div className='flex gap-6 px-4 pt-7'>
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                                Sea Hawk Adventures
                            </h1>
                            <div className="my-auto hidden border rounded-xl px-3 py-[0.75] md:block">
                                <p className="text-base font-semibold text-slate-500">Ecommerce Website</p>
                            </div>
                        </div>

                        <div className='mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 xl:max-w-none lg:grid-cols-3'>
                            <div className="flex flex-col lg:pb-8 px-4 mt-4">
                                <p className="mt-6 text-base leading-7 text-slate-700">
                                    At Sea Hawk Adventures, I developed their website with a focus on crafting a dynamic online platform that mirrors their adventurous spirit. Collaborating closely with the Sea Hawk Adventures team, I ensured the website showcased their thrilling excursions and services.
                                </p>
                                <div className="flex flex-wrap mt-10">
                                    <div className="flex items-center text-sm font-medium text-slate-500">
                                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex-none stroke-current text-slate-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><defs>
                                            <linearGradient id="next-icon-gradient-a" x1="15.125" y1="18.25" x2="24.25" y2="27.375" gradientUnits="userSpaceOnUse">
                                                <stop offset=".24" stopColor="currentColor"></stop>
                                                <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                                            </linearGradient>
                                            <linearGradient id="next-icon-gradient-b" x1="20.5" y1="11.25" x2="20.5" y2="18.25" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="currentColor">
                                                </stop>
                                                <stop offset="1" stopColor="currentColor" stopOpacity="0">
                                                </stop>
                                            </linearGradient>
                                        </defs>
                                            <path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path><path d="M12 21.5V12l12.25 14.25" stroke="url(#next-icon-gradient-a)"></path><path d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z" fill="url(#next-icon-gradient-b)" strokeWidth="0">
                                            </path>
                                        </svg>
                                        <span className="ml-2.5">Next.js</span>
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                                        <svg fill="#94a3b8" width="26" height="26" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mongodb</title> <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path> </g></svg>
                                        <span className="ml-2.5">MongoDB</span>
                                    </div>

                                </div>
                                <div className="mt-8 flex gap-4">
                                    <a href="https://www.mridakriti.com/" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" target="_blank">
                                        <span>
                                            <span className="inline-flex items-center">
                                                <span>Live preview</span>
                                                <svg viewBox="0 0 20 20" className="ml-1.5 h-5 w-5 fill-slate-400" fillRule="evenodd" clipRule="evenodd"><path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path></svg>
                                            </span>
                                        </span>
                                    </a>
                                    <a href="#pricing" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
                                        <span>Get this template
                                            <span aria-hidden="true" className="text-black/25">→</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className='block px-4 w-full mb-4 lg:absolute lg:w-[65%] lg:px-0 lg:right-[-1rem] lg:col-span-2'>
                                <Image
                                    src={Mrida}
                                    alt='mridakriti'
                                    className='relative z-20 rounded-xl bg-slate-200 mt-0 lg:mt-6 shadow-xl shadow-black/20 ring-1 ring-slate-900/5'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Works