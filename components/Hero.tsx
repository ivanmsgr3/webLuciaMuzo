import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.tagline}>Belleza a medida</p>
                    <h2 className={styles.title}>
                        <span className={styles.titleMain}>Maquillaje</span> <span className={styles.titleAccent}>profesional</span>
                    </h2>
                    <p className={styles.description}>
                        Resaltando tu belleza natural con looks sofisticados, naturales y atemporales
                    </p>
                    <a href="#contacto" className={styles.cta}>
                        Reserva tu Sesión
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
