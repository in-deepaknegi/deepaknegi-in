import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Shipping = () => {
    return (
        <>
            <Navbar />
            <main className='relative max-w-4xl mx-auto px-10 mb-20 w-full font-sf'>
                <article className='mx-10 privacy'>
                    <h1 className='mt-16 text-4xl text-center gradient-cool'>Shipping and Delivery</h1>
                    <p >Last Updated on October 24th, 2023</p>

                    <p >
                        Welcome to our Shipping and Delivery information page, where we aim to provide you with all the details you need to know about how we handle shipping and the delivery of your orders. We understand that a smooth and reliable shipping process is crucial for your online shopping experience, and we are committed to ensuring your orders reach you safely and on time.
                    </p>

                    <h2>Our Shipping Promise</h2>
                    <p >
                        We take great pride in our dedication to delivering your orders promptly and securely. Our shipping services are designed to provide you with the best possible experience when shopping with us. Here&apos;s what you can expect:
                    </p>

                    <h3>
                        Fast and Efficient Shipping
                    </h3>
                    <p>
                        We process your orders quickly to minimize delays. We offer a variety of shipping options to suit your needs, including express and standard delivery
                    </p>

                    <h3>Tarcking your order</h3>
                    <p>
                        Once your order is dispatched, you will receive a tracking number so you can follow your package&apos;s journey.
                    </p>

                    <h3>Delivery Infromation</h3>
                    <p>
                        Please check the product page for estimated delivery times, which can vary depending on your location and the shipping method you choose. <br />
                        Shipping costs are determined based on your location and the total order value. You can view shipping fees during the checkout process. <br />
                        We offer international shipping to many countries. Please note that customs and import duties may apply, and you are responsible for any additional fees. <br />
                        If you have any questions or concerns about your delivery, please don&apos;t hesitate to reach out to our customer support team. We are here to assist you with any shipping-related inquiries.
                    </p>

                    <h3>Return and Exchange</h3>
                    <p>
                        If your order arrives damaged or if you&apos;re not satisfied with your purchase, please refer to our Returns and Exchanges policy for information on how to request a return or exchange. <br />
                        At [Your Company Name], we value your trust, and our commitment to a seamless shipping and delivery process is a testament to that. We want your online shopping experience to be enjoyable from the moment you place your order to the day it arrives at your doorstep. <br />
                        Thank you for choosing us for your shopping needs, and we look forward to serving you with our top-notch shipping and delivery services.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default Shipping