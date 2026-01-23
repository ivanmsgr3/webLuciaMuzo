import React from 'react';
import styles from './FullWidthImage.module.css';

interface FullWidthImageProps {
    src: string;
    alt: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt }) => {
    return (
        <section className={styles.section}>
            <img src={src} alt={alt} className={styles.image} />
            <div className={styles.overlay}></div>
        </section>
    );
};

export default FullWidthImage;
