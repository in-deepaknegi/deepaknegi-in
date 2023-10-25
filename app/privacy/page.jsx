import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Privacy = () => {
    return (
        <>
            <Navbar />
            <main className='relative max-w-4xl mx-auto px-10 mb-20 w-full font-sf'>
                <article className='mx-10 privacy'>
                    <h1 className='mt-16 text-4xl text-center gradient-cool'>Privacy Policy</h1>
                    <p >Last Updated on October 24th, 2023</p>

                    <h2>Introduction to Privacy Policy</h2>

                    <p >
                        Thank you for using deepaknegi.in (&apos;we,&apos; &apos;us,&apos; or &apos;our&apos;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains in detail how we collect, use, and safeguard your personal information. By using our website or app, you consent to the practices described in this policy.
                    </p>

                    <h2>Information we collect and how we use it</h2>
                    <p >
                        We may collect various types of personal information from our website/app users. This information includes contact information such as your name, email address, phone number, or mailing address. Additionally, we may collect user-generated content, such as comments, reviews, or forum contributions, which may reveal insights about your preferences and interests.
                    </p>
                    <p >
                        Our website also gathers technical information, such as your IP address, browser type, device type, and operating system. This information helps us understand the technical environment you&apos;re using to access our platform. Furthermore, we collect usage data to gain insights into your interactions with our website. This data includes the pages you visit, the duration of your visits, and your engagement with our content.
                    </p>

                    <h2>How we Collect Information</h2>
                    <p>
                        We employ several methods for collecting personal information
                    </p>
                    <ul className='list-disc ml-10'>
                        <li>
                            Providing Services: We use your information to deliver the services and features you&apos;ve requested, including user accounts, personalized experiences, and access to specific content.
                        </li>
                        <li>
                            Communication: We may use your contact information to send you important updates, newsletters, promotional materials, and information related to your account or transactions.
                        </li>
                        <li>
                            Customization: By analyzing your usage data and user-generated content, we personalize your experience by tailoring content to your interests, enhancing the quality of your interactions with our platform.
                        </li>
                        <li>
                            Analytics: We continually strive to improve our website&apos;s performance and user experience. We analyze data on your visits, interactions, and the functionality of our platform to make necessary enhancements.
                        </li>
                        <li>
                            Legal Compliance: To ensure adherence to applicable laws and regulations, we may use your personal information for legal and regulatory compliance purposes.
                        </li>
                    </ul>

                    <h2>
                        Keeping Information Safe
                    </h2>
                    <p>
                        We take the security of your personal information seriously. Our team has implemented robust security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. However, it&apos;s important to note that while we make every effort to secure your information, no method of data transmission over the internet is entirely secure. Thus, while we take precautions, we cannot guarantee the absolute security of your information.
                    </p>
                    <h2>
                        Information Sharing with Third Parties
                    </h2>
                    <p>
                        We respect your privacy and do not sell, trade, or otherwise transfer your personal information to external parties without your explicit consent. There are limited exceptions to this rule:
                    </p>
                    <ul className='list-disc ml-10'>
                        <li>
                            Service Providers: We may share your information with trusted service providers to help us operate our website/app and provide you with the services you expect. These third parties are bound by strict confidentiality agreements.
                        </li>
                        <li>
                            Legal Obligations: In certain circumstances, we may share your information to comply with legal obligations, enforce our site policies, or protect our rights, property, or safety, or those of others. We may also share information in the event of a business transaction such as a merger, acquisition, or sale.
                        </li>
                    </ul>

                    <h2>
                        Changes to This Policy
                    </h2>
                    <p>
                        We may update this Privacy Policy from time to time. When we make changes, we will revise the date at the top of this page. We recommend reviewing this policy periodically to stay informed about how we are protecting and using your information.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact us at [Your Contact Information]. We value your privacy and are here to assist you with any inquiries or requests.
                        <br />
                        By using our website, you agree to this Privacy Policy and our Terms of Service.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default Privacy