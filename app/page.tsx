import Navbar from '@/components/Navbar';
import Hero from '@/pages/home/Hero';
import Feature from '@/pages/home/Feature';
import Tools from '@/pages/home/Tools';
import Works from '@/pages/home/Works';
import Newletter from '@/pages/home/Newletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      {/* <Tools /> */}
      <Works />
      <Newletter />
      <Footer />
    </>
  )
}
