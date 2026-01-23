'use client';

import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const rejectCookies = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>
                        Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico.
                        Puedes aceptar todas o gestionar tus preferencias.
                        Más información en nuestra <a href="/politica-cookies" className={styles.link}>Política de Cookies</a>.
                    </p>
                </div>
                <div className={styles.actions}>
                    <button
                        onClick={rejectCookies}
                        className={`${styles.button} ${styles.rejectButton}`}
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={acceptCookies}
                        className={`${styles.button} ${styles.acceptButton}`}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
