'use client';

import React, { useState } from 'react';
import styles from './Services.module.css';

interface Service {
    title: string;
    description: string;
    price: string;
    features: string[];
}

interface BridalPackage {
    name: string;
    price: string;
    popular?: boolean;
    features: string[];
}

const Services = () => {
    const [activeService, setActiveService] = useState('social');

    const services: Record<string, Service> = {
        social: {
            title: 'Maquillaje Social',
            description: 'Para bodas, eventos o sesiones fotográficas',
            price: '65€',
            features: ['Hidratante y hipoalergénico', 'Fijación de larga duración', 'Desplazamiento: 10€ - 50€']
        },
        editorial: {
            title: 'Sesiones Editoriales',
            description: 'Producciones de moda, retratos y acompañamiento retoque',
            price: '50€/hora',
            features: ['Ideal para producciones profesionales', 'Retoque incluido', 'Desplazamiento: 10€ - 50€']
        },
        automaquillaje: {
            title: 'Automaquillaje',
            description: 'Sesión práctica personalizada',
            price: '60€/hora',
            features: ['Productos incluidos', 'Aprende técnicas profesionales', 'Desplazamiento: 10€ - 50€']
        }
    };

    const bridalPackages: BridalPackage[] = [
        {
            name: 'Básico',
            price: '200€',
            features: [
                'Bloqueo de agenda',
                'Entrevista inicial (50%)',
                '2 pruebas de maquillaje',
                'Kit de retoque',
                'Contrato',
                'Asesoramiento',
                'Guía de recomendaciones',
                'Formulaciones de alta gama'
            ]
        },
        {
            name: 'Premium',
            price: '260€',
            popular: true,
            features: [
                'Todo lo del básico',
                '3 pruebas de maquillaje',
                '1 prueba para otra persona (-10%)',
                'Kit cosmético postboda',
                'Asesoramiento completo',
                'Look atemporal y radiante'
            ]
        }
    ];

    return (
        <section id="servicios" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    {/* <h3 className={styles.sectionLabel}>02. SERVICIOS</h3> */}
                    <h2 className={styles.title}>
                        <span className={styles.titleMain}>Servicios</span> <span className={styles.titleAccent}>destacados</span>
                    </h2>
                </div>

                {/* Service Tabs */}
                <div className={styles.tabs}>
                    {Object.keys(services).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveService(key)}
                            className={`${styles.tab} ${activeService === key ? styles.tabActive : ''}`}
                        >
                            {services[key].title}
                        </button>
                    ))}
                </div>

                {/* Active Service Details */}
                <div className={styles.serviceCard}>
                    <h3 className={styles.serviceTitle}>
                        {services[activeService].title}
                    </h3>
                    <p className={styles.serviceDescription}>{services[activeService].description}</p>
                    <p className={styles.servicePrice}>
                        {services[activeService].price}
                    </p>
                    <ul className={styles.featureList}>
                        {services[activeService].features.map((feature, idx) => (
                            <li key={idx} className={styles.featureItem}>
                                <span className={styles.bullet}>•</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bridal Packages */}
                <div className={styles.bridalSection}>
                    <h3 className={styles.bridalTitle}>
                        Paquetes para Novias
                    </h3>
                    <div className={styles.packagesGrid}>
                        {bridalPackages.map((pkg, idx) => (
                            <div
                                key={idx}
                                className={`${styles.packageCard} ${pkg.popular ? styles.packagePopular : ''}`}
                            >
                                {pkg.popular && (
                                    <span className={styles.popularBadge}>
                                        MÁS POPULAR
                                    </span>
                                )}
                                <h4 className={styles.packageName}>{pkg.name}</h4>
                                <p className={styles.packagePrice}>{pkg.price}</p>
                                <ul className={styles.packageFeatures}>
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className={styles.packageFeature}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
