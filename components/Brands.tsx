import React from 'react';
import styles from './Brands.module.css';
import BrandsCarousel from './BrandsCarousel';

const Brands = () => {
    return (
        <section className={styles.brands}>
            <div className={styles.container}>
                <div className={styles.header}>
                    {/* <h3 className={styles.sectionLabel}>04. PRODUCTOS</h3> */}
                    <h2 className={styles.title}>
                        <span className={styles.titleMain}>Calidad en</span> <span className={styles.titleAccent}>cada detalle</span>
                    </h2>
                    <p className={styles.description}>
                        Utilizo exclusivamente productos de las mejores marcas en la industria del maquillaje.
                        Desde bases que perfeccionan la piel, hasta sombras de ojos que resisten todo el día sin perder
                        intensidad. Mis productos son seleccionados no solo por su rendimiento, sino también por su
                        capacidad para realzar la belleza natural sin dañar la piel.
                    </p>
                </div>
                <BrandsCarousel />
            </div>
        </section>
    );
};

export default Brands;
