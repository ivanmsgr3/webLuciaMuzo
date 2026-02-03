import type { Metadata } from 'next';
import { Archivo, Passions_Conflict, Spectral } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
    subsets: ['latin'],
    variable: '--font-archivo',
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const passionsConflict = Passions_Conflict({
    subsets: ['latin'],
    variable: '--font-passions',
    display: 'swap',
    weight: '400',
});

const spectral = Spectral({
    subsets: ['latin'],
    variable: '--font-spectral',
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
});

export const metadata: Metadata = {
    title: 'COCO Makeup - Maquillaje Profesional en Granada',
    description: 'Maquilladora profesional en Granada. Looks sofisticados, naturales y atemporales para bodas, eventos y sesiones fotográficas. Resaltando tu belleza natural.',
    keywords: ['maquillaje profesional', 'maquilladora Granada', 'maquillaje novias', 'maquillaje eventos', 'makeup artist'],
    authors: [{ name: 'Lucía Muzo' }],
    icons: {
        icon: '/logos/NEGRO.png',
        shortcut: '/logos/NEGRO.png',
        apple: '/logos/NEGRO.png',
    },
    openGraph: {
        title: 'COCO Makeup - Maquillaje Profesional',
        description: 'Resaltando tu belleza natural con looks sofisticados y atemporales',
        type: 'website',
    },
};

import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header';
import CookieBanner from '@/components/CookieBanner';
import Footer from '@/components/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${archivo.variable} ${passionsConflict.variable} ${spectral.variable}`}>
            <body className={archivo.className}>
                <Header />
                {children}
                <Footer />
                <WhatsAppButton />
                <CookieBanner />
            </body>
        </html>
    );
}
