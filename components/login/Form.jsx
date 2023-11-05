"use client"
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Loggg from '@/public/loggg.png'
import GoogleLogo from '@/public/social/google-logo.svg'
import { redirect } from 'next/navigation'

const Form = () => {

    const { status } = useSession();

    return (
        <main className="relative flex flex-1 flex-col overflow-hidden font-sf">
            <div className='relative mx-10 mt-10 w-10'>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className='text-gray-700 border rounded-full' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                </a>
            </div>
            <div className='flex justify-between mb-16'>
                <div className=' w-full mx-auto px-4 sm:px-6 lg:px-8'>

                    <div className="relative flex flex-1 flex-col items-center justify-center pt-8">
                        <a href='/' className='flex mx-auto mb-10 w-auto'>

                            <div className='my-auto ml-3 text-3xl'>Deepak Negi</div>
                        </a>

                        {status === 'authenticated' ? (
                            redirect('/')
                        ) : (
                            <div className='max-w-sm w-full'>
                                <button
                                    onClick={() => signIn("google")}
                                    className='inline-flex justify-center rounded-lg text-base py-2.5 px-4 w-full border'>
                                    <Image
                                        src={GoogleLogo}
                                        alt='google-logo'
                                        width={24}
                                        height={24}
                                        className='mx-3'
                                    />
                                    Log in with Google
                                </button>
                            </div>
                        )
                        }
                        <div className='flex items-center  max-w-sm my-4'>
                            <div className='w-[24rem] h-[0.025rem] bg-gray-200'></div>
                            <div className='mx-2'>or</div>
                            <div className='w-full h-[0.025rem] bg-gray-200'></div>
                        </div>

                        <form action="/login" className="w-full max-w-sm">
                            <div className="mb-6 in">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" autoComplete='on' required="" />
                            </div>
                            <div className="mb-6 in">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" autoComplete='on' required="" />
                            </div>
                            <button type="submit" className="inline-flex justify-center rounded-lg text-base py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full">
                                <span>Sign in to account</span>
                            </button>
                            <input type="hidden" name="remember" value="true" />
                            <p className="my-5 text-center">
                                <a href="/password/reset" className="text-sm hover:underline">
                                    Forgot password?
                                </a>
                            </p>
                        </form>
                    </div>
                    <footer className="">
                        <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                            <p className="text-center text-base sm:text-left">
                                Don&apos;t have an account?
                            </p>
                            <a className="inline-flex justify-center rounded-lg text-base py-2.5 px-4 text-slate-800 ring-1 ring-slate-900/10 hover:ring-slate-900/20" href="/register">
                                <span>Create an Account
                                    <span aria-hidden="true">
                                    </span>
                                </span>
                            </a>
                        </div>
                    </footer>
                </div>

                <div className="hidden md:block absolute w-[12rem] top-0 right-0 text-slate-900/[0.07]">
                    <Image
                        src={Loggg}
                        alt='login-side'
                        className=''
                    />
                </div>

            </div>


        </main>
    )
}

export default Form