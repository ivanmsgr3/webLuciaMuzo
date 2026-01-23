import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
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
                </div>
            </div>
        </section>
    );
};

export default Contact;
