import React from 'react'
import Image from 'next/image'
import Html from '@/public/tools/html-5.svg'
import Css from '@/public/tools/css.svg'
import Tailwind from '@/public/tools/tailwindcss.svg'
import Next from '@/public/tools/nextjs.svg'
import Mongo from '@/public/tools/mongodb.svg'

const Tool = [
    {
        name: "HTML",
        imageUrl: Html,
        experiece: "4 + year of experience",
    },
    {
        name: "CSS",
        imageUrl: Css,
        experiece: "4 + year of experience",
    },
    {
        name: "Tailwindcss",
        imageUrl: Tailwind,
        experiece: "4 + year of experience",
    },
    {
        name: "NextJs",
        imageUrl: Next,
        experiece: "4 + year of experience",
    },
    {
        name: "MongoDB",
        imageUrl: Mongo,
        experiece: "4 + year of experience",
    },
]

const Tools = () => {
    return (
        <section className='bg-white py-14 md:py-16 lg:py-32'>
            <div className='mx-auto max-w-7xl px-5 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                    <h2 className='text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>
                        A simple Stack that you can
                        <span className='text-transparent bg-clip-text  bg-gradient-to-r from-[#071d4c] via-[#4134b8] to-[#a146eb]'> trust </span>
                    </h2>
                    <p className='mt-6 text-left text-[1.055rem] text-gray-900 font-light'>
                        I&apos;ve been a software developer for over 4 years, and while my stack has shifted over the years, I kept coming back to the same technologies. The following is the stack that I&aspo;ve developed & honed over the years as a software developer.
                    </p>
                </div>
                <ul role='list' className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
                    {Tool.map((tool, index) => (
                        <li key={index} className='text-center'>
                            <Image
                                src={tool.imageUrl}
                                alt='person'
                                className='mx-auto w-14 h-14 aspect-[1/1] rounded-2xl object-cover'
                            />
                            <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                                {tool.name}
                            </h3>
                            <p className="text-sm font-semibold leading-6 text-blue-700">
                                {tool.experiece}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Tools