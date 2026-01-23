import React from 'react';

const AvisoLegal = () => {
    return (
        <main className="container mx-auto px-4 py-20 text-stone-600">
            <h1 className="text-3xl font-spectral text-stone-800 mb-8">Aviso Legal</h1>
            <div className="space-y-6 max-w-4xl mx-auto">
                <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios que el titular de este sitio web es:</p>

                <h2 className="text-xl font-bold text-stone-800">1. Datos Identificativos</h2>
                <ul className="list-disc pl-6">
                    <li><strong>Titular:</strong> Lucía Muzo (COCO Makeup)</li>
                    <li><strong>Domicilio:</strong> Granada, España</li>
                    <li><strong>Correo electrónico:</strong> muzomedinalucia@gmail.com</li>
                    <li><strong>Actividad:</strong> Servicios de maquillaje profesional</li>
                </ul>

                <h2 className="text-xl font-bold text-stone-800">2. Condiciones de Uso</h2>
                <p>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>

                <h2 className="text-xl font-bold text-stone-800">3. Propiedad Intelectual e Industrial</h2>
                <p>Lucía Muzo por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, etc.).</p>
                <p>Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Lucía Muzo.</p>

                <h2 className="text-xl font-bold text-stone-800">4. Exclusión de Garantías y Responsabilidad</h2>
                <p>Lucía Muzo no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>

                <h2 className="text-xl font-bold text-stone-800">5. Modificaciones</h2>
                <p>Lucía Muzo se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p>
            </div>
        </main>
    );
};

export default AvisoLegal;
