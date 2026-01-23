import React, { useState } from 'react';
import { Menu, X, Instagram, Mail, Phone, ChevronDown } from 'lucide-react';

const CocoMakeupWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('social');

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = {
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

  const bridalPackages = [
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

  const brands = [
    'Chanel', 'Lancôme', 'Patrick Ta', 'Huda Beauty', 
    'NARS', 'Charlotte Tilbury', 'YSL', 'Makeup Forever', 
    'Fenty Beauty', 'Rare Beauty', 'ABH'
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-light tracking-wider text-stone-800">
                COCO<span className="text-rose-400">.</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-stone-600 hover:text-rose-400 transition-colors text-sm tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-stone-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-stone-600 hover:text-rose-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-rose-400 text-sm tracking-widest mb-4">BELLEZA A MEDIDA</p>
            <h2 className="text-5xl md:text-6xl font-light text-stone-800 mb-6 leading-tight">
              Maquillaje Profesional
            </h2>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Resaltando tu belleza natural con looks sofisticados, naturales y atemporales
            </p>
            <a
              href="#contacto"
              className="inline-block bg-rose-400 text-white px-8 py-3 rounded-sm hover:bg-rose-500 transition-colors"
            >
              Reserva tu Sesión
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm text-rose-400 tracking-widest mb-4">01. ACERCA DE MÍ</h3>
              <h2 className="text-4xl font-light text-stone-800 mb-6">Lucía Muzo</h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Maquilladora profesional en Granada, apasionada por resaltar la belleza natural de cada persona a través de looks sofisticados, naturales y atemporales.
              </p>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Mi filosofía es simple: <span className="italic">menos es más</span>. Creo que el maquillaje debe acompañarte, no esconderte, y que la verdadera elegancia está en los detalles sutiles que marcan la diferencia.
              </p>
              <p className="text-stone-600 leading-relaxed">
                En mis trabajos persigo un acabado impecable, que no solo realza tus rasgos, sino que también te hace sentir segura y cómoda en tu propia piel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-100 p-6 rounded-sm">
                <h4 className="text-lg font-light text-stone-800 mb-2">Versatilidad</h4>
                <p className="text-sm text-stone-600">
                  Maquillaje adaptado a tu tipo de piel, colorimetría y preferencias personales
                </p>
              </div>
              <div className="bg-rose-50 p-6 rounded-sm">
                <h4 className="text-lg font-light text-stone-800 mb-2">Enfoque Natural</h4>
                <p className="text-sm text-stone-600">
                  Pieles ligeras y luminosas con acabados pulidos y naturales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-sm text-rose-400 tracking-widest mb-4">02. SERVICIOS</h3>
            <h2 className="text-4xl font-light text-stone-800 mb-4">Servicios Destacados</h2>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-6 py-2 rounded-sm transition-colors ${
                  activeService === key
                    ? 'bg-rose-400 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100'
                }`}
              >
                {services[key].title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-sm shadow-sm">
            <h3 className="text-2xl font-light text-stone-800 mb-2">
              {services[activeService].title}
            </h3>
            <p className="text-stone-600 mb-4">{services[activeService].description}</p>
            <p className="text-3xl font-light text-rose-400 mb-6">
              {services[activeService].price}
            </p>
            <ul className="space-y-2">
              {services[activeService].features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-rose-400 mr-2">•</span>
                  <span className="text-stone-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bridal Packages */}
          <div className="mt-20">
            <h3 className="text-3xl font-light text-stone-800 text-center mb-12">
              Paquetes para Novias
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {bridalPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-8 rounded-sm shadow-sm relative ${
                    pkg.popular ? 'border-2 border-rose-400' : ''
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute top-0 right-0 bg-rose-400 text-white text-xs px-3 py-1 rounded-bl-sm">
                      MÁS POPULAR
                    </span>
                  )}
                  <h4 className="text-2xl font-light text-stone-800 mb-2">{pkg.name}</h4>
                  <p className="text-3xl font-light text-rose-400 mb-6">{pkg.price}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-rose-400 mr-2">✓</span>
                        <span className="text-stone-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-sm text-rose-400 tracking-widest mb-4">03. GALERÍA</h3>
            <h2 className="text-4xl font-light text-stone-800 mb-4">Mis Trabajos</h2>
            <p className="text-stone-600 max-w-3xl mx-auto italic">
              "Cada maquillaje es un trabajo hecho a medida. Cada rostro transmite la belleza de su esencia. 
              Cada imagen refleja mi compromiso por crear looks pulidos, simétricos y en armonía cromática, 
              para acompañarte y realzarte en tu ocasión especial"
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-square bg-stone-200 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-stone-400">
                  Imagen {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-sm text-rose-400 tracking-widest mb-4">04. PRODUCTOS</h3>
            <h2 className="text-4xl font-light text-stone-800 mb-4">Calidad en Cada Detalle</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Utilizo exclusivamente productos de las mejores marcas en la industria del maquillaje. 
              Mis productos son seleccionados no solo por su rendimiento, sino también por su capacidad 
              para realzar la belleza natural sin dañar la piel.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white text-stone-600 rounded-sm shadow-sm text-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-sm text-rose-400 tracking-widest mb-4">05. CONTACTO</h3>
            <h2 className="text-4xl font-light text-stone-800 mb-4">Conexión Directa y Exclusiva</h2>
            <p className="text-stone-600 italic">
              "Estoy aquí para hacer que tu belleza se vea tal y como siempre la imaginaste. 
              No dudes en ponerte en contacto conmigo para reservar tu sesión o para más información."
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="tel:+34697702348"
              className="flex flex-col items-center p-6 bg-stone-50 rounded-sm hover:bg-rose-50 transition-colors"
            >
              <Phone className="text-rose-400 mb-3" size={32} />
              <h4 className="text-stone-800 font-light mb-2">Teléfono</h4>
              <p className="text-stone-600 text-sm">+34 697 70 23 48</p>
            </a>
            <a
              href="mailto:muzomedinalucia@gmail.com"
              className="flex flex-col items-center p-6 bg-stone-50 rounded-sm hover:bg-rose-50 transition-colors"
            >
              <Mail className="text-rose-400 mb-3" size={32} />
              <h4 className="text-stone-800 font-light mb-2">Email</h4>
              <p className="text-stone-600 text-sm text-center">muzomedinalucia@gmail.com</p>
            </a>
            <a
              href="https://instagram.com/byco.comakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-stone-50 rounded-sm hover:bg-rose-50 transition-colors"
            >
              <Instagram className="text-rose-400 mb-3" size={32} />
              <h4 className="text-stone-800 font-light mb-2">Instagram</h4>
              <p className="text-stone-600 text-sm">@byco.comakeup</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4">COCO<span className="text-rose-400">.</span></h3>
            <p className="text-stone-400 max-w-2xl mx-auto italic text-sm mb-6">
              "La belleza no se crea, se revela. Con mi servicio de maquillaje, no solo te hago lucir bien, 
              sino que te hago sentir aún mejor. La técnica la pongo yo, pero la esencia te pertenece a ti."
            </p>
            <p className="text-stone-500 text-sm">
              © 2025 COCO Makeup. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CocoMakeupWebsite;