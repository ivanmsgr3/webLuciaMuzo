'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Sobre Mí', href: '#sobre-mi' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Galería', href: '#galeria' },
        { name: 'Contacto', href: '#contacto' }
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <a href="#inicio">
                            <img src="/logos/NEGRO.png" alt="COCO" height={60} />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={styles.navLink}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={styles.mobileMenuButton}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className={styles.mobileNav}>
                    <div className={styles.mobileNavContent}>
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={styles.mobileNavLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
