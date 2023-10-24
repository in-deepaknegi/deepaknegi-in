import Navbar from '@/components/Navbar'
import React from 'react'

const Privacy = () => {
    return (
        <main className='font-sf'>
            <Navbar />
            <section className='relative max-w-7xl mx-auto px-10 w-full h-screen'>
                <div className='mx-10'>
                    <h1 className='mt-16 text-4xl text-center'>Privacy Policy</h1>
                    <p className='text-gray-500 text-base mt-3'>Last Updated on October 24th, 2023</p>

                    <h2 className='text-4xl mt-4'>Introduction to Privacy Policy</h2>

                    <p className='text-gray-500 text-base mt-3'>
                        This privacy policy (the PRIVACY POLICY) applies to your use of the website of Deepak Negi hosted at deepaknegi.in, the Services (as defined under the Terms of Use), but does not apply to any third party websites that may be linked to them, or any relationships you may have with the businesses listed on our website.
                    </p>
                    <p className='text-gray-500 text-base mt-3'>
                        The terms <strong>&quot;WE&quot;</strong>, &quot;OUR&quot; and &quot;US&quot; refer to Razorpay and the terms &quot;YOU&quot;, &quot;YOUR&quot; and &quot;USER&quot; refer to you, as a user of Razorpay. The term &quot;PERSONAL INFORMATION&quot; means information that you provide to us which personally identifies you to be contacted or identified, such as your name, phone number, email address, and any other data that is tied to such information. Our practices and procedures in relation to the collection and use of Personal Information have been set-out below in order to ensure safe usage of the Website for you.
                    </p>
                    <p className='text-gray-500 text-base mt-3'>
                        It is clarified that the terms and conditions that are provided separately, form an integral part of your use of this Website and should be read in conjunction with this Privacy Policy.
                    </p>

                    <h2 className='text-4xl mt-4'>Information we collect and how we use it</h2>
                    <p className='text-gray-500 text-base mt-3'>
                        We collect, receive and store your Personal Information. If you provide your third-party account credentials (&apos;THIRD PARTY ACCOUNT INFORMATION&apos;) to us, you understand that some content and information in those accounts may be transmitted to your account with us if you authorise such transmissions and that Third Party Account Information transmitted to us shall be covered by this Privacy Policy. You may opt to not provide us with certain information, however that will restrict you from registering with us or availing some of our features and services.
                    </p>
                    <p className='text-gray-500 text-base mt-3'>
                        We use commercially reasonable efforts to ensure that the collection of Personal Information is limited to that which is necessary to fulfill the purposes identified below. If we use or plan to use your information in a manner different than the purpose for which it is collected, then we will ask you for your consent prior to such use.
                    </p>
                    <p className='text-gray-500 text-base mt-3'>
                        The Personal Information collected will be used only for the purpose of enabling you to use the services provided by us, to help promote a safe service, calibrate consumer interest in our products and services, inform you about online offers and updates, troubleshoot problems, customize User experience, detect and protect us against error, fraud and other criminal activity, collect money, enforce our terms and conditions, and as otherwise described to you at the time of collection of such information.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Privacy