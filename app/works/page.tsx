import React from 'react'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/pages/works/Hero'

export const metadata: Metadata = {
    title: 'Works',
    description: 'Works page',
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