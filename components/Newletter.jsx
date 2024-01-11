"use client"
import React, { useState } from 'react'

const Newletter = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('api/email', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        })
        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setEmail("");
        }
    }
    
    return (
        <section className='py-16 sm:py-24 lg:py-24'>
            <div className='mx-auto grid max-w-2xl lg:max-w-7xl grid-cols-1 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
                <div className='max-w-xl text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-4xl lg:text-left lg:col-span-7'>
                    <h2 className='inline sm:block lg:inline'>Want product news and updated?</h2>
                    <p className='sm:block lg:inline'>Sign up for out newsletter</p>
                </div>
                <form onSubmit={handleSubmit} className='mx-auto w-full max-w-md col-span-5 py-5 lg:py-2'>
                    <div className='flex gap-x-3'>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                            id="email-address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/70 sm:text-sm sm:leading-6" placeholder="Enter your email" />
                        <button type="submit" className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                            {success ? (
                                <span>
                                    Subscription Successfull
                                </span>
                            ) : (
                                <span>
                                    Subscribe
                                </span>
                            )}
                        </button>

                    </div>
                    <div className='my-auto mt-2'>
                        {error && error.map((e) => (
                            <div key={error} className={`${success ? 'text-green-600' : 'text-black'} text-sm font-semibold`}>
                                <svg className="flex-shrink-0 inline w-4 h-4 mr-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
                                </svg>
                                <span className='my-auto'>{e}</span>
                            </div>
                        ))
                        }
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