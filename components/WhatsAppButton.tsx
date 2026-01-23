'use client';

import React from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
    // Replace with the actual phone number
    const phoneNumber = '+34697702348'; // Taken from viewing the page previously
    const message = 'Hola, me gustaría más información sobre tus servicios de maquillaje.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatButton}
            aria-label="Contactar por WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.icon}
            >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M16.53 14.96C16.29 14.84 15.08 14.25 14.86 14.16C14.63 14.07 14.46 14.03 14.3 14.28C14.13 14.53 13.66 15.08 13.51 15.24C13.37 15.41 13.22 15.43 12.98 15.31C12.74 15.19 11.97 14.94 11.05 14.13C10.33 13.49 9.85 12.7 9.7 12.46C9.56 12.21 9.7 12.08 9.82 11.96C9.93 11.85 10.07 11.68 10.19 11.54C10.31 11.4 10.35 11.3 10.43 11.14C10.51 10.97 10.47 10.83 10.41 10.71C10.35 10.58 9.87 9.4 9.67 8.92C9.47 8.45 9.27 8.5 9.11 8.5C8.97 8.5 8.81 8.5 8.65 8.5C8.48 8.5 8.21 8.57 7.97 8.82C7.73 9.08 7.05 9.72 7.05 11.02C7.05 12.33 8 13.59 8.14 13.78C8.28 13.97 10.11 16.8 12.91 18.01C13.58 18.3 14.1 18.47 14.51 18.6C15.17 18.81 15.79 18.78 16.28 18.71C16.83 18.63 17.97 18.02 18.21 17.35C18.45 16.68 18.45 16.1 18.38 15.98C18.31 15.86 18.14 15.79 17.9 15.67L16.53 14.96Z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
