import React from 'react'

const Newletter = () => {
    return (
        <section className='py-16 sm:py-24 lg:py-24'>
            <div className='mx-auto grid max-w-2xl lg:max-w-7xl grid-cols-1 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
                <div className='max-w-xl text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-4xl lg:text-left lg:col-span-7'>
                    <h2 className='inline sm:block lg:inline'>Want product news and updated?</h2>
                    <p className='sm:block lg:inline'>Sign up for out newsletter</p>
                </div>
                <form action="" className='mx-auto w-full max-w-md col-span-5 py-5 lg:py-2'>
                    <div className='flex gap-x-3'>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black/70 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
                        <button type="submit" className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
                    </div>
                    <p className='mt-4 text-sm text-gray-700'>
                        We care about your data. Read our
                        <span className='text-blue-800'>
                            <a href="/privacy"> privacy policy</a>
                        </span>.
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Newletter