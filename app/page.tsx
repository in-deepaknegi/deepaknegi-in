import Navbar from '@/components/Navbar';
import Hero from '@/pages/home/Hero';
import Feature from '@/pages/home/Feature';
import Tools from '@/pages/home/Tools';
import Works from '@/pages/home/Works';
import Blogs from '@/pages/home/Blogs';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Deepak Negi',
  description: "I'm a passionate developer, your to-go developer for creating stunning websites",
  applicationName: 'Deepak Negi',
}

export default function Home() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: 'Deepak Negi',
  }

  return (
    <>
      {/* strucuted data using script tag */}
      <Script id='json-ld' strategy='beforeInteractive'
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Script id='gtm' strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TDG9BNPP');
        `,
        }} />
      {/* strucuted data using micro-data */}
      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://www.deepaknegi.in/" />
        <meta itemProp="name" content="Deepak Negi" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Feature />
        {/* <Tools /> */}
        <Works />
        <Blogs />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
