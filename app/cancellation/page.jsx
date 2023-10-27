import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Cancellation = () => {
    return (
        <>
            <Navbar />
            <main className='relative max-w-4xl mx-auto px-10 mb-20 w-full font-sf'>
                <article className='mx-10 privacy'>
                    <h1 className='mt-16 text-4xl text-center gradient-cool'>Cancellation and Refund</h1>
                    <p >Last Updated on October 24th, 2023</p>

                    <p >
                        Welcome to our Cancellation Policy page, where we outline our guidelines and procedures for canceling orders or services. We understand that circumstances may change, and sometimes, you may need to cancel your order or reservation. Our goal is to provide you with a clear and fair process for cancellations to ensure a hassle-free experience.
                    </p>

                    <h2>Order Cancellation</h2>
                    <p >
                        If you wish to cancel an order, please log in to your account or contact our customer support team as soon as possible. Orders can only be canceled if they have not yet been processed or shipped.
                    </p>

                    <h3>
                        Service Reservations
                    </h3>
                    <p>
                        For service reservations, such as appointments or bookings, please notify us of your cancellation well in advance of your scheduled time. Specific cancellation deadlines may apply, and we&apos;ll inform you about these when making your reservation.
                    </p>

                    <h3>Refund Policy</h3>
                    <p>
                        The eligibility for a full or partial refund upon cancellation may vary depending on the product or service. We will clearly communicate the refund policy for each item during the ordering or reservation process.
                    </p>

                    <h3>Cancellation fees</h3>
                    <p>
                        In some cases, a cancellation fee may apply. This fee is typically associated with services or reservations, and it helps us cover administrative costs. The amount of the fee, if applicable, will be disclosed at the time of cancellation.
                    </p>


                    <p>
                        We understand that situations can change, and we aim to make the cancellation process as straightforward as possible. Our goal is to ensure that you have a positive experience, whether you proceed with your order or find it necessary to cancel.

                        Thank you for choosing our website, and we appreciate your understanding of our cancellation policy. If you have any further questions or concerns, please reach out to our customer support team, and we&apos;ll be happy to assist you.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default Cancellation