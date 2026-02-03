import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src="/logos/MARRÓN.png" alt="COCO" height={120} />
                    </div>
                    <p className={styles.quote}>
                        "La belleza no se crea, se revela. Con mi servicio de maquillaje, no solo te hago lucir bien,
                        sino que te hago sentir aún mejor. La técnica la pongo yo, pero la esencia te pertenece a ti."
                    </p>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} COCO Makeup. Todos los derechos reservados.
                    </p>
                    <p className={styles.developer}>
                        Siguenos en <a href="https://www.tiktok.com/@byco.comakeup" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
                    </p>
                    <p className={styles.developer}>
                        Desarrollado por <a href="https://nazarcode.com/" target="_blank" rel="noopener noreferrer">NAZARCODE</a>
                    </p>
                </div>
                <div className={styles.legalLinks}>
                    <a href="/aviso-legal">Aviso Legal</a>
                    <span className={styles.separator}>|</span>
                    <a href="/politica-privacidad">Política de Privacidad</a>
                    <span className={styles.separator}>|</span>
                    <a href="/politica-cookies">Política de Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
