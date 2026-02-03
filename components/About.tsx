import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="sobre-mi" className={styles.about}>
            {/* <div className={styles.parallaxBg} /> */}
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>
                            <span className={styles.titleMain}>Acerca</span> <span className={styles.titleAccent}>de mí</span>
                        </h2>
                        <h2 className={styles.introHeading}>
                            Ya que tengo el privilegio de<br />
                            haber llegado hasta ti, te cuento<br />
                            un poco sobre mí:
                        </h2>
                        <p className={styles.paragraph}>
                            Soy <span className={styles.highlight}>Lucía Muzo</span>, maquilladora profesional en Granada, y apasionada por resaltar la
                            belleza natural de cada persona a través de looks sofisticados, naturales y atemporales.
                        </p>
                        <p className={styles.paragraph}>
                            Mi filosofía es simple: <span className={styles.highlight}>menos es más</span>. Creo que el maquillaje debe acompañarte, no
                            esconderte, y que la verdadera elegancia está en los detalles sutiles que marcan la diferencia.
                        </p>
                        <p className={styles.paragraph}>
                            En mis trabajos persigo un acabado impecable, que no solo realza tus rasgos, sino que
                            también te hace sentir segura y cómoda en tu propia piel y mi misión es ofrecerte una
                            experiencia única, donde la naturalidad se encuentra con la perfección.
                        </p>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Versatilidad</h4>
                            <p className={styles.featureText}>
                                Maquillaje adaptado a la persona (tipo de piel, colorimetría y preferencias),
                                tipo de ocasión y personalidad.
                            </p>
                        </div>
                        <div className={`${styles.featureCard} ${styles.featureCardAccent}`}>
                            <h4 className={styles.featureTitle}>Enfoque natural</h4>
                            <p className={styles.featureText}>
                                Estilo preferiblemente natural, con pieles
                                ligeras y luminosas, y acabados pulidos y
                                naturales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
