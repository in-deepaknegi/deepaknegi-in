"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const Hero = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log(message);

        const res = await fetch('api/contact', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name, email, message,
            })
        })

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setName("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
                router.push('/');
            }, 2000);
        }
    };

    return (
        <section className='isolate relative overflow-hidden'>
            <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
                <div className='relative mt-12 px-6 md:mt-40 lg:px-8'>
                    <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
                        <h2 className='text-4xl font-medium'>Get in touch</h2>
                        <p className='mt-4 text-gray-700'>
                            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                        </p>
                        <dl className='mt-10 text-base text-gray-600 space-y-8'>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-400 my-auto'><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
                                <dd>
                                    545 Mavis Island <br />
                                    Chicago, Il99191
                                </dd>
                            </div>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-400 my-auto'><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <dd>
                                    <a href="tel:+91 74569 63166">+91 74569 63166</a>
                                </dd>
                            </div>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-400 my-auto'><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                <dd>
                                    <a href="mailto: negideepak.in@gmail.com">
                                        negideepak.in@gmail.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="form space-y-5 max-w-xl px-4 mx-auto my-10 md:my-40">
                    <div>
                        <label htmlFor="name" >Your name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="name"
                            id="name"
                            placeholder="name" required />
                    </div>
                    <div>
                        <label htmlFor="email" >Your email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            id="email"
                            placeholder="name@gmail.com"
                            required />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" >Your message</label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            id="message"
                            rows="5"
                            placeholder="Leave a comment..."></textarea>
                    </div>

                    <p className='text-sm text-gray-500'>
                        By submitting this form you agree to our
                        <span className='text-blue-700'>
                            <a href="/terms"> terms and conditions </a>
                        </span>
                        and our
                        <span className='text-blue-700'>
                            <a href="/privacy"> privacy policy</a>
                        </span>.
                    </p>




                    <div className='flex'>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-blue-700 text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300">
                            {success ? (
                                <span>
                                    Redirecting to homepage...
                                </span>
                            ) : (
                                <span>
                                    Send message
                                </span>
                            )}
                        </button>
                        <div className='my-auto ml-4'>
                            {error && error.map((e) => (
                                <div key={error} className={`${success ? 'text-green-600' : 'text-red-500'} text-sm font-semibold`}>
                                    <svg className="flex-shrink-0 inline w-4 h-4 mr-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
                                    </svg>
                                    <span className='my-auto'>{e}</span>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Hero