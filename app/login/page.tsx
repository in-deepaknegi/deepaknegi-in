import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/pages/login/Hero';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login page',
}

const page = () => {
    return (
        <>
            <Hero />
        </>
    )
}

export default page