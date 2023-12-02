import Navbar from '@/components/Navbar';
import Hero from '@/pages/home/Hero';
import Feature from '@/pages/home/Feature';
import Tools from '@/pages/home/Tools';
import Works from '@/pages/home/Works';
import Blogs from '@/pages/home/Blogs';
import Newletter from '@/components/Newletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        {/* <Tools /> */}
        <Works />
        <Blogs />
        <Newletter />
      </main>
      <Footer />
    </>
  )
}
