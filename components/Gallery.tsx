'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Gallery.module.css';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Placeholder images - Replace these paths with your actual portfolio images
    const images = [
        { src: '/gallery/trabajo-1.jpg', alt: 'Maquillaje de novia elegante' },
        { src: '/gallery/trabajo-2.jpg', alt: 'Maquillaje social para evento' },
        { src: '/gallery/trabajo-3.jpg', alt: 'Sesión editorial de moda' },
        { src: '/gallery/trabajo-4.jpg', alt: 'Maquillaje natural y luminoso' },
        { src: '/gallery/trabajo-5.jpg', alt: 'Look sofisticado para boda' },
        { src: '/gallery/trabajo-6.jpg', alt: 'Maquillaje artístico profesional' },
        { src: '/gallery/trabajo-7.jpg', alt: 'Maquillaje de alta costura' },
        { src: '/gallery/trabajo-8.jpg', alt: 'Maquillaje de pasarela' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <section id="galeria" className={styles.gallery}>
            <div className={styles.container}>
                <div className={styles.header}>
                    {/* <h3 className={styles.sectionLabel}>03. GALERÍA</h3> */}
                    <h2 className={styles.title}>
                        <span className={styles.titleMain}>Galería</span> <span className={styles.titleAccent}>de trabajos</span>
                    </h2>
                    <p className={styles.quote}>
                        Cada maquillaje es un trabajo hecho a medida.
                        Cada rostro trasmite la belleza de su esencia. Cada
                        imagen refleja mi compromiso por crear looks
                        pulidos, simétricos y en armonía cromática, para
                        acompañarte y realzarte en tu ocasión especial
                    </p>
                </div>

                <div
                    className={styles.carouselContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Main Carousel */}
                    <div className={styles.carousel}>
                        {/* Navigation Arrows */}
                        <button
                            className={`${styles.navButton} ${styles.navButtonPrev}`}
                            onClick={prevSlide}
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Slides */}
                        <div className={styles.slidesWrapper}>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`${styles.slide} ${index === currentIndex ? styles.slideActive : ''
                                        } ${index === (currentIndex - 1 + images.length) % images.length
                                            ? styles.slidePrev
                                            : ''
                                        } ${index === (currentIndex + 1) % images.length
                                            ? styles.slideNext
                                            : ''
                                        }`}
                                >
                                    <div className={styles.imageWrapper}>
                                        {/* Blurred Background */}
                                        <div
                                            className={styles.blurredBackground}
                                            style={{ backgroundImage: `url(${image.src})` }}
                                        />

                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className={styles.carouselImage}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.parentElement!.querySelector('.image-error-msg')?.removeAttribute('hidden');
                                            }}
                                        />
                                        <div className="image-error-msg" hidden style={{ position: 'absolute', color: 'red', background: 'white', padding: '5px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                            Imagen no encontrada
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className={`${styles.navButton} ${styles.navButtonNext}`}
                            onClick={nextSlide}
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className={styles.dotsContainer}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className={styles.counter}>
                        <span className={styles.counterCurrent}>{currentIndex + 1}</span>
                        <span className={styles.counterSeparator}>/</span>
                        <span className={styles.counterTotal}>{images.length}</span>
                    </div>
                </div>

                {/* Thumbnail Grid */}
                <div className={styles.thumbnailGrid}>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            className={`${styles.thumbnail} ${index === currentIndex ? styles.thumbnailActive : ''
                                }`}
                            onClick={() => goToSlide(index)}
                        >
                            <img
                                src={image.src}
                                alt={`Thumbnail ${index + 1}`}
                                className={styles.thumbnailImage}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
