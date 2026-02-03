import React from 'react';
import { Phone, Mail, Instagram, Video } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contacto" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.header}>
                    {/* <h3 className={styles.sectionLabel}>05. CONTACTO</h3> */}
                    <h2 className={styles.title}>
                        <span className={styles.titleMain}>Conexión directa y</span> <span className={styles.titleAccent}>exclusiva</span>
                    </h2>
                    <p className={styles.quote}>
                        "Estoy aquí para hacer que tu belleza se vea tal y como siempre
                        la imaginaste. No dudes en ponerte en contacto conmigo para reservar
                        tu sesión o para más información."
                    </p>
                </div>
                <div className={styles.grid}>
                    <a
                        href="tel:+34697702348"
                        className={styles.contactCard}
                    >
                        <Phone className={styles.icon} size={32} />
                        <h4 className={styles.contactTitle}>Teléfono</h4>
                        <p className={styles.contactText}>+34 697 70 23 48</p>
                    </a>
                    <a
                        href="mailto:muzomedinalucia@gmail.com"
                        className={styles.contactCard}
                    >
                        <Mail className={styles.icon} size={32} />
                        <h4 className={styles.contactTitle}>Email</h4>
                        <p className={styles.contactText}>muzomedinalucia@gmail.com</p>
                    </a>
                    <a
                        href="https://instagram.com/byco.comakeup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactCard}
                    >
                        <Instagram className={styles.icon} size={32} />
                        <h4 className={styles.contactTitle}>Instagram</h4>
                        <p className={styles.contactText}>@byco.comakeup</p>
                    </a>
                    <a
                        href="https://www.tiktok.com/@byco.comakeup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactCard}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={styles.icon}
                            height={32}
                            width={32}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                        <h4 className={styles.contactTitle}>TikTok</h4>
                        <p className={styles.contactText}>@byco.comakeup</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
