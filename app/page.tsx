import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FullWidthImage from '@/components/FullWidthImage';

export default function Home() {
    return (
        <main className="relative">
            <Header />
            <div className="relative z-10 bg-stone-50">
                <Hero />
            </div>
            <About />
            <div className="relative z-10 bg-stone-50">
                <Services />
            </div>
            <div className="relative z-10 bg-white">
                <Gallery />
            </div>
            <FullWidthImage src="/gallery/web.jpg" alt="Full width portfolio shot" />
            <div className="relative z-10 bg-stone-50">
                <Brands />
            </div>
            <div className="relative z-10 bg-white">
                <Contact />
            </div>
            <div className="relative z-10">
                <Footer />
            </div>
        </main>
    );
}
