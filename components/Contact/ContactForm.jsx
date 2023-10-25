"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ContactForm = () => {

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
        <section className="bg-white">
            <div className="py-3 lg:py-6 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center gradient-cool">
                    Contact Us
                </h2>
                <p className="mb-2 lg:mb-4 font-light text-center text-gray-500  sm:text-lg">
                    Got a Questions? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>
                <form onSubmit={handleSubmit} className="form space-y-5">
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
                    {/* <div>
                        <label for="subject" >Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm f" placeholder="Let us know how we can help you" required />
                    </div> */}
                    <div className="sm:col-span-2">
                        <label htmlFor="message" >Your message</label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            id="message"
                            rows="5"
                            placeholder="Leave a comment..."></textarea>
                    </div>

                    <p className='text-sm text-gray-600'>
                        By submitting this form you agree to our
                        <span className='text-blue-700'>
                            <a href="/terms"> terms and conditions </a>
                        </span>
                        and our
                        <span className='text-blue-700'>
                            <a href="/privacy"> privacy policy </a>
                        </span> which explains how we may collect, use and disclose your personal information including to third parties.
                    </p>

                    <div className='flex gap-10'>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-black text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                        <div>
                            {error && error.map((e) => (
                                <div key={error} className={`${success ? 'text-green-600' : 'text-red-500'} mt-2 text-sm font-semibold`}>
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

export default ContactForm