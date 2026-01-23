import React from 'react';

const PoliticaCookies = () => {
    return (
        <main className="container mx-auto px-4 py-20 text-stone-600">
            <h1 className="text-3xl font-spectral text-stone-800 mb-8">Política de Cookies</h1>
            <div className="space-y-6 max-w-4xl mx-auto">
                <p>Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia del usuario y analizar el tráfico.</p>

                <h2 className="text-xl font-bold text-stone-800">1. ¿Qué son las cookies?</h2>
                <p>Las cookies son ficheros que se descargan en tu ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.</p>

                <h2 className="text-xl font-bold text-stone-800">2. Tipos de cookies utilizadas</h2>
                <ul className="list-disc pl-6">
                    <li><strong>Cookies Técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existan.</li>
                    <li><strong>Cookies de Análisis (opcionales):</strong> Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
                </ul>

                <h2 className="text-xl font-bold text-stone-800">3. ¿Cómo deshabilitar las cookies?</h2>
                <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador:</p>
                <ul className="list-disc pl-6">
                    <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline">Safari</a></li>
                </ul>
            </div>
        </main>
    );
};

export default PoliticaCookies;
