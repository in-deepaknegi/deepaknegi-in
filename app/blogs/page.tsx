import React from 'react'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/pages/blogs/Hero'

export const metadata: Metadata = {
    title: 'Blogs',
    description: 'Blogs page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}

export default page