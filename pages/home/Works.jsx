import React from 'react';
import Image from 'next/image';
import Mrida from '@/public/mridakriti.png';
import Sea from '@/public/seahawk.png';
import Cnippet from '@/public/cnippet.png';

const companies = [
    {
        name: 'Mridakriti',
        siteImage: Mrida,
        siteType: 'Ecommerce',
        desc: "I developed Mridakriti's website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.",
        siteLink: 'https://www.mridakriti.com/',
        studyUrl: '#',
    },
    {
        name: 'CnippetUI',
        siteImage: Cnippet,
        siteType: 'Website Building',
        desc: "I developed Mridakriti's website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.",
        siteLink: 'https://cnippetui.vercel.app/',
        studyUrl: '#',
    },
]

const Works = () => {
    return (
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
                    {companies.map((company, i) => (
                        <div key={i} className='flex flex-col items-start'>
                            <div className='relative w-full'>
                                <Image
                                    src={company.siteImage}
                                    alt='mridakriti'
                                    className='w-full aspect-[16/8.4] rounded-2xl object-cover'
                                />
                            </div>
                            <div className='mt-4 max-w-xl'>
                                <a href="#" className="text-xs z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    {company.siteType}
                                </a>
                                <h3 className="mt-5 text-4xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    {company.name}
                                </h3>
                                <p className="mt-8 line-clamp-3 text-base leading-6 text-gray-600">
                                    {company.desc}
                                </p>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <a href={company.siteLink} className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" target="_blank">
                                    <span>
                                        <span className="inline-flex items-center">
                                            <span>Live preview</span>
                                            <svg viewBox="0 0 20 20" className="ml-1.5 h-5 w-5 fill-slate-100" fillRule="evenodd" clipRule="evenodd"><path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path></svg>
                                        </span>
                                    </span>
                                </a>
                                <a href={company.studyUrl} className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
                                    <span>View case study
                                        <span aria-hidden="true" className="text-black/25">→</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Works