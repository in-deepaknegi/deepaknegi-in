import React from 'react'
import Image from 'next/image'
import Mrida from '@/public/mridakriti.png';
import Cnippet from '@/public/cnippet.png';

const companies = [
    {
        name: 'Mridakriti',
        siteImage: Mrida,
        siteType: 'Ecommerce',
        desc: "I developed Mridakriti's website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.",
        siteLink: 'https://www.mridakriti.com/',
    },
    {
        name: 'CnippetUI',
        siteImage: Cnippet,
        siteType: 'Website Building',
        desc: "At Cnippet-UI, I developed a dynamic website that simplifies the creation of website components and templates. My contributions to Cnippet's website showcased my commitment to delivering a contemporary, user-centric digital platform. Collaborating closely with the team, I harnessed my expertise to design a responsive interface, guaranteeing an immersive and intuitive user journey.",
        siteLink: 'https://cnippet-ui.vercel.app/',
    },
]

const Hero = () => {
    return (
        <section className='mx-auto bg-white max-w-7xl py-24 sm:py-32'>
            <div className='mx-auto px-6 lg:px-8'>
                <h1 className='text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>Recent Works</h1>
                <p className='mt-3 max-w-2xl text-lg text-gray-800'>
                    Dive into my diverse range of projects, showcasing my expertise in software development, design, and dedication to delivering exceptional results.
                </p>

                <div className='mt-16 lg:mt-20'>
                    {companies.map((company, i) => (
                        <article key={i} className='relative isolate my-10 flex flex-col gap-8 lg:flex-row'>
                            <div className='relative aspect-[16/8.5] w-[35rem] lg:shrink-0'>
                                <Image
                                    src={company.siteImage}
                                    alt='site-image'
                                    className='absolute inset-0 h-full w-full rounded-2xl bg-white object-cover'
                                />
                            </div>
                            <div>
                                <p className='relative mt-4 text-xs font-medium text-slate-500'>{company.siteType}</p>

                                <h4 className='mt-2 text-3xl font-medium text-slate-800 group-hover:text-black'>
                                    <a href={company.siteLink} target="_blank">
                                        <span className='relative'>{company.name}</span>
                                    </a>
                                </h4>
                                <p className="relative mt-4 text-base leading-6 text-gray-800">
                                    {company.desc}
                                </p>
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

                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero