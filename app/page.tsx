import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import FullWidthImage from '@/components/FullWidthImage';

export default function Home() {
    return (
        <main className="relative">
            <Hero />
            <About />
            <Services />
            <Gallery />
            <FullWidthImage src="/gallery/web.jpg" alt="Full width portfolio shot" />
            <Brands />
            <Contact />
        </main>
    );
}
