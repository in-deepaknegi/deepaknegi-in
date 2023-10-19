import React from 'react'

const Footer = () => {
    return (
        <footer class="p-4 bg-white md:p-8 lg:p-10 border-t">
            <div class="mx-auto max-w-screen-xl text-center">
                <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900">
                    Deepak Negi
                </a>
                <p class="my-6 text-gray-500 ">
                    Iced pumpkin ristretto irish trifecta robusta trade froth affogato barista con barista cappuccino filter roast.
                </p>
                <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900">
                    <li>
                        <a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="/blog" class="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="/faq" class="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="/contact" class="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span class="text-sm text-gray-500 sm:text-center ">© 2021-2022 <a href="/" class="hover:underline">Deepak Negi™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer