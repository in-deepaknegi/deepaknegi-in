import React from 'react'

const Info = () => {
    return (
        <section className='relative max-w-5xl mx-auto px-10 mt-10 mb-10'>
            <div className='grid grid-cols-2 gap-8 mx-10 text-center border-t py-10'>
                <div className='flex flex-col space-y-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='mx-auto text-blue-400' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    <h2 className='text-2xl text-slate-600 font-semibold'>Email us</h2>
                    <p className='text-slate-500'>
                        Email us for general queries, including marketing and partnership opportunities.
                    </p>
                    <a href="mailto:negideepak.in@gmail.com" className='gradient-cool font-semibold text-lg'>
                        negideepak.in@gmail.com
                    </a>
                </div>
                <div className='flex flex-col space-y-3'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='mx-auto text-purple-400' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <h2 className='text-2xl text-slate-600 font-semibold'>
                        Call us:
                    </h2>
                    <p className='text-slate-500'>
                        Call us to speak to a member of our team. We are always happy to help.
                    </p>
                    <a href="tel:7456963166" className='gradient-cool font-semibold text-lg'>+91 7456963166</a>
                </div>
            </div>
        </section>
    )
}

export default Info