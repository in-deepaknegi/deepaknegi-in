import React from 'react'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/pages/about/Hero'

export const metadata: Metadata = {
    title: 'About',
    description: 'About page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default page