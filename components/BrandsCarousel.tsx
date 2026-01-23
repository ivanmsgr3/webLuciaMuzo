'use client';

import React from 'react';
import styles from './BrandsCarousel.module.css';

const BrandsCarousel = () => {
    const brands = [
        'Chanel',
        'Lancôme',
        'Patrick Ta',
        'Huda Beauty',
        'NARS',
        'Charlotte Tilbury',
        'YSL',
        'Makeup Forever',
        'Fenty Beauty',
        'Rare Beauty',
        'ABH'
    ];

    // Duplicate the brands array to create seamless infinite scroll
    const duplicatedBrands = [...brands, ...brands];

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carouselTrack}>
                {duplicatedBrands.map((brand, index) => (
                    <div key={index} className={styles.brandItem}>
                        {brand}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsCarousel;
